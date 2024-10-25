function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice (27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// The numbers indicate which characters in your string will be cut out and 
// displayed. This code would display “Johnny.”