<?php

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: <terenkul@sfera74.ru>\r\n"; 
$start = '';
if(isset($_POST['terenkul'])) $start = $_POST['terenkul'];
// mail('sfera.74@mail.ru','Заказ на бронирование по сайту terenkul.ru от ' . $_POST['email'],
//      'Имя: ' . $_POST['name'] . '<br> Телефон: ' . $_POST['phone'] . '<br> Почта: ' . $_POST['email'] . '<br><br>Дача: ' .
//      $_POST['cottage'] . '<br>Номер: ' .$_POST['room'] . '<br>Дата прибытия: ' . $_POST['from'] . '<br>Дата отъезда: ' . $_POST['to']. '<br><br>'. $start,$headers);

// mail('terenkulsfera@mail.ru','Заказ на бронирование по сайту terenkul.ru от ' . $_POST['email'],
//      'Имя: ' . $_POST['name'] . '<br> Телефон: ' . $_POST['phone'] . '<br> Почта: ' . $_POST['email'] . '<br><br>Дача: ' .
//      $_POST['cottage'] . '<br>Номер: ' .$_POST['room'] . '<br>Дата прибытия: ' . $_POST['from'] . '<br>Дата отъезда: ' . $_POST['to']. '<br><br>'. $start,$headers);

mail('sany-588@mail.ru','Заказ на бронирование по сайту terenkul.ru от ' . $_POST['email'],
     'Имя: ' . $_POST['name'] . '<br> Телефон: ' . $_POST['phone'] . '<br> Почта: ' . $_POST['email'] . '<br><br>Дача: ' .
     $_POST['cottage'] . '<br>Номер: ' .$_POST['room'] . '<br>Дата прибытия: ' . $_POST['from'] . '<br>Дата отъезда: ' . $_POST['to']. '<br><br>'. $start,$headers);
header("Location: http://terenkul.ru/dachi");