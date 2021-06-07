const Service = require("egg").Service;

class codeService extends Service {
	
	//根据username查询client的数据
	async getmyclient(username) {
		let sql = "select * from client where pic=?";
		let list = await this.ctx.app.mysql.query(sql, [username]);
		
		return list;
	}
	
	
	//查询client的数据
	async getclient() {
		let sql = "select * from client";
		let list = await this.ctx.app.mysql.query(sql);
		
		return list;
	}
	
	//根据id删除client的数据
	async delclient(id) {
		let sql = "delete from client where id=?";
		let list = await this.ctx.app.mysql.query(sql,[id]);
		return list;
	}
	
	//根据id查询client的数据
	async openclient(id) {
		let sql = "select * from client where id=?";
		let list = await this.ctx.app.mysql.query(sql,[id]);
		return list;
	}
	
	//根据name查询client的数据
	async haveclient(name) {
		let sql = "select * from client where name=?";
		let list = await this.ctx.app.mysql.query(sql,[name]);
		return list;
	}
	
	// 增加记录到client
	async addclient(id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,pic,address) {
		let sql ="insert into client (id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,pic,address) values (?,?,?,?,?,?,?,?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql, [id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,pic,address]);
		return list;
	}
	
	// 根据id更改client的数据
	async updateclient(id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,address,pic,oldid) {
		let sql ="update client set id=?,name=?,grade=?,lable=?,tel=?,mail=?,goto=?,businesscard=?,negotiationrecord=?,address=?,pic=? where id=? ";
		let list = await this.ctx.app.mysql.query(sql, [id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,address,pic,oldid]);
		return list;
	}
	
	// 模糊查询client的数据
	async likeclient(id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,address,pic) {
		let sql ='select * from client where id like ? or name like ? or grade like ? or lable like ? or tel like ? or mail like ? or goto like ? or businesscard like ? or negotiationrecord like ? or address like ? or pic like ? ';
		let list = await this.ctx.app.mysql.query(sql, [id,name,grade,lable,tel,mail,goto,businesscard,negotiationrecord,address,pic]);
		return list;
	}
	
	//根据优先级分组查询client数据
	async groupclient() {
		let sql = "select grade,count(*) as value from client group by grade";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	//根据标签分组查询client数据
	async groupclienta() {
		let sql = "select lable,count(*) as value from client group by lable";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	//根据负责人分组查询client数据
	async groupclientc() {
		let sql = "select pic,count(*) as value from client group by pic";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	
}

module.exports = codeService;
