const Service = require("egg").Service;

class codeService extends Service {
	async getcode() {
		let codes = [];
		let arr = [];

		function addCodes() { // 验证码组成的字符
			for (let i = 0; i < 26; i++) {
				if (i <= 9) {
					codes.push(i);
				}
				codes.push(String.fromCharCode(65 + i));
				codes.push(String.fromCharCode(97 + i));
			}

			for (let i = 0; i < 4; i++) {
				arr.push(codes[Math.floor(Math.random() * codes.length)]);
			}
		}
		addCodes();
		return arr;
	}
	
	// 根据name获取user信息
	async haveuser(name) {
		let sql = "select * from user where username=?";
		let list = await this.ctx.app.mysql.query(sql,[name]);
		return list;
	}
	

}

module.exports = codeService;
