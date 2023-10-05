let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== "" && !isNaN(displayValue[displayValue.length - 1])) {
    displayValue += operator;
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
