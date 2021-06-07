<template>
	<!--  -->
	<div id="app" class="big">
		<myheader></myheader>
		<router-view></router-view>
	</div>
</template>

<script>
	import myheader from "./myheader.vue";
	
	export default {
		data:function(){
			return{
				
			}
		},
		components: {
			myheader
		},
		methods:{
		},
		beforeCreate(){
			if(sessionStorage.bsusername){
				this.$router.push("/home/Homepage");
			}else{
			this.$router.push("/login");
			}
		}
	}
</script>

<style scoped>
	
</style>
