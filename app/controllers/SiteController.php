<?php 

class SiteController
{
	public function actionIndex()
	{	 



		
		
		require_once(ROOT . '/views/site/index.php');
		return true;
	}


	 public function actionLogin()
    {
    	$email = '';
        $password = '';

  
      
$email = $_POST['email'];
$password = $_POST['password'];

if (!User::checkEmail($email)) {
                $errors[] = 'Неправильный email';
            }
if (!User::checkPassword($password)) {
                $errors[] = 'Пароль не должен быть короче 6-ти символов';
            }
            
            // Проверяем существует ли пользователь
            $userId = User::checkUserData($email, $password);  

            if ($userId == false) {
                // Если данные неправильные - показываем ошибку
                $errors[] = 'Неправильные данные для входа на сайт';
            } else {
                // Если данные правильные, запоминаем пользователя (сессия)
                User::auth($userId);
                
                // Перенаправляем пользователя в закрытую часть - кабинет 
                header("Location: /cabinet/"); 
            }

        

require_once(ROOT . '/views/site/login.php');
     

        return true;
    }

    
 
     





	

}