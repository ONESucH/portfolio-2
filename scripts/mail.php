<?php
session_start();

if((isset($_POST['user_name'])&&$_POST['user_name']!="")&&(isset($_POST['user_message'])&&$_POST['user_message']!="")){
    $to = 'onesuch07@gmail.com';
    $subject = 'Заявка с сайта: Portfolio-2';
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
    $headers .= "From: Отправитель <from@example.com>\r\n";
    mail($to, $subject, $message, $headers);
}