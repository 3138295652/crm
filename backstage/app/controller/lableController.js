const Controller = require('egg').Controller;

class TestController extends Controller {
	//获取普通标签信息
	async getptlable() {
		let code = await this.ctx.service.lableService.getptlable();
		this.ctx.response.body = code;
	}


	//获取属性标签信息
	async getsxlable() {
		let code = await this.ctx.service.lableService.getsxlable();
		this.ctx.response.body = code;
	}


	//根据name获取标签信息
	async havelable() {
		let name = this.ctx.request.body.name;
		let code = await this.ctx.service.lableService.havelable(name);
		this.ctx.response.body = code;
	}
	

	//根据id修改普通标签数据
	async updateptlable() {
		let id = this.ctx.request.body.id;
		let name = this.ctx.request.body.name;
		let code = await this.ctx.service.lableService.updateptlable(name, id);
		this.ctx.response.body = code;
	}
	
	//添加普通标签数据
	async addptlable() {
		let name = this.ctx.request.body.name;
		let code = await this.ctx.service.lableService.addptlable(name);
		this.ctx.response.body = code;
	}
	
	
	//根据id修改属性标签数据
	async updatesxlable() {
		let id = this.ctx.request.body.id;
		let name = this.ctx.request.body.name;
		let content = this.ctx.request.body.content;
		let code = await this.ctx.service.lableService.updatesxlable(name, id,content);
		this.ctx.response.body = code;
	}
	
	//添加属性标签数据
	async addsxlable() {
		let name = this.ctx.request.body.name;
		let content = this.ctx.request.body.content;
		let code = await this.ctx.service.lableService.addsxlable(name,content);
		this.ctx.response.body = code;
	}
	

	//根据id删除普通标签数据
	async delptlable() {
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.lableService.delptlable(id);
		this.ctx.response.body = code;
	}
	
	async likelable(){
		let name = '%'+this.ctx.request.body.words+'%';
		let content = '%'+this.ctx.request.body.words+'%';
		let code = await this.ctx.service.lableService.likelable(name,content);
		this.ctx.response.body = code;
	}
	

}

module.exports = TestController
