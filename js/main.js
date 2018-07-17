$(document).ready(function(){
    var largeHeader = $('h1');
    largeHeader.css({
        'font-size': '100px',
        'color': 'green',
        'margin-bottom': '20px'
    })

    $('h2').addClass('second-header')

    $('h1').append('This is appended');

});

$(function(){
    $('p').removeClass('new-class');

    $('h2').on('click', function(e){
        $(this).css({
            'background-color': 'none'
        });
    });
});
