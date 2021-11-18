require_once('views/layouts/slider.php');
require_once('views/layouts/content-block1.php');
require_once('views/layouts/content-info1.php');
require_once('views/layouts/content-block2.php');
require_once('views/layouts/content-info2.php');
require_once('views/layouts/content-info3.php');
require_once('views/layouts/content-info4.php');
require_once('views/layouts/content-block3.php');


foreach ($newsList as $newsItem):?>
 	<div class="block-product d-flex justify-content-center">
		    <div class="block-product-left d-flex justify-content-center">
		    	        <div class="block-product-left__img"><img src="images/dest/abricos.png"  alt="" /></div>
		    	    </div>
					
						<div class="block-product-right d-flex flex-column  col-xl-4 col-lg-4 col-md-12 col-sm-12 justify-content-center">
		    	        <div class="block-product-right-title d-flex justify-content-center align-items-center">
		    		        <div class="block-product-right-title__name whitecolor fontSans size22px"><a href='/news/<?php echo $newsItem['id'] ;?>'><?php echo $newsItem['name'].' Номер: '.$product['id'];?></a></div>

						<div class="block-product-right-title__value whitecolor fontSans size22px"><?php echo $product['value'];?><span>&nbsp;&#8364;</span></div>
		    	        </div>
							<div class="wrap-block-product-right-content d-flex justify-content-center">
		    	            <div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida"><?php echo $product['ingredients'];?></div>
		    	        </div>

		    	        <div class="block-product-right-gramm whitecolor fontLucida  d-flex"><?php echo $newsItem['weight'];?><span>g</span></div>
		    	    </div>
		    	</div>
				<?php endforeach;






				size18px whitecolor fontSans
				<?php if ($categoryId == $categoryItem['id']) echo 'active'; ?>