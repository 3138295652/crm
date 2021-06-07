const Controller = require('egg').Controller; 

class TestController extends Controller{
	//获取验证码
	async showCode(){
		let code = await this.ctx.service.codeService.getcode();
		this.ctx.response.body = code;
	}
	
	//根据user获取标签信息
	async haveuser() {
		let name = this.ctx.request.body.name;
		let code = await this.ctx.service.codeService.haveuser(name);
		this.ctx.response.body = code;
	}
	
}

module.exports = TestController