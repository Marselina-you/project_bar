<?php 
$date = $_POST['date'];
$timeorder = $_POST['timeorder'];
$people = $_POST['people'];
if (isset($_POST['submit'])) {
  setcookie('date', $date);
  setcookie('timeorder', $timeorder);
  setcookie('people', $people);
   header('Location: ' .$_SERVER["HTTP_REFERER"]);
}
$select_c = '11 July';
$select_b = '19.00pm';
$select_t = '2 people';
$date_c = $_COOKIE['date'];
$timeorder_c = $_COOKIE['timeorder'];
$people_c = $_COOKIE['people'];?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width; initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/app.min.css">
	<title>Bar</title>
</head>
<?php require_once('title.html');
require_once('user_form.php');?>
<body>
	<div class="container-fluid wrap-content-block col-lg-12">
		<div class="content-block1">
			<div class="wrap-content-block1">
		        <div class="content-block1__slogan whitecolor fontTahoma size48px col-lg-4 offset-lg-4 text-center font-weight-bold">FEEL MEXICO</div>
		    </div>
		</div>
		<div class="content-block2 d-flex col-lg-12 col-xl-10 offset-xl-1 align-items-center">
			<div class="content-block2__text content-block2__text1 d-flex flex-column align-items-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
				<div class="content-block2__title redcolor fontArial size29px">BURRITO CHILI-BAR</div>
				<div class="content-block2__content fontLucida size18px colorGrey">
				    Burrito - this is a chili bar in the heart
                    of Tijuana, decorated &nbsp;in a kitschy style
                    with bright colors and a hot atmosphere.
                    It embodies an &nbsp;original &nbsp; culture
                    Mexico. &nbsp;Visitors &nbsp;will &nbsp;&nbsp;feel as if 
                    they are in &nbsp;hell and &nbsp;heaven 
                    at &nbsp;the &nbsp;same &nbsp;time
				</div>
				<div class="content-block2__img"><img src="images/dest/drawing.png" alt=""/></div>
			</div>
			<div class="content-block2__foto col-lg-6 d-flex justify-content-center"><img src="images/dest/img1.jpeg"    alt=""/></div>
		</div>
		<div class="content-block3">
			<div class="wrap-content-block3">
				<div class="content-block3__text col-lg-8">
		            <div class="content-block3__quote1 size35px whitecolor  fontGabriola"><p>"Burrito ignites a hot flame in you, it collapses</p>
		            	<p>on you like lava, with its most powerful music,</p>
		            	<p>a sea of tequila and devilish food"</p>
		            </div>
		            <div class="content-block3__author redcolor fontLucida text-right">JOHNNY DEPP, THE VISITOR</div>
		        </div>
		    </div>
		</div>
		<div class="content-block2 d-flex col-lg-12 col-xl-10 offset-xl-1 align-items-center">
			<div class="content-block2__text content-block2__text2 d-flex flex-column align-items-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
				<div class="content-block2__title1 fontGabriola colorGrey size32px">The most profitable deals with us</div>
				<div class="content-block2__title2 redcolor fontArial size29px">HAPPY HOURS</div>
				<div class="content-block2__img"><img src="images/dest/drawing.png"  width="70%"  alt=""/></div>
				<div class="content-block2__content fontLucida size18px colorGrey">
				    Burrito offers two &nbsp;happy hours
                   daily, 4-6pm и 10pm-midnight. Visitors
                   get  &nbsp;a free burrito when they buying 
                    any drink. . &nbsp; Except for the free burrito
                    we offer one any beer at a discount
                </div>
			</div>
			<div class="content-block2__foto col-lg-6 d-flex justify-content-center align-items-center"><img src="images/dest/img02.png" alt=""/></div>
		</div>
		<div class="content-block-music d-flex col-lg-12 col-xl-10 offset-xl-1 align-items-center">
			<div class="content-block2__text content-block2__text3  d-flex flex-column align-items-center col-lg-6 col-md-12 col-sm-12 col-xs-12">
				<div class="content-block2__title1  fontGabriola colorGrey size32px">Live music starting Thursday!</div>
				<div class="content-block2__title2 redcolor fontArial size29px">MUSIC-TIME</div>
				<div class="content-block2__img"><img src="images/dest/drawing.png"  width="70%"  alt=""/></div>
				<div class="content-block2__content content-block2__content__music fontLucida size18px colorGrey">
				    From Thursday to Monday in Burrito
                    invited musical guests play,
                    after midnight, professional employees work&nbsp;
                    DJs. The most persistent visit lei from 5pm
                    we treat you to strong coffee and Chabela
                    (chocolate cake with jam)
                </div>
			</div>
			<div class="content-block2__foto col-lg-6 d-flex justify-content-center align-items-center"><img src="images/dest/img3.png" alt=""/></div>
		</div>
		<div class="content-block2 d-flex col-lg-12 col-xl-10 offset-xl-1 align-items-center">
			<div class="content-block2__text content-block2__text4 d-flex flex-column align-items-center col-lg-6 col-md-10 col-sm-12 col-xs-12">
				<div class="content-block2__title1  fontGabriola colorGrey size32px">50% off every Sunday!</div>
				<div class="content-block2__title2 redcolor fontArial size29px">SUNDAY WITH TEGUILA</div>
                <div class="content-block2__img"><img src="images/dest/drawing.png" width="50%" alt=""/></div>
				<div class="content-block2__content fontLucida size18px colorGrey"> <p>On Sundays, Burrito offers
                    mind-blowing discounts on Tequila
                    mind-blowing discounts on Tequila (5pm-10pm)
                    In addition to the complimentary tapa
                    we treat you to strong coffee and Chabela
                    (chocolate cake with jam)</div>
			</div>
			<div class="content-block2__foto col-lg-6 d-flex justify-content-center align-items-center"><img src="images/dest/sunday.jpeg" alt=""/></div>	
		</div>
		<div class="content-block4">
			<div class="wrap-content-block1">
				<div class="content-block3__text col-lg-6">
		            <div class="content-block3__quote whitecolor  fontGabriola size45px"><p>"The hottest bar i've ever been to..."</p></div>
		            <div class="content-block3__author redcolor fontLucida size29px text-right">PENELOPE CRUZ, THE VISITOR</div>
		        </div>
		    </div>
		</div>
	</div>

<script src="js/app.min.js"></script>
</body>
<?php require_once('footer.html');?>
</html>