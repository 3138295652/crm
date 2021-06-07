<template>
	<div class="login">
		<div class="login-big">
			<div class="login-top">
				<div class="login-top-1" @click="dl">
					登录
				</div>
				<div class="login-top-2" @click="zc">
					注册
				</div>
			</div>
			<div class="login-l">
				<div class="login-input">
					<div class="i-div">用户名：</div><el-input v-model="username" id="username-1"/>
				</div>
				<div class="login-input">
					<div class="i-div">密码：</div><el-input v-model="password" type="password" id="password-1"/>
				</div>
				<div class="canvas-b">
					<div class="canvas">
						<canvas id="canvas" >该浏览器不支持canvas</canvas>
					</div>
					<button type="button" id="getcode" @click="getcd">点击获取验证码</button>
				</div>
				<div class="login-input">
					<div class="i-div yzm">验证码：</div><el-input v-model="code" />
				</div>
				<div class="dl" @click="login">登录</div>
			</div>
			<div class="login-c">
				<div class="login-input-c">
					<div class="i-div">用户名：</div><el-input v-model="username1" id="username-2"/>
				</div>
				<div class="login-input-c">
					<div class="i-div">密码：</div><el-input v-model="password1" type="password" id="password-2" />
				</div>
				<div class="zc-big">
				<div class="zc" @click="register">注册</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				code:"",
				username:"",
				password:"",
				username1:"",
				password1:"",
				deg:Math.PI/180,
				NUM:4,
				Y:75,
				X:30,
				fon_family_arr:["FZShuTi", "FZYaoti", "STXinwei", "STLiti", "STZhongsong", "DFKai-SB", "STKaiti","SimHei"], // 字体
				codes:["sfsdafsdfbfgs1dasd1351asd4gdaw1d6a5s21f6as50c5a61f6a5sd6a5sc155a"],
				maillist: "",
				addColor:function addColor() { // 随机颜色
					let font_color = ["#"];
					let rdm = [];
					for (let i = 0; i <= 9; i++) {
						if (i < 6) {
							rdm.push(String.fromCharCode(65 + i));
						}
						rdm.push(i);
					}
					for (let i = 0; i < 6; i++) {
						font_color.push(rdm[Math.floor(Math.random() * rdm.length)]);
					}
					return font_color.join("");
				},
				rdmdeg:function rdmdeg() { // 随机旋转角度
					let rdeg = [];
					for (let i = 0; i <= 20; i++) {
						rdeg.push(i);
					}
					return Math.random() > 0.5 ? Math.floor(Math.random(rdeg) * rdeg.length) * 1 : Math.floor(Math.random(rdeg) *
						rdeg.length) * (-1);
				},
				interference:function interference(){ // 绘制视觉干扰
				// console.log(canvas);
					let canvas = document.getElementById("canvas");
					let pen = canvas.getContext("2d");
					for (let i = 0; i < 50; i++) {
						pen.beginPath();
						// pen.arc(x,y,r,起始角度,结束角度,逆顺时针);
						pen.arc(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 1, 0, this.deg * 2, true);
						pen.fillRect(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 1, 1);
						pen.closePath();
						pen.fillStyle = this.addColor;
						pen.fill();
					}
					for (let i = 1; i < 5; i++) {
						pen.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
						pen.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
						pen.strokeStyle = this.addColor;
						pen.stroke();
					}
				},
			}
		},
		methods: {
			getcd(){
				this.$http.get("/showcode", {
				}).then((res) => {
					this.codes = res.data;
					let pen = canvas.getContext("2d");
					canvas.width = canvas.width;
					
					for (let i = 1; i <= this.NUM; i++) { // 绘制字符
						let x = (this.X + 30) * i;
						let fontfml = this.fon_family_arr[Math.floor(Math.random() * this.fon_family_arr.length)]; // 随机字体
						let font_color = this.addColor(); // 随机颜色
						let rdeg = this.rdmdeg();
					
						pen.save();
					
						pen.translate(x, 0); // 平移
						pen.rotate(rdeg * this.deg); // 旋转随机角度
						pen.font = `80px ${fontfml}`;
						pen.fillStyle = `${font_color}`;
						pen.textAlign = "center";
						pen.textBaseline = "middle";
						pen.fontWeight = "blod";
						pen.fillText(this.codes[i - 1], 0, this.Y);
					
						pen.restore();
					
					}
					this.interference();
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err)
				});
			},
			dl(){
				document.querySelector(".login-l").style.display="flex";
				document.querySelector(".login-c").style.display="none";
			},
			zc(){
				document.querySelector(".login-l").style.display="none";
				document.querySelector(".login-c").style.display="flex";
			},
			login(){
				if(this.username!=""){
					if(this.password!=""){
						if(this.code){
							if(this.code==this.codes.join("")){
								this.$http.post("/login.do", {
									username:this.username,
									password:this.password
								}).then((res) => {
									if(res.data[0].username){
									sessionStorage.setItem("bsusername", this.username);
									this.$router.push("/home")
									}
								}).catch((err) => {
									confirm("用户名或密码不正确，请重新输入!")
								});
							}else{
								confirm("验证码不正确，请重新输入")
							}
						}else{
							confirm("请输入验证码")
						}
					}else{
						confirm("请输入密码")
					}
				}else{
					confirm("请输入用户名")
				}
			},
			register(){
				if(this.username1!=""){
					if(this.password1!=""){
						this.$http.post("/login.do", {
							username:this.username1,
							password:this.password1
						}).then((res) => {
							if(res.data[0]){
							confirm("用户名不可用")
							}else{
								this.$http.post("/register", {
									username:this.username1,
									password:this.password1
								}).then((res) => {
									confirm("注册成功")
								}).catch((err) => {
									console.log(err)
								});
							}
						}).catch((err) => {
							confirm("请求出错")
						});
					}else{
						confirm("请输入密码")
					}
				}else{
					confirm("请输入用户名")
				}
			},
		},
		mounted() {
			let canvas=document.getElementById('canvas');
			canvas.style.width="160px";
			canvas.style.height="40px";	
		},
		created() {
			if (sessionStorage.bsusername!=null){
				this.$router.push("/home")
			}else{
			}
		}
	}
	
</script>
	
<style >
	*{
		padding: 0;
		margin: 0;
	}
	.login {
		height: 657px;
		background-image: url(../../../public/img/login_bg.jpg);
		background-position: center;
		background-repeat: no-repeat;
	}
	.i-div{
		width: 120px;
		line-height: 40px;
		font-size: 18px;
		height: 40px;
	}
	.login-big{
		overflow: hidden;
		display: flex;
		background-color:white;
		border-radius: 7px;
		width: 400px;
		height: 360px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: 180px;
		margin-top: -180px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.login-top{
		height: 60px;
		width: 370px;
		display:flex;
		justify-content: center;
	}
	.login-top>div{
		width: 180px;
		height: 60px;
		text-align: center;
		line-height: 60px;
	}
	.login-top-1{
		cursor: pointer;
		color: rgb(69,157,245);
	}
	.login-top-2{
		cursor: pointer;
		color: rgb(69,157,245);
	}
	.login-l{
		/* background-color:lightblue; */
		width:400px;
		height:300px;
		display:flex;
		justify-content: center;
		flex-wrap:wrap;
	}
	.login-input{
		justify-content: space-between;
		align-items: center;
		display:flex;
		width:250px;
		height: 40px;
	}
	.login-input-c{
		justify-content: space-between;
		align-items: center;
		display:flex;
		width:300px;
		height: 80px;
	}
	.yzm{
		width: 102px !important;
	}
	#getcode {
		height: 22px;
		width: 120px;
	}
	.canvas-b{
		justify-content: center;
		display: flex;
		align-items: center;
		width: 400px;
		height: 50px;
	}
	.canvas{
		width: 168px;
		height: 42px;
		overflow: hidden;
	}
	#canvas{
		border:1px solid black;
	}
	.login-c{
		justify-content: center;
		height:300px;
		width:400px;
		display:none;
		flex-wrap:wrap;
	}
	.dl{
		cursor: pointer;
		height: 40px;
		width: 160px;
		line-height: 40px;
		text-align: center;
		background-color: ;
		border-radius: 5px;
		color: white;
		background-color: rgb(42,205,207);
	}
	.zc{
		cursor: pointer;
		height: 40px;
		width: 160px;
		line-height: 40px;
		text-align: center;
		background-color: ;
		border-radius: 5px;
		color: white;
		background-color: rgb(42,205,207);
	}
	.zc-big{
		justify-content: center;
		height:130px;
		align-items: center;
		width:400px;
		display:flex;
	}
</style>
