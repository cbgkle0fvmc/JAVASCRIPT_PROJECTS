function getSentence(){
    var concat1 = "It is ";
    var concat2 = "After 5pm, ";
    var concat3 = "so I will leave work ";
    var concat4 = "and go home and work on The Tech Academy Coding bootcamp.";
    var concatenated_sentence = concat1.concat(concat2, concat3, concat4);
    document.getElementById("concat_method").innerHTML = concatenated_sentence;

}

function slice_Method(){
    var Sentence = "From this sentence, we will select one word to read.";
    var sliced_Word = Sentence.slice(10, 18);
    document.getElementById("Word").innerHTML = sliced_Word;
}

function IntToString(){
    var X = 100;
    document.getElementById("NumToString").innerHTML = X.toString();
}

function raw_Number(){
    X = 3.1456792566285484131389466123654
    document.getElementById("specifiedLength").innerHTML = X.toPrecision(4);
}