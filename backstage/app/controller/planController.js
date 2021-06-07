const Controller = require('egg').Controller; 

class TestController extends Controller{

	// 查询plan的数据
	async getplan(){
		let code = await this.ctx.service.planService.getplan();
		this.ctx.response.body = code;
	}
	
	
	// 根据title查询plan的数据
	async openplan(){
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.planService.openplan(title);
		this.ctx.response.body = code;
	}
	
	
	// 根据title删除plan的数据
	async delplan(){
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.planService.delplan(title);
		this.ctx.response.body = code;
	}
	
	
	// 根据标题更改plan的数据
	async updateplan(){
		let title = this.ctx.request.body.title;
		let content = this.ctx.request.body.content;
		let starttime = this.ctx.request.body.starttime;
		let planner = this.ctx.request.body.planner;
		let executor = this.ctx.request.body.executor;
		let remarks = this.ctx.request.body.remarks;
		let statu = this.ctx.request.body.statu;
		let oldtitle = this.ctx.request.body.oldtitle;
		let code = await this.ctx.service.planService.updateplan(title,content,starttime,planner,executor,remarks,statu,oldtitle);
		this.ctx.response.body = code;
	}
	
	// 增加记录到plan
	async addplan(){
		let title = this.ctx.request.body.title;
		let content = this.ctx.request.body.content;
		let starttime = this.ctx.request.body.starttime;
		let planner = this.ctx.request.body.planner;
		let executor = this.ctx.request.body.executor;
		let remarks = this.ctx.request.body.remarks;
		let statu = this.ctx.request.body.statu;
		let code = await this.ctx.service.planService.addplan(title,content,starttime,planner,executor,remarks,statu);
		this.ctx.response.body = code;
	}
	
}

module.exports = TestController