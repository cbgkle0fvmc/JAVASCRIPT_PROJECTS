function countdown() { //create countdown function
    var seconds = document.getElementById("seconds").value;
    //create variable in countdown function that links to input box of HTML file

    function tick(){ //start counting down from seconds input in HTML file 
        seconds = seconds - 1;
        timer.innerHTML = seconds; //link input timer parameter to countdown function
        var time = setTimeout (tick, 1000); //program pauses for 1,000 milliseconds (1 second)
        if (seconds == -1) { //If statement : loop will continue until timer reaches under 1 second
            alert("Time's up!"); //When timer is under one second, times up alert pops up
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}