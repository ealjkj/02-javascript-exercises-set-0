class Bank  {
    #data;
    constructor () {
        this.#data = {};
    }
    createAccount(accountNumber) {
        if(accountNumber in this.#data) throw Error('This account number has already been taken');
        this.#data[accountNumber] = 0;
    }

    deposit(moneyToDeposit, accountNumber) {
        if(!accountNumber in this.#data) throw Error('The accont does not exist');
        this.#data[accountNumber] += moneyToDeposit;
    }

    retrieve(moneyToRetrieve, accountNumber) {
        if(this.#data[accountNumber] < moneyToRetrieve) throw Error('Balance in the bank is not enough');
        this.#data[accountNumber] -= moneyToRetrieve;
    }

    getBalance(accountNumber) {
        return this.#data[accountNumber];
    }

    printData(){
        console.log(this.#data);
    }
}

class Client {
    #money;
    #accountNumber;
    #bank;
    constructor(name, walletMoney, bank, accountNumber){
        //input validation (Non-negative Number)
        if(typeof walletMoney !== 'number' || walletMoney <= 0) throw Error('Select a valid number for the wallet');

        this.name = name;
        this.#money = walletMoney;
        this.openBankAccount(bank, accountNumber); 
    }
    
    openBankAccount(bank, accountNumber) {
        this.#bank = bank;
        bank.createAccount(accountNumber);
        this.#accountNumber = accountNumber
    }

    deposit(moneyToDeposit, accountNumber) {
        //input validation:
        if(typeof moneyToDeposit !== 'number' || moneyToDeposit < 0) throw Error('select a valid number');

        //balance and account validation:
        // console.log(this.#money, moneyToDeposit);
        if(moneyToDeposit > this.#money) throw Error(`Balance on ${this.name} wallet is not enough`);
        else {
            this.#bank.deposit(moneyToDeposit, accountNumber);
            this.#money -= moneyToDeposit;
        }
    }

    retrieve(moneyToRetrieve) {
        //input validation:
        if(typeof moneyToRetrieve !== 'number' || moneyToRetrieve < 0) throw Error('select a valid number');

        this.#bank.retrieve(moneyToRetrieve, this.#accountNumber);
        this.#money += moneyToRetrieve;        
    }  
    
    // You can use this method for debugging
    printBalance() {
        console.log(`${this.name} with account number of ${this.#accountNumber} has ${this.#money} dollars in his wallet. And ${this.#bank.getBalance(this.#accountNumber)} on the bank`);
    }

    get balance() {
        return this.#bank.getBalance(this.#accountNumber);
    }
}


// Tests
// Create Persons

let bank1 = new Bank();

let mario = new Client('Mario', 1400, bank1, 123123123);
mario.deposit(1000, 123123123);

let luigi = new Client('Luigi', 1700, bank1, 321321321);
luigi.deposit(1500, 321321321);

let wario = new Client('Wario', 500, bank1, 567567567);
wario.deposit(200, 567567567);

let waluigi = new Client('Waluigi', 1200, bank1, 987987987);
waluigi.deposit(500, 987987987);


// //Deposit test
// mario.printBalance();
// luigi.printBalance();
// mario.deposit(100, 321321321);
// console.log('\nmario deposited to luigi\n');
// mario.printBalance();
// luigi.printBalance();
//----------------------------------------------------------

// // Not enough money to deposit test
// mario.printBalance();
// luigi.printBalance();
// mario.deposit(1200, 321321321);
// console.log('\nmario tries to deposit a lot of money to luigi\n');
// mario.printBalance();
// luigi.printBalance();
// ----------------------------------------------------------

// Retrieve Test
// wario.printBalance();
// wario.retrieve(200);
// console.log('\nWario retrieves money\n');
// wario.printBalance();
// //----------------------------------------------------------

// Not enough money to retrieve test
// wario.printBalance();
// wario.retrieve(10000);
// console.log('\nWario retrieves money\n');
// wario.printBalance();
// //----------------------------------------------------------

// // view current valance test
// console.log(waluigi.balance);
// //----------------------------------------------------------

// // private information test
// console.log(mario.#accountNumber);
// //-----




