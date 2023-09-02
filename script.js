
//Create main functions, can accept multiple parameters. (passed in an array like fashion)
function add (...array) {
const added = array.reduce((accumulator,number) => {
    return accumulator + number;
})
return added;
}

function subtract (...array) {
    const subtracted = array.reduce((accumulator,number) => {
        return accumulator - number;
    })
    return subtracted;
}

function multiply(...array) {
    const multiplier = array.reduce((accumulator,number) => {
        return accumulator * number;
    })
    return multiplier;
}

function divider(...array) {
    if (array.includes(0)) {
        return "Infinity";
    }
    const divider = array.reduce((accumulator,number) => {
        return accumulator / number;
    })
    return divider;
}

// declare some variables to plug in later
let firstNumber;
let secondNumber;
let operator;


