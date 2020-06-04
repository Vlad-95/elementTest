<?php




if(isset($_POST["name"]))
{
    $name = $_POST["name"];
}
if(isset($_POST["email"]))
{
    $email = $_POST["email"];
}

if(isset($_POST["message"]))
{
    $message = $_POST["message"];
}


$to = "zvezdinvladislav@yandex.ru"; /* Адрес, куда отправляем письма*/
$subject = "Письмо с обратной связи"; /*Тема письма*/
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";


/*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
$message = '<h3>Message</h3>';
$message .= '<strong>Company name:</strong> ' . $name . '.<br />';


$message .= '<strong>Your comments:</strong> ' . $message . '.<br />';

if ($_POST){
    if ( empty($name) || empty($email) ) {
        echo "Заполните поля";
    }

    else if ($_POST['catch']){
        die('Пошел на хер, бот!');
    }
    mail($to, $subject, $message, $headers);
}
