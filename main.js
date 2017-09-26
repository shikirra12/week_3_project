let keys = document.getElementsByClassName('button');
let operations = document.getElementsByClassName('operation');
let evaluate = document.getElementById('evaluate');
let decimalAdded = false;
let clearButton = document.querySelector('#clear');
let display = document.querySelector('#displayValue');
let storedValue = "";

  for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function makeCalcWork() {
      let buttonValue = this.innerHTML;
        display.innerHTML += buttonValue;
      }
    }

    clearButton.onclick = function clear() {
        display.innerHTML = "";
        storedValue = "";
    }

    evaluate.onclick = function() {
      console.log("evaling");
      storedValue += display.innerHTML;
      display.innerHTML = eval(storedValue);
      storedValue = "";
    }

    for (var i = 0; i < operations.length; i++) {
      operations[i].onclick = function operators() {
        storedValue += display.innerHTML;
        storedValue += this.innerHTML;
        display.innerHTML = "";
        console.log(storedValue);
      }
    }
