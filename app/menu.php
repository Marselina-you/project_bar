<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/app.min.css">
	<script src="js/app.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Menu</title>
	<script type="text/javascript" >
$(document).ready(function(){
	$(".menu-products__item a").click(function(evt){
        evt.preventDefault();
        var href=$(this).attr('href');
        var querystring=href.slice(href.indexOf('?') +1);
        $.get('menu_each_beverages_view.php', querystring, processResponse);
        function processResponse(data) {
            var newHTML;
            newHTML = data;
            $('.nows').html(newHTML);
        }
        })
	$(".menu-products__item1 a").click(function(){
		var href=$(this).attr('href');
		var querystring=href.slice(href.indexOf('?') +1);
		$.get('menu_each_view.php', querystring, processRes);
		return false;
		function processRes(data) {
			var newHTML;
			newHTML = data;
			$('.nows1').html(newHTML);
		}
		});

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

 $(".inp_price").css('opacity', '0');
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 1 : count;
        $input.val(count);
        $input.change();
        if(count == 0){$(this).next().css('opacity', '0');}
        return false;
    });
    $('.plus').click(function () {
        $(this).prev().css('opacity', '1');
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });   
    
}) 
    
    
</script>
</head>
    <?php   
        require_once('appvars.php');
		require_once('menu_header.html');
		    $son = new mysqli('localhost','root','root', 'burrito');
		    $select1 = $son->query("SELECT  id, foto, types, name, value, ingredients, weight  FROM maincoarse WHERE types = 'Appetizers' LIMIT 180");
		    $select2 = $son->query("SELECT  id, foto, types, name, value, ingredients, weight  FROM maincoarse WHERE types = 'Main dishes' LIMIT 180");
		    $select3 = $son->query("SELECT  id, foto, types, name, value, ingredients, weight  FROM maincoarse WHERE types = 'Desserts' LIMIT 180");
		    $select11 = $son->query("SELECT nameExtras, valueExtras  FROM mainextras");
            $select12 = $son->query("SELECT nameBeverages, valueBeverages  FROM mainbeverages");
		    
	        $maindishes = 'Main Dishes';
	        $desserts = 'Desserts';
	        $appetizers = 'Appetizers';
		    $ex = 'Extras';
		    $bev = 'Beverages';

if (isset($_GET['size']) == "maindishes") {
	$appetizers = sprintf($maindishes);
	
}
		        
                ?>
	<body>
	    <div class="container-fluid">
            <div class="menu-products d-flex flex-column justify-content-center">
				<div class="d-flex justify-content-center align-items-center">
				    <div class="menu-products__item1"><a href="menu_each_view.php?size=appetizers" class="size18px whitecolor fontSans"/>Appetizers</a></div>
			        <div class="menu-products__item1"><a href="menu_each_view.php?size=maindishes" class="size18px whitecolor fontSans"/>Main Dishes</a></div>
			        <div class="menu-products__item1"><a href="menu_each_view.php?size=desserts" class="size18px whitecolor fontSans"/>Desserts</a></div>
			    </div></div>

<?php
	if (empty($_GET["size"])){
		$appetizers = 'Appetizers';
		 echo'<div class="nows1"><div class="menu-products__subtitle whitecolor size35px fontArial text-center">' .$appetizers.'</div>';
        while($info = $select1->fetch_array()){
    	   echo'<div class="block-product d-flex justify-content-center">
		    <div class="block-product-left d-flex justify-content-center">
		    	        <div class="block-product-left__img"><img src="'.MM_UPLOADPATH. $info['foto'].'"  alt="" /></div>
		    	    </div>';
               echo'<div class="block-product-right d-flex flex-column  col-xl-4 col-lg-4 col-md-12 col-sm-12 justify-content-center">
		    	        <div class="block-product-right-title d-flex justify-content-center align-items-center">
		    		        <div class="block-product-right-title__name whitecolor fontSans size22px">'.$info['name'].'</div>';
				   echo'<div class="block-product-right-title__value whitecolor fontSans size22px">'.$info['value'].'<span>&nbsp;&#8364;</span></div>
		    	        </div>';
				   echo'<div class="wrap-block-product-right-content d-flex justify-content-center">
		    	            <div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida">'.$info['ingredients'].'</div>
		    	        </div>';
				   echo'<div class="block-product-right-gramm whitecolor fontLucida  d-flex">'.$info['weight'].'<span>g</span></div>
				        <div class="buttonButton"><div class="block-product-right-form d-flex justify-content-center">
				        	<div class="opyt btn btn-primary padding15 size22px">order</div>
				        <div class="button-href">
				        	<div class="wrap-button-minus minus">
				        		<button class="button-minus ui-n3" type="button" tabindex="0">
				        			<div class="button-minus-border" tabindex="-1">
				        				<svg width="24" height="24" class="ui-m9">
				        					<path d="M20 11a1 1 0 010 2H4a1 1 0 010-2h16z" fill="#005bff"></path>
				        				</svg>
				        			</div>
				        		</button>
				        	</div>
				        	<input class="button-alcogol1 button-span text-center size14px d-flex" type="text" value='.$info['id'].'>
				        	<div class="main-button d-flex align-items-center plus">
				        		<div class="wrap-button-minus">
				        			<button class="button-minus button-plus ui-n3" type="button" tabindex="0">
				        				<div class="button-minus-border button-plus" tabindex="-1">
				        					<svg width="24" height="24" class="ui-m9">
				        						<path d="M13 11h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 012 0v7z" fill="#f2f3f5">
				        						</path>
				        					</svg>
				        					<div class="ui-n1"></div>
				        				</div>
				        			</button>
				        		</div>
				        	</div>
				        </div>
				        </div></div>
				        
				     
				       
				       
				    </div>
		        </div>'; } 
		} ?></div>
		<div class="d-flex justify-content-center align-items-center">
				    <div class="menu-products__item1"><a href="menu_each_view.php?size=appetizers" class="size18px whitecolor fontSans"/>Appetizers</a></div>
			        <div class="menu-products__item1"><a href="menu_each_view.php?size=maindishes" class="size18px whitecolor fontSans"/>Main Dishes</a></div>
			        <div class="menu-products__item1"><a href="menu_each_view.php?size=desserts" class="size18px whitecolor fontSans"/>Desserts</a></div>
			    </div>
			    <div class="block-product-order d-flex flex-column">
		    <div class="wrap-block-product__order d-flex justify-content-center"><div class="block-product__order whitecolor fontSans size20px text-center">Order for Pick-up</div></div><div class="wrap-block-product__order d-flex justify-content-center">
	<input type="submit" value="Order for Delivery" class="block-product__order whitecolor fontSans size20px text-center"></input></div>

		    </div>
		    	<hr align="center" width="600" size="5" color="White" />
		</div>
    <?php require_once('menu_beverages.php');?>          
        
       
        
        <script src="js/menu.js"></script>
    
    </body>
</html>
	
	 
		    
		     	
		     	