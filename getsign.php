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

  echo getSign($_POST['month'], $_POST['day']); 

?>