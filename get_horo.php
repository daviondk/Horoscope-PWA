<?php 
  function getSign($month, $day) {
	if(!is_numeric($month)) {
		return 0;
	}
    $signsstart = array(20, 20, 21, 21, 21, 21, 23, 23, 24, 24, 22, 22);
    if($day < $signsstart[$month - 1]){ 
		$result = $month - 1;
	}else{
		$result = $month % 12;
	}
    return $result;
  }

  $url = 'http://ignio.com/r/export/win/xml/daily/com.xml';
  $xml = simplexml_load_file($url) or die("Невозможно загрузить гороскоп.");
  $signs = array($xml->capricorn, $xml->aquarius, $xml->pisces, $xml->aries, $xml->taurus, $xml->gemini, $xml->cancer, $xml->leo, $xml->virgo, $xml->libra, $xml->scorpio, $xml->sagittarius);
  $cur_sign = $signs[getSign($_POST['month'], $_POST['day'])];
  $horo_day = $_POST['horo_day'];
  
  if($horo_day=='Сегодня'){
	echo $cur_sign->today;
  } else if($horo_day=='Вчера'){
	echo $cur_sign->yesterday;
  } else if($horo_day=='Завтра'){
	echo $cur_sign->tomorrow;
  } else {
	echo $cur_sign->tomorrow02;
  }
?>