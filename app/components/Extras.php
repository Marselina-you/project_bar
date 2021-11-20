<?php 
class Extras
{
	public static function getExtrasByCategory($extrasId)
    {
       
         if ($extrasId) {

            $db = Db::getConnection();            
            $productExtras = array();
            $result = $db->query("SELECT id, name, price, weight, description, land   FROM productextras "
                    . "WHERE category_id = '$extrasId' "
                    . "ORDER BY id DESC ");

            $i = 0;
            while ($row = $result->fetch()) {
                $productExtras[$i]['id'] = $row['id'];
                $productExtras[$i]['name'] = $row['name'];
                $productExtras[$i]['price'] = $row['price'];
                $productExtras[$i]['weight'] = $row['weight'];
                $productExtras[$i]['description'] = $row['description'];
                $productExtras[$i]['land'] = $row['land'];
                
                $i++;
            }

            return $productExtras;       
        }
    }
}