var X = 72 //Global variable
function OuncesToPSI(){
    document.write(X / 16 +"<br>");
}

function OzToGramsPressure(){
    document.write(X * 28.34952 +"<br>");
}


function FeetToInches(){
    document.write (X - 12 +"<br>");
}

function localVariable(){
    var Y = 15;
    document.write(15 + Y +"<br>")
}

function localVariable2(){
    document.write(Y * 3);
}


OuncesToPSI();
OzToGramsPressure();
FeetToInches();
localVariable();
localVariable2();