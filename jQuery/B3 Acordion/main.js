$(document).ready(function() {
    
    $('.item p').slideUp();// thu nho noi dung lai
    $('.item h3').click(function(event){
        
        $('.item p').slideUp();// thu nho noi dung lai
        $(this).next().slideToggle();
        $(this).addClass('lightblue');

    });

});
