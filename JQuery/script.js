$(document).ready(function(){

    //The shineLoop function ises tje cjaining technique to
    //utilyze multiple animate event methods in the same function
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    //Set interval will repeat the shineLoop function and 0
    //sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down
    //by 50 pixels
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({
        //Triggers hte images to slide down one after the other 
        //when the user's mouse enters the div area with the 
        //#clasicCars ID
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //Triggers the images to slide up and hide each title
        //one after the other when the user's mouse leaves 
        //the one div area with the #classicCars ID
        mouseleave: function() {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking
    //each elements sibling so they dont all apply when
    //one question is clicked
    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    });

    //Will console.log when a user clicks on the FAQ container
    $('div.question').click(function(){
        console.log("You clicked on a FAQ.")
    });

    $('div.question').slideDown('slow');
})