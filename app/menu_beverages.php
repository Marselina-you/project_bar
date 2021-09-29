<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/app.min.css">
    <script src="js/app.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Extras-Beverages</title>
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
    
    
}) 
</script>
</head>
<body>
<?php
$son = new mysqli('localhost','root','root', 'burrito');
        $select11 = $son->query("SELECT nameExtras, valueExtras  FROM mainextras");
        $select12 = $son->query("SELECT nameBeverages, valueBeverages  FROM mainbeverages");
        $ex = 'Extras';
        $bev = 'Beverages'; 
        echo '<div class="d-flex justify-content-center align-items-center">
                <div class="menu-products__item justify-content-center"><a href="menu_each_beverages_view.php?size=extras" class="size18px whitecolor fontSans">' .$ex.'</a></div>
                <div class="menu-products__item"><a href="menu_each_beverages_view.php?size=beverages" class="size18px whitecolor fontSans">' .$bev.'</a></div></div>';
                if (empty($_GET["size"])) {
            $ex = 'Extras';
            echo'<div class="nows"><div class="block-product-additionally__category whitecolor size35px fontArial text-center">' .$ex. '</div>';
            
while($info = $select11->fetch_array()){
    echo'<div class="block-product-additionally-content d-flex flex-column justify-content-center"><div class="count_box block-product-additionally__name whitecolor size22px fontSans text-center">
<div class="minus minus_bev whitecolor">-</div>'.$info['nameExtras'].'
<input class="inp_price button-alcogol text-center colorGreen" type="text" value="0"/>
<div class="plus whitecolor">+</div>
            </div>';
        echo'<div class="block-product-additionally__value whitecolor size18px fontSans text-center">'.$info['valueExtras'].'&nbsp;&#8364;</div>
                    </div>';}}
                   ?></div></body></html>