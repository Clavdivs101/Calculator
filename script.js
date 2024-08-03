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
const btnClear = document.querySelector('#btnClear');
const btnPlus = document.querySelector('#btnPlus');
const btnSubstract = document.querySelector('#btnSubstract')
const btnEquals = document.querySelector('#btnEquals');
btnEquals.disabled = true;
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
let displayValue = [];
let num;
let num2;
let operator;
let text = 0;
let operation = [];
let result = '';

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
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(`text = ${text}`);
    // console.log(`num = ${num}`);
    // console.log(`num2 = ${num2}`);
})

btnTwo.addEventListener('click', () => {
    displayValue.push('2');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnThree.addEventListener('click', () => {
    displayValue.push('3');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnFour.addEventListener('click', () => {
    displayValue.push('4');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnFive.addEventListener('click', () => {
    displayValue.push('5');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnSix.addEventListener('click', () => {
    displayValue.push('6');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnSeven.addEventListener('click', () => {
    displayValue.push('7');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnEight.addEventListener('click', () => {
    displayValue.push('8');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnNine.addEventListener('click', () => {
    displayValue.push('9');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnZero.addEventListener('click', () => {
    displayValue.push('0');
    text =`${result} ${displayValue.join('')}`;
    displayBox.textContent = text;
    console.log(text);
})

btnClear.addEventListener('click', () => {
    displayValue.splice(0, displayValue.length);
    operation.splice(0, operation.length);
    num = 0;
    num2 = 0;
    operator = 0;
    displayBox.textContent = ""
})

btnPlus.addEventListener('click', () => {
    btnPlus.disabled = true;
        if (displayValue.length >= 2 && operator){
            if(!num || num === "CURSE YOU BAYLE"){
                operation = text.split(operator);
                console.log(`operation = ${operation}`);
                num = operation[0];
                num2 = operation[1];
                console.log(`num = ${num}`);
                console.log(`num2 = ${num2}`);
                console.log(operate(num, operator, num2));
                operation.splice(0, 2);
                operation.push(operate(num, operator, num2))
                console.log(`operation = ${operation}`);
                result = operate(num, operator, num2);
                displayBox.textContent = `${result}`;
                num = operate(num, operator, num2);
                console.log(`num = ${num}`);
                console.log(text);
                displayValue.splice(0, displayValue.length);
                } else{
                    operation = text.split(operator);
                    console.log(`operation = ${operation}`);
                    num2 = operation[1];
                    console.log(`num = ${num}`);
                    console.log(`num2 = ${num2}`);
                    console.log(operate(num, operator, num2));
                    operation.splice(0, 2);
                    operation.unshift(operate(num, operator, num2))
                    console.log(`operation = ${operation}`);
                    result = operate(num, operator, num2);
                    displayBox.textContent = `${result}`;
                    num = operate(num, operator, num2);
                    console.log(`num2 = ${num2}`);
                    displayValue.splice(0, displayValue.length);
                }
        }

    displayValue.push('+');
    operator = '+'
    console.log(operator);
    displayBox.textContent = `${result} ${displayValue.join('')}`;

})

btnSubstract.addEventListener('click', () => {
    if (displayValue.length >= 2 && operator){
        if(!num || num === "CURSE YOU BAYLE"){
            operation = text.split(operator);
            console.log(`operation = ${operation}`);
            num = operation[0];
            num2 = operation[1];
            console.log(`num = ${num}`);
            console.log(`num2 = ${num2}`);
            console.log(operate(num, operator, num2));
            operation.splice(0, 2);
            operation.push(operate(num, operator, num2))
            console.log(`operation = ${operation}`);
            result = operate(num, operator, num2);
            displayBox.textContent = `${result}`;
            num = operate(num, operator, num2);
            console.log(`num = ${num}`);
            console.log(text);
            displayValue.splice(0, displayValue.length);
            } else{
                operation = text.split(operator);
                console.log(`operation = ${operation}`);
                num2 = operation[1];
                console.log(`num = ${num}`);
                console.log(`num2 = ${num2}`);
                console.log(operate(num, operator, num2));
                operation.splice(0, 2);
                operation.unshift(operate(num, operator, num2))
                console.log(`operation = ${operation}`);
                result = operate(num, operator, num2);
                displayBox.textContent = `${result}`;
                num = operate(num, operator, num2);
                console.log(`num2 = ${num2}`);
                displayValue.splice(0, displayValue.length);
            }
    }
    displayValue.push('-');
    operator = '-'
    console.log(operator);
    displayBox.textContent = `${result} ${displayValue.join('')}`;
})

btnMultiply.addEventListener('click', () => {
    if (displayValue.length >= 2 && operator){
        if(!num || num === "CURSE YOU BAYLE"){
            operation = text.split(operator);
            console.log(`operation = ${operation}`);
            num = operation[0];
            num2 = operation[1];
            console.log(`num = ${num}`);
            console.log(`num2 = ${num2}`);
            console.log(operate(num, operator, num2));
            operation.splice(0, 2);
            operation.push(operate(num, operator, num2))
            console.log(`operation = ${operation}`);
            result = operate(num, operator, num2);
            displayBox.textContent = `${result}`;
            num = operate(num, operator, num2);
            console.log(`num = ${num}`);
            console.log(text);
            displayValue.splice(0, displayValue.length);
            } else{
                operation = text.split(operator);
                console.log(`operation = ${operation}`);
                num2 = operation[1];
                console.log(`num = ${num}`);
                console.log(`num2 = ${num2}`);
                console.log(operate(num, operator, num2));
                operation.splice(0, 2);
                operation.unshift(operate(num, operator, num2))
                console.log(`operation = ${operation}`);
                result = operate(num, operator, num2);
                displayBox.textContent = `${result}`;
                num = operate(num, operator, num2);
                console.log(`num2 = ${num2}`);
                displayValue.splice(0, displayValue.length);
            }
    }
    displayValue.push('*');
    operator = '*'
    console.log(operator);
    displayBox.textContent = `${result} ${displayValue.join('')}`;
})

btnDivide.addEventListener('click', () => {
    if (displayValue.length >= 2 && operator){
        if(!num || num === "CURSE YOU BAYLE"){
            operation = text.split(operator);
            console.log(`operation = ${operation}`);
            num = operation[0];
            num2 = operation[1];
            console.log(`num = ${num}`);
            console.log(`num2 = ${num2}`);
            console.log(operate(num, operator, num2));
            operation.splice(0, 2);
            operation.push(operate(num, operator, num2))
            console.log(`operation = ${operation}`);
            result = operate(num, operator, num2);
            displayBox.textContent = `${result}`;
            num = operate(num, operator, num2);
            console.log(`num = ${num}`);
            console.log(text);
            displayValue.splice(0, displayValue.length);
            } else{
                operation = text.split(operator);
                console.log(`operation = ${operation}`);
                num2 = operation[1];
                console.log(`num = ${num}`);
                console.log(`num2 = ${num2}`);
                console.log(operate(num, operator, num2));
                operation.splice(0, 2);
                operation.unshift(operate(num, operator, num2))
                console.log(`operation = ${operation}`);
                result = operate(num, operator, num2);
                displayBox.textContent = `${result}`;
                num = operate(num, operator, num2);
                console.log(`num2 = ${num2}`);
                displayValue.splice(0, displayValue.length);
            }
    }
    displayValue.push('/');
    operator = '/'
    console.log(operator);
    displayBox.textContent = `${result} ${displayValue.join('')}`;
})

btnEquals.addEventListener('click', () => {
    if(!num || num === "CURSE YOU BAYLE"){
    operation = text.split(operator);
    console.log(`operation = ${operation}`);
    num = operation[0];
    num2 = operation[1];
    console.log(`num = ${num}`);
    console.log(`num2 = ${num2}`);
    console.log(operate(num, operator, num2));
    operation.splice(0, 2);
    operation.push(operate(num, operator, num2))
    console.log(`operation = ${operation}`);
    result = operate(num, operator, num2);
    displayBox.textContent = `${result}`;
    num = operate(num, operator, num2);
    console.log(`num = ${num}`);
    console.log(text);
    displayValue.splice(0, displayValue.length);
    } else{
        operation = text.split(operator);
        console.log(`operation = ${operation}`);
        num2 = operation[1];
        console.log(`num = ${num}`);
        console.log(`num2 = ${num2}`);
        console.log(operate(num, operator, num2));
        operation.splice(0, 2);
        operation.unshift(operate(num, operator, num2))
        console.log(`operation = ${operation}`);
        result = operate(num, operator, num2);
        displayBox.textContent = `${result}`;
        console.log(`num2 = ${num2}`);
        displayValue.splice(0, displayValue.length);
    }
    displayBox.textContent = `${result} ${displayValue.join('')}`;
})

const numberWrapper = document.getElementById('numberWrapper');
numberWrapper.addEventListener('click', () => {
    for(let i = 0; i <= displayValue.length; i++){
        if (displayValue.length > 2 && operator){
            btnEquals.disabled = false;
        }
    }
    btnPlus.disabled = false;
    btnSubstract.disabled = false;
    btnMultiply.disabled = false;
    btnDivide.disabled = false;
})

const operationsWrapper = document.getElementById('operationsWrapper');
operationsWrapper.addEventListener('click', () => {
    for(let i = 0; i <= displayValue.length; i++){
        if (displayValue.length >= 2 && operator){
            btnEquals.disabled = false;
        }
    }
    btnPlus.disabled = true;
    btnSubstract.disabled = true;
    btnMultiply.disabled = true;
    btnDivide.disabled = true;
})