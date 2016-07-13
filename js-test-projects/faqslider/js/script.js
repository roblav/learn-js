
$(document).ready(function(){

    var action = 'click';
    //Our structure is two li's, one q and one a
    //When we click on q we want to review a

    $('.faq').on(action, 'li.q', function(){
        //console.log($(this).text());
        $('.faq li.a').slideUp();
        $(this).next('li').slideToggle();

        //Add rotate class to img
        var img = $(this).children();

        $('img').not(img).removeClass('rotate')
        img.toggleClass('rotate');
    })

});