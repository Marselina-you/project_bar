<?php 
return array(

   'product/([0-9]+)' => 'product/view/$1', 
   'catalog' => 'catalog/index', // actionIndex в CatalogController
   'category/([0-9]+)' => 'catalog/category/$1',
   
   'extras/watchAjax/([0-9]+)' => 'extras/watchAjax/$1', //ExtrasController actionWatchAjax

   'user/register' => 'user/register',
  
  
   'header' => 'layouts/header',
   'login' => 'login/index',

   'cabinet/edit' => 'cabinet/edit',
   'cabinet' => 'cabinet/index',
    
    'login' => 'site/login', 
    'login/loginAjax' => 'site/loginAjax',
     'user/logout' => 'user/logout',

   
   '' => 'site/index', // actionIndex в SiteController


);