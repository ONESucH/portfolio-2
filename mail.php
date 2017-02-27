<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'onesuch07@gmail.com';
    $subject = 'Сообщение от сайта(обратный звонок).';
    $message = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>                        
                    </body>
                </html>';
    $headers  = 'Content-type: text/html; charset=utf-8 \r\n'; //Кодировка письма
    $headers .= 'Данные из формы: '.$_POST['data'].'>\r\n'; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}