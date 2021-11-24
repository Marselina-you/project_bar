

<section>
    <div class="container">
        <div class="flex">

            <h1 class="whitecolor fontSans">Кабинет пользователя</h1>
            
            <div class="whitecolor size18px fontSans">Привет, <?php echo $user['name'];?>!</div>
            <ul>
                <li class="whitecolor size18px fontSans"><a href="/cabinet/edit">Редактировать данные</a></li>
                <li class="whitecolor size18px fontSans"><a href="/cabinet/history">Список покупок</a></li>
            </ul>
            
        </div>
    </div>
</section>

<?php include ROOT . '/views/layouts/footer.php'; ?>