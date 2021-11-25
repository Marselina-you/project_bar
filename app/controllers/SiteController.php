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
    	
    	$email = $_POST['email'];
        $password = $_POST['password'];
        
        $errors = false;
        

    	

    		if (!User::checkEmail($email)) {
                $errors = true;

                
       
            }  
            	
            
       

    	
return true;

    

    }

        
        
}

    
 
     





	

