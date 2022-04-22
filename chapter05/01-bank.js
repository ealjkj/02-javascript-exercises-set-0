const BANK = {}

class Client {
    #money;
    #accountNumber;
    constructor(name, walletMoney, accountNumber, bankMoney = 1000){
        //input validation
        if(typeof walletMoney !== 'number' || walletMoney < 0) throw Error('Select a valid number for the wallet');
        if(typeof bankMoney !== 'number' || bankMoney < 0) throw Error('Select a valid number for the bank');
        
        //non-repeated account validation
        if(accountNumber in BANK) throw Error('This account number has been taken');
        

        this.name = name;
        this.#money = walletMoney;
        this.#accountNumber = accountNumber;
        BANK[accountNumber] = bankMoney;
    }

    deposit(moneyToDeposit, accountNumber) {
        //input validation:
        if(typeof moneyToDeposit !== 'number' || moneyToDeposit < 0) throw Error('select a valid number');

        //balance and account validation:
        if(!accountNumber in BANK) throw Error('The accont does not exist');
        else if(moneyToDeposit > this.#money) throw Error(`Balance on ${this.name} wallet is not enough`);

        else {
            BANK[accountNumber] += moneyToDeposit;
            this.#money -= moneyToDeposit;
        } 
    }

    retrieve(moneyToRetrieve) {
        //input validation:
        if(typeof moneyToRetrieve !== 'number' || moneyToRetrieve < 0) throw Error('select a valid number');

        // balance validation
        if(BANK[this.#accountNumber] < moneyToRetrieve) throw Error('Balance in the bank is not enough');

        else {
            BANK[this.#accountNumber] -= moneyToRetrieve;
            this.#money += moneyToRetrieve;
        }
    }  
    
    // You can use this method for debugging
    printInfo() {
        console.log(`${this.name} with account number of ${this.#accountNumber} has ${this.#money} dollars in his wallet. And ${BANK[this.#accountNumber]} on the bank`);
    }

    get balance(){
        return BANK[this.#accountNumber];
    }
}


// Tests


// Create Persons

mario = new Client('Mario', 400, 123123123);
luigi = new Client('Luigi', 200, 321321321, 1500);
wario = new Client('Wario', 300, 567567567, 200);
waluigi = new Client('Waluigi', 700, 987987987, 500);


// //Deposit test
// mario.printInfo();
// luigi.printInfo();
// mario.deposit(100, 321321321);
// console.log('\nmario deposited to luigi\n');
// mario.printInfo();
// luigi.printInfo();
//----------------------------------------------------------

// // Not enough money to deposit test
// mario.printInfo();
// luigi.printInfo();
// mario.deposit(1200, 321321321);
// console.log('\nmario tries to deposit a lot of money to luigi\n');
// mario.printInfo();
// luigi.printInfo();
// // ----------------------------------------------------------

// // Retrieve Test
// wario.printInfo();
// wario.retrieve(200);
// console.log('\nWario retrieves money\n');
// wario.printInfo();
// //----------------------------------------------------------

// // Not enough money to retrieve test
// wario.printInfo();
// wario.retrieve(10000);
// console.log('\nWario retrieves money\n');
// wario.printInfo();
// //----------------------------------------------------------

// // view current valance test
// console.log(waluigi.balance);
// //----------------------------------------------------------

// // private information test
// console.log(mario.#accountNumber);
// //-----
