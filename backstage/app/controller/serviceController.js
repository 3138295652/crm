const Controller = require('egg').Controller; 

class TestController extends Controller{

	// 根据username获取我的任务
	async getmyservice(){
		let username = this.ctx.request.body.username;
		let code = await this.ctx.service.serviceService.getmyservice(username);
		this.ctx.response.body = code;
	}
	
	// 获取所有任务
	async getservice(){
		let code = await this.ctx.service.serviceService.getservice();
		this.ctx.response.body = code;
	}
	
	
	// 获取所有用户信息
	async getuser(){
		let code = await this.ctx.service.serviceService.getuser();
		this.ctx.response.body = code;
	}
	
	// 添加任务数据
	async addservice(){
		let title = this.ctx.request.body.title;
		let clientname = this.ctx.request.body.clientname;
		let overtime = this.ctx.request.body.overtime;
		let starttime = this.ctx.request.body.starttime;
		let pic = this.ctx.request.body.pic;
		let lv = this.ctx.request.body.lv;
		let type = this.ctx.request.body.type;
		let code = await this.ctx.service.serviceService.addservice(title,clientname,overtime,starttime,pic,lv,type);
		this.ctx.response.body = code;
	}
	// 根据id删除任务
	async delservice(){
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.serviceService.delservice(id);
		this.ctx.response.body = code;
	}
	
	
	// 根据id查询任务
	async openservice(){
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.serviceService.openservice(id);
		this.ctx.response.body = code;
	}
	
	// 根据username查询任务
	async cangl(){
		let username = this.ctx.request.body.username;
		let code = await this.ctx.service.serviceService.cangl(username);
		this.ctx.response.body = code;
	}
	
	
	// 根据title查询任务
	async titleservice(){
		let title = this.ctx.request.body.title;
		let code = await this.ctx.service.serviceService.titleservice(title);
		this.ctx.response.body = code;
	}
	
	
	
	// 查询有pic的任务
	async picservice(){
		let code = await this.ctx.service.serviceService.picservice();
		this.ctx.response.body = code;
	}
	
	// 查询已处理的任务
	async picstservice(){
		let code = await this.ctx.service.serviceService.picstservice();
		this.ctx.response.body = code;
	}
	

	
	
	// 查询没有pic的任务
	async unpicservice(){
		let code = await this.ctx.service.serviceService.unpicservice();
		this.ctx.response.body = code;
	}
	
	
	// 根据username修改user数据
	async updateusera(){
		let to = this.ctx.request.body.to;
		let username = this.ctx.request.body.username;
		let code = await this.ctx.service.serviceService.updateusera(to,username);
		this.ctx.response.body = code;
	}
	
	// 根据username修改user数据
	async updateuserb(){
		let to = this.ctx.request.body.to;
		let username = this.ctx.request.body.username;
		let code = await this.ctx.service.serviceService.updateuserb(to,username);
		this.ctx.response.body = code;
	}
	
	
	// 根据id修改任务数据
	async bjservice(){
		let title = this.ctx.request.body.title;
		let clientname = this.ctx.request.body.clientname;
		let overtime = this.ctx.request.body.overtime;
		let starttime = this.ctx.request.body.starttime;
		
		let pic = this.ctx.request.body.pic;
		let lv = this.ctx.request.body.lv;
		let type = this.ctx.request.body.type;
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.serviceService.bjservice(title,clientname,overtime,starttime,pic,lv,type,id);
		this.ctx.response.body = code;
	}
	
	// 根据id修改任务负责人
	async updatepicservice(){
		let pic = this.ctx.request.body.pic;
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.serviceService.updatepicservice(pic,id);
		this.ctx.response.body = code;
	}
	
	
	// 根据id修改任务状态
	async stservice(){
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.serviceService.stservice(id);
		this.ctx.response.body = code;
	}
	
	// 根据id修改任务状态
	async instservice(){
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.serviceService.instservice(id);
		this.ctx.response.body = code;
	}
	
	
	
	//分组别查询service的数据
	async groupservice(){
		let code = await this.ctx.service.serviceService.groupservice();
		this.ctx.response.body = code;
	}
	
	//分组别查询service的数据
	async groupservicea(){
		let code = await this.ctx.service.serviceService.groupservicea();
		this.ctx.response.body = code;
	}
	
	//分组别查询service的数据
	async groupserviceb(){
		let code = await this.ctx.service.serviceService.groupserviceb();
		this.ctx.response.body = code;
	}
	
	
	
	
	
}

module.exports = TestController