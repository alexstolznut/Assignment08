/*eslint-env browser*/


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}
var userDiv = $("interface");
var h1 = window.document.createElement("h1");
var h2 = window.document.createElement("h2");
var namePrompt = "";
var depositPrompt = 0;
var withdrawalPrompt = 0;


//function thisPrompt() {
//    "use strict";
//
//    if (this.id === "name") {
//        namePrompt = window.prompt('Please enter your name');
//        bankAccount(namePrompt).getOwnerName();
//        //        bankAccount(namePrompt);
//        //        return namePrompt;
//    } else if (this.id === "deposit") {
//        window.console.log(this.id);
//        depositPrompt = parseFloat(window.prompt("How much would you like to deposit?"));
//        bankAccount().deposit(depositPrompt);
////        bankAccount().getBalance();
//        return depositPrompt;
//    } else if (this.id === "withdrawal") {
//        window.console.log(this.id);
//        withdrawalPrompt = Number(window.prompt("How much would like to withdrawal?"));
//        bankAccount().withdrawl(withdrawalPrompt);
//        bankAccount().getBalance();
//    }
//}

var bankAccount = function (ownerName) {
    "use strict";
    var owner, balance,
        bankMethods;
    owner = ownerName;
    balance = 0;


//        thisPrompt: function () {
//            "use strict";
//
//            if (this.id === "name") {
//                namePrompt = window.prompt('Please enter your name');
//                bankAccount(namePrompt).getOwnerName();
//            } else if (this.id === "deposit") {
//                window.console.log(this.id);
//                depositPrompt = parseFloat(window.prompt("How much would you like to deposit?"));
//                bankMethods.deposit(depositPrompt);
//                //            return depositPrompt;
//            } else if (this.id === "withdrawal") {
//                window.console.log(this.id);
//                withdrawalPrompt = Number(window.prompt("How much would like to withdrawal?"));
//                bankAccount().withdrawl(withdrawalPrompt);
//                bankAccount().getBalance();
//            }
//        }

    bankMethods = {

        thisPrompt: function () {
            "use strict";

            if (this.id === "name") {
                namePrompt = window.prompt('Please enter your name');
                bankAccount(namePrompt).getOwnerName();
            } else if (this.id === "deposit") {
                window.console.log(this.id);
                depositPrompt = parseFloat(window.prompt("How much would you like to deposit?"));
                bankMethods.deposit(depositPrompt);
                //            return depositPrompt;
            } else if (this.id === "withdrawal") {
                window.console.log(this.id);
                withdrawalPrompt = Number(window.prompt("How much would like to withdrawal?"));
                bankAccount().withdrawl(withdrawalPrompt);
                bankAccount().getBalance();
            }
        },

        getBalance: function () {
            userDiv.appendChild(h2).innerHTML = balance.toString();
            return balance;
        },

        deposit: function (depositAmount) {
            window.console.log(typeof (balance));
            if (balance === 0) {
                balance += depositAmount;
                window.console.log(balance);
                bankMethods.getBalance();

            } else {
                window.console.log("worked");
                balance += depositAmount;
                window.console.log(balance);
                bankMethods.getBalance();
            }

            return balance;
        },

        withdrawal: function (withdrawalAmount) {
            balance -= withdrawalAmount;
            bankMethods.getBalance();
        },

        getOwnerName: function () {
            window.console.log(owner);
            userDiv.appendChild(h1).innerHTML = "Name: " + owner;
            return owner;
        }
    }
    return bankMethods;
}



newBankAccount.bankAccount("Alex");
$("name").addEventListener("click", function(){
    var namePrompt = window.prompt("Please enter your name");
    return namePrompt;
//    newBankAccount(namePrompt);
})
$("deposit").addEventListener("click", function(){
    var depositPrompt = window.prompt("Please enter deposit amount");
    newBankAccount.deposit(Number(depositPrompt));
})
$("withdrawal").addEventListener("click", function(){
    var withdrawalPrompt = window.prompt("Please enter withdrawal amount");
    newBankAccount.withdrawal(Number(withdrawalPrompt));
})

var newBankAccount = new bankAccount(namePrompt);
