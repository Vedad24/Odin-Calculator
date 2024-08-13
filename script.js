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

let screen = document.querySelector("#screenInput");
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


document.querySelector(".del").addEventListener("click", delFun = () => {
    let s = screen.innerHTML;
    s = s.slice(0, -1);
    screen.innerHTML = s;
    x = x.slice(0, - 1);
});


// Equal
let equal = () => {
    final = parseFloat(operate(op, int1, parseFloat(x)));
    screen.innerHTML = final;
    operatorFlag = false;
}

document.querySelector(".equal").addEventListener("click", equal)

// Point
document.querySelector(".point").addEventListener("click", pointFunc = () => {
    x += ".";
    screen.innerHTML += ".";
})
