<!doctype html>
<!--[if lt IE 7]>  <html class="ie ie8 ie7 ie6" lang="en"> <![endif]-->
<!--[if IE 7]>     <html class="ie ie8 ie7" lang="en"> <![endif]-->
<!--[if IE 8]>     <html class="ie ie8" lang="en"> <![endif]-->
<!--[if IE]>       <html class="ie" lang="en"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>subject: happy holidays, if that's your thing</title>
    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="master.css" />
</head>

<body>
	<div id="master">
		<div class="open"></div>
		<div class="stuff">
			<div class="bg"></div>
			<p class="txt t1">happy holidays from</p>
			<p class="txt t2">not-so-snowy</p>
			<p class="txt t3">but still pretty damn cold</p>
			<p class="txt t4">bern</p>
			<div class="txt t5"><p>&hearts;<br />mike <br />&<br /> carina</p></div>
		</div>
	</div>
	<script>
    var m = document.getElementById("master");
    m.addEventListener('click', function() {
	    if (m.className.indexOf('texted') !== -1){
			m.className = '';
	    }else{
	    	m.className = 'texted';
	    }
	}, false);
	</script>
</body>
</html>