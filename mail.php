<?php
$method = $_SERVER['REQUEST_METHOD'];
$admin_email = "onesuch07@gmail.com";
$application = "Заявка с сайта: Portfolio-2";

$c = true;
if ($method === 'POST') {
    $user_name = trim($_POST["user_name"]);
    $user_message = trim($_POST["user_message"]);
    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "user_name" && $key != "user_message") {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color:#f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
        }
    }
} else if ($method === 'GET') {
    $user_name = trim($_GET["user_name"]);
    $user_message = trim($_GET["user_message"]);
    foreach ($_GET as $key => $value) {
        if ($value != "" && $key != "user_name" && $key != "user_message") {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color:#f8f8f8;">') . "
			<td style='padding:10px;border:1px solid #e9e9e9;'><b>$key</b></td>
			<td style='padding:10px;border:1px solid #e9e9e9;'>$value</td>
		</tr>
		";
        }
    }
}

$message ="<table style='width:100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: ' . adopt($message) . ' <' . $application . '>' . PHP_EOL .
    'Reply-To: ' . $application . '' . PHP_EOL;

mail($admin_email, adopt($message), $message, $headers);
