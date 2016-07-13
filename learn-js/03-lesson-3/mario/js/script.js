$(document).ready( function() {
    $('.mario-l').hide();
    $('.mushroom').animate({top: "+=65px"}, 'slow');
        $('.mushroom').animate({left: "+=150px"}, 'slow');
            $('.mushroom').animate({top: "+=140px", left: "+=20px"}, 'slow');
        $('.mushroom').animate({left: "+=120px"}, 'slow');

    //
    $(document).keydown(function(key) {
        if (parseInt($('#mario').css('left')) >= 900) {
            $('#mario').animate({height: "100px"}, 'fast');
            $('#mario').animate({top: "-150px"}, 'fast');
                $('.mushroom').hide();
        };
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
                $('.mario-l').animate({left: "-=20px"}, 'fast')
                $('#mario').addClass('mario-l');
                $('#mario').removeClass('mario');
				break;
			// Up Arrow Pressed
			case 38:
				$('.mario').animate({top: "-=20px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
			    $('.mario').animate({left: "+=20px"}, 'fast');
                $('#mario').addClass('mario');
                $('#mario').removeClass('mario-l');
				break;
			// Down Arrow Pressed
			case 40:
			    $('#mario').animate({top: "+=20px"}, 'fast');
				break;
            // B pressed Grow
            case 66:
                $('#mario').animate({height: "+=100px"}, 'fast');
                break;
            // S pressed Shrink
            case 83:
                $('#mario').animate({height: "-=100px"}, 'fast');
                $('h1').hide();
                break;
            // Spacebar Jump
            case 32:
                $('#mario').animate({top: "-=50px"}, 'fast');
                $('#mario').animate({top: "+=50px", left: "+=20px"}, 'fast');
                break;
            default:
                console.log(key);
                break;
		}
	});
});