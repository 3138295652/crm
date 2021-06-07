const Controller = require('egg').Controller; 

class TestController extends Controller{
	
	// 根据username获取我的客户
	async getmyclient(){
		let username = this.ctx.request.body.username;
		let code = await this.ctx.service.clientService.getmyclient(username);
		this.ctx.response.body = code;
	}
	
	// 获取client数据
		async getclient(){
			let code = await this.ctx.service.clientService.getclient();
			this.ctx.response.body = code;
		}
		
		
		// 根据id删除client数据
			async delclient(){
				let id = this.ctx.request.body.id;
				let code = await this.ctx.service.clientService.delclient(id);
				this.ctx.response.body = code;
			}
			
		// 根据id查询client数据
			async openclient(){
				let id = this.ctx.request.body.id;
				let code = await this.ctx.service.clientService.openclient(id);
				this.ctx.response.body = code;
			}
		
		// 增加记录到client表
			async addclient(){
				let id = this.ctx.request.body.id;
				let name = this.ctx.request.body.name;
				let grade = this.ctx.request.body.grade;
				let lable = this.ctx.request.body.lable;
				let tel = this.ctx.request.body.tel;
				let mail = this.ctx.request.body.mail;
				let goto = this.ctx.request.body.goto;
				let businesscard = this.ctx.request.body.businesscard;
				let negotiationrecord = this.ctx.request.body.negotiationrecord;
				let pic = this.ctx.request.body.pic;
				let address = this.ctx.request.body.address;
				let code = await this.ctx.service.clientService.addclient(id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,pic,address);
				this.ctx.response.body = code;
			}
		
		// 根据标题更改client的数据
		async updateclient(){
			let id = this.ctx.request.body.id;
			let name = this.ctx.request.body.name;
			let grade = this.ctx.request.body.grade;
			let lable = this.ctx.request.body.lable;
			let tel = this.ctx.request.body.tel;
			let mail = this.ctx.request.body.mail;
			let goto = this.ctx.request.body.goto;
			let businesscard = this.ctx.request.body.businesscard;
			let negotiationrecord = this.ctx.request.body.negotiationrecord;
			let address = this.ctx.request.body.address;
			let pic = this.ctx.request.body.pic;
			let oldid = this.ctx.request.body.oldid;
			let code = await this.ctx.service.clientService.updateclient(id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,address,pic,oldid);
			this.ctx.response.body = code;
		}
		
		// 模糊查询client数据
		async likeclient(){
			let id = '%'+this.ctx.request.body.words+'%';
			let name = '%'+this.ctx.request.body.words+'%';
			let grade = '%'+this.ctx.request.body.words+'%';
			let lable = '%'+this.ctx.request.body.words+'%';
			let tel = '%'+this.ctx.request.body.words+'%';
			let mail = '%'+this.ctx.request.body.words+'%';
			let goto = '%'+this.ctx.request.body.words+'%';
			let businesscard = '%'+this.ctx.request.body.words+'%';
			let negotiationrecord = '%'+this.ctx.request.body.words+'%';
			let address = '%'+this.ctx.request.body.words+'%';
			let pic = '%'+this.ctx.request.body.words+'%';
			let code = await this.ctx.service.clientService.likeclient(id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,address,pic);
			this.ctx.response.body = code;
		}
		
		//根据name获取客户信息
		async haveclient(){
			let name = this.ctx.request.body.name;
			let code = await this.ctx.service.clientService.haveclient(name);
			this.ctx.response.body = code;
		}
		
		
		//根据优先级分组别查询client的数据
		async groupclient(){
			let code = await this.ctx.service.clientService.groupclient();
			this.ctx.response.body = code;
		}
		
		//根据标签分组别查询client的数据
		async groupclienta(){
			let code = await this.ctx.service.clientService.groupclienta();
			this.ctx.response.body = code;
		}
		
		//根据标签分组别查询client的数据
		async groupclientc(){
			let code = await this.ctx.service.clientService.groupclientc();
			this.ctx.response.body = code;
		}
}

module.exports = TestController