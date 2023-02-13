function add() {
}

function subtract() {
}

function multiply() {
}

function divide() {
}

function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function increment(n) {
    n++;
    return n ++;
  }

  function decrement(n) {
    n--;
    return n --;
  }

  function makeInt(n) {
    const parsed = parseInt(n, 10);
    if (isNaN(parsed)) { return NaN; }
    return parsed;
  }

  function preserveDecimal(string) {
    return parseFloat(string);
  }