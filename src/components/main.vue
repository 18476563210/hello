<template>
	<div id="mainc">
		<view></view>
		<router-view></router-view>
	</div>
</template>

<script>
	import view from './view.vue'
	export default {
		name: 'Main',
		components: {
			view
		}
	}
</script>

<style>
</style>
