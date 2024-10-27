// The while loop means that while (blank) is occuring, do (blank)

// A while is basically a repeating if statement, you are telling the computer to execute certain
// code repreatedly while a certain condition is present

// A while loop loops through the block of code for as long as a specified condition is true

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; // <br> tag within our string to cause spacing between lines of text
        X++; // ++ is used to increment (add one) in JavaScript. To decrement (subtract one) we use - -
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}