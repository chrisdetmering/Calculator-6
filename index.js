let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let period = document.querySelector('.dot');
let equal = document.querySelector('.equal');

let clear = document.querySelector('.clear');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let outPut = document.querySelector('.output');

let arr = [];
let change;
let total = 0;
let dotControl = true;
let equalControl;

zero.addEventListener('click', () => {
    if(arr != '') {
        arr.push(0);
        converter();

    } else {
    outPut.innerText = 0;
    }
})

one.addEventListener('click', () => {
    arr.push(1);
    converter();
})

two.addEventListener('click', () => {
    arr.push(2);
    converter();
})

three.addEventListener('click', () => {
    arr.push(3);
    converter();
})

four.addEventListener('click', () => {
    arr.push(4);
    converter();
})

five.addEventListener('click', () => {
    arr.push(5);
    converter();
})

six.addEventListener('click', () => {
    arr.push(6);
    converter();
})

seven.addEventListener('click', () => {
    arr.push(7);
    converter();
})

eight.addEventListener('click', () => {
    arr.push(8);
    converter();
})

nine.addEventListener('click', () => {
    arr.push(9);
    converter();
})

period.addEventListener('click', () => {

    if(dotControl == true) {
        if(arr == '') {
            arr.push(0);
        }
        arr.push('.');
        dotControl = false;
    }
    
    converter();
})

function converter() {
    change = arr.join('');
    outPut.innerText = change;
}

add.addEventListener('click', () => {
    equalControl = 0;
    master();
})

subtract.addEventListener('click', () => {
    equalControl = 1;
    master();
})

divide.addEventListener('click', () => {
    equalControl = 2;
    master();
})

multiply.addEventListener('click', () => {
    equalControl = 3;
    master();
})

clear.addEventListener('click', () => {
    arr = [];
    change;
    total = 0;
    dotControl = true;
    outPut.innerText = 0;
    equalControl;
})

equal.addEventListener('click', () => {
    master();
    equalControl = 4;
})

function master() {
    if(total == 0) {
        total = +change;
    } else {
    switch(equalControl){
        case 0:
            total += +change;
            break;
        case 1:
            total -= +change;
            break;
        case 2:
            total /= +change;
            break;
        case 3:
            total *= +change;
            break;
        case 4:
            total = +total;
            break;
        }
    }
    outPut.innerText = total;
    arr = [];
    dotControl = true;
}