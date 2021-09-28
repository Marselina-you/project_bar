<?php
if (isset($_COOKIE['people'])) {
     $_COOKIE = array();
     }
    setcookie('people', '', time() - 3600);
    setcookie('date', '', time() - 3600);
    setcookie('timeorder', '', time() - 3600);
$home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . 'index.php';
  header('Location: ' . $home_url);
  