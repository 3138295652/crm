const Service = require("egg").Service;

class codeService extends Service {
	//查询marketing的数据
	async getmarketing() {
		let sql = "select * from marketing";
		let list = await this.ctx.app.mysql.query(sql);
		function addDate(date, days) {
			var d = new Date(date);
			d.setDate(d.getDate() + days);
			var month = d.getMonth() + 1;
			var day = d.getDate();
			if (month < 10) {
				month = "0" + month;
			}
			if (day < 10) {
				day = "0" + day;
			}
			var val = d.getFullYear() + "" + month + "" + day;
			return val;
		};
		let rge=/([0-9]{4})([0-9]{2})([0-9]{2})/;
		for(let i = 0;i<list.length;i++){
			list[i].time=addDate(list[i].time, 0).replace(rge,"$1-$2-$3");
		}
		
		return list;
	}

	// 根据title查询marketing的数据
	async openmarketing(title) {
		let sql = "select * from marketing where title=?";
		let list = await this.ctx.app.mysql.query(sql, [title]);
		function addDate(date, days) {
			var d = new Date(date);
			d.setDate(d.getDate() + days);
			var month = d.getMonth() + 1;
			var day = d.getDate();
			if (month < 10) {
				month = "0" + month;
			}
			if (day < 10) {
				day = "0" + day;
			}
			var val = d.getFullYear() + "" + month + "" + day;
			return val;
		};
		let rge=/([0-9]{4})([0-9]{2})([0-9]{2})/;
		for(let i = 0;i<list.length;i++){
			list[i].time=addDate(list[i].time, 0).replace(rge,"$1-$2-$3");
		}
		return list;
	}


	// 根据title删除marketing的数据
	async delmarketing(title) {
		let sql = "delete from marketing where title=?";
		let list = await this.ctx.app.mysql.query(sql, [title]);
		return list;
	}

	// 根据title删除plan的数据
	async delplan(title) {
		let sql = "delete from plan where title=?";
		let list = await this.ctx.app.mysql.query(sql, [title]);
		return list;
	}

	// 根据标题更改marketing的数据
	async updatemarketing(title, thing, time, discoverer, type, contact, remarks, location, oldtitle) {
		let sql =
			"update marketing set title=?,thing=?,time=?,discoverer=?,type=?,contact=?,remarks=?,location=? where title=?";
		let list = await this.ctx.app.mysql.query(sql, [title, thing, time, discoverer, type, contact, remarks, location,
			oldtitle
		]);
		return list;
	}


	// 增加记录到marketing
	async addmarketing(title, thing, time, discoverer, type, contact, remarks, location) {
		let sql ="insert into marketing (title,thing,time,discoverer,type,contact,remarks,location) values (?,?,?,?,?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql, [title, thing, time, discoverer, type, contact, remarks, location]);
		return list;
	}


}

module.exports = codeService;
