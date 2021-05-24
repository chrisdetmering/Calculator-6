const outPut = document.querySelector('.output');

let firstOperand = '';
let secondOperand = '';
let operator = '';


document.querySelectorAll('.number')
    .forEach(numberButton => {
        numberButton.addEventListener('click', () => {
            const number = numberButton.textContent;
            if (outPut.textContent.length === 10) return;

            if (!operator) {
                firstOperand += number;
                outPut.textContent = firstOperand;
            } else {
                secondOperand += number;
                outPut.textContent = secondOperand;
            }

        })

    })

document.querySelectorAll('.operator')
    .forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
            const selectedOperator = operatorButton.textContent;
            if (secondOperand) {
                const result = calculate();
                firstOperand = result;
                secondOperand = '';
                operator = selectedOperator;
                outPut.textContent = result;
                return;
            }


            if (firstOperand) {
                operator = selectedOperator;
            }

        })
    })


document.querySelector('.equals')
    .addEventListener('click', () => {
        if (secondOperand) {
            const result = calculate();
            firstOperand = result;
            secondOperand = '';
            operator = '';
            outPut.textContent = result;
        }
    })



function calculate() {
    switch (operator) {
        case '+':
            return add();
        case '-':
            return subtract();
        case '÷':
            return divide();
        case 'x':
            return multiply();
    }

}


function add() {
    return `${Number(firstOperand) + Number(secondOperand)}`;
}

function multiply() {
    return `${Number(firstOperand) * Number(secondOperand)}`;
}

function divide() {
    return `${Number(firstOperand) / Number(secondOperand)}`;
}

function subtract() {
    return `${Number(firstOperand) - Number(secondOperand)}`;
}


//Homework
//1) decimals 
//2) memory