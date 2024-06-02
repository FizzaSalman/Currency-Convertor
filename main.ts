#! /usr/bin/env node

import inquirer from "inquirer";



const currency:any = {
    USD: 1, //Base Currency
    EUR: 0.92,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    Riyal: 3.75
};

let answer: any = await inquirer.prompt(

    [
        {
             name: "from",
             message: "Enter From Currency",
             type: "list",
             choices: ["USD", "EUR", "GBP","INR", "PKR", "Riyal"]
             
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR","Riyal"]
        },
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number"
        }
    ])

let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
