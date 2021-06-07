const Service = require('egg').Service;

class ClazzService extends Service {
	
	// 获取basicdata信息
	async getbasicdata() {
		let sql = "select * from basicdata";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	
	// 新增数据到basicdata
	async addbasicdata(name,stock,price,pic) {
		let sql ="insert into basicdata (name,stock,price,pic) values (?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql,[name,stock,price,pic]);
		return list;
	}
	
	///根据id删除basicdata的数据
	async delbasicdata(id) {
		let sql = "delete from basicdata where id=?";
		let list = await this.ctx.app.mysql.query(sql, [id]);
		return list;
	}
	
	
	
	//根据id修改basicdata的数据
	async updatebasicdata(name,stock,price,pic,id) {
		let sql = "update basicdata set name=?,stock=?,price=?,pic=? where id=?";
		let list = await this.ctx.app.mysql.query(sql, [name,stock,price,pic,id]);
		return list;
	}
	
	
	// 模糊查询basicdata的数据
	async likebasicdata(name,stock,price,pic) {
		let sql ='select * from basicdata where name like ? or stock like ? or price like ? or pic like ? ';
		let list = await this.ctx.app.mysql.query(sql, [name,stock,price,pic]);
		return list;
	}
	
	//模糊查询user的数据
	async likeuser(name) {
		let sql ='select * from user where username like ?';
		let list = await this.ctx.app.mysql.query(sql, [name]);
		return list;
	}
}

module.exports = ClazzService;
