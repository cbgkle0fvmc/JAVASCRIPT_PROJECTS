var Cities =["Dallas", "Houston", "Austin", "San Antonio", "Odessa", "Lubbock", "Amarillo"]
var Content = "";
var Y;

function Call_Loop(){
    var Digit = "";
    var X = 1;  //initialize variable X at constant value of 1
    while (X < 75){ // While X is less than 15 : invoke nested function
        Digit += "<br>" + X; // += operator is an assignment operator that adds the value on the right to the
                            // variable on the left and then assigns the result back to the variable on the left.
        X ++; // ++ is used to increment (add one) in JavaScript. To decrement (subtract one) we use - -
    } 
    document.getElementById("Loop").innerHTML = Digit;
}

function for_Loop(){
    for (Y = 0; Y < Cities.length; Y++) {
        Content += Cities[Y] + "<br>"
    }
    document.getElementById("List_of_Cities").innerHTML = Content;
}

function array_Function(){
    var node1_Data = [];
    node1_Data[0] = "5.5 FT";
    node1_Data[1] = "115 PSI";
    node1_Data[2] = "PUMP 1: 1: RUNNING";
    node1_Data[3] = "PUMP 2: 1: RUNNING";
    document.getElementById("Array").innerHTML =  node1_Data[2] + "with Tank level of 5.5FT and a pump discharge pressure of " + node1_Data[1]
}

function constant_function(){
    const dog = {attitude:"fiesty", type:"blue-healer", name:"Lola"};
    document.getElementById("Constant").innerHTML = dog.name + " is a " + dog.type + " who is " + dog.attitude       
}

{
    let A = 10;
    let B = 15;
    let sum = A + B;
    document.write(sum);
}

let house = {
    make: "Betenbough ",
    model:"Jade ",
    year:"2024 ",
    type: "brick",
    description: function() {
        return + "The house was built by " + this.make + "in " + this.year + " and is constructed of " + this.type;
    }
};
document.getElementById("house_Object").innerHTML = house.description();