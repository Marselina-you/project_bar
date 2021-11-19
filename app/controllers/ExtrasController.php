<?php  

class ExtrasController 
{
	

	public function actionWatchAjax($extrasId)
    {
        // Добавляем товар в корзину


        $categoryExtras = array();
        $categoryExtras  = Extras::getExtrasByCategory($extrasId);
        

        require_once(ROOT . '/views/catalog/extras.php');

        return true;
    }
}