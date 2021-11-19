<?php  


class CatalogController
{
	public function actionIndex()
	{
		$categories = array();
        $categories = Category::getCategoriesList();

        $latestProducts = array();
        $latestProducts = Product::getLatestProducts(3);

        $extras = array();
        $extras = Category::getExtrasList();

        $latestExtras = array();
        $latestExtras  = Product::getLatestExtras(7);

        require_once(ROOT . '/views/catalog/index.php');

        return true;
	}

	public function actionCategory($categoryId)
    {
        $categories = array();
        $categories = Category::getCategoriesList();

		$categoryProducts = array();
        $categoryProducts = Product::getProductsListByCategory($categoryId);

        $extras = array();
        $extras = Category::getExtrasList();

        $latestExtras = array();
        $latestExtras  = Product::getLatestExtras(6);

        require_once(ROOT . '/views/catalog/category.php');

        return true;
    }
    

   
   
    
}