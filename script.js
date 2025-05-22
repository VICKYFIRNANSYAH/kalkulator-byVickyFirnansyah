const display = document.getElementById("display");
let expression = "";

function appendValue(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    expression = "";
    display.innerText = "";
  }

  expression += value;

  // Tampilkan simbol khusus untuk * dan /
  let visual = expression
    .replace(/\*/g, "×")
    .replace(/\//g, "÷");

  display.innerText = visual;
}

function clearDisplay() {
  expression = "";
  display.innerText = "0";
}

function backspace() {
  expression = expression.slice(0, -1);
  let visual = expression
    .replace(/\*/g, "×")
    .replace(/\//g, "÷");
  display.innerText = visual || "0";
}

function calculate() {
  try {
    let result = eval(expression.replace('%', '/100'));
    expression = result.toString();
    display.innerText = expression;
  } catch (e) {
    display.innerText = "Error";
    expression = "";
  }
}