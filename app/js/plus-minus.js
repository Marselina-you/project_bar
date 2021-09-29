$(document).ready(function(){
    $(".button-href").css('opacity', '0');
    $(".opyt").click(function(){
	$(this).next().css('opacity', '1');
	
	$(this).hide();





});
    
    $('.plus').click(function () {
        
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        var $but = $(this).parent();
        var $bro = $but.siblings();
        if(count == 0){$but.css('opacity', '0');
        $bro.show();}
        $input.val(count);
        $input.change();
        
        return false;
    });
    
}) 
    
    
