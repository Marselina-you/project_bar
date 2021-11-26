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

         $email = isset($_POST['email']);
            $password = isset($_POST['password']);

            if ($mail == '11'){

$okey = 'pass';
echo $okey;}
               else {
                echo 'now';
               }
                       
            
            

        

       

        return true; 

 }       
        
}


    
 
     





	

