function getSentence(){
    var concat1 = "It is ";
    var concat2 = "After 5pm, ";
    var concat3 = "so I will leave work ";
    var concat4 = "and go home and work on The Tech Academy Coding bootcamp.";
    var concatenated_sentence = concat1.concat(concat2, concat3, concat4);
    document.getElementById("concat_method").innerHTML = concatenated_sentence;

}