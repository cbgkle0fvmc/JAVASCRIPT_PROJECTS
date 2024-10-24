function get_Date(){
    if (new Date().getHours() < 18) { //Date().getHours() method returns hour specified in date
                                    //according to the local time
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//In the above code we stated that if it is before (less than) 6:00pm, display “How are you today?” 
//If you ran this code later than 6:00pm, nothing would display. Let's see how we can give the program another condition...