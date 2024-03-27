import inquirer from "inquirer";
let num1 = await inquirer.prompt([
{
    name: "value",
    message: "enter your operand1 :",
    type: "input"
}
]);

let num2 = await inquirer.prompt([
{
    name: "value",
    message: "enter your operand2 :",
    type: "input"
}
]);

let op = await inquirer.prompt([
{
    name: "value",
    message: "enter your operator :",
    type: "input"
}
]);

if(op.value=="+")
{
    console.log (num1.value + " + " + num2.value + " = "+ (parseFloat(num1.value) + parseFloat(num2.value)));
}
else if(op.value=="-")
{
    console.log (num1.value + " - " + num2.value + " = "+ (parseFloat(num1.value) - parseFloat(num2.value)));
}
else if(op.value=="*")
{
    console.log (num1.value + " * " + num2.value + " = "+ (parseFloat(num1.value) * parseFloat(num2.value)));
}
else if(op.value=="/")
{
    console.log (num1.value + " / " + num2.value + " = "+ (parseFloat(num1.value) / parseFloat(num2.value)));
}
else if(op.value=="%")
{
    console.log (num1.value + " % " + num2.value + " = "+ (parseFloat(num1.value) % parseFloat(num2.value)));
}
else
{
    console.log ("Invalid input");
}
   