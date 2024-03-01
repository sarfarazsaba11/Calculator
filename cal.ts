import inquirer from "inquirer";

const data = await inquirer.prompt([{
    type: "input",
    message: "Enter first number.",
    name: "fisrtnumber"
},

{
    type: "number",
    message: "Enter second number.",
    name: "secondnumber"
},
{
    type:"list",
    message:" Enter operator",
    name:"operator",
    choices:["+","-","*","/"]


}
])
console.log(data.firstnumber);

let result:number=0;
switch(data.operator){
    case "+":
        result = data.firstnumber + data.secondnumber;
        console.log(result);
        break;

    
    case "-":
        result = data.firstnumber - data.secondnumbernumber;
        console.log(`Result is ${result}`);
        break;

    
    case "*":
        result = data.firstnumber * data.secondnumber
        console.log(`Result is ${result}`);
        break;

    
    case "/":
        result = data.firstnumber / data.secondnumber
        console.log(`Result is ${result}`);
        break;

    
}