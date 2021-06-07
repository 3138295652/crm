const Controller = require('egg').Controller; 

class TestController extends Controller{
	// 查询marketing的数据
	async getmarketing(){
		let code = await this.ctx.service.marketingService.getmarketing();
		this.ctx.response.body = code;
	}
	
	
	// 根据title查询marketing的数据
	async openmarketing(){
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.marketingService.openmarketing(title);
		this.ctx.response.body = code;
	}
	
	
	// 根据title删除marketing的数据
	async delmarketing(){
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.marketingService.delmarketing(title);
		this.ctx.response.body = code;
	}
	
	// 根据标题更改marketing的数据
	async updatemarketing(){
		let title = this.ctx.request.body.title;
		let thing = this.ctx.request.body.thing;
		let time = this.ctx.request.body.time;
		let discoverer = this.ctx.request.body.discoverer;
		let type = this.ctx.request.body.type;
		let contact = this.ctx.request.body.contact;
		let remarks = this.ctx.request.body.remarks;
		let location = this.ctx.request.body.location;
		let oldtitle = this.ctx.request.body.oldtitle;
		let code = await this.ctx.service.marketingService.updatemarketing(title,thing,time,discoverer,type,contact,remarks,location,oldtitle);
		this.ctx.response.body = code;
	}
	
	
	// 增加记录到marketing
	async addmarketing(){
		let title = this.ctx.request.body.title;
		let thing = this.ctx.request.body.thing;
		let time = this.ctx.request.body.time;
		let discoverer = this.ctx.request.body.discoverer;
		let type = this.ctx.request.body.type;
		let contact = this.ctx.request.body.contact;
		let remarks = this.ctx.request.body.remarks;
		let location = this.ctx.request.body.location;
		let code = await this.ctx.service.marketingService.addmarketing(title,thing,time,discoverer,type,contact,remarks,location);
		this.ctx.response.body = code;
	}
	
}

module.exports = TestController