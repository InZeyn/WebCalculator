var store = window.localStorage;
var operation = [];
var num1 = "", num2 = "";
var res = 0;
var chkOp = false;
var lastOp;
var i = 0;

function insert(num){
    if(num == '+' || num =='-' || num =='/' || num =='*' || num == '='){ 
        if(num1!="" && num2!=""){           
            store.setItem("testKey"+i, document.form.textView.value);
            console.log(store.getItem("testKey2"));
            i++;
        }
        if(num2 != "" || num1 != ""){   
            if(num != "="){
                if(chkOp == true){
                    document.form.textView.value = document.form.textView.value.substr(0,document.form.textView.value.length-1)+num;
                }else{
                    document.form.textView.value = document.form.textView.value+num;
                    chkOp = true;
                }   
            }        
            if(num1!="" && num2!=""){
                if(num == '='){
                    num = "";
                }                    
                switch(lastOp) {
                    case '+':
                        addition(num1, num2);
                        document.form.textView.value = num1+num;
                        break;                                          
                    case '-':
                        subtraction(num1, num2)
                        document.form.textView.value = num1+num;
                        break;
                    case '*':
                        multiplication(num1, num2)
                        document.form.textView.value = num1+num;
                        break;
                    case '/':
                        division(num1, num2)
                        document.form.textView.value = num1+num;
                        break;
                    default:
                    break;
                }
            }else if(num2 != ""){
                num1 = num2;
                num2 = "";
            }
            if(num != '='){
                lastOp = num;
            }else{
                lastOp = "";
                chkOp = false;
            }           
        }else{
            document.form.textView.value = "";
            lastOp = "";
        }
    }else{ 
        //Digita numero
        chkOp = false;
        document.form.textView.value = document.form.textView.value+num;
        num2 = num2+""+num;
    }
    if(num == 'clear'){
        num1 = "", num2 = "";
        res = 0;
        vchkOp = false;
        lastOp;
        i = 0;
        document.form.textView.value = "";
        localStorage.clear();
        return;
    }
}

function addition(numx, numy){
    res = parseFloat(numx) + parseFloat(numy);
    num1 = res;
    num2 = "";
}
function subtraction(numx, numy){
    res = parseFloat(numx) - parseFloat(numy);
    num1 = res;
    num2 = "";
}
function multiplication(numx, numy){
    res = parseFloat(numx) * parseFloat(numy);
    num1 = res;
    num2 = "";
}
function division(numx, numy){
    res = parseFloat(numx) / parseFloat(numy);
    num1 = res;
    num2 = "";
}