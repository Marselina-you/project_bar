<?php 

class News
{
	public static function getNewsItemById($id)
	{
		$id = intval($id);

		if ($id) {
			
			$db = Db::getConnection();
			
			$result = $db->query('SELECT * FROM maincoarse WHERE id=' . $id);

			/*$result->setFetchMode(PDO::FETCH_NUM);*/
			$result->setFetchMode(PDO::FETCH_ASSOC);

			$newsItem = $result->fetch();

			return $newsItem;
		}


	}
	public static function getNewsList() 
	{
		
		
		$db = Db::getConnection();

		
		$newsList = array();

		$result = $db->query('SELECT id, category, name, value, ingredients, weight  FROM maincoarse ORDER BY id ASC LIMIT 10');

		$i = 0;
		while($row = $result->fetch()) {
			$newsList[$i]['id'] = $row['id'];
			$newsList[$i]['category'] = $row['category'];
			$newsList[$i]['name'] = $row['name'];
			$newsList[$i]['value'] = $row['value'];
			$newsList[$i]['ingredients'] = $row['ingredients'];
			$newsList[$i]['weight'] = $row['weight'];
			$i++;
		}

		return $newsList;
	

	}
}