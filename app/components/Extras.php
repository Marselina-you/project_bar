<?php 
class Extras
{
	public static function getExtrasByCategory($categoryId)
    {
       
         if ($categoryId) {

            $db = Db::getConnection();            
            $products = array();
            $result = $db->query("SELECT id, name, price, weight   FROM productextras "
                    . "WHERE category_id = '$categoryId' "
                    . "ORDER BY id DESC ");

            $i = 0;
            while ($row = $result->fetch()) {
                $products[$i]['id'] = $row['id'];
                $products[$i]['name'] = $row['name'];
                $products[$i]['price'] = $row['price'];
                $products[$i]['weight'] = $row['weight'];
                
                $i++;
            }

            return $products;       
        }
    }
}