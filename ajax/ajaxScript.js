function getMsg(){
    //Step 1 : Setup the XML HTTP Request Object

    let ajaxRequest = new XMLHttpRequest();

    //Get input value of the name to display the user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //Function to diplay user input value once input value once
    //request has been recieved
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
        inputVal + " for signing up!";
    }
    //Step 2: Prepare the type of request and what
    //to request from the server
    ajaxRequest.open('GET', 'response.HTML', true);

    //Step 3: Defines the AJAX response callback method that
    //establishes whether the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = 
            ajaxRequest.responseText;
        }
    }

    //Step 4:Send the request
    ajaxRequest.send();
}


function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            document.getElementById("changeText").innerHTML = 
            ajaxRequest.responseText;
        }
    }
    xhttp.open("GET", "ajax_assignment.txt", true);
    xhttp.send();
}