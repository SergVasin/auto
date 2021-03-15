<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['city'])) {$city = $_POST['city'];}
    if (isset($_POST['marka'])) {$marka = $_POST['marka'];}
    if (isset($_POST['model'])) {$model = $_POST['model'];}
    if (isset($_POST['vipusk'])) {$vipusk = $_POST['vipusk'];}
    $to = "mavpiz@yandex.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nОтправитель: $name \n\nТелефон: $phone \n\nГород: $city\n\nМарка авто: $marka\n\nМодель: $model\n\nГод выпуска: $vipusk";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
        echo "<HTML><HEAD>
        <META HTTP-EQUIV='Refresh' CONTENT='0; URL=thanks.html'>
        </HEAD></HTML>";
    }
    else 
    {
        echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>