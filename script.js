//Create main functions, can accept multiple parameters. (passed in an array like fashion)
function add(...array) {
  const added = array.reduce((accumulator, number) => {
    return accumulator + number;
  });
  return added;
}

function subtract(...array) {
  const subtracted = array.reduce((accumulator, number) => {
    return accumulator - number;
  });
  return subtracted;
}

function multiply(...array) {
  const multiplier = array.reduce((accumulator, number) => {
    return accumulator * number;
  });
  return multiplier;
}

function divider(...array) {
  if (array.includes(0)) {
    return "Infinity";
  }
  const divider = array.reduce((accumulator, number) => {
    return accumulator / number;
  });
  return divider;
}

// declare some variables to plug in later

// function called operator which calls the function that the operator sign matches to.
function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    return multiply(firstNumber, secondNumber);
  } else {
    return divider(firstNumber, secondNumber);
  }
}

//Scratch.
let firstNumber;
let secondNumber;
let previousOperand ="";
let currentOperand ="";
let value;

const buttons = document.querySelectorAll(".numbers");
buttonsArray = Array.from(buttons);
const display1 = document.querySelector("#d2");
const display2 = document.querySelector("#d1");

display1.textContent = "";
display2.textContent = "";


buttonsArray.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isNaN(button.textContent))
    display1.textContent += button.textContent;
  })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    const displayValue = document.querySelector("#d2");
    if (!firstNumber) {
      firstNumber = displayValue.textContent;
      displayValue.textContent = "";
    } else {
      secondNumber = displayValue.textContent
     
      displayValue.textContent = "";
    }

    if (!currentOperand) {
      currentOperand = e.target.textContent;
    
    } else {
      previousOperand = currentOperand;
     
      currentOperand = e.target.textContent;
      
    }

    if(previousOperand && (!isNaN(firstNumber) && (!isNaN(secondNumber)))) {
      value = operate(previousOperand,parseInt(firstNumber),parseInt(secondNumber));
      display2.textContent = value;
      firstNumber = value;
     
    }

  })
})

const equals = document.querySelector(".equals") 
equals.addEventListener("click", () => {
  const displayValue = document.querySelector(".display p");
  secondNumber = displayValue.textContent
  value = operate(currentOperand,parseInt(firstNumber),parseInt(secondNumber));
  display2.textContent = value;
  secondNumber = 0;
  currentOperand = "";
  firstNumber = value; 
});

