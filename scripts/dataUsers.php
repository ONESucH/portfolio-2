<?php
$to = 'onesuch07@gmail.com';
$subject = 'Зашёл на сайт Portfolio-2';
$message = '
        <html>
            <head>
                <title><span style="font-weight:bold;color:orangered;background:#83ffd0;">' . $subject . '</span></title>
            </head>
            <body>
                <p><span style="font-weight:bold;color:#073346;">Полученные данные:</span><br>
                : ' . $_POST['locationUsers'] . '</p> 
            </body>
        </html>';
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Отправитель: <anonymous@mail.com>\r\n";
mail($to, $subject, $message, $headers);