document.getElementById("pageTitle").innerHTML = "Welcome to Ninja Coding 101"

alert("Hi, I'm working")


function theAnswer(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo =parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne + numbTwo);
};

function mathSubtraction(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo =parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne - numbTwo);
};
function mathMultiply(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo =parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne * numbTwo);
};
function mathDivide(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo =parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne / numbTwo);
};
