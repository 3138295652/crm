<template>
	<!-- 主组件 -->
	<div id="app" v-cloak>
		<body>
				<router-view></router-view>
		</body>
	</div>

</template>

<script>
	
	export default {
		components: {
		},
		methods: {
			
		}
	};
</script>

<style scoped="scoped">
	body{
		padding: 0px;
		margin: 0px;
	}
</style>
