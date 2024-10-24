function count_Function(){
    document.getElementById("Counting").innerHTML = Count(); //References <p> element in HTML
    function Count() { //define count function
        var Starting_point = 9; //Int 9 will be starting point of count function
        function Plus_one() {Starting_point += 1;} //define plus one function, add 1 to var starting_point
        Plus_one(); //print plus one
        return Starting_point; //return value to variable starting point
    }
}