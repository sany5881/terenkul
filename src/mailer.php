<?php

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: <info@terenkul.ru>\r\n"; 
$start = '';
if(isset($_POST['terenkul'])) $start = $_POST['terenkul'];
mail('sfera.74@mail.ru','Письмо по сайту terenkul.ru от ' . $_POST['email'],$_POST['message'] . '<br><br>' . $_POST['name']. '<br><br>'. $start,$headers);
mail('terenkulsfera@mail.ru','Письмо по сайту terenkul.ru от ' . $_POST['email'],$_POST['message'] . '<br><br>' . $_POST['name']. '<br><br>'. $start,$headers);
header("Location: https://terenkul.ru/");