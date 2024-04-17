import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    INR: 84,
    EUR: 0.94
};
let userInput = await inquirer.prompt([
    {
        name: "from",
        message: "from which currency ",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR"]
    },
    {
        name: "to",
        message: "to which currency ",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let fromCurrency = currency[userInput.from];
let toCurrency = currency[userInput.to];
let Amount = userInput.amount;
let baseAmount = Amount / fromCurrency;
let convertAmount = baseAmount * toCurrency;
console.log("your amount will be:", Math.floor(convertAmount));
