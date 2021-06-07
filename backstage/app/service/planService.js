const Service = require("egg").Service;

class codeService extends Service {
	
	//查询plan的数据
	async getplan() {
		let sql = "select * from plan";
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
			list[i].starttime=addDate(list[i].starttime, 0).replace(rge,"$1-$2-$3");
		}
		return list;
	}

	
	// 根据title查询plan的数据
	async openplan(title) {
		let sql = "select * from plan where title=?";
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
			list[i].starttime=addDate(list[i].starttime, 0).replace(rge,"$1-$2-$3");
		}
		return list;
	}

	
	// 根据title删除plan的数据
	async delplan(title) {
		let sql = "delete from plan where title=?";
		let list = await this.ctx.app.mysql.query(sql, [title]);
		return list;
	}

	// 根据标题更改plan的数据
	async updateplan(title, content, starttime, planner, executor, remarks, statu, oldtitle) {
		let sql = "update plan set title=?,content=?,starttime=?,planner=?,executor=?,remarks=?,statu=? where title=?";
		let list = await this.ctx.app.mysql.query(sql, [title, content, starttime, planner, executor, remarks, statu,
			oldtitle
		]);
		return list;
	}


	// 增加记录到plan
	async addplan(title, content, starttime, planner, executor, remarks, statu) {
		let sql = "insert into plan (title,content,starttime,planner,executor,remarks,statu) values (?,?,?,?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql, [title, content, starttime, planner, executor, remarks, statu]);
		return list;
	}

}

module.exports = codeService;
