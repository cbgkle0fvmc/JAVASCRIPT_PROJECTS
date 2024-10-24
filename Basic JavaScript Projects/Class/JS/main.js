function Vehicle(Make, Model, Year, Color) { //Vehicle = Constructor
    this.Vehicle_Make = Make; //This keyword gets values of newly created vehicle objects
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicel_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //New Creates Objects for vehicle function
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1970, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicel_Color + "-colored" + Erik.Vehicle_Model +
    " manufactered in " + Erik.Vehicle_Year;
}