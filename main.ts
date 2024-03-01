import inquirer from "inquirer";

async function cal(){
 const data = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter your first number."
    },
    {
        type:"number",
        name:"num2",
        message:"Enter your second number."

    },
    {
        type: "list",
        name:"operator",
        message:"Enter operator",
        choices:["+","-","*","/"]

    }
 ])
 let result ;
 switch(data.operator){
    case "+":
       
        result = data.num1+data.num2
        console.log(result);
        break;
    case "-":
       
        result = data.num1-data.num2
        console.log(result);
        break;
    case "*":
       
        result = data.num1*data.num2
        console.log(result);
        break;
    case "/":
       
        result = data.num1/data.num2
        console.log(result);
        break;    
 }
 
}
let a;
async function nextCal(){
    do{ await cal();
        a  = await inquirer.prompt({
        type:"input",
        name:"repeat",
        message:"Do you want continue: Press Y or N."}
    )}while( a.repeat == 'y'|| a.repeat=='yes'|| a.repeat == 'YES'|| a.repeat == 'yes')}

   
nextCal();
