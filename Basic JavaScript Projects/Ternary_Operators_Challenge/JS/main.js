function Age_Function(){
    var Age, Can_vote;
    Can_vote = (Age < 18) ? "You are too young ":"You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
}