function myFunction(){  //Create function called myFunction
    var sentence = "The first part of this sentence"; //create variable sentence
    sentence += " will join the second part of this sentence"; //modify sentence 
                                                                // to add additional text
    document.getElementById("Concatenate").innerHTML = sentence;
    //When <p> element in index.html is clicked, myFunciton is invoked
    //paragraph has ID of "concatenate" which is linked to variable sentence
    //which was modified by += to concatenate string.
}