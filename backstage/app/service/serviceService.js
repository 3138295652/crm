const Service = require("egg").Service;

class codeService extends Service {

	//根据username查询servic的数据
	async getmyservice(username) {
		let sql = 'select * from service where pic=? and statu="未处理"';
		let list = await this.ctx.app.mysql.query(sql, [username]);

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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}

		return list;
	}

	//查询service的数据
	async getservice() {
		let sql = 'select * from service where statu != "已处理"';
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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}

		return list;
	}



	//查询user的数据
	async getuser() {
		let sql = 'select * from user';
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}

	//新增service的数据
	async addservice(title, clientname, overtime,starttime, pic, lv, type) {

		let sql = "insert into service (title,clientname,overtime,starttime,pic,lv,type) values (?,?,?,?,?,?,?)";
		let list = await this.ctx.app.mysql.query(sql, [title, clientname, overtime, starttime,pic, lv, type]);
		return list;
	}

	//根据id删除service的数据
	async delservice(id) {
		let sql = "delete from service where id=?";
		let list = await this.ctx.app.mysql.query(sql, [id]);
		return list;
	}




	//根据id查询service的数据
	async openservice(id) {
		let sql = 'select * from service where id=?';
		let list = await this.ctx.app.mysql.query(sql, [id]);

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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}
		return list;
	}


	//根据title查询service的数据
	async titleservice(title) {
		let sql = 'select * from service where title=?';
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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}
		return list;
	}



	//查询有pic且未处理的service的数据
	async picservice() {
		let sql = 'select * from service where pic !=? and statu != "已处理"';
		let list = await this.ctx.app.mysql.query(sql, ["无"]);

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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}

		return list;
	}


	//查询已处理的service的数据
	async picstservice() {
		let sql = 'select * from service where statu = "已处理"';
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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}
		return list;
	}




	//查询没有pic的service的数据
	async unpicservice() {
		let sql = 'select * from service where pic =? and statu != "已处理"';
		let list = await this.ctx.app.mysql.query(sql, ["无"]);

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
		let rge = /([0-9]{4})([0-9]{2})([0-9]{2})/;
		for (let i = 0; i < list.length; i++) {
			list[i].overtime = addDate(list[i].overtime, 0).replace(rge, "$1-$2-$3");
			list[i].starttime = addDate(list[i].starttime, 0).replace(rge, "$1-$2-$3");
		}
		return list;
	}



	//根据id修改service的数据
	async bjservice(title, clientname, overtime,starttime, pic, lv, type, id) {
		let sql = "update service set title=?,clientname=?,overtime=?,starttime=?,pic=?,lv=?,type=? where id=?";
		let list = await this.ctx.app.mysql.query(sql, [title, clientname, overtime,starttime, pic, lv, type, id]);
		return list;
	}

	//根据id修改service的状态
	async stservice(id) {
		let sql = "update service set statu='已处理' where id=?";
		let list = await this.ctx.app.mysql.query(sql, [id]);
		return list;
	}

	//根据username修改user的状态
	async updateusera(to, username) {
		let sql = "update user set gl=? where username=?";
		let list = await this.ctx.app.mysql.query(sql, [to, username]);
		return list;
	}

	//根据username修改user的状态
	async updateuserb(to, username) {
		let sql = "update user set gd=? where username=?";
		let list = await this.ctx.app.mysql.query(sql, [to, username]);
		return list;
	}

	//根据username查询user的数据
	async cangl(username) {
		let sql = 'select * from user where username =?';
		let list = await this.ctx.app.mysql.query(sql, [username]);
		return list;
	}

	//根据id修改service的状态
	async instservice(id) {
		let sql = "update service set statu='未处理' where id=?";
		let list = await this.ctx.app.mysql.query(sql, [id]);
		return list;
	}


	

	//根据id修改service的pic
	async updatepicservice(pic, id) {
		let sql = "update service set pic=? where id=?";
		let list = await this.ctx.app.mysql.query(sql, [pic, id]);
		return list;
	}


	//分组查询service数据
	async groupservice() {
		let sql = "select clientname,count(*) as value from service group by clientname";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}

	//分组查询service数据
	async groupservicea() {
		let sql = "select lv,count(*) as value from service group by lv";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}

	//分组查询service数据
	async groupserviceb() {
		let sql = "select pic,count(*) as value from service group by pic";
		let list = await this.ctx.app.mysql.query(sql);
		return list;
	}
}

module.exports = codeService;
