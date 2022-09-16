<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<script>
	<?php
		$include_file = "../../../assets/prueba/src/{$_module_name}.js";
	?>
	System.import('<?php echo $include_file; ?>').then(function(module) {
		var props =  { ...<?php echo json_encode($react_vars, JSON_FORCE_OBJECT); ?>, React};

		const container = document.getElementById('content');
		const root = ReactDOM.createRoot(container)
		root.render(React.createElement(module.default, props));
	})
</script>
