<?php  
include_once ROOT . '/components/Extras.php';
class ExtrasController 
{
	

	public function actionWatchAjax($categoryId)
    {
        // Добавляем товар в корзину


        $categoryExtras = array();
        $categoryExtras  = Extras::getExtrasByCategory($categoryId);
        

        require_once(ROOT . '/views/catalog/extras.php');

        return true;
    }
}