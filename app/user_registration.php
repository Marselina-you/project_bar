<!DOCTYPE html>
<html>
<head>
  <title>Главная страница</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/app.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  
 <div class="container-fluid"><div class="wrap-registration-form col-lg-12"><form enctype="multipart/form-data" method="post" class="registration-form col-lg-6 offset-lg-3 backgroud1" action="user_registration.php">
  
    <div class="registration-form-block-input d-flex col-lg-12 justify-content-between align-items-center"><div class="registration-form-block-input__label size20px fontTahoma darkbrowncolor">
              <label for="user_name">Имя:</label></div>
      <div class="registration-form-block-input__input col-lg-6"><input type="text" class="col-lg-12" name="name"/></div></div>
      <div class="registration-form-block-input d-flex col-lg-12 justify-content-between align-items-center">
            <div class="registration-form-block-input__label size20px fontTahoma darkbrowncolor">
              <label for="user_phone">Телефон:</label></div>
            <div class="registration-form-block-input__input col-lg-6">
              <input type="text" class="col-lg-12" id="phone" name="phone"></div>
          </div>
          <div class="registration-form-block-input d-flex col-lg-12 justify-content-between align-items-center">
          <div class="registration-form-block-input__label size20px fontTahoma darkbrowncolor"><label for="password1" class="registr">Пароль:</label></div>
      <div class="registration-form-block-input__input col-lg-6"><input type="password"  class="col-lg-12" name="password1" /></div></div>
      <div class="registration-form-block-input d-flex col-lg-12 justify-content-between align-items-center">
      <div class="registration-form-block-input__label size20px fontTahoma darkbrowncolor"><label for="password2" class="registr">Повторите пароль:</label></div>
     <div class="registration-form-block-input__input col-lg-6"> <input type="password" class="col-lg-12" name="password2" /></div></div>
     
      <input class="registr_submit" type="submit" value="Сохранить" name="submit" /></form>
  </div><div class="whitecolor">Уже зарегистрированы?<a href="enter.php"> Войдите</a></div></div><?php 
$dbc = mysqli_connect('localhost','root','root', 'burrito');
    if (isset($_POST['submit'])) {
      $name= $_POST['name'];
      $phone= $_POST['phone'];
      $password1 = mysqli_real_escape_string($dbc, trim($_POST['password1']));
      $password2 = mysqli_real_escape_string($dbc, trim($_POST['password2']));
if (!empty($name)&& !empty($phone) && !empty($password1) && !empty($password2) && ($password1 == $password2)) {  
  $query = "SELECT * FROM user_table WHERE user_name = '$name' AND user_phone = '$phone'";
  $data = mysqli_query($dbc, $query); 
  if (mysqli_num_rows($data) == 0) { 
        $query = "INSERT INTO user_table (user_name, user_phone, user_password) VALUES ('$name', '$phone', SHA('$password1'))";
 mysqli_query($dbc, $query);
  echo '<html>
<head>
  <title>Главная страница</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/app.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body><div class="whitecolor">Добро пожаловать,</div><h2 class="whitecolor">'.$name. '.</h2><div class="whitecolor">Теперь вы можете <a href="enter.php">продолжить</a>.</div></body>
</html>';

        mysqli_close($dbc);
        exit();
} 
else{
  echo '<p class="error">Для этого имени пользователя уже существует учетная запись. Пожалуйста, используйте другой адрес.</p>';
        $name = "";
    }
    }else {
      echo '<p class="error">Вы должны ввести все регистрационные данные, включая нужный пароль дважды.</p>';
    } 
}
mysqli_close($dbc);?>
</body><script src="js/app.min.js"></script>
</html>
          	


   


