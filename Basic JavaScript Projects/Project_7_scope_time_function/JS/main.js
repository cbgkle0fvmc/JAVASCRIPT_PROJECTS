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

function get_Date(){
    if (new Date().getHours() > 12) {
        document.getElementById("wakeUp").innerHTML = "Good afternoon.";
    }
   
}

//If military time is greater than 1200, when clicking, you are greeted with, "Good afternoon."

function Date_Function(){
    Day = document.getElementById("Day") .value;
    if (Day == 22){
        Payment = "Truck payment is due today.";
    }
    else{
        Payment = "Truck payment not due today.";
    }
    document.getElementById("Todays_date").innerHTML = Payment;
}

OuncesToPSI();
OzToGramsPressure();
FeetToInches();
localVariable();
localVariable2();