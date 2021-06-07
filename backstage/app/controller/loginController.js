const Controller = require('egg').Controller; 

class TestController extends Controller{
	//根据账号密码登录
	async login(){
		let username = this.ctx.request.body.username;
		let password = this.ctx.request.body.password;
		let list =await this.ctx.service.loginService.login(username,password);
		this.ctx.response.body=list;
	}
	//根据账号密码注册
	async register(){
		let username = this.ctx.request.body.username;
		let password = this.ctx.request.body.password;
		let list =await this.ctx.service.loginService.register(username,password);
		this.ctx.response.body=list;
	}
}

module.exports = TestController