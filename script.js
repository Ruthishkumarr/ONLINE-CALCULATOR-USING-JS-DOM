// CREATING ELEMENT FOR TITLE
const header = document.createElement("h1");
const para = document.createElement("p");

// Calculator Divisons Here
const container = document.createElement("div");
const input = document.createElement("input");
const firstdiv = document.createElement("div");
const seconddiv = document.createElement("div");
const thirddiv = document.createElement("div");
const fourthdiv = document.createElement("div");
const fivethdiv = document.createElement("div");
// 1st Row
const clear = document.createElement("button");
const dot = document.createElement("button");
const backspace = document.createElement("button");
const multiply = document.createElement("button");
// 2nds Row
const seven = document.createElement("button");
const eight = document.createElement("button");
const nine = document.createElement("button");
const division = document.createElement("button");
// 3rd Row
const four = document.createElement("button");
const five = document.createElement("button");
const six = document.createElement("button");
const subtract = document.createElement("button");
// 4th Row
const one = document.createElement("button");
const two = document.createElement("button");
const three = document.createElement("button");
const addition = document.createElement("button");
// 5th Row
const zero = document.createElement("button");
const doublezero = document.createElement("button");
const equal = document.createElement("button");

//-------------- ADDING ATTRIBUTES---------------------------

header.setAttribute("id", "title");
para.setAttribute("id", "description");
container.setAttribute("id", "container");
input.setAttribute("id", "result");
input.setAttribute("type", "text");
// 1st Row
firstdiv.setAttribute("id", "firstdiv");
clear.className = "first";
clear.setAttribute("id", "clear");
clear.addEventListener("click", clearall);
dot.className = "first";
dot.setAttribute("id", "dot");
dot.setAttribute("onclick", "display('.')");
backspace.className = "first";
backspace.setAttribute("id", "backspace");
backspace.addEventListener("click", deleted);
multiply.className = "first";
multiply.setAttribute("id", "multiply");
multiply.setAttribute("onclick", "display('*')");
// 2nd ROw
seconddiv.setAttribute("id", "seconddiv");
seven.setAttribute("class", "second");
seven.setAttribute("onclick", "display('7')");
eight.className = "second";
eight.setAttribute("onclick", "display('8')");
nine.className = "second";
nine.setAttribute("onclick", "display('9')");
division.className = "second";
division.setAttribute("id", "division");
division.setAttribute("onclick", "display('/')");
// 3rd Row
thirddiv.setAttribute("id", "thirddiv");
four.className = "third";
four.setAttribute("onclick", "display('4')");
five.className = "third";
five.setAttribute("onclick", "display('5')");
six.className = "third";
six.setAttribute("onclick", "display('6')");
subtract.className = "third";
subtract.setAttribute("id", "subtract");
subtract.setAttribute("onclick", "display('-')");
// 4t Row
fourthdiv.setAttribute("id", "fourthdiv");
one.className = "fourth";
one.setAttribute("id", "1");
one.setAttribute("onclick", "display('1')");
two.className = "fourth";
two.setAttribute("id", "two");
two.setAttribute("onclick", "display('2')");
three.className = "fourth";
three.setAttribute("id", "three");
three.setAttribute("onclick", "display('3')");
addition.className = "fourth";
addition.setAttribute("id", "add");
addition.setAttribute("onclick", "display('+')");
// 5th Row
fivethdiv.setAttribute("id", "fivethdiv");
zero.className = "fiveth";
zero.setAttribute("onclick", "display('0')");
doublezero.className = "fiveth";
doublezero.setAttribute("onclick", "display('00')");
equal.className = "fiveth";
equal.setAttribute("id", "equal");
equal.setAttribute("onclick", "total()");

//--------------- Inner Text for Elements---------------------
header.innerText = "ONLINE CALCULATOR";
para.innerText = " Using JS DOM ";

// 1st Row for InnerText
clear.innerText = "C";
dot.innerText = "•";
backspace.innerText = "←";
multiply.innerText = "x";
// 2nd Row for InnerText
seven.innerText = "7";
eight.innerText = "8";
nine.innerText = "9";
division.innerText = "/";
// 3rd Row for InnerText
four.innerText = "4";
five.innerText = "5";
six.innerText = "6";
subtract.innerText = "-";
// 4th Row for InnerText
one.innerText = "1";
two.innerText = "2";
three.innerText = "3";
addition.innerText = "+";
// 5th Row for InnerText
zero.innerText = "0";
doublezero.innerText = "00";
equal.innerText = "=";
//------------- Append Child to Parent Div------------------------
firstdiv.append(clear, dot, backspace, multiply);
seconddiv.append(seven, eight, nine, division);
thirddiv.append(four, five, six, subtract);
fourthdiv.append(one, two, three, addition);
fivethdiv.append(zero, doublezero, equal);

container.append(input, firstdiv, seconddiv, thirddiv, fourthdiv, fivethdiv);

// Append Elements to Body
document.body.append(header, para, container);

//----------------------------FUNCTIONS-----------------------------------
input.addEventListener("input", () => {
  if (
    input.value != "0" ||
    input.value != "1" ||
    input.value != "2" ||
    input.value != "3" ||
    input.value != "4" ||
    input.value != "5" ||
    input.value != "6" ||
    input.value != "7" ||
    input.value != "8" ||
    input.value != "9"
  ) {
    alert("Words Are Not Allowed Here !");
  }
});

function display(val) {
  var i = (document.querySelector("#result").value += val);
}

function clearall() {
  document.querySelector("#result").value = "";
}

function deleted() {
  var dele = document.querySelector("#result");
  dele.value = dele.value.substring(0, dele.value.length - 1);
}

function total() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
