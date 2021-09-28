$(document).ready(function() {
	$('.header-box1__href').click(function(){
    var url = $(this).attr('href');
    $('.empty1').load(url + ' .block-enter');
    return false;

    });
    $('.block-registration').click(function(){
    var url = $(this).attr('href');
    $('.empty2').load(url + ' .wrap-registration-form');
    return false;

    });
    
    
})