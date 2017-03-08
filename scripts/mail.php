<?php
session_start();
$to = 'onesuch07@gmail.com';
$subject = 'Хочу с вами сотрудничать - Portfolio-2';
$message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['user_name'].'</p>
                    <p>Телефон: '.$_POST['user_message'].'</p>                        
                    <p>Ip: '.$_SESSION['ip'].'</p>                        
                </body>
            </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Отправитель: <anonymous@mail.com>\r\n";
mail($to, $subject, $message, $headers);