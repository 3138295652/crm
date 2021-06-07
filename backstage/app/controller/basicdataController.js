const Controller = require('egg').Controller; 

class TestController extends Controller{
	
	// 获取所有产品信息
	async getbasicdata(){
		let code = await this.ctx.service.basicdataService.getbasicdata();
		this.ctx.response.body = code;
	}
	
	// 新增数据到产品表
	async addbasicdata(){
		let name = this.ctx.request.body.name;
		let stock = this.ctx.request.body.stock;
		let price = this.ctx.request.body.price;
		let pic = this.ctx.request.body.pic;
		let code = await this.ctx.service.basicdataService.addbasicdata(name,stock,price,pic);
		this.ctx.response.body = code;
	}
	
	// 根据id删除产品数据
	async delbasicdata(){
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.basicdataService.delbasicdata(id);
		this.ctx.response.body = code;
	}
	
	
	// 根据id删除产品数据
	async updatebasicdata(){
		let name = this.ctx.request.body.name;
		let stock = this.ctx.request.body.stock;
		let price = this.ctx.request.body.price;
		let pic = this.ctx.request.body.pic;
		let id = this.ctx.request.body.id;
		let code = await this.ctx.service.basicdataService.updatebasicdata(name,stock,price,pic,id);
		this.ctx.response.body = code;
	}
	
	// 模糊查询产品数据
	async likebasicdata(){
		let name = '%'+this.ctx.request.body.words+'%';
		let stock = '%'+this.ctx.request.body.words+'%';
		let price = '%'+this.ctx.request.body.words+'%';
		let pic = '%'+this.ctx.request.body.words+'%';
		let code = await this.ctx.service.basicdataService.likebasicdata(name,stock,price,pic);
		this.ctx.response.body = code;
	}
	
	
	// 模糊查询用户数据
	async likeuser(){
		let name = '%'+this.ctx.request.body.words+'%';
		let code = await this.ctx.service.basicdataService.likeuser(name);
		this.ctx.response.body = code;
	}
}

module.exports = TestController