

// document.getElementById("app").innerHTML = ``;

var btn = document.getElementsByClassName("keys");
var display = document.getElementById("display");
var operand1 = null;
var operand2 = null;
var operator = null;

document.addEventListener("keypress", calculate);

for (var i = 0; i < btn.length; i++) {
  if ((parseInt(i) + 1) % 4 === 0 || i === 18) {
    btn[i].addEventListener("mouseup", redmouseUp);
    btn[i].addEventListener("mousedown", redmouseDown);
  } else {
    btn[i].addEventListener("mouseup", mouseUp);
    btn[i].addEventListener("mousedown", mouseDown);
  }
  btn[i].addEventListener("click", calculate);
}

function calculate(event) {
  var val = 0;
  if (event.detail === 0) {
    //keypress
    val = String.fromCharCode(event.keyCode);
  } else {
    //mouse click
    val = this.getAttribute("data-value");
  }

  if (
    val == "+" ||
    val == "-" ||
    val == "*" ||
    val == "/" ||
    val == "%" ||
    val == "="
  ) {
    if (display.textContent == "") {
      alert("Please enter a number");
    }
  }
  if (val == "+") {
    if (operand1 != "") {
      operand1 = eval(operand1 + operator + parseFloat(display.textContent));
    } else {
      operand1 = parseFloat(display.textContent);
    }
    operator = "+";
    display.innerText = "";
  } else if (val == "-") {
    if (operand1 != "") {
      operand1 = eval(operand1 + operator + parseFloat(display.textContent));
    } else {
      operand1 = parseFloat(display.textContent);
    }
    operator = "-";
    display.innerText = "";
  } else if (val == "*") {
    if (operand1 != "") {
      operand1 = eval(operand1 + operator + parseFloat(display.textContent));
    } else {
      operand1 = parseFloat(display.textContent);
    }
    operator = "*";
    display.innerText = "";
  } else if (val == "/") {
    if (operand1 != "") {
      operand1 = eval(operand1 + operator + parseFloat(display.textContent));
    } else {
      operand1 = parseFloat(display.textContent);
    }
    operator = "/";
    display.innerText = "";
  } else if (val == "%") {
    operand2 = parseFloat(display.textContent);
    var ans = eval(
      operand1 + operator + "((" + operand1 + "*" + operand2 + ")/100)"
    );
    display.innerText = ans;
  } else if (val == "+/-") {
    var str = display.innerText.slice(0, 1);
    if (str == "-") {
      display.innerText = display.innerText.slice(1);
    } else {
      display.innerText = "-" + display.innerText;
    }
  } else if (val == "AC") {
    display.innerText = "";
  } else if (val == "=") {
    operand2 = parseFloat(display.textContent);
    var ans = eval(operand1 + operator + operand2);
    display.innerText = ans;
  } else if (val == ".") {
    display.innerText += val;
  } else {
    display.innerText += val;
  }

  if (val == "=" || val == "AC" || val == "%") {
    operand1 = "";
    operand2 = "";
    operator = "";
  }
}

function mouseDown(event) {
  event.currentTarget.style.backgroundColor = "#f6f7a8";
}

function mouseUp(event) {
  event.currentTarget.style.backgroundColor = "white";
}

function redmouseDown(event) {
  event.currentTarget.style.backgroundColor = "maroon";
}

function redmouseUp(event) {
  event.currentTarget.style.backgroundColor = "rgb(176, 55, 55)";
}
