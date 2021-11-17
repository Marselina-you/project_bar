<?php 
include ROOT.'/views/layouts/header.php';
?>

 <h2 class="title"><a href='/news/<?php echo $newsItem['id'] ;?>'><?php echo $newsItem['name'].' # '.$newsItem['id'];?></a></h2>
						<div class="meta">Posted by <a href="#"><?php echo $newsItem['description'];?></a> on <?php echo $newsItem['ingredients'];?></div>
<?php
include ROOT.'/views/layouts/footer.php'; 
?>












