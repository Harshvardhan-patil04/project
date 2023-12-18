function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    if(b==0)
    {
        return "Error";
    }
    else
    {
        return a/b;
    }
}
function operate(operator,a,b)
{
    a=Number(a);
    b=Number(b);
    switch(operator)
    {
        case'+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return null;
    }
}
let firstNumber="";
let secondNumber="";
let operator ="";
let result="";
let currentOperator = null;
let resetScreen = false;

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const eqButton = document.querySelector(".eqButton");
const clearButton = document.querySelector(".clearButton");
numButtons.forEach(button =>
{
   button.addEventListener('click', () => appendNumber(button.textContent));
});
opButtons.forEach(button => 
{
   button.addEventListener('click', () => setOperation(button.textContent));
});
eqButton.addEventListener('click', () => compute());
clearButton.addEventListener('click', () => clear());
function appendNumber(num) 
{
    if (resetScreen) 
    {
        display.textContent = "";
        resetScreen = false;
    }
    display.textContent += num;
 }
function setOperation(op) 
{
    if (currentOperator !== null) compute();
    firstOperand = display.textContent;
    currentOperator = op;
    resetScreen = true;
}
function compute() 
{            
    secondOperand = display.textContent;
    display.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;
}
function clear() 
{
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
}
