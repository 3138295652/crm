const Service = require('egg').Service;

class ClazzService extends Service {
	//根据username和password登录
	async login(username, password) {
		let sql = "select username from user where username=? and password=?";
		let list = await this.ctx.app.mysql.query(sql, [username, password]);
		return list;
	}
	//根据username和password注册
	async register(username, password) {
		let sql = "insert into user (username,password) values (?,?)";
		let list = await this.ctx.app.mysql.query(sql, [username, password]);
		return list;
	}
}

module.exports = ClazzService;
