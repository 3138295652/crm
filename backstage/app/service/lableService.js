const Service = require("egg").Service;

class codeService extends Service {
	
	// 获取普通标签信息
	async getptlable() {
		let sql = "select * from lable where type=1 ";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	// 获取属性标签信息
	async getsxlable() {
		let sql = "select * from lable where type=2 ";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	
	// 根据name获取标签信息
	async havelable(name) {
		let sql = "select * from lable where name=?";
		let list = await this.ctx.app.mysql.query(sql,[name]);
		return list;
	}
	
	
	// 根据id更改普通lable的数据
	async updateptlable(name,id) {
		let sql ="update lable set name=? where id=? ";
		let list = await this.ctx.app.mysql.query(sql, [name,id]);
		return list;
	}
	
	// 添加普通lable的数据
	async addptlable(name) {
		let sql ="insert into lable (type,name) values (1,?)" ;
		let list = await this.ctx.app.mysql.query(sql, [name]);
		return list;
	}
	
	
	// 根据id更改属性lable的数据
	async updatesxlable(name,id,content) {
		let sql ="update lable set name=?,content=? where id=? ";
		let list = await this.ctx.app.mysql.query(sql, [name,content,id]);
		return list;
	}
	
	// 添加属性lable的数据
	async addsxlable(name,content) {
		let sql ="insert into lable (type,name,content) values (2,?,?)";
		let list = await this.ctx.app.mysql.query(sql, [name,content]);
		return list;
	}


// 根据id删除lable的数据
	async delptlable(id) {
		let sql = "delete from lable where id=?";
		let list = await this.ctx.app.mysql.query(sql, [id]);
		return list;
	}
	
	// 模糊查询client的数据
	async likelable(name,content) {
		let sql ='select * from lable where type=2 and name like ? or content like ?  ';
		let list = await this.ctx.app.mysql.query(sql, [name,content]);
		return list;
	}

}

module.exports = codeService;
