//BASIC CALCULATOR PROGRAM

const display = document.getElementById("display");
const validExpression = /^[0-9+\-*/.() ]+$/;

const historyList = document.getElementById("historyList");

function addToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (display.value.trim() === "") {
        display.value = "Enter value";
        return;
    }

    if (!validExpression.test(display.value)) {
        display.value = "Invalid Input";
        return;
    }

    try {
        const expression = display.value;
        const result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Cannot divide by 0";
            return;
        }

        const item = document.createElement("li");
        item.textContent = `${expression} = ${result}`;
        historyList.prepend(item);

        display.value = result;
    }
    catch (error) {
        display.value = "Error";
    }
}
function toggleHistory() {
    const history = document.getElementById("history");

    if (history.style.display === "none" || history.style.display === "") {
        history.style.display = "block";
    }
    else {
        history.style.display = "none";
    }
}

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if ("0123456789+-*/.()".includes(key)) {
        addToDisplay(key);
    }

    if (key === "Enter" || key === "=") {
        calculate();
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        clearDisplay();
    }
});