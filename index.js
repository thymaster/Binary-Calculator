let elem = document.getElementById("res");

function checkOperator() {
  if (
    elem.innerText.endsWith("+") ||
    elem.innerText.endsWith("-") ||
    elem.innerText.endsWith("*") ||
    elem.innerText.endsWith("/")
  ) {
    return true;
  }
}

function clickZero() {
  elem.innerText += "0";
}

function clickOne() {
  elem.innerText += "1";
}

function clickSum() {
  if (elem.innerText.length != 0 && !checkOperator()) {
    elem.innerText += "+";
  }
}

function clickSub() {
  if (elem.innerText.length != 0 && !checkOperator()) {
    elem.innerText += "-";
  }
}

function clickMul() {
  if (elem.innerText.length != 0 && !checkOperator()) {
    elem.innerText += "*";
  }
}

function clickDiv() {
  if (elem.innerText.length != 0 && !checkOperator()) {
    elem.innerText += "/";
  }
}

function clickClr() {
  elem.innerText = "";
}

function clickEql() {
  if (!checkOperator()) {
    let re = /\d+/g;
    let re2 = /[\+\-\*\/]+/g;
    let numbers = elem.innerText.match(re);
    let operations = elem.innerText.match(re2);
    while (operations.length > 0) {
      if (operations.includes("*")) {
        let indexOfMul = operations.indexOf("*");
        let mul =
          (indexOfMul != 0
            ? parseInt(numbers[indexOfMul - 1], 2)
            : parseInt(numbers[indexOfMul], 2)) *
          parseInt(numbers[indexOfMul + 1], 2);
        numbers.splice(indexOfMul, 2);
        numbers.splice(indexOfMul, 0, mul.toString(2));
        operations.splice(indexOfMul, 1);
      } else if (operations.includes("/")) {
        let indexOfDiv = operations.indexOf("/");
        let division =
          (indexOfDiv != 0
            ? parseInt(numbers[indexOfDiv - 1], 2)
            : parseInt(numbers[indexOfDiv], 2)) /
          parseInt(numbers[indexOfDiv + 1], 2);
        numbers.splice(indexOfDiv, 2);
        numbers.splice(indexOfDiv, 0, division.toString(2));
        operations.splice(indexOfDiv, 1);
      } else if (operations.includes("+")) {
        let indexOfSum = operations.indexOf("+");
        let sum =
          (indexOfSum != 0
            ? parseInt(numbers[indexOfSum - 1], 2)
            : parseInt(numbers[indexOfSum], 2)) +
          parseInt(numbers[indexOfSum + 1], 2);
        numbers.splice(indexOfSum, 2);
        numbers.splice(indexOfSum, 0, sum.toString(2));
        operations.splice(indexOfSum, 1);
      } else {
        let indexOfSub = operations.indexOf("-");
        let sub =
          (indexOfSub != 0
            ? parseInt(numbers[indexOfSub - 1], 2)
            : parseInt(numbers[indexOfSub], 2)) -
          parseInt(numbers[indexOfSub + 1], 2);
        numbers.splice(indexOfSub, 2);
        numbers.splice(indexOfSub, 0, sub.toString(2));
        operations.splice(indexOfSub, 1);
      }
    }
    elem.innerText = numbers[0].toString(2);
  } else {
    alert("Line must ends with number.");
  }
}
