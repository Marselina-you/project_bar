<?php

class Product
{

    const SHOW_BY_DEFAULT = 10;

    /**
     * Returns an array of products
     */
    public static function getLatestProducts($count = self::SHOW_BY_DEFAULT)
    {
        $count = intval($count);
        $db = Db::getConnection();
        $productsList = array();

        $result = $db->query('SELECT id, name, price, weight, ingredients  FROM products '
                . 'WHERE category_id = "2" AND status = "1" '
                . 'ORDER BY id DESC '                
                . 'LIMIT ' . $count);

        $i = 0;
        while ($row = $result->fetch()) {
            $productsList[$i]['id'] = $row['id'];
            $productsList[$i]['name'] = $row['name'];
            $productsList[$i]['price'] = $row['price'];
            $productsList[$i]['weight'] = $row['weight'];
            $productsList[$i]['ingredients'] = $row['ingredients'];
            $i++;
        }

        return $productsList;
    }


    public static function getLatestExtras($count = self::SHOW_BY_DEFAULT)
    {
        $count = intval($count);
        $db = Db::getConnection();
        $extrasList = array();
       
        $result = $db->query('SELECT id, name, price, weight FROM productextras '
                
                . 'ORDER BY id DESC '                
                . 'LIMIT ' . $count);

        $i = 0;
         
        while ($row = $result->fetch()) {
            $extrasList[$i]['id'] = $row['id'];
            $extrasList[$i]['name'] = $row['name'];
            $extrasList[$i]['price'] = $row['price'];
            $extrasList[$i]['weight'] = $row['weight'];
            
            $i++;
        }
    

        return $extrasList;
    }


    public static function getProductsListByCategory($categoryId = false)
    {
        if ($categoryId) {

            $db = Db::getConnection();            
            $products = array();
            $result = $db->query("SELECT id, name, price, weight, ingredients  FROM products "
                    . "WHERE status = '1' AND category_id = '$categoryId' "
                    . "ORDER BY id DESC "                
                    . "LIMIT ".self::SHOW_BY_DEFAULT);

            $i = 0;
            while ($row = $result->fetch()) {
                $products[$i]['id'] = $row['id'];
                $products[$i]['name'] = $row['name'];
                $products[$i]['price'] = $row['price'];
                $products[$i]['weight'] = $row['weight'];
                $products[$i]['ingredients'] = $row['ingredients'];
                $i++;
            }

            return $products;       
        }
    }

    public static function getExtrasListByCategory($categoryExtrasId = false)
    {
        if ($categoryExtrasId) {

            $db = Db::getConnection();            
            $productsExtras = array();
            $result = $db->query("SELECT id, name, price, weight   FROM productextras "
                    . "WHERE  category_id = '$categoryExtrasId' "
                    . "ORDER BY id DESC "                
                    . "LIMIT ".self::SHOW_BY_DEFAULT);

            $i = 0;
            while ($row = $result->fetch()) {
                $productsExtras[$i]['id'] = $row['id'];
                $productsExtras[$i]['name'] = $row['name'];
                $productsExtras[$i]['price'] = $row['price'];
                $productsExtras[$i]['weight'] = $row['weight'];
                
                $i++;
            }

            return $productsExtras;       
        }
    }
    
    public static function getProductById($id)
    {
        $id = intval($id);

        if ($id) {                        
            $db = Db::getConnection();
            
            $result = $db->query('SELECT * FROM products WHERE id=' . $id);
            $result->setFetchMode(PDO::FETCH_ASSOC);
            
            return $result->fetch();
        }
    }
}