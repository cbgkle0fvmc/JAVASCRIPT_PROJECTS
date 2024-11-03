function getNumberFact() {
    // the fetch function makes a request to a URL

    fetch ('http://numbersapi.com/random/trivia')
    
    .then(response => response.text()) //The then method runs a function when the fetch request is successful,
    // allowing you to handle and use the response data (like turning it into text).
    
    .then(fact => {
        document.getElementById('factDisplay').textContent = fact;
    })

    // Then the catch method runs a function if there’s an error with the fetch request.

    .catch(error => {
        document.getElementById('factDisplay').textContent = "Error fetching fact.";
    });
}