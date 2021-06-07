<template>
	<!-- 顶部 -->
	<div class="all">
		<div class="nav" @click="chengepage">
			<div class="nav-l">
				<div class="nav-box">logo</div>
				<div class="nav-box farst">主页</div>
				<div class="nav-box">营销</div>
				<div class="nav-box">客户</div>
				<div class="nav-box">服务</div>
				<div class="nav-box">统计报表</div>
				<div class="nav-box">基础数据</div>
			</div>
			<div class="nav-r">
				<div class="nav-box">权限管理</div>
				<div class="nav-box">退出登录</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clear:function clear(){
					let bac=document.querySelectorAll(".nav-box");
					for(let i = 0;i<bac.length;i++){
						bac[i].style.backgroundColor="rgb(49,57,73)"
					}
				},
				
			};
		},
		methods: {
			chengepage(e) {
				let path;
				if (e.target.innerHTML == "主页") {
					this.clear();
					e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/Homepage";
				}else if (e.target.innerHTML == "营销") {
						this.clear();
						e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/Marketing";
				}else if (e.target.innerHTML == "客户") {
						this.clear();
						e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/client";
				}else if (e.target.innerHTML == "服务") {
					this.clear();
					e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/service";
				}else if (e.target.innerHTML == "统计报表") {
					this.clear();
					e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/Statisticalreport";
				}else if (e.target.innerHTML == "基础数据") {
					this.clear();
					e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/Basicdata";
				}else if (e.target.innerHTML == "权限管理") {
					this.clear();
					e.target.style.backgroundColor="rgb(90,97,109)";
						path = "/home/authoritymanagement";
				}else if(e.target.innerHTML == "logo"){
					window.location.reload("http://172.31.20.33:8080/home#/home/Homepage")
				}else if (e.target.innerHTML == "退出登录") {
					
					let result=confirm("确定退出？");
					if(result){
						sessionStorage.clear();
						path="/login"
					}
				}else{
					this.clear();
					document.querySelector(".farst").style.backgroundColor="rgb(90,97,109)";
					path = "/home/Homepage";
				}
				this.$router.push(path);
			}
		},
	};
</script>

<style scoped="scoped">
	.nav{
		user-select: none;
		width: 1366px;
		height: 80px;
		background-color:rgb(49,57,73);
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.farst{
		background-color: rgb(90,97,109);
	}
	.nav-l{
		justify-content: space-around;
		display: flex;
		width: 680px;
		height: 80px;
	}
	.nav-r{
		justify-content: space-around;
		display: flex;
		height: 80px;
		width: 280px;
	}
	.nav-box{
		cursor: pointer;
		line-height: 80px;
		text-align: center;
		height: 80px;
		width: 80px;
		}
</style>
