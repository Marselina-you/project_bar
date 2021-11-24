<?php 
include ROOT.'/views/layouts/header.php';
 include ROOT.'/views/layouts/slider.php';?>
 
<?php $email = '';
        $password = '';

  if (isset($_POST['submit'])) {  
      
$email = $_POST['email'];
$password = $_POST['password'];
$errors = false;

 
           
if (!User::checkEmail($email)) {
                $errors[] = 'Неправильный email';
                 echo '<div class="whitecolor  size18px fontSans">Неправильные email</div>';
            }
if (!User::checkPassword($password)) {
                $errors[] = 'Пароль не должен быть короче 6-ти символов';
                 echo '<div class="whitecolor  size18px fontSans">Пароль не должен быть короче 6-ти символов</div>';
            }
            
            // Проверяем существует ли пользователь
            $userId = User::checkUserData($email, $password);  

            if ($userId == false) {
                // Если данные неправильные - показываем ошибку
                $errors[] = 'Неправильные данные для входа на сайт';
                echo '<div class="whitecolor  size18px fontSans">Неправильные данные для входа на сайт';
            } else {
                // Если данные правильные, запоминаем пользователя (сессия)
                User::auth($userId);
                 header("Location: /cabinet/"); 
                
            }
}
        


     

        ?>				
<!--<div id="my_message"></div>

                <form id="my_form">
	<div class="mar10-tb"><label>Адрес почты: <input name="email"></label></div>
	<div class="mar10-tb"><label>Пароль: <input name="password"></label></div>
	

 
<div><button type="submit" id="my_form_send">Отправить</button></div>

</form> </!-->

   

<?php include ROOT.'/views/layouts/footer.php'; 
