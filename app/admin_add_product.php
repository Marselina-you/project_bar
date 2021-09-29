<?php

require_once('appvars.php');

  $son = new mysqli('localhost','root','root', 'burrito');
    if (isset($_POST['submit'])) {

      $types = $_POST['types'];
      $name= $_POST['name'];
      $value = $_POST['value'];
      $ingredients = $_POST['ingredients'];
      $weight = $_POST['weight'];
      $new_picture = $_POST['new_picture'];
      $nameExtras = $_POST['nameExtras'];
      $valueExtras = $_POST['valueExtras'];
      $nameBeverages = $_POST['nameBeverages'];
      $valueBeverages = $_POST['valueBeverages'];
      
     

      $new_picture = mysqli_real_escape_string($son, trim($_FILES['new_picture']['name']));
      $new_picture_type = $_FILES['new_picture']['type'];
      $new_picture_size = $_FILES['new_picture']['size']; 
      list($new_picture_width, $new_picture_height) = getimagesize($_FILES['new_picture']['tmp_name']);
        $error = false;
// При необходимости проверьте и переместите загруженный файл изображения
          if (!empty($new_picture)) { 
            if ((($new_picture_type == 'image/gif') || ($new_picture_type == 'image/jpeg') || ($new_picture_type == 'image/pjpeg') ||
        ($new_picture_type == 'image/png')) && ($new_picture_size > 0) && ($new_picture_size <= MM_MAXFILESIZE) &&
        ($new_picture_width <= MM_MAXIMGWIDTH) && ($new_picture_height <= MM_MAXIMGHEIGHT)) {
              if ($_FILES['file']['error'] == 0) {
                $target = MM_UPLOADPATH . basename($new_picture);
                  if (move_uploaded_file($_FILES['new_picture']['tmp_name'], $target)) {
                    if (!empty($old_picture) && ($old_picture != $new_picture)) {
                    @unlink(MM_UPLOADPATH . $old_picture);
                   }
                  } 
            else {
              @unlink($_FILES['new_picture']['tmp_name']);
              $error = true;
              echo '<p class="error">Извините, возникла проблема с загрузкой вашей фотографии.</p>';
            }
              }
            }
          else {
        // Новый файл изображения недопустим, поэтому удалите временный файл и установите флаг ошибки
        @unlink($_FILES['new_picture']['tmp_name']);
        $error = true;
        echo '<p class="error">Изображение должно быть в формате GIF, JPEG или PNG размером не более' . (MM_MAXFILESIZE / 10024) .
          ' KB and ' . MM_MAXIMGWIDTH . 'x' . MM_MAXIMGHEIGHT . ' pixels in size.</p>';
          }
          }
 // Обновление данных профиля в базе данных
      if (!$error) {
        if (!empty($name)) {
        // Установите столбец картинка только в том случае, если есть новая картинка
          if (!empty($new_picture)&&!empty($types)&&!empty($name)) {
            
            $select = $son->query("INSERT INTO maincoarse (foto, types, name, value, ingredients, weight) VALUES ('$new_picture',  '$types', '$name', '$value', '$ingredients', '$weight')");
            $select1 = $son->query("INSERT INTO mainextras (nameExtras, valueExtras) VALUES ('$nameExtras', '$valueExtras')");
             $select2 = $son->query("INSERT INTO mainbeverages (nameBeverages, valueBeverages) VALUES ('$nameBeverages', '$valueBeverages')");
           

            

               
                echo'<html><head><title>Главная страница</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" type="text/css" href="css/bootstrap.css"><link rel="stylesheet" href="css/app.min.css"></head><body><div class="container-fluid">
    <div class="d-flex justify-content-center">
      <div class="menu-products__subtitle whitecolor size35px fontArial">'  .$types. '</div></div>';
                echo'<div class="block-product d-flex justify-content-center">
        <div class="block-product-left d-flex justify-content-center">
          <div class="block-product-left__img"><img src="' . MM_UPLOADPATH . $new_picture . '"  alt="Profile Picture" /></div></div>';
                echo'<div class="block-product-right d-flex flex-column  justify-content-center">
          <div class="block-product-right-title d-flex justify-content-center align-items-center">
            <div class="block-product-right-title__name whitecolor fontSans size22px">'  .$name. '</div>';
                       echo'<div class="block-product-right-title__value whitecolor fontSans size22px">'  .$value. '<span>&nbsp;&#8364;</span></div>
          </div>';
                 echo'<div class="wrap-block-product-right-content d-flex justify-content-center">
          <div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida">'  .$ingredients. '</div></div>';
                  
                   echo'<div class="block-product-right-gramm whitecolor fontLucida  d-flex justify-content-center">'  .$weight. '<span>g</span></div></div></div>';
                 
       
       echo'<div class="block-product-additionally__category whitecolor size35px fontArial text-center">Exstras</div>
          
              <div class="block-product-additionally-content d-flex flex-column">
                  <div class="block-product-additionally__name whitecolor size22px fontSans text-center">-&nbsp;'.$nameExtras.'&nbsp;+</div>';
             echo'<div class="block-product-additionally__value whitecolor size18px fontSans text-center">'.$valueExtras.'&nbsp;&#8364;</div>
              </div>
          ';
         echo'<div class="block-product-additionally__category whitecolor size35px fontArial text-center">Beverages</div>
              <div class="block-product-additionally-content d-flex flex-column">
                  <div class="block-product-additionally__name whitecolor size22px fontSans text-center">-&nbsp;'.$nameBeverages.'&nbsp;+</div>';
        echo'<div class="block-product-additionally__value whitecolor size18px fontSans text-center">'.$valueBeverages.'&nbsp;&#8364;</div></div><div class="d-flex continue-block">
      <a href="formAdmin.html" class="size35px">продолжить заполнять</a><a href="index.php" class="size35px">на главную</a></div></div></body></html>';
                    
                         



          }
        
        
        mysqli_close($son);
        exit();
        }else{
  echo 'Не все данные внесены<br/>';
}
      }
      }?>
