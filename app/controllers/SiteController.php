<?php 

class SiteController
{
	public function actionIndex()
	{	 



		
		
		require_once(ROOT . '/views/site/index.php');
		return true;
	}


	 public function actionLogin()
    {       $email = $_POST['email'];
            $password = $_POST['password'];

$okey =3;

    	if (isset($email)){
        
            echo $password;
            echo $email;

            return $okey;
        }


        

   
 return true;
    }
        
        
        //когда это убираешь, роутер не может ничего найти
    }

    
 
     





	

