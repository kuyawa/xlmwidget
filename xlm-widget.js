// MAIN

function XLMWidget() {
	this.klines = null;
	this.ticker = null;
	this.tasks  = 0;
	// TEST
	//this.klines = [[1528232220000,"0.21951000","0.21973000","0.21951000","0.21957000","52600.45000000",1528232279999,"11550.75093060",16,"33201.72000000","7291.85220070","0"],[1528232280000,"0.21958000","0.21999000","0.21956000","0.21961000","129960.13000000",1528232339999,"28549.60155720",30,"82448.93000000","18115.08746930","0"],[1528232340000,"0.21960000","0.21960000","0.21942000","0.21942000","26332.88000000",1528232399999,"5781.72273340",6,"3113.47000000","683.50006910","0"],[1528232400000,"0.21971000","0.21999000","0.21970000","0.21970000","72424.44000000",1528232459999,"15927.89141950",22,"67810.25000000","14914.00600290","0"],[1528232460000,"0.21978000","0.21978000","0.21960000","0.21960000","5316.03000000",1528232519999,"1167.93651080",6,"709.53000000","155.94050340","0"],[1528232520000,"0.21960000","0.21972000","0.21960000","0.21966000","18598.38000000",1528232579999,"4084.89316020",5,"1621.34000000","356.24082480","0"],[1528232580000,"0.21972000","0.21982000","0.21964000","0.21966000","115916.23000000",1528232639999,"25465.88337270",18,"73179.00000000","16077.83194850","0"],[1528232640000,"0.21962000","0.21963000","0.21947000","0.21947000","46911.08000000",1528232699999,"10301.91292610",23,"11562.06000000","2539.25100870","0"],[1528232700000,"0.21948000","0.21986000","0.21948000","0.21958000","52270.73000000",1528232759999,"11479.65736740",22,"46827.03000000","10284.34962140","0"],[1528232760000,"0.21956000","0.21986000","0.21956000","0.21958000","44666.46000000",1528232819999,"9812.57965290",14,"30867.99000000","6782.61104260","0"],[1528232820000,"0.21980000","0.21998000","0.21959000","0.21978000","97847.06000000",1528232879999,"21506.21394680",33,"40826.17000000","8974.99766850","0"],[1528232880000,"0.21970000","0.21970000","0.21959000","0.21968000","64105.84000000",1528232939999,"14080.09075650",21,"27583.67000000","6059.73198760","0"],[1528232940000,"0.21968000","0.21978000","0.21959000","0.21960000","42814.24000000",1528232999999,"9402.44661220",29,"12458.90000000","2736.30276440","0"],[1528233000000,"0.21959000","0.21959000","0.21959000","0.21959000","2361.35000000",1528233059999,"518.52884650",3,"0.00000000","0.00000000","0"],[1528233060000,"0.21957000","0.21979000","0.21955000","0.21957000","39201.96000000",1528233119999,"8607.54739250",24,"6389.88000000","1403.12884460","0"],[1528233120000,"0.21957000","0.21960000","0.21941000","0.21960000","54212.16000000",1528233179999,"11900.96793760",15,"17869.44000000","3922.11519430","0"],[1528233180000,"0.21941000","0.21976000","0.21920000","0.21920000","69853.36000000",1528233239999,"15327.98312070",16,"5067.82000000","1113.28001190","0"],[1528233240000,"0.21921000","0.21921000","0.21871000","0.21906000","100435.21000000",1528233299999,"22002.90233920",39,"32711.94000000","7167.96239180","0"],[1528233300000,"0.21906000","0.21940000","0.21900000","0.21939000","41557.81000000",1528233359999,"9109.75186900",16,"34493.26000000","7562.23088730","0"],[1528233360000,"0.21920000","0.21920000","0.21909000","0.21919000","51026.27000000",1528233419999,"11182.70597330",17,"50712.16000000","11113.85620240","0"],[1528233420000,"0.21910000","0.21919000","0.21900000","0.21900000","41648.48000000",1528233479999,"9126.88896120",10,"31977.18000000","7008.66472860","0"],[1528233480000,"0.21919000","0.21919000","0.21900000","0.21918000","51916.32000000",1528233539999,"11373.03368470",15,"21665.96000000","4747.79580420","0"],[1528233540000,"0.21918000","0.21918000","0.21908000","0.21917000","53399.96000000",1528233599999,"11702.68023650",14,"50764.46000000","11125.03134650","0"],[1528233600000,"0.21917000","0.21918000","0.21725000","0.21837000","645058.06000000",1528233659999,"140522.64471920",134,"193233.02000000","42107.31998020","0"],[1528233660000,"0.21869000","0.21869000","0.21651000","0.21665000","416962.78000000",1528233719999,"90584.94677600",97,"14600.01000000","3168.59741290","0"],[1528233720000,"0.21665000","0.21676000","0.21600000","0.21601000","258289.59000000",1528233779999,"55864.11295370",258,"82493.76000000","17855.75614600","0"],[1528233780000,"0.21656000","0.21656000","0.21600000","0.21637000","223489.22000000",1528233839999,"48312.89990400",115,"130992.97000000","28330.25225320","0"],[1528233840000,"0.21637000","0.21699000","0.21637000","0.21665000","50133.93000000",1528233899999,"10858.49327380",52,"28471.48000000","6164.54664880","0"],[1528233900000,"0.21676000","0.21687000","0.21664000","0.21664000","54879.39000000",1528233959999,"11890.30121240",26,"14331.02000000","3105.69887600","0"],[1528233960000,"0.21664000","0.21686000","0.21664000","0.21664000","53553.01000000",1528234019999,"11603.12248610",20,"34815.33000000","7543.69698090","0"],[1528234020000,"0.21660000","0.21687000","0.21656000","0.21675000","152054.58000000",1528234079999,"32950.11554910",42,"61777.81000000","13384.17192160","0"],[1528234080000,"0.21679000","0.21680000","0.21656000","0.21656000","70963.33000000",1528234139999,"15380.13656380",14,"10739.47000000","2328.19762160","0"],[1528234140000,"0.21657000","0.21673000","0.21657000","0.21668000","69443.12000000",1528234199999,"15044.25200900",27,"46396.74000000","10053.03652440","0"],[1528234200000,"0.21668000","0.21707000","0.21668000","0.21679000","108802.51000000",1528234259999,"23592.70161850",31,"83228.53000000","18049.81997250","0"],[1528234260000,"0.21685000","0.21741000","0.21685000","0.21713000","10525.73000000",1528234319999,"2285.02855840",22,"7205.98000000","1564.16262080","0"],[1528234320000,"0.21713000","0.21735000","0.21707000","0.21722000","69723.16000000",1528234379999,"15140.37180040",31,"20245.08000000","4397.26541440","0"],[1528234380000,"0.21716000","0.21717000","0.21687000","0.21687000","42971.32000000",1528234439999,"9325.18523990",30,"8190.23000000","1776.76276910","0"],[1528234440000,"0.21685000","0.21733000","0.21681000","0.21693000","15664.05000000",1528234499999,"3397.07347690",9,"11373.44000000","2466.62057760","0"],[1528234500000,"0.21732000","0.21733000","0.21693000","0.21693000","14472.58000000",1528234559999,"3145.05161450",6,"14055.58000000","3054.56190450","0"],[1528234560000,"0.21703000","0.21732000","0.21703000","0.21732000","35144.55000000",1528234619999,"7633.25928610",10,"17426.57000000","3785.80041910","0"],[1528234620000,"0.21723000","0.21733000","0.21714000","0.21733000","74065.55000000",1528234679999,"16093.19704310",17,"64551.84000000","14025.92062880","0"],[1528234680000,"0.21734000","0.21734000","0.21694000","0.21705000","39551.42000000",1528234739999,"8584.52264910",18,"13178.03000000","2859.81288310","0"],[1528234740000,"0.21705000","0.21716000","0.21680000","0.21681000","81777.05000000",1528234799999,"17738.32825840",25,"31123.32000000","6753.41454250","0"],[1528234800000,"0.21718000","0.21732000","0.21685000","0.21690000","21091.16000000",1528234859999,"4583.09275990",11,"21091.13000000","4583.08625360","0"],[1528234860000,"0.21723000","0.21733000","0.21691000","0.21697000","23936.62000000",1528234919999,"5200.21213940",8,"23936.59000000","5200.20563120","0"],[1528234920000,"0.21713000","0.21732000","0.21713000","0.21730000","34825.01000000",1528234979999,"7564.91930500",7,"34825.01000000","7564.91930500","0"],[1528234980000,"0.21731000","0.21732000","0.21702000","0.21732000","27395.51000000",1528235039999,"5950.86506860",15,"18092.22000000","3931.14031930","0"],[1528235040000,"0.21715000","0.21730000","0.21715000","0.21830000","1499.30000000",1528235099999,"325.60815300",3,"201.60000000","43.80768000","0"]];
	//this.ticker = [{"id": "stellar", "name": "Stellar", "symbol": "XLM", "rank": "7", "price_usd": "0.288752", "price_btc": "0.00003780", "24h_volume_usd": "47004500.0", "market_cap_usd": "5371703739.0", "available_supply": "18603174137.0", "total_supply": "104005988066", "max_supply": null, "percent_change_1h": "0.03", "percent_change_24h": "-1.83", "percent_change_7d": "-0.54", "last_updated": "1528507746"}];

	function webGet(url, callback, extra) {
	    var http = new XMLHttpRequest();
	    http.open("GET", url, true);
	    http.onreadystatechange = function() { 
	        if(http.readyState==4) { 
	            try { var json = JSON.parse(http.responseText); } 
	            catch(ex) { 
	                console.log("JSON ERROR", ex.message); 
	                console.log('RESPONSE', http.responseText); 
	                json = { error: true, message: ex.message };
	            }
	            callback(json, extra);
	        } 
	    };
	    http.send();
	}

	function buildWidget() {
		var widget   = '<div id="xlm-widget-bar"><img id="xlm-widget-logo"><h1 id="xlm-widget-symbol">XLM</h1><span id="xlm-widget-mktcap">Mkt Cap $ 0.00 M</span><span id="xlm-widget-volume">Volume $ 0.00 M</span></div><div id="xlm-widget-indices"><span id="xlm-widget-price-usd">$0.000000</span><span id="xlm-widget-price-btc">BTC 0.00000000</span><span id="xlm-widget-change-1h">0.00% 1h</span><span id="xlm-widget-change-1d">0.00% 1d</span></div><div id="xlm-widget-chart"><svg id="xlm-widget-loader" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#69C" stroke-width="6" r="32" stroke-dasharray="90 50"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.2s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" fill="none" stroke="#69C" stroke-width="4" r="16" stroke-dasharray="50 20"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.8s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" fill="none" stroke="#69C" stroke-width="2" r="4" stroke-dasharray="90 10"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="3.2s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg></div>';
		var style    = '#xlm-widget { position: relative; width: 300px; height: 250px; margin: 20px auto; border: 1px solid #CCC; font: normal 1em "helvetica neue", sans-serif; } #xlm-widget-bar { overflow: hidden; height: 52px; background-color: #EAEEF1; } #xlm-widget-logo { float: left; width: 32px; height: 32px; margin: 10px;} #xlm-widget-symbol { float: left; margin: 8px 0; } #xlm-widget-mktcap { position: absolute; top:  12px; left: 130px; display: inline-block; width: 160px; text-align: right; font-weight: 600; font-size: 0.8em; } #xlm-widget-volume { position: absolute; top:  28px; left: 130px; display: inline-block; width: 160px; text-align: right; font-weight: 600; font-size: 0.8em; } #xlm-widget-price-usd { position: absolute; top:  60px; left:  10px; display: inline-block; width: 140px; text-align: left;  font-weight: 900; font-size: 1.2em; } #xlm-widget-price-btc { position: absolute; top:  60px; left: 130px; display: inline-block; width: 160px; text-align: right; font-weight: 900; font-size: 1.2em; } #xlm-widget-change-1h { position: absolute; top:  82px; left: 130px; display: inline-block; width: 160px; text-align: right; font-weight: 600; font-size: 0.8em; } #xlm-widget-change-1d { position: absolute; top:  96px; left: 130px; display: inline-block; width: 160px; text-align: right; font-weight: 600; font-size: 0.8em; } #xlm-widget-chart { position: absolute; top: 100px; left: 0; right: 0; bottom: 0; } .xlm-widget-trend-up { color: #6E914F; } .xlm-widget-trend-dn { color: #A55F6B; } .xlm-widget-trend-no { color: #A8B3CE; } #xlm-widget-loader { position: absolute; top: 50px; left: 125px; }';
		    style   += '#xlm-widget-logo { content:url("data:image/png;base64,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"); }';
		var areaTag  = document.getElementById('xlm-widget');
		var styleTag = document.createElement('style');
		areaTag.innerHTML  = widget;
		styleTag.innerHTML = style;
		areaTag.appendChild(styleTag);
	}

	function drawCanvas() {
		var container = document.getElementById('xlm-widget-chart');
		var width  = container.clientWidth;
		var height = container.clientHeight;
		if(container.childNodes.length>0) { container.removeChild(container.childNodes[0]); }
		var canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		canvas.setAttribute("id", "xlm-widget-linechart");
		canvas.setAttribute('width', width); 
		canvas.setAttribute('height', height);
		container.appendChild(canvas);
	}

	function parseData() {
		var count  = klines.length;
		var ticks  = klines.map(item=>{ return parseFloat(item[4]); });
		var step   = 300/(count-1);
		var min    = Math.min(...ticks);
		var max    = Math.max(...ticks);
		var diff   = max-min;
		var height = 100;
		var ratio  = height/diff;
		var base   = height+20;
		console.log(count, ticks, step, min, max, diff, ratio);
		var x = 0;
		var data = ticks.map(item=>{ var pt = {x: x, y: base-parseInt((item-min)*ratio)}; x+=step; return pt; });
		data.unshift({x: -4, y: 200});
		data.push({x: 304, y: 200});
		console.log(data);
		return data;
	}

	function showInfo() {
		var info = this.ticker[0];
		document.getElementById('xlm-widget-price-usd').innerHTML = '$'+parseFloat(info.price_usd).toFixed(6);
		document.getElementById('xlm-widget-price-btc').innerHTML = 'BTC '+parseFloat(info.price_btc).toFixed(8);
		document.getElementById('xlm-widget-change-1h').innerHTML = parseFloat(info.percent_change_1h).toFixed(2)+'% 1h';
		document.getElementById('xlm-widget-change-1d').innerHTML = parseFloat(info.percent_change_24h).toFixed(2)+'% 1d';
		document.getElementById('xlm-widget-mktcap').innerHTML    = 'Mkt Cap $ '+(parseFloat(info.market_cap_usd)/1000000).toFixed(2)+' M';
		document.getElementById('xlm-widget-volume').innerHTML    = 'Volume $ '+(parseFloat(info['24h_volume_usd'])/1000000).toFixed(2)+' M';
		var pct1h = parseFloat(info.percent_change_1h);
		var pct1d = parseFloat(info.percent_change_24h);
		var klass1h = 'xlm-widget-trend-' + (pct1h<0 ? 'dn' : (pct1h>0 ? 'up' : 'no'));
		var klass1d = 'xlm-widget-trend-' + (pct1d<0 ? 'dn' : (pct1d>0 ? 'up' : 'no'));
		document.getElementById('xlm-widget-change-1h').setAttribute('class', klass1h);
		document.getElementById('xlm-widget-change-1d').setAttribute('class', klass1d);
	}

	function drawChart(){ 
		var data = parseData(this.klines);
		var list = [];
		for(var i in data) {
			list.push(data[i].x);
			list.push(data[i].y);
		}
		drawCanvas();
		var poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
		poly.setAttribute("points", list.toString());
		poly.setAttribute("fill", "#69C");
		poly.setAttribute("stroke", "#369");
		poly.setAttribute("stroke-width", "4px");
		document.getElementById('xlm-widget-linechart').appendChild(poly);
	}

	// MAIN
	buildWidget();

	webGet('https://api.coinmarketcap.com/v1/ticker/stellar/', info=>{
		console.log(info);
		this.ticker = info;
		this.tasks += 1;
		showInfo();
		if(this.tasks>1){ drawChart(); }
	});

	// CORS restriction, fetch from own server
	// webGet('https://api.binance.com/api/v1/klines?symbol=XLMUSDT&interval=30m&limit=48', info=>{
	webGet('xlm-fetch.php', info=>{
		console.log(info);
		this.klines = info;
		this.tasks += 1;
		if(this.tasks>1){ drawChart(); }
	});
}

window.onload = XLMWidget;

// END