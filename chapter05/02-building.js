//Each piece of equipment is just a string
//Each user is an object 
//We assume the elevator is always at room 0 of each floor.
//You can go to any room at the same floor in one move;

class Building {
    constructor(roomsPerFloor) {
        for(let floor in roomsPerFloor){
            this[floor] = []
            for(let i=0; i < roomsPerFloor[floor]; i++) {
                this[floor][i] = {
                    id: floor.toString() + i.toString(),
                    users: {},
                    equipment: []
                }
            }
        }
        this.listOfEquipment = [];
        this.listOfUsersIds = [];
        this.bluePrint = roomsPerFloor;
        this.populated = false;
    }

    addItem(equipment, floor, room) {
        if(this.listOfEquipment.includes(equipment)) throw Error("You can't add an item that is already there");
        this[floor][room].equipment.push(equipment); // Add the item
        this.listOfEquipment.push(equipment);
    }

    addUser(user, floor, room) {
        if(this.listOfUsersIds.includes(user.id)) throw Error("You can't add a user that is already there");
        this[floor][room].users[user.id] = user; // Add the user
        for(let item of user.equipment) {
            if(this.listOfEquipment.includes(item)) throw Error("User can't have an item that is already in a room");
        }
        this.listOfUsersIds.push(user.id);
    }

    _randomPopulate(numOfUsers, numOfEquipment) {
        let tools = ["saw", "hammer", "cultivator", "ladder", "file", "gloves", "mallet", "chisel", "screwdriver", "wrench", "hand drill", "level ax", "pliers", "clamp", "box cutter"];
        let toolCounter = {};
        tools.forEach(value => toolCounter[value] = 0);
        let names = ["Mark", "Amber", "Todd", "Anita", "Sandy", "Jorge", "Stuart", "Juan", "America", "Harry"];
        

        // filling users
        for(let i= 0; i < numOfUsers; i++) {
            let floor = Math.floor(Math.random()*this.bluePrint.length);
            let room = Math.floor(Math.random()*this[floor].length);
            let id = ('0000' + i.toString()).slice(-4);
            let name = names[Math.floor(Math.random()*names.length)];
            let equipment = []
            this.addUser({id, name, equipment}, floor, room);
        } 
        //filling equipment
        for(let i= 0; i < numOfEquipment; i++) {
            let floor = Math.floor(Math.random()*this.bluePrint.length);
            let room = Math.floor(Math.random()*this[floor].length);
            let tool = tools[Math.floor(Math.random()*tools.length)];
            toolCounter[tool]++;
            let eq = tool + toolCounter[tool].toString();
            if (Object.keys(this[floor][room].users).length > 0 && Math.random() < 0.2) {
                let userId = Object.keys(this[floor][room].users)[Math.floor(Math.random()*Object.keys(this[floor][room].users).length)];
                
                this[floor][room].users[userId].equipment.push(eq); //Add an item to a User;
                this.listOfEquipment.push(eq);
            } else {
                this.addItem(eq, floor, room);
            } 
        }
    }
    randomPopulate(...args) {
        if(!this.populated) {
            this._randomPopulate(...args);
            this.populated = true;
        }
        else {console.log('already populated');}
    }
    
}


class TechGuy {
    constructor(name, building, floor, room) {
        this.name = name;
        this.floor = floor;
        this.room = room;
        this.building = building;
        this.userMemo = {};
        this.equipmentMemo = {};
        this.moveCounter = 0; 

        if(floor >= building.bluePrint.length) throw Error('There are not that many floors at the building');
        if( room >= building[floor].length) throw Error(`There are not that many roomas at floor ${floor}`);
    }
    move(floor, room) {
        console.log(`moving to ${floor}, ${room}`)
        if(this.floor === floor || (this.room === 0 && room === 0)) {
            this.floor = floor;
            this.room = room;
            this.moveCounter += 1;
       } else throw Error("Your Tech guy can't get there from his position");
       
    }

    getTo(floor, room) {
        if(floor === this.floor || this.room === 0 && room===0) this.move(floor, room);
        else {
            this.move(this.floor, 0);
            this.move(floor, 0);
            this.move(floor, room);
        } 
    } 

    checkForUser(id) {
        let roomObj = this.building[this.floor][this.room];
        return Object.keys(roomObj.users).includes(id); 
    }

    checkForEquipment(eq) {
        let roomObj = this.building[this.floor][this.room];
        let found = false;
        for(let id in roomObj.users){
            found = roomObj.users[id].equipment.includes(eq);
            if(found) break;
        }
        found = roomObj.equipment.includes(eq) || found;
        return found;
    }

    lookForSomething(id, checkForSomething) {
        this.moveCounter = 0;
        let originalFloor = this.floor;
        let originalRoom = this.room; 
        this.checkForSomething = checkForSomething;
        
        // Check in the current room 
        // console.log('checking current room');
        if(this.checkForSomething(id)) return [this.floor, this.room];
        
        //Check in this floor;
        // console.log('checking current floor');
        for(let i = this.building.bluePrint[1]-1; i >= 0; i--) {
            if(i !== originalRoom) {
                this.move(this.floor, i);
                if(this.checkForSomething(id)) return [this.floor, this.room];
            }
        }
        // If you are not at the elevator, go there
        // console.log('maybe moving to elevator');
        if(this.room !== 0) this.move(this.floor, 0);
        
        // Look on every floor 
        // console.log('starting loop for every floor');
        for(let j = this.building.bluePrint.length-1; j >= 0; j--) {
            if(j !== originalFloor) {
                this.move(j,0);
                for(let i = this.building.bluePrint[j]-1; i >= 0; i--) {
                    this.move(this.floor, i);
                    if(this.checkForSomething(id)) return [this.floor, this.room];
                }
            }
        }
    }

    lookForUser(id) {
        let userLocation;
        if(this.userMemo[id] !== undefined) {
            this.getTo(...this.userMemo[id]);
            if(this.checkForUser(id)) userLocation = [this.floor, this.room];
            else userLocation = this.lookForSomething(id, this.checkForUser);
        }
        else userLocation = this.lookForSomething(id, this.checkForUser);
        this.userMemo[id] = userLocation;
        return userLocation;
    }
    lookForEquipment(eq){
        let equipmentLocation;
        if(this.equipmentMemo[eq] !== undefined) {
            this.getTo(...this.equipmentMemo[eq]);
            if(this.checkForEquipment(eq)) equipmentLocation = [this.floor, this.room];
            else equipmentLocation = this.lookForSomething(eq, this.checkForEquipment);
        }
        else equipmentLocation = this.lookForSomething(eq, this.checkForEquipment);
        this.equipmentMemo[eq] = equipmentLocation;
        return equipmentLocation;


    }

    get roomId() {
        return this.floor.toString() + this.room.toString();
    }
}

let myBuilding = new Building([5,3,4]);
myBuilding.randomPopulate(10, 8);
let techGuy = new TechGuy('bob', myBuilding, 0,2);









// Let's insert an Item to the building
myBuilding.addItem('hammer12', 1, 1); 

// Now, we are going to look for it;
console.log('looking from', techGuy.roomId);
console.log(techGuy.lookForEquipment('hammer12'));
console.log('\n')

// Let's get back to the initial point
console.log('moving back to 0, 2');
techGuy.getTo(0, 2);
console.log('\n')

// Looking again, using memoization
console.log(techGuy.lookForEquipment('hammer12'));