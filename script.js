let myArr = [];
let num1 = undefined;
let num2 = undefined;

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  console.log(difference);
}

function multiply(num1, num2) {
  let product = num1 * num2;
  console.log(product);
}

function divide(num1, num2) {
  let quotient = num1 / num2;
  console.log(quotient);
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "x":
      multiply(num1, num2);
      break;
    case "%":
      divide(num1, num2);
      break;
  }
}

function renderDisplay() {
  let screenSelector = document.getElementById("screen");
  let buttonsDiv = document.getElementById("buttonsDiv");
  let calculatorButtonNames = [
    1,
    2,
    3,
    "%",
    4,
    5,
    6,
    "×",
    7,
    8,
    9,
    "-",
    ".",
    0,
    "=",
    "+",
    "Backspace",
    "AC"
  ];
  calculatorButtonNames.forEach(function(button) {
    let calculatorButton = document.createElement("button");
    buttonsDiv.appendChild(calculatorButton);
    calculatorButton.classList.add("btn");
    calculatorButton.innerText = button;
    // this gives the operators a shared 'operator' class
    if (button === '+' || button === '-' || button === '×' || button === '%') {
        calculatorButton.classList.add("operator");
    }
    calculatorButton.id = "operator";
    calculatorButton.id = calculatorButton.innerText;
  });
  let calculatorButtonSelector = document.querySelectorAll(".btn");
  populateDisplay(calculatorButtonSelector, screenSelector);
  calculatorLogic(screenSelector);
}

function populateDisplay(calculatorButtonSelector, screenSelector) {
  console.log(calculatorButtonSelector);
  calculatorButtonSelector.forEach(button => {
    button.addEventListener("click", event => {
    // pushes content to array
      myArr.push(event.target.id);
    // changes screen text to numbers that are pressed
      screenSelector.innerText += event.target.id;
      console.log(myArr);
      // this runs with every button press
    });
  });
}

function calculatorLogic(screenSelector) {
    let equalButtonSelector = document.getElementById("=");
    let additionButtonSelector = document.getElementById("+");
    let clearButtonSelector = document.getElementById('AC');
    operators = /[\+\-\*\/]/;

    clearButtonSelector.addEventListener('click', event => {
        screenSelector.innerText = "";
        myArr = [];
    })

    equalButtonSelector.addEventListener('click', event => {
        separateNumbersFromOperator();
        screenSelector.innerText = operate('+', num1, num2);
        console.log(operate('+', num1, num2))
    })

    additionButtonSelector.addEventListener('click', event => {
        separateNumbersFromOperator();
        console.log(screenSelector);
        screenSelector.innerText = operate('+', num1, num2);
        console.log(operate('+', num1, num2));
    })
};

function separateNumbersFromOperator() {
    myArr.forEach(function(item) {
        if (item === "+" || item === "-" || item === "×" || item === "÷") {
            const operatorIndex = myArr.indexOf(item);
            num1 = Number(myArr.slice(0, operatorIndex).join(''));
            num2 = Number(myArr.slice(operatorIndex + 1, -1).join(''));
            calculatorLogic();
        }
    });
}

renderDisplay();