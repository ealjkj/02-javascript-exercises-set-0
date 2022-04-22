let container = document.getElementsByClassName('container')[0]; 

class Card {
    constructor(name, text) {
        this.name = name;
        this.text = text;

        //create card
        this.el = document.createElement('div');
        this.el.classList.add("card");

        // append title
        this.titleEl = document.createElement('p');
        this.titleEl.innerText = this.name;
        this.el.appendChild(this.titleEl);

        //append text
        this.textEl = document.createElement('p');
        this.textEl.innerText = this.text;
        this.el.appendChild(this.textEl);
    }

    display() {
        container.appendChild(this.el);
    }
}

class SpellCard extends Card {
    constructor(name, text) {
        super(name, text)
        this.el.style.backgroundColor = 'green';
    }    
}

class QuickSpellCard extends SpellCard {
    constructor(name, text) {
        super(name, text)
        this.el.style.backgroundColor = 'green';

        this.typeEl = document.createElement('p');
        this.typeEl.textContent = 'Q';
        this.el.insertBefore(this.typeEl, this.textEl);
    }    
}

class TrapCard extends Card {
    constructor(name, text) {
        super(name, text)
        this.el.style.backgroundColor = 'pink';
    }    
}
class MonsterCard extends Card {
    constructor(name, text) {
        super(name, text)
        this.el.style.backgroundColor = 'orange';
    }    
}


let myCard = new Card('myCard', 'this is a card')
let mySpell = new SpellCard('myCard', 'this is spell')
let myTrap = new TrapCard('myCard', 'this is a trap')
let myMonster = new MonsterCard('myCard', 'this is a monster')

let myQuickSpell = new QuickSpellCard('myCard', 'this is spell')



myCard.display();
mySpell.display();
myTrap.display();
myMonster.display();
myQuickSpell.display();