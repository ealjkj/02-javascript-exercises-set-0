//Each piece of equipment is just a string
//Each user is an object 
//We assume the elevator is always at room 0 of each floor.

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
        this.memo = [];
    }
    move(floor, room) {
       if((this.floor === floor && Math.abs(room -this.room) === 1) ||
            (this.room === 0 && room === 0)) {
            this.floor === floor;
            this.room === room;
       } else throw Error("Your Tech guy can't get there from his position");
    }
    lookForUser(id) {
        
    }
    lookForEquipment(eq){

    }
}

let myBuilding = new Building([5,3,4]);
myBuilding.randomPopulate(10, 8);
console.log(myBuilding);


// myBuilding.addItem('hammer', 2, 1);
// myBuilding.addItem('hammer2', 2, 3);
// myBuilding.addItem('ladder', 1, 0);
// myBuilding.addUser({id: '0001', name: 'Juan', equipment: ['hammer3', 'gloves1']}, 1, 0);

