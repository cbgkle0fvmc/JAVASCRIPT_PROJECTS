function addition_Function(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition
}

function subtraction_Function(){
    var subtraction = 4 - 2;
    document.getElementById("Subtraction").innerHTML = "4 - 2 = " + subtraction
}

function multiplication_Function(){
    var multiplication = 2 * 2;
    document.getElementById("Multiplication").innerHTML = "2 * 2 = " + multiplication
}

function division_Function(){
    var division = 10 / 2;
    document.getElementById("Division").innerHTML = "10 / 2 = " + division
}

function multiple_Operations_Function(){
    var simple_Math = (20 * 8) + (20 * 1.5 * 4) + 75;
    document.getElementById("Multiple_Operations").innerHTML = "72 * 8 + 72 * 1.5 * 4 + 75 = " + simple_Math  
}

function modulus_Operator(){
    var simple_Math_1 = 72 % 16;
    document.getElementById("Modulus").innerHTML = "When you divide 72 by 16 you have a remainder of: " + simple_Math_1
}

function negation_Operator(){
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}

function increment(){
var Y = 5;
Y++;
document.getElementById("increment").innerHTML = Y;
}

window.alert(Math.random());