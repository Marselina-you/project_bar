<?php

class Category
{

    /**
     * Returns an array of categories
     */
    public static function getCategoriesList()
    {

        $db = Db::getConnection();

        $categoryList = array();

        $result = $db->query('SELECT id, name FROM category '
                . 'ORDER BY sort_order ASC');

        $i = 0;
        while ($row = $result->fetch()) {
            $categoryList[$i]['id'] = $row['id'];
            $categoryList[$i]['name'] = $row['name'];
            $i++;
        }

        return $categoryList;
    }

    public static function getExtrasList()
    {

        $db = Db::getConnection();

        $extrasList = array();

        $result = $db->query('SELECT id, name FROM categoryextras '
                . 'ORDER BY sort_order ASC');

        $i = 0;
        while ($row = $result->fetch()) {
            $extrasList[$i]['id'] = $row['id'];
            $extrasList[$i]['name'] = $row['name'];
            $i++;
        }

        return $extrasList;
    }



}