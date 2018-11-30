$(document).ready(function() {
    $('.login').animate({
        marginLeft:-100,
        opacity: 0
    });

    $('.registerBtn').click(function(event){
        $('.register').animate({
            opacity: 0,
            marginLeft:-100
        });

        $('.login').animate({
            marginLeft:0,
            opacity: 1
        });
    });

    $('.loginBtn').click(function(event){
        $('.login').animate({
            opacity: 0,
            marginLeft: -100
            
        });

        $('.register').animate({
            opacity: 1,
            marginLeft: 0
        });
    })
});