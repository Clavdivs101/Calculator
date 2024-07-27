const displayBox = document.querySelector('#display');
displayBox.textContent = "";
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const btnFour = document.querySelector('#btnFour');
const btnFive = document.querySelector('#btnFive');
const btnSix = document.querySelector('#btnSix');
const btnSeven = document.querySelector('#btnSeven');
const btnEight = document.querySelector('#btnEight');
const btnNine = document.querySelector('#btnNine');
const btnZero = document.querySelector('#btnZero');
const btnPlus = document.querySelector('#btnPlus');
const btnSubstract = document.querySelector('#btnSubstract')
const btnEquals = document.querySelector('#btnEquals');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
let displayValue = [];
let num;
let num2;
let operator;


function add(a ,b){
    return +a + +b;

}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === '0' || b === 0){
        return "CURSE YOU BAYLE";
    }else 
    return a / b;
}

function operate(num, operator, num2){
    if(operator === '+'){
        return add(num, num2);
    }else if(operator === '-'){
        return substract(num, num2);
    }else if(operator === '*'){
        return multiply (num, num2);
    }else if(operator === '/'){
        return divide(num, num2);
    }

}

btnOne.addEventListener('click', () => {
    displayValue.push('1');
    if(!num){
        num = '1';
        console.log(num);
    }else num2 = '1';
    console.log(num2);
    displayBox.textContent = displayValue;
})

btnTwo.addEventListener('click', () => {
    displayValue.push('2');
    if(!num){
        num = '2';
        console.log(num);
    }else num2 = '2';
    console.log(num2);
    displayBox.textContent = displayValue;
})

btnZero.addEventListener('click', () => {
    displayValue.push('0');
    if(!num){
        num = '0';
        console.log(num);
    }else num2 = '0';
    console.log(num2);
    displayBox.textContent = displayValue;
})

btnPlus.addEventListener('click', () => {
    displayValue.push('+');
    operator = '+'
    console.log(operator);
    displayBox.textContent = displayValue;
})

btnSubstract.addEventListener('click', () => {
    displayValue.push('-');
    operator = '-'
    console.log(operator);
    displayBox.textContent = displayValue;
})

btnMultiply.addEventListener('click', () => {
    displayValue.push('*');
    operator = '*'
    console.log(operator);
    displayBox.textContent = displayValue;
})

btnDivide.addEventListener('click', () => {
    displayValue.push('/');
    operator = '/'
    console.log(operator);
    displayBox.textContent = displayValue;
})








btnEquals.addEventListener('click', () => {
    if(operator === '/' && (num2 === '0' || num2 === 0)){
        displayBox.textContent = 'CURSE YOU BAYLE';
        displayValue = [];
        console.log(displayValue);
    }else
    displayBox.textContent = operate(num, operator, num2);
    displayValue.push(operate(num, operator, num2));
    displayValue.splice(0, 3);
    num = operate(num, operator, num2);
    console.log(displayValue);
})

console.log(add(2, 3));
console.log(substract(10, 2));
console.log(multiply(2, 2));
console.log(divide(2, 0));