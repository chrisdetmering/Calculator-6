let outPut = document.querySelector('.output');
let btnArr = Array.from(document.getElementsByClassName('btn'));

let arr = [];
let memory = [];
let change;
let total = 0;
let dotControl = true;
let equalControl = 4;
let memoryControl = true;


addEventListener('click', (e) => {
    let item = e.target;

    let find = btnArr.indexOf(item);
   
    switch(find){
        case 0:
            if(memoryControl == false){
                arr = [];
                arr.push(memory[0]);
                converter();
            } else {
                outPut.innerText = '0';
                arr = [];
                equalControl = 4;
            } 
            break;
        case 5:
            if(outPut.innerText != 0){
                memory.shift();
                memory.push(outPut.innerText); 
                memoryControl = false;
            } 
            
            break;  
        case 10:
            memory.shift();
            memoryControl = true;
            break;    
        //memory

        case 1:
            if(arr.length < 20) {
            arr.push(7);
            converter();
            }
            break;
        case 2:
            if(arr.length < 20) {
            arr.push(4);
            converter();
            }
            break;
        case 3:
            if(arr.length < 20) {
            arr.push(1);
            converter();
            }
            break;
        case 4:

            if(arr != '' && arr.length < 20) {
                arr.push(0);
                converter();
            } else if(arr == ''){
            outPut.innerText = 0;
            }

            break;
        case 6:
            if(arr.length < 20) {
            arr.push(8);
            converter();
            }
            break;
        case 7:
            if(arr.length < 20) {
            arr.push(5);
            converter();
            }
            break;
        case 8:
            if(arr.length < 20) {
            arr.push(2);
            converter();
            }
            break;
        case 9:
            if(arr.length < 20) {
                if(dotControl == true) {
                    if(arr == '') {
                        arr.push(0);
                    }
                    arr.push('.');
                    dotControl = false;
                    converter();
                }
                
            } 
            break;
        case 11:
            if(arr.length <20) {
            arr.push(9);
            converter();
            }
            break;
        case 12:
            if(arr.length < 20) {
            arr.push(6);
            converter();
            }
            break;
        case 13:
            if(arr.length < 20) {
            arr.push(3);
            converter();
            }
            break;
        //0-9 and .
        
        case 14:

            calculate();
            //equal
            break;
        case 15:

            arr = [];
            change;
            total = 0;
            dotControl = true;
            outPut.innerText = 0;
            equalControl = 4;
            //clear
            break;
        case 16:
            if(arr !=''){
                if(equalControl == 2) {
                    calculate();
                } else {
                    calculate();
                    equalControl = 2;
                }
            }
            //divide
            break;
        case 17:
            if(arr != ''){
                if(equalControl == 3) {
                    calculate();
                } else {
                    calculate();
                    equalControl = 3;
                }
            }
            //multi
            break;
        case 18:
            if(arr != '') {
                if(equalControl == 1) {
                    calculate();
                } else {
                    calculate();
                    equalControl = 1;
                }
            }
            //subtract
            break;
        case 19:
            if(arr != '') {
                if(equalControl == 0) {
                    calculate();
                } else {
                    calculate();
                    equalControl = 0;
                }
            }
            //add
            break;
        // add/sub/div/multi/

        }

}) 

function converter() {
    change = arr.join('');
    outPut.innerText = change;
} 

function calculate() {

    switch(equalControl){
        case 0:
            total += parseFloat(change);
            break;
        case 1:
            total -= parseFloat(change);
            break;
        case 2:
            total /= parseFloat(change);
            break;
        case 3:
            total *= parseFloat(change);
            break;
        case 4:
            if(change == undefined) {
                total = 0;
            } else if(total == 0) {
                total = parseFloat(change);
            } else {
                total;
            }
            break;
    }
    
    outPut.innerText = total;
    arr = [];
    dotControl = true;
} 