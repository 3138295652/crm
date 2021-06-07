<template>
	<!--  -->
	<div class="homepage">
		<div class="top">
			<div class="hello">
				你好 {{this.username}}
			</div>
		</div>
		<div class="content">
			<div class="c-title">
				我的任务:
			</div>
			<div class="myservic">
				<div class="myservic-top">
					<div>主题</div>
					<div>到期时间</div>
					<div>关联公司</div>
					<div>负责人</div>
					<div>优先级</div>
				</div>
				<ul>
								<li v-for="(item,index) in servic" :key="index" @click="myservice">
									<div>{{item.title}}</div>
									<div>{{item.overtime.substr(0,10)}}</div>
									<div>{{item.clientname}}</div>
									<div>{{item.pic}}</div>
									<div>{{item.lv}}</div>
								</li>
							</ul>
			</div>
			</div>
		<div class="content">
			<div class="c-title">
				我的客户:
			</div>
			<div class="myservic">
				<div class="myservic-top">
					<div>公司名称</div>
					<div>优先级</div>
					<div>联系方式</div>
					<div>业务方向</div>
					<div>最近往来</div>
				</div>
				<ul >
								<li v-for="(item,index) in client" :key="index" @click="myclient">
									<div>{{item.name}}</div>
									<div>{{item.grade}}</div>
									<div><span v-if="item.tel">tel </span><span v-else>暂无 </span><span v-if="item.mail">mail</span><span v-else>暂无</span></div>
									<div>{{item.lable}}</div>
									<div>{{item.goto}}</div>
								</li>
							</ul>
			</div>
			</div>
	</div>
</template>

<script>
	import New from '@/bus.js'
	export default {
		data:function(){
			return{
				username:"",
				servic:[],
				client:[],
			}
		},
		methods:{
			myclient(e){
				sessionStorage.setItem("myclientname", e.target.parentElement.firstChild.innerText);
				this.$router.push("/home/client")
			},
			myservice(e){
				sessionStorage.setItem("myservicetitle", e.target.parentElement.firstChild.innerText);
				this.$router.push("/home/service")
			}
		},
		created() {
			this.username=sessionStorage.bsusername;
			this.$http.post("/getmyservice", {
				username:this.username,
			}).then((res) => {
				this.servic=res.data;
			}).catch((err) => {
				console.log(err)
			});
			this.$http.post("/getmyclient", {
				username:this.username,
			}).then((res) => {
				this.client=res.data;
			}).catch((err) => {
				console.log(err)
			});
		}
	}
</script>

<style scoped>
	*{
		user-select: none;
	}
	
	.homepage{
		height: 577px;
		width: 1366px;
		display: flex;
		align-items: center;
		background-color: rgb(243,249,255);
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.top{
		height: 40px;
		width: 1366px;
	}
	.hello{
		position: relative;
		left: 20px;
		width: 180px;
		height: 40px;
		line-height: 70px;
		font-size: 20px;
	}
	.content{
		border-radius: 20px;
		border: 1px solid rgb(217,230,239);
		width: 600px;
		height: 460px;
		background-color: white;
		display: flex;
		flex-wrap: wrap;
	}
	.c-title{
		text-indent:10px;
		width: 100%;
		line-height: 50px;
		height: 50px;
		border-bottom: 1px solid rgb(217,230,239);
	}
	.myservic{
		width:600px;
		height: 410px;
	}
	li{
		cursor: pointer;
		margin-top: 3px;
		display: flex;
		width: 600px;
		height: 60px;
		list-style-type:none;
		box-shadow: 0 0 12px rgba(0,0,0,0.1) inset;
	}
	.myservic-top{
		border-bottom: 1px solid rgb(217,230,239);
		height: 50px;
		width: 600px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.myservic-top>div{
		line-height: 40px;
		text-align: center;
		width: 120px;
		height: 40px;
		border-left: 1px solid rgb(217,230,239);
	}
	.myservic-top>div:nth-child(1){
		border:none;
	}
	ul{
		width: 600px;
		height: 360px;
		overflow: auto;
	}
	li>div{
		width: 120px;
		height: 60px;
		text-indent:10px;
		text-align: center;
		line-height: 60px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>
