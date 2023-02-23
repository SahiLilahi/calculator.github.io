// Select all necessary elements from the DOM
const screen = document.getElementById("calculator-screen");
const allClearBtn = document.querySelector(".allclear");
const clearBtn = document.querySelector(".clear");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const minusBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".add");
const percentBtn = document.querySelector(".percent");
const equalBtn = document.querySelector(".equal");
const dotBtn = document.querySelector(".dot");
const doubleZeroBtn = document.querySelector(".doublezero");
const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");

// Create variables to hold current and previous operands and operator
let currentOperand = "";
let previousOperand = "";
let currentOperator = "";
let result = "";

// Function to update the screen with the current operand and operator
function updateScreen() {
  screen.value = previousOperand + currentOperator + currentOperand;
}

// Function to clear all values and reset the calculator
function clearAll() {
  currentOperand = "";
  previousOperand = "";
  currentOperator = "";
  updateScreen();
}

// Function to clear the current operand
function clearCurrent() {
  currentOperand = "";
  updateScreen();
}

// Function to handle number button clicks
function handleNumber(number) {
  currentOperand += number;
  updateScreen();
}

// Function to handle operator button clicks
function handleOperator(operator) {
  if (currentOperand === "") {
    return;
  }
  if (previousOperand !== "") {
    calculate();
  }
  currentOperator = operator;
  previousOperand = currentOperand;
  currentOperand = "";
  updateScreen();
}

// Function to handle the percent button click
function handlePercent() {
  if (currentOperand === "") {
    return;
  }
  currentOperand = parseFloat(currentOperand) / 100;
  updateScreen();
}

// Function to handle the dot button click
function handleDot() {
  if (currentOperand.includes(".")) {
    return;
  }
  currentOperand += ".";
  updateScreen();
}

// Function to handle the double zero button click
function handleDoubleZero() {
  if (currentOperand === "") {
    return;
  }
  currentOperand += "00";
  updateScreen();
}

// Function to calculate the result of the current operation
function calculate() {
  let result;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return;
  }
  switch (currentOperator) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "×":
      result = previous * current;
      break;
    case "÷":
      result = previous / current;
      break;
    default:
      return;
  }
  currentOperand = result.toString();
  previousOperand = "";
  currentOperator = "";
  updateScreen();
}

// Add event listeners to all necessary elements
allClearBtn.addEventListener("click", clearAll);
clearBtn.addEventListener("click", clearCurrent);
divideBtn.addEventListener("click", () => handleOperator("÷"));
multiplyBtn.addEventListener("click", () => handleOperator("×"));
minusBtn.addEventListener("click", () => handleOperator("-"));
addBtn.addEventListener("click", () => handleOperator("+"));
percentBtn.addEventListener("click", handlePercent);
equalBtn.addEventListener("click", calculate);
dotBtn.addEventListener("click", handleDot);
doubleZeroBtn.addEventListener("click", handleDoubleZero);
zeroBtn.addEventListener("click", () => handleNumber("0"));
oneBtn.addEventListener("click", () => handleNumber("1"));
twoBtn.addEventListener("click", () => handleNumber("2"));
threeBtn.addEventListener("click", () => handleNumber("3"));
fourBtn.addEventListener("click", () => handleNumber("4"));
fiveBtn.addEventListener("click", () => handleNumber("5"));
sixBtn.addEventListener("click", () => handleNumber("6"));
sevenBtn.addEventListener("click", () => handleNumber("7"));
eightBtn.addEventListener("click", () => handleNumber("8"));
nineBtn.addEventListener("click", () => handleNumber("9"));

// Add keyboard support for the calculator
document.addEventListener("keydown", (event) => {
  if (
    event.key === "0" ||
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9"
  ) {
    handleNumber(event.key);
  } else if (event.key === ".") {
    handleDot();
  } else if (event.key === "Backspace") {
    clearCurrent();
  } else if (event.key === "Escape") {
    clearAll();
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    handleOperator(event.key);
  } else if (event.key === "%") {
    handlePercent();
  } else if (event.key === "Enter" || event.key === "=") {
    calculate();
  }
});
