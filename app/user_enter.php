<?php
  session_start();
  $error_msg = "";
  if (!isset($_SESSION['user_id'])) {
  if (isset($_POST['submit'])) {
    // The username/password weren't entered so send the authentication headers
   
  // Connect to the database
  $dbc = mysqli_connect('localhost','root','root','burrito');

  // Grab the user-entered log-in data
  $name = mysqli_real_escape_string($dbc, trim($_POST['user_name']));
  $password = mysqli_real_escape_string($dbc, trim($_POST['user_password']));

  // Look up the username and password in the database
   if (!empty($name) && !empty($password)) {
  $query = "SELECT user_id, user_name FROM user_table WHERE user_name = '$name' AND user_password = SHA('$password')";
  $data = mysqli_query($dbc, $query);

  if (mysqli_num_rows($data) == 1) {
    // The log-in is OK so set the user ID and username variables
    $row = mysqli_fetch_array($data);
        $_SESSION['user_id'] = $row['user_id'];
        $_SESSION['name'] = $row['user_name'];
        setcookie('user_id', $row['user_id'], time() + (60 * 60 * 24 * 30));    // expires in 30 days
        setcookie('name', $row['user_name'], time() + (60 * 60 * 24 * 30));
        $home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . 'enter.php';
          header('Location: ' . $home_url);
  }
  else {
    // The username/password are incorrect so send the authentication headers
     $error_msg = 'Извините, для того чтобы войти в приложение, вы должны ввести правильное имя и пароль';
        
  }
   }
  else {
        // The username/password weren't entered so set an error message
        $error_msg = 'Извините, для того чтобы войти в приложение, вы должны ввести имя и пароль';
      }
  }
  }

// если куки не содержит данных,выводится сообщение об ошибке и форма входа в приложение
  if (empty($_SESSION['user_id'])) {
    echo '<p class="error">' . $error_msg . '</p>';
?>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>вход</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/app.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="container-fluid block-registration-enter d-flex justify-content-center">
        <div class="block-enter col-lg-5 d-flex flex-column">
            <form method="post" class="block-enter__form col-lg-6 d-flex flex-column backgroud1" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <div class="block-enter__label-input col-lg-12 d-flex align-items-center justify-content-between">
                    <label for="login" class="block-enter__label">Name:</label>
                    <input type="text" name="user_name" class="block-enter__input" value="<?php if (!empty($name)) echo $name; ?>" />
                </div>
                <div class="block-enter__label-input col-lg-12 d-flex justify-content-between">
                    <label for="login" class="block-enter__label">Пароль:</label>
                    <input type="password" name="user_password" class="block-enter__input"/>
                </div>
                <div class="block-enter-submit d-flex justify-content-end">
                    <input type="submit" class="block-enter__submit" name="submit" value="войти"/>
                </div>
            </form>
            <div class="block-registration col-lg-6 d-flex justify-content-end backgroud1">
                <a href="registration.php">регистрация</a>
            </div>
</div>
</div>
<?php
}

  else {
    // Confirm the successful log-in
    $the_cookie = $_COOKIE['date'];
$the_cookie1 = $_COOKIE['timeorder'];
$the_cookie2 = $_COOKIE['people'];
$head = '<div class="block-cookie whitecolor"><b>Вы заказали столик на  '.$the_cookie. '!</br>Time: '.$the_cookie1. '</br>Вас будет '.$the_cookie2. '</b></div><div class="whitecolor">Оформить заказ?</div><div class="d-flex col-lg-3 justify-content-between"><form method="post" action="order_table.php"><div><input type="submit" class="block-enter__submit" name="submit" value="yes"/></div></form>
<div><a href="index.php">no, to main</a></div></div><div class="registration d-flex justify-content-center col-lg-12"></div>';
  $dbc = mysqli_connect('localhost','root','root', 'burrito');
  $query = "SELECT user_name FROM user_table WHERE user_id = '" . $_SESSION['user_id'] . "'";
  $data = mysqli_query($dbc, $query);
   $row = mysqli_fetch_array($data);
    if ($row != NULL) {
      $name = $row['user_name'];
      
    }
    
     mysqli_close($dbc); 
    
    echo'<div class="container-fluid block-registration-enter"><div class="block-enter col-lg-12">
      <div class="col-lg-6 block-update-profile__item fontTahoma size20px darkbrowncolor">Мы рады видеть тебя, ' . $name . '!</div>
      <div class="col-lg-6 block-update-profile__item fontTahoma size20px darkbrowncolor"><a href="logout.php">(Выйти)</a></div>
    
    <div class="col-lg-6 block-update-profile__item fontTahoma size20px darkbrowncolor"><a href="editprofile.php">редактировать</a></div></div></div>
    
  

  ';
 echo $head; 
  }
?>

<script src="js/app.min.js"></script>
<script src="js/enter.js"></script>
<script src="js/empty.js"></script>


</body>
</html>