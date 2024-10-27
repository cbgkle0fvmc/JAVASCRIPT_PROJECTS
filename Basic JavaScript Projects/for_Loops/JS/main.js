// A “For Loop” is used to repeat a section of code a number of times. For Loops are used when
// the number of iterations are known.

//Global variables
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

//Instruments.length = 7
//For Y = 0 until Y = > Insturments.length execute this loop

function for_Loop(){ //invoked when HTML button is clicked
    for (Y = 0; Y < Instruments.length; Y++) { //++ operator increases the value of a variable Y by 1.
        Content += Instruments[Y] + "<br>"; // the += operator is known as the addition assignment operator. 
                                            //It adds the value on the right to the variable on the left and 
                                            //assigns the result to the variable on the left.
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

document.write(Instruments.length);