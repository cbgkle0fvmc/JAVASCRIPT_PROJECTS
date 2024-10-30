function displayType(person) {
    var personType = person.getAttribute("data-person-type");
    alert(person.innerHTML + " is " + personType + " in our family." );
}