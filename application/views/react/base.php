<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<?php echo $meta_tags; ?>
		<title>Welcome to the React Application using Codeigniter.</title>
		<link href="/css/lib/bootstrap.min.css" rel="stylesheet">
		<link href="/css/style.css" rel="stylesheet">
		<script src="/js/lib/jspm-system.js"></script>
		<script src="/js/lib/browser.js"></script>
		<script>
			System.config({
			  transpiler: 'babel',
			  babelOptions: {}
			});
		</script>
	</head>
	<body>
	<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
		<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
		<div id="content">
			<?php echo $content; ?>
		</div>
	</body>
</html>