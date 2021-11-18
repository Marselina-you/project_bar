<?php
include ROOT.'/views/layouts/header.php'; 
foreach ($extras as $extrasItem): ?>
                           <div class="d-flex justify-content-center align-items-center">
                <div class="menu-products__item justify-content-center"><a href="/extras/<?php echo $extrasItem['id'];?>" class="size18px whitecolor fontSans">
                                        <?php echo $extrasItem['name'];?>
                                        </a></div>
                                   
                        <?php endforeach;?> 
</div></div> <?php foreach ($latestExtras as $extras): ?>
<div class="block-product-additionally-content d-flex flex-column justify-content-center">
	<div class="count_box block-product-additionally__name whitecolor size22px fontSans text-center">
		<a href=""><?php echo $extras['name'];?></a>
	</div>';
   <div class="block-product-additionally__value whitecolor size18px fontSans text-center"><?php echo $extras['price'];?>&nbsp;&#8364;
   </div>
</div>
                                        
                                        <?php endforeach;?> 