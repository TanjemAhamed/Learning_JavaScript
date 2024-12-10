class Account {
    constructor(name, balance, accountNumber) {
        this._name = name;
        this._balance = balance;
        this._accountNumber = accountNumber;
    }

    get name () {
        return this._name;
    }
    
    get balance() {
        return this._balance;
    }
    
    get accountNumber() {
        return this._accountNumber;
    }
    
    set name (name) {
        this._name = name;
    }
    
    set balance (balance) {
        if(typeof balance != 'number') {
            balance = 0;
            throw new Error('Balance must be a number');
        }
        else this._balance = balance;
    }

    set accountNumber (accountNumber) {
        this._accountNumber = accountNumber;
    }

    describe() {
        return `${this._name} has a balance of $${this._balance} in account number ${this._accountNumber}`;
    }
}

let account = new Account('Aryan Sama', 1000, 1234567890);
//account.balance = "2000";
console.log(account.describe());