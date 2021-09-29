 <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/app.min.css">
    <script src="js/app.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Extras-Beverages</title>
    <script type="text/javascript">
        $(document).ready(function(){

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
<body><?php require_once('appvars.php');
$son = new mysqli('localhost','root','root', 'burrito');
        $select11 = $son->query("SELECT nameExtras, valueExtras  FROM mainextras");
        $select12 = $son->query("SELECT nameBeverages, valueBeverages  FROM mainbeverages");
        $ex = 'Extras';
        $bev = 'Beverages'; 
        if ($_GET["size"] == "beverages") {
                        $bev = 'Beverages';
    echo'<div class="block-product-additionally__category whitecolor size35px fontArial text-center">' .$bev. '</div>';
    while($info = $select12->fetch_array()){
    echo'<div class="block-product-additionally-content d-flex flex-column"><div class="count_box block-product-additionally__name whitecolor size22px fontSans text-center">
<div class="minus minus_bev whitecolor">-</div>'.$info['nameBeverages'].'
<input class="inp_price button-alcogol text-center colorGreen" type="text" value="0"/>
<div class="plus whitecolor">+</div></div>';
                echo'<div class="block-product-additionally__value whitecolor size18px fontSans text-center">'.$info['valueBeverages'].'&nbsp;&#8364;</div></div>';
                }}
 elseif ($_GET["size"] == "extras") {
    echo'<div class="block-product-additionally__category whitecolor size35px fontArial text-center">' .$ex. '</div>';
    while($info = $select11->fetch_array()){
    echo'<div class="block-product-additionally-content d-flex flex-column"><div class="count_box block-product-additionally__name whitecolor size22px fontSans text-center">
<div class="minus minus_bev whitecolor">-</div>'.$info['nameExtras'].'
<input class="inp_price button-alcogol text-center colorGreen" type="text" value="0"/>
<div class="plus whitecolor">+</div>
            </div>';
                echo'<div class="block-product-additionally__value whitecolor size18px fontSans text-center">'.$info['valueExtras'].'&nbsp;&#8364;</div></div>';
                }}?>
</body></html>