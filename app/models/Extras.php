<?php 
class Extras
{
	public static function getExtrasByCategory($extrasId)
    {
       
         if ($extrasId) {

            $db = Db::getConnection();            
            $products = array();
            $result = $db->query("SELECT id, name, price, weight, description, land   FROM productextras "
                    . "WHERE category_id = '$extrasId' "
                    . "ORDER BY id DESC ");

            $i = 0;
            while ($row = $result->fetch()) {
                $products[$i]['id'] = $row['id'];
                $products[$i]['name'] = $row['name'];
                $products[$i]['price'] = $row['price'];
                $products[$i]['weight'] = $row['weight'];
                $products[$i]['description'] = $row['description'];
                $products[$i]['land'] = $row['land'];
                
                $i++;
            }

            return $products;       
        }
    }
}