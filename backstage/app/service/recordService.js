const Service = require("egg").Service;

class codeService extends Service {
	
	// 获取recode信息
	async getrecord() {
		let sql = "select * from negotiationrecord";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
	
	
	// 根据id删除recode信息
	async delrecord(id) {
		let sql = "delete from negotiationrecord where id=?";
		let list = await this.ctx.app.mysql.query(sql,[id]);
		return list;
	}
	
	
	
	// 添加recode信息
	async addrecord(id,client_name,pic,time,content,title) {
		let sql = "insert into negotiationrecord (id,client_name,pic,time,content,title) values (?,?,?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql,[id,client_name,pic,time,content,title]);
		return list;
	}
	
	
	// 根据id查询recode信息
	async openrecord(id) {
		let sql = "select * from negotiationrecord where id=?";
		let list = await this.ctx.app.mysql.query(sql,[id]);
		return list;
	}
	
	// 根据title查询recode信息
	async haverecord(title) {
		let sql = "select * from negotiationrecord where title=?";
		let list = await this.ctx.app.mysql.query(sql,[title]);
		return list;
	}
	
	
	// 根据id更改recode记录
	async updaterecord(id,client_name,pic,time,content,title,oldid) {
		let sql ="update negotiationrecord set id=?,client_name=?,time=?,content=?,pic=?,title=? where id=? ";
		let list = await this.ctx.app.mysql.query(sql,[id,client_name,time,content,pic,title,oldid]);
		return list;
	}
	
	// 模糊查询record的数据
	async likerecord(id, client_name, pic, time, content, title) {
		let sql ='select * from negotiationrecord where id like ? or client_name like ? or pic like ? or time like ? or content like ? or title like ?';
		let list = await this.ctx.app.mysql.query(sql, [id,client_name,pic,time,content,title]);
		return list;
	}
	
	
}

module.exports = codeService;
