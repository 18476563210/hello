<template>
	<div id="view">
		<incontent></incontent>
		<maincontent></maincontent>
		<h2 class="te">热卖产品</h2>
		<product></product>
		<fot></fot>
	</div>
</template>

<script>
	import incontent from './incontent.vue'
	import maincontent from './maincontent.vue'
	import product from './product.vue'
	import fot from './fot.vue'
	export default {
		name: 'view',
		components: {
			incontent,
			maincontent,
			product,
			fot
		}
	}
</script>

<style>
</style>
