let fullOperation = "";
let history = [];

function addNumber(number) {
  let op = fullOperation.split("");
  console.log(op);
  if ((op.includes("+") || op.includes("-")  || op.includes("x")  || op.includes("/") || op.includes("^")) &&
  (number.toString() === "+"||number.toString() === "-"||number.toString() === "x"||number.toString() === "/" ||number.toString() === "^")) {
    return;
  }
  if (number === "=") {
    history.push(fullOperation+" = ");
    calculate();
    document.getElementById("history").innerHTML = (history.join(" ")).replaceAll("\n", "<br>");
    console.log(history);
    return;
  }
  if (number === "C") {
    clearScreen();
    return;
  }
  fullOperation = fullOperation + number.toString();
  showNumber();
}
function calculate() {
  let op = fullOperation.split("");
  let result
  for (i in op){
    if (op[i] === "+") {
      let number = fullOperation.split("+");
      result = Number(number[0]) + Number(number[1]);
      break;
    } else if (op[i] === "-") {
      let number = fullOperation.split("-");
      result = Number(number[0]) - Number(number[1]);
      break;
    } else if (op[i] === "x") {
      let number = fullOperation.split("x");
      result = Number(number[0]) * Number(number[1]);
      break;
    } else if (op[i] === "/") {
      let number = fullOperation.split("/");
      result = Number(number[0]) / Number(number[1]);
      break;
    } else if (op[i] === "^") {
      let number = fullOperation.split("^");
      result = Math.pow(Number(number[0]), Number(number[1]));
      break;
    }
  }
  console.log(result);
  fullOperation = result.toString();
  history.push(fullOperation+"\n");
  showNumber();
}

function showNumber() {
  document.getElementById("operation").innerHTML = fullOperation;
}

function clearScreen() {
  history.length = 0;
  console.log(history);
  fullOperation = "";
  document.getElementById("operation").innerHTML = fullOperation;
}