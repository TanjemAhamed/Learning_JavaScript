let account = {
    name: 'Aryan Sama',
    balance: 1000,
    accountNumber: 1234567890,
    describe: function() {
        return `${this.name} earns about ${this.balance} in bank account number ${this.accountNumber}`;
    }
};



console.log(account.describe());