# XLM Widget

XLM Widget is a simple way to show the price of XLM in your website with just a couple of lines:

```html
<div id="xlm-widget"></div>
<script src="xlm-widget.js"></script>
```

The DIV tag is just a placeholder to show the widget wherever you want it while the SCRIPT tag will load the code necessary to build it, fetching the latest price from your own server bridging chart data from Binance servers due to CORS restrictions.

In order to fetch data from Binance you have to create a simple xlm-fetch.php file with the following code:

```php
<?php
$url = 'https://api.binance.com/api/v1/klines';
$url.= '?symbol=XLMUSDT&interval=30m&limit=48';
echo file_get_contents($url);
?>
```

Once you have both files xlm-widget.js and xlm-fetch.php all you have to do is add the DIV tag wherever you want it on your webpage and that's it, a nice looking widget to amaze your visitors with the latest XLM price.

