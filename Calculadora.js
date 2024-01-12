const numbers = document.querySelectorAll('.numero1');
const result = document.querySelector('.Resultado span');
const signs = document.querySelectorAll('.sinal');
const equals = document.querySelector('.sinal');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.maisoumenos');
const percent = document.querySelector('.percentagem');
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.textContent;
        if (!isFirstValue) {
            getFirstValue(atr);
        }
        if (isFirstValue && !isSecondValue) {
            getSecondValue(atr);
        }
    });
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = parseFloat(firstValue); // Convertendo para float
}

function getSecondValue(el) {
    if (firstValue !== "" && sign !== "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = parseFloat(secondValue); // Convertendo para float
    }
}



equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        if (secondValue !== 0) {
            resultValue = firstValue / secondValue;
        } else {
            result.innerHTML = "Error";
            return;
        }
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkResultLength();
});

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

const maisOuMenos = document.querySelector('.maisoumenos');

maisOuMenos.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== "") {
        resultValue = -firstValue;
        result.innerHTML = resultValue;
        firstValue = resultValue;
    }
    if (firstValue !== "" && secondValue !== "" && sign !== "") {
        resultValue = -resultValue;
        result.innerHTML = resultValue;
    }
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
});