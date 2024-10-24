function Ride_Function(){
    var Height, Can_ride;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Facility(Name,NumberOfWells,YearConstructed,ControllerMake){ //Facility = Constructor
    this.Facility_Name = Name;
    this.Facility_NumberOfWells = NumberOfWells;
    this.Facility_YearConstructed = YearConstructed;
    this.Facility_ControllerMake = ControllerMake;
}

var MountMoran = new Facility("Mount Moran", 2, 2023, "ABB");
var Ratliff = new Facility("Ratliff", 9, 2024, "ABB");
var Hellfire = new Facility("Hellfire", 11, 2024, "ABB");

function facilityAttributes(){
    document.getElementById ("New_and_This").innerHTML=MountMoran.Facility_Name +
    " was built in " + MountMoran.Facility_YearConstructed + "and has " + MountMoran.Facility_NumberOfWells
    + " " + " and is controlled by " + MountMoran.Facility_ControllerMake;
}

function multiply_Function(){
    document.getElementById("Nested").innerHTML = Multiply();
    function Multiply() {
        var Start = 10;
        function Times_two() {Multiply *= 2;}
        Times_two();
        return Start;
    }
}
