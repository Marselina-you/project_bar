<?php 
return array(

   'product/([0-9]+)' => 'product/view/$1', 
   'catalog' => 'catalog/index', // actionIndex в CatalogController
   'category/([0-9]+)' => 'catalog/category/$1', 
   'extras/([0-9]+)' => 'catalog/extras/$1', 
    
   
   '' => 'site/index', // actionIndex в SiteController


);