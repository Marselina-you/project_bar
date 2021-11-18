<?php 
include ROOT.'/views/layouts/header.php';?>
 <div class="menu-products d-flex flex-column justify-content-center">
				<div class="d-flex justify-content-center align-items-center">

 <?php foreach ($categories as $categoryItem): ?>
                             <div class="menu-products__item1"><a href="/category/<?php echo $categoryItem['id'];?>" class="size18px whitecolor fontSans"/>
                                        <?php echo $categoryItem['name'];?>
                                        </a></div>
                                   
                        <?php endforeach; ?></div></div>
 
 
                           	<div class="block-product d-flex justify-content-center">
		    <div class="block-product-left d-flex justify-content-center">
		    	        <div class="block-product-left__img"><img src="/images/dest/abricos.png"  alt="" /></div>
		    	    </div>
					
						<div class="block-product-right d-flex flex-column  col-xl-4 justify-content-center">
		    	        <div class="block-product-right-title d-flex justify-content-center align-items-center">
		    		        <div class="block-product-right-title__name whitecolor fontSans size22px"><a href='/product/<?php echo $product['id'] ;?>'><?php echo $product['name'];?></a></div>

						<div class="block-product-right-title__value whitecolor fontSans size22px"><?php echo $product['price'];?><span>&nbsp;&#8364;</span></div>
		    	        </div>
							<div class="wrap-block-product-right-content d-flex justify-content-center">
		    	            <div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida"><?php echo $product['ingredients'];?></div>
		    	        </div>

		    	        <div class="wrap-block-product-right-content d-flex justify-content-center">
		    	            <div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida"><?php echo $product['description'];?></div>
		    	        </div>

		    	        <div class="block-product-right-gramm whitecolor fontLucida  d-flex justify-content-center"><?php echo $product['weight'];?><span>g</span></div>
		    	        <div class="buttonButton"><div class="block-product-right-form d-flex justify-content-center"><div class="opyt btn btn-primary  padding15 size22px">order</div>
				        </div></div>
		    	    </div>
		    	</div>
				<?php 

 
		    	        


include ROOT.'/views/layouts/footer.php'; 
?>