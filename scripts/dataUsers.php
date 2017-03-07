<?php
$to = 'onesuch07@gmail.com';
$subject = 'Зашёл на сайт Portfolio-2';
$message = '
        <html>
            <head>
                <title>' . $subject . '</title>
            </head>
            <body>
                <p>Полученные данные: ' . $_POST['dataUsers'] . '</p> 
                echo $_POST[\'postVar\'];
            </body>
        </html>';
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Отправитель <from@example.com>\r\n";
mail($to, $subject, $message, $headers);