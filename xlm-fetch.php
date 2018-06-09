<?php
$url = 'https://api.binance.com/api/v1/klines';
$url.= '?symbol=XLMUSDT&interval=30m&limit=48';
echo file_get_contents($url);
echo $text;
?>