<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Главная</title>
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
 <link rel="stylesheet" href="/css/app.min.css">
 <script src="/js/app.min.js"></script>
<script type="text/javascript" src="js/tinyfader.js"></script>
<script src="/js/jquery-3.0.0.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
        
    </head><!--/head-->

    <body>
        <div class="wrapper container-fluid">
        <header id="header"  class="page-title-header d-flex align-items-center"><!--header-->


            <div class="page-title-header-left col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <div class="page-title-header-left__block d-flex flex-column align-items-center">
                    <div class="page-title-header-left__name fontSans font-weight-bold whitecolor">BURRITO</div>
                    <div class="page-title-header-left__decoration  justify-content-center"><img src="/images/dest/miny-decor.png" alt="Мустанг" /></div>
                    <div class="page-title-header-left__subname whitecolor size24px">chili-bar</div>

                </div>
                
            </div>


           <div class="page-title-header-menu-wrap d-flex col-xl-8 col-lg-9 col-md-9 offset-xl-1 justify-content-between">
                    <div class="page-title-header-menu col-lg-12 d-flex justify-content-between">
                       
                        <div class="page-title-header-menu__item"><a href="/" class="whitecolor  size18px fontSans">main</a></div>
                        <div class="page-title-header-menu__item"><a href="podmenu.php" class="whitecolor  size18px fontSans">about us</a></div>
                        <div class="page-title-header-menu__item"><a href="/catalog/" class="whitecolor  size18px fontSans">menu</a></div>
                        <div class="page-title-header-menu__item"><a href="/cart/" class="whitecolor  size18px fontSans">корзина</a></div>
                        <div class="page-title-header-menu__item"><a href="/layouts/header/" class="whitecolor size18px fontSans">booking</a></div>
                        <div class="page-title-header-menu__item"><a href="" class="whitecolor size18px fontSans">delivery</a></div>
 
                        <?php if (User::isGuest()): ?>   

                        <div class="page-title-header-menu__item"><a href="/user/login/" class="whitecolor size18px fontSans header-box1__href">Вход</a></div>

                         <?php else: ?>

                             <div class="page-title-header-menu__item"><a href="/cabinet/" class="whitecolor size18px fontSans ">account</a></div>

                                                                            
                                       <div class="page-title-header-menu__item"><a href="/user/logout/" class="whitecolor size18px fontSans"> Выход</a></div>                                        
                                    <?php endif; ?>

                    </div>
                </div>

      

            
            
        </header>



        <div id="myModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content backgroud2">
           
                
                <div class="backgroud2 d-flex justify-content-end close2"  data-dismiss="modal"><img src="/images/dest/g8lack.png"  alt=""/></div>                
            
            <div class="modal-body">



                
              <div class="container-fluid col-lg-12 d-flex flex-column">

     <div class="col-sm-4 col-sm-offset-4 padding-right">

                <?php if (isset($errors) && is_array($errors)): ?>
                    <ul>
                        <?php foreach ($errors as $error): ?>
                            <li> - <?php echo $error; ?></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <div class="signup-form">
                    <h2>Вход на сайт</h2>
                    <form action="/user/login/" method="post" class="form_user">
                        <input type="email" name="email" placeholder="E-mail" value="<?php echo $email; ?>"/>
                        <input type="password" name="password" placeholder="Пароль" value="<?php echo $password; ?>"/>
                        <input type="submit" name="submit" class="btn btn-default" value="Вход" data-id='/user/login/'/>
                    </form>
                </div>


                <br/>
                <br/>
            </div>
        
            
            <div class="block-registration col-lg-12 d-flex justify-content-end backgroud2">
                <a href="/user/register/">регистрация</a>
            </div>
</div>  
            </div>
            
        </div>
    </div></div>
        

