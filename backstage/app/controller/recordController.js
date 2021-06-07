const Controller = require('egg').Controller;

class TestController extends Controller {
	//获取商谈记录数据
	async getrecord() {
		let code = await this.ctx.service.recordService.getrecord();
		this.ctx.response.body = code;
	}

	//根据id删除商谈记录
	async delrecord() {
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.recordService.delrecord(id);
		this.ctx.response.body = code;
	}

	// 添加商谈记录
	async addrecord() {
		let id = this.ctx.request.body.id;
		let client_name = this.ctx.request.body.client_name;
		let pic = this.ctx.request.body.pic;
		let time = this.ctx.request.body.time;
		let content = this.ctx.request.body.content;
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.recordService.addrecord(id, client_name, pic, time, content, title);
		this.ctx.response.body = code;
	}

	//根据id查询商谈记录
	async openrecord() {
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.recordService.openrecord(id);
		this.ctx.response.body = code;
	}

	//根据id查询商谈记录
	async haverecord() {
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.recordService.haverecord(title);
		this.ctx.response.body = code;
	}



	//根据id更改record记录
	async updaterecord() {
		let id = this.ctx.request.body.id;
		let client_name = this.ctx.request.body.client_name;
		let pic = this.ctx.request.body.pic;
		let time = this.ctx.request.body.time;
		let content = this.ctx.request.body.content;
		let title = this.ctx.request.body.title;
		let oldid = this.ctx.request.body.oldid;
		let code = await this.ctx.service.recordService.updaterecord(id, client_name, pic, time, content, title, oldid);
		this.ctx.response.body = code;
	}
	
	
	// 模糊查询record数据
	async likerecord() {
		let id = '%' + this.ctx.request.body.words + '%';
		let client_name = '%' + this.ctx.request.body.words + '%';
		let time = '%' + this.ctx.request.body.words + '%';
		let pic = '%' + this.ctx.request.body.words + '%';
		let content = '%' + this.ctx.request.body.words + '%';
		let title = '%' + this.ctx.request.body.words + '%';
		let code = await this.ctx.service.recordService.likerecord(id, client_name, pic, time, content, title);
		this.ctx.response.body = code;
	}

}

module.exports = TestController
