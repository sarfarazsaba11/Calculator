import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name."
    },
    {
        type: "number",
        name: "age",
        message: "Enter your age"
    }
]);
console.log(`youe name is ${user.name} and age is ${user.age}`);
