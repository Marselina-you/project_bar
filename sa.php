$('.header-box1__href').click(function(evt){
        evt.preventDefault();
        $("#myModal").modal("show");
        var url = $(this).attr('href');
        $('.modal-body').load(url + ' .block-registration-enter');
        return false;

    });

    include ROOT.'/views/layouts/slider.php';?>


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

                <div class="signup-form"><!--sign up form-->
                    <h2>Вход на сайт</h2>
                    <form action="/user/login/" method="post" class="form_user">
                        <input type="email" name="email" placeholder="E-mail" value="<?php echo $email; ?>"/>
                        <input type="password" name="password" placeholder="Пароль" value="<?php echo $password; ?>"/>
                        <input type="submit" name="submit" class="btn btn-default" value="Вход" data-id='/user/login/'/>
                    </form>
                </div><!--/sign up form-->


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