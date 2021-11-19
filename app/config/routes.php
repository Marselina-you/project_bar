<?php 
return array(

   'product/([0-9]+)' => 'product/view/$1', 
   'catalog' => 'catalog/index', // actionIndex в CatalogController
   'category/([0-9]+)' => 'catalog/category/$1',
   
   'extras/watchAjax/([0-9]+)' => 'extras/watchAjax/$1',

   'user/register' => 'user/register',
   'user/enteregister' => 'user/enteregister',
    
   
   '' => 'site/index', // actionIndex в SiteController


);