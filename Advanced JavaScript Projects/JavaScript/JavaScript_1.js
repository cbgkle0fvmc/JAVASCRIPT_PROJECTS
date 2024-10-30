function Sports_Function() {
    var Sports_Output;
    var Sports = document.getElementById("Sports_Input").value;
    var Sports_String = " is a great sport!";
    switch (Sports) {
        case "Soccer":
            Sports_Output = "Soccer" + Sports_String;
            break;
        case "Baseball":
            Sports_Output = "Baseball" + Sports_String;
            break;
        case "Basketball":
            Sports_Output = "Basketball" + Sports_String;
            break;
        case "Golf":
            Sports_Output = "Golf" + Sports_String;
            break;
        case "Football":
            Sports_Output = "Football" + Sports_String;
            break;
            default:
            Sports_Output = "Please enter a sport exactly as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Sports_Output;
}