let screen = document.querySelector("#screenInput");

let operate = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulo(num1, num2);
        default:
            return "Input not ok!";
    }
}
let add = (num1, num2) => {
    return (num1 + num2).toFixed(2);
}
let subtract = (num1, num2) => {
    return num1 - num2;
}
let multiply = (num1, num2) => {
    return num1 * num2;
}
let divide = (num1, num2) => {
    let res = num1 / num2;
    if (num1 % num2 === 0) {
        return res
    }
    return res.toFixed(2);
}

let modulo = (num1, num2) => {
    return num1 % num2;
}

let x = "";
let op = "";
let int1;
let final;
let operatorFlag = false;

//Functionality of keys with numbers
document.querySelectorAll(".number").forEach(key => {
    key.addEventListener("click", keyPress = () => {
        if (x.length < 10) {
            x += parseFloat(key.innerHTML);
            screen.innerHTML += key.innerHTML;
        }    
    } )
})

let clearVarScreen = () => {
    screen.innerHTML = ""; x = "";
}

//Operators
document.querySelectorAll(".oper").forEach(oper => {
    oper.addEventListener("click", operFunc = () => {
        if (operatorFlag === true){
            final = parseFloat(operate(op, int1, parseFloat(x)));
        }

        if (!final) {
            int1 = parseFloat(x);
        }
        else {
            int1 = parseFloat(final);
        }
        clearVarScreen();
        op = oper.innerHTML;
        operatorFlag = true;
    })
})

// Clearing the screen
document.querySelector(".clear").addEventListener("click", clearFunc = () => {
    clearVarScreen();
    final = 0;
});


delFun = () => {
    let s = screen.innerHTML;
    s = s.slice(0, -1);
    screen.innerHTML = s;
    x = x.slice(0, - 1);
    final /= 10;
    if (x == "") {
        clearVarScreen();
        final = 0;
    }
}

document.querySelector(".del").addEventListener("click", delFun);


// Equal
let equal = () => {
    final = parseFloat(operate(op, int1, parseFloat(x)));
    if (final > 9999999999) {
        screen.innerHTML = "Error";
    }
    else {
        screen.innerHTML = final;
    }
    if (final == Infinity) {
        screen.innerHTML = "EPIC FAIL!";
    }
    operatorFlag = false;
}

document.querySelector(".equal").addEventListener("click", equal)

// Point
document.querySelector(".point").addEventListener("click", pointFunc = () => {
    x += ".";
    screen.innerHTML += ".";
})


// Audio

let clickSound = new Audio("click.wav");
document.querySelectorAll(".audio").forEach(btn => {
    btn.addEventListener("click", soundFunc = () => {
        clickSound.play();
    })
})

// keyboard support

document.addEventListener("keydown", (event) => {
    if (event.key >= 0 && event.key <= 9) {
        if (x.length < 10) {
            x += parseFloat(event.key);
            screen.innerHTML += event.key;
        } 
    }
    else if (event.key === "Enter"){
        equal();
    }
    else if (event.key === 'Backspace') {
        delFun();
    }
    
    else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        if (operatorFlag === true){
            final = parseFloat(operate(event.key, parseFloat(int1), parseFloat(x)));
        }

        if (!final) {
            int1 = parseFloat(x);
        }
        else {
            int1 = parseFloat(final);
        }
        clearVarScreen();
        op = event.key;
        operatorFlag = true;
    }
    else if (event.key === ".") {
        x += ".";
        screen.innerHTML += ".";
    }
    else if (event.key === "Delete") {
        clearVarScreen();
        final = 0;
    }

})