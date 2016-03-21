$(function(){
    $('#nav-block').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#nav-block').data('size') == 'big')
        {
            $('#nav-block').data('size','small');
            $('#nav-block').stop().animate({
                height:'60px'
            },600);
        }
    }
    else
    {
        if($('#nav-block').data('size') == 'small')
        {
            $('#nav-block').data('size','big');
            $('#nav-block').stop().animate({
                height:'80px'
            },600);
            $('.button-container').stop().animate({
                top:'20px'
            },600);
        }  
    }
});