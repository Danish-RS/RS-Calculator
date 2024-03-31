#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter_First_Number", type: "number", name: "First_Number" },
    { message: "Enter_Second_Number", type: "number", name: "Second_Number" },
    {
        message: "Select One of The Operator to Perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// Now i m using Conditional Statement.
if (answer.operator === "Addition") {
    console.log(answer.First_Number + answer.Second_Number);
}
else if (answer.operator === "Substraction") {
    console.log(answer.First_Number - answer.Second_Number);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.First_Number * answer.Second_Number);
}
else if (answer.operator === "Division") {
    console.log(answer.First_Number / answer.Second_Number);
}
else {
    console.log("Please Enter Valid Numbers");
}
