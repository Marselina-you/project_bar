 <?php if (isset($errors) && is_array($errors)): ?>
                    <ul>
                        <?php foreach ($errors as $error): ?>
                            <li class="whitecolor"> - <?php echo $error; ?></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?> <form id="my_form">
 	<input type="email" name="email" placeholder="E-mail" value="<?php echo $email; ?>"/>
	<input type="password" name="password" placeholder="Пароль" value="<?php echo $password; ?>"/>
	
	

 
<div><button type="submit" id="my_form_send">Отправить</button></div>

</form> 