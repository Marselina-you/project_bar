<?php 
 foreach ($categoryExtras as $extras): ?>
<div class="block-product-additionally-content d-flex flex-column justify-content-center">
	<div class="count_box block-product-additionally__name whitecolor size22px fontSans text-center">
		<a href=""><?php echo $extras['name'];?></a>
	</div>';
   <div class="block-product-additionally__value whitecolor size18px fontSans text-center"><?php echo $extras['price'];?>&nbsp;&#8364;
   </div>
</div>

                                        
                                        <?php endforeach;?>


 	

	



