$(document).ready(function(){
    //alert('Hello');

    var speed = 500;
    var autoSwitch = false;
    var autoSwitchSpeed = 4000;

    //Add an active class to the currently active slide

    $('.slide:first-child').addClass('active');

    //Hide all slides

    $('.slide').hide;

    //Show active
    $('.active').show();

    //Click on buttons, #prev #next,  to fade in net image, div .slide

    $('#next').on("click", nextSlide)

    $('#prev').on("click", function(){
        $('.active').removeClass('active').addClass('fadeout');
        //If our slide is the last one add .active class to first slide
        if($('.fadeout').is(':first-child') ){
            $('.slide').last().addClass('active');
            $('.slide').removeClass('fadeout');
        } else{
            $('.fadeout').removeClass('fadeout').prev().addClass('active');
        }

        //$('.fadeout').removeClass('fadeout');

        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

    })

    if(autoSwitch){
        setInterval(nextSlide, autoSwitchSpeed);
    }

    function nextSlide()  {
        $('.active').removeClass('active').addClass('fadeout');
        //If our slide is the last one add .active class to first slide
        if($('.fadeout').is(':last-child') ){
            $('.slide').first().addClass('active');
            $('.slide').removeClass('fadeout');
        } else{
            $('.fadeout').removeClass('fadeout').next().addClass('active');
        }

        //$('.fadeout').removeClass('fadeout');

        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});