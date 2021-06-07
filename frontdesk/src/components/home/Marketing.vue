<template>
	<!--  -->
	<div class="marketing">
		<div class="marketing-content nav">
			<div class="nav-card card1" @click="open1">销售机会</div>
			<div class="nav-card card2" @click="close1">客户开发计划</div>
			<el-button class=" card3" type="primary" @click="addm">新增销售机会</el-button>
			<el-button class=" card4" type="primary" @click="addp">新增开发计划</el-button>
		</div>
		<div class="marketing-content open">
			<div class="content-nav">
				<div class="c-v-1 vbox">标题</div>
				<div class="c-v-2 vbox">时间</div>
				<div class="c-v-3 vbox">地点</div>
				<div class="c-v-4 vbox">发现人</div>
				<div class="c-v-5 vbox">方向</div>
				<div class="c-v-6 vbox">备注</div>
			</div>
			<ul>
				<li @click="openm" class="content-nav" v-for="(item,index) in marketing" :key="index">
					<div class="c-v-1 vbox">{{item.title}}</div>
					<div class="c-v-2 vbox" type="date">{{item.time}}</div>
					<div class="c-v-3 vbox">{{item.location}}</div>
					<div class="c-v-4 vbox">{{item.discoverer}}</div>
					<div class="c-v-5 vbox">{{item.type}}</div>
					<div class="c-v-6 vbox">{{item.remarks}}</div>
				</li>
			</ul>
		</div>
		<div class="marketing-content close">
			<div class="content-nav">
				<div class="c-v-1 vbox">标题</div>
				<div class="c-v-2 vbox">拟定时间</div>
				<div class="c-v-3 vbox">拟定人</div>
				<div class="c-v-4 vbox">执行人</div>
				<div class="c-v-5 vbox">执行状态</div>
				<div class="c-v-6 vbox">备注</div>
			</div>
			<ul>
				<li @click="openp" class="content-nav" v-for="(item,index) in plan" :key="index">
					<div class="c-v-1 vbox">{{item.title}}</div>
					<div class="c-v-2 vbox">{{item.starttime.substr(0,10)}}</div>
					<div class="c-v-3 vbox">{{item.planner}}</div>
					<div class="c-v-4 vbox">{{item.executor}}</div>
					<div class="c-v-5 vbox">{{item.statu}}</div>
					<div class="c-v-6 vbox">{{item.remarks}}</div>
				</li>
			</ul>

		</div>
		<div class="box-fl openm">
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">标题:</span>
					<el-input style="width: 300px;" v-model="openmarketing.title"></el-input>
				</div>
				<div class="mo-thing">
					<span class="must">*</span><span class="tshi">事件内容:</span>
					<el-input type="textarea" v-model="openmarketing.thing" class="minthing"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">地点:</span>
					<el-input style="width: 300px;" v-model="openmarketing.location"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">时间:</span>
					<el-date-picker v-model="openmarketing.time" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<div class="box-c"></div>
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">发现人:</span>
					<el-input style="width: 300px;" v-model="openmarketing.discoverer"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">方向:</span>
					<el-input style="width: 300px;" v-model="openmarketing.type"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">备注:</span>
					<el-input style="width: 300px;" v-model="openmarketing.remarks"></el-input>
				</div>

				<div class="mo-title">
					<span class="must">*</span><span class="tshi">联系方式:</span>
					<el-input style="width: 300px;" v-model="openmarketing.contact"></el-input>
				</div>
				<div class="mo-title ombutton">
					<el-button type="success" @click="surem">确定</el-button>
					<el-button type="danger" @click="closeall">取消</el-button>
					<el-button type="danger" @click="delm">删除</el-button>
				</div>
			</div>
		</div>
		<div class="box-fl addm">

			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">标题:</span>
					<el-input style="width: 300px;" v-model="addmarketing.title"></el-input>
				</div>
				<div class="mo-thing">
					<span class="must">*</span><span class="tshi">事件内容:</span>
					<el-input type="textarea" v-model="addmarketing.thing" class="minthing"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">地点:</span>
					<el-input style="width: 300px;" v-model="addmarketing.location"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">时间:</span>
					<el-date-picker v-model="addmarketing.time" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<div class="box-c"></div>
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">发现人:</span>
					<el-input style="width: 300px;" v-model="addmarketing.discoverer"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">方向:</span>
					<el-input style="width: 300px;" v-model="addmarketing.type"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">备注:</span>
					<el-input style="width: 300px;" v-model="addmarketing.remarks"></el-input>
				</div>

				<div class="mo-title">
					<span class="must">*</span><span class="tshi">联系方式:</span>
					<el-input style="width: 300px;" v-model="addmarketing.contact"></el-input>
				</div>
				<div class="mo-title ombutton">
					<el-button type="success" @click="sureaddm">确定</el-button>
					<el-button type="danger" @click="closeall">取消</el-button>
				</div>
			</div>
		</div>

		<div class="box-fl openp">
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">标题:</span>
					<el-input style="width: 300px;" v-model="openplan.title"></el-input>
				</div>
				<div class="mo-thing">
					<span class="must">*</span><span class="tshi">计划内容:</span>
					<el-input type="textarea" v-model="openplan.content" class="minthing"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">拟定时间:</span>
					<el-date-picker v-model="openplan.starttime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<div class="box-c"></div>
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">拟定人:</span>
					<el-input style="width: 300px;" v-model="openplan.planner"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">执行人:</span>
					<el-input style="width: 300px;" v-model="openplan.executor"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">备注:</span>
					<el-input style="width: 300px;" v-model="openplan.remarks"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">状态:</span>
					<el-input style="width: 300px;" v-model="openplan.statu"></el-input>
				</div>
				<div class="mo-title ombutton">
					<el-button type="success" @click="surep">确定</el-button>
					<el-button type="danger" @click="closeall">取消</el-button>
					<el-button type="danger" @click="delp">删除</el-button>
				</div>
			</div>

		</div>
		
		<div class="box-fl addp">

			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">标题:</span>
					<el-input style="width: 300px;" v-model="addplan.title"></el-input>
				</div>
				<div class="mo-thing">
					<span class="must">*</span><span class="tshi">计划内容:</span>
					<el-input type="textarea" v-model="addplan.content" class="minthing"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">拟定时间:</span>
					<el-date-picker v-model="addplan.starttime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<div class="box-c"></div>
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">拟定人:</span>
					<el-input style="width: 300px;" v-model="addplan.planner"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">执行人:</span>
					<el-input style="width: 300px;" v-model="addplan.executor"></el-input>
				</div>
				<div class="mo-title">
					<span class="must"></span><span class="tshi">备注:</span>
					<el-input style="width: 300px;" v-model="addplan.remarks"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">状态:</span>
					<el-input style="width: 300px;" v-model="addplan.statu"></el-input>
				</div>
				<div class="mo-title ombutton">
					<el-button type="success" @click="sureaddp">确定</el-button>
					<el-button type="danger" @click="closeall">取消</el-button>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				time: "",
				marketing: [],
				plan: [],
				oldtitle: "",
				openmarketing: {
					thing: "",
					"time": "",
					"discoverer": "",
					"type": "",
					"contact": "",
					"remarks": "",
					"location": "",
					"title": ""
				},
				addmarketing: {
					thing: "",
					"time": "",
					"discoverer": "",
					"type": "",
					"contact": "",
					"remarks": "",
					"location": "",
					"title": ""
				},
				openplan: {
					"title": "",
					"content": "",
					"starttime": "",
					"planner": "",
					"executor": "",
					"remarks": "",
					"statu": "",
				},
				addplan: {
					"title": "",
					"content": "",
					"starttime": "",
					"planner": "",
					"executor": "",
					"remarks": "",
					"statu": "",
				},
				adddate: function addDate(date, days) {
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
				},
				// rTime: function(date) {
				// 	var json_date = new Date(date).toJSON();
				// 	return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
				// },
				clearaddm: function() {
					this.addmarketing.thing = "";
					this.addmarketing.time = "";
					this.addmarketing.discoverer = "";
					this.addmarketing.type = "";
					this.addmarketing.contact = "";
					this.addmarketing.remarks = "";
					this.addmarketing.location = "";
					this.addmarketing.title = "";
				},
				clearaddp: function() {
					this.addplan.title = "";
					this.addplan.content = "";
					this.addplan.starttime = "";
					this.addplan.planner = "";
					this.addplan.executor = "";
					this.addplan.remarks = "";
					this.addplan.statu = "";
				}
			}
		},
		components: {},
		methods: {
			open1() {
				this.$http.get("/getmarketing", {}).then((res) => {
					this.marketing = res.data;
				}).catch((err) => {
					console.log(err)
				});
				this.$http.get("/getplan", {}).then((res) => {
					this.plan = res.data;
				}).catch((err) => {
					console.log(err)
				});

				document.querySelector(".card1").style.borderBottom = "3px solid rgb(45,140,240)";
				document.querySelector(".card1").style.color = "black";
				document.querySelector(".card2").style.borderBottom = "3px solid rgb(221,222,225)";
				document.querySelector(".card2").style.color = "rgb(221, 222, 225)";
				document.querySelector(".card3").style.display = "block";
				document.querySelector(".card4").style.display = "none";
				document.querySelector(".open").style.display = "block";
				document.querySelector(".close").style.display = "none";
			},
			close1() {
				this.$http.get("/getmarketing", {}).then((res) => {
					this.marketing = res.data;
				}).catch((err) => {
					console.log(err)
				});
				this.$http.get("/getplan", {}).then((res) => {
					this.plan = res.data;
				}).catch((err) => {
					console.log(err)
				});

				document.querySelector(".card1").style.borderBottom = "3px solid rgb(221,222,225)";
				document.querySelector(".card1").style.color = "rgb(221, 222, 225)";
				document.querySelector(".card2").style.borderBottom = "3px solid rgb(45,140,240)";
				document.querySelector(".card2").style.color = "black";
				document.querySelector(".card3").style.display = "none";
				document.querySelector(".card4").style.display = "block";
				document.querySelector(".open").style.display = "none";
				document.querySelector(".close").style.display = "block";

			},
			openm(e) {
				this.$http.post("/openmarketing", {
					title: e.path[1].children[0].innerHTML
				}).then((res) => {
					this.openmarketing = res.data[0];
					this.oldtitle = this.openmarketing.title
					console.log(this.openmarketing.time);

				}).catch((err) => {
					console.log(err)
				});
				document.querySelector(".openm").style.display = "flex";
			},
			closeall() {

				this.clearaddm();
				this.clearaddp();
				document.querySelector(".openm").style.display = "none";
				document.querySelector(".openp").style.display = "none";
				document.querySelector(".addm").style.display = "none";
				document.querySelector(".addp").style.display = "none";

			},
			delm() {
				let result = confirm("确定删除？");
				if (result) {

					this.$http.post("/delmarketing", {
						title: this.oldtitle
					}).then((res) => {
						this.$message.success('删除成功')
					}).catch((err) => {
						confirm("操作失败")
						console.log(err)
					});

					this.$http.get("/getmarketing", {}).then((res) => {
						this.marketing = res.data;
					}).catch((err) => {
						console.log(err)
					});

					document.querySelector(".openm").style.display = "none";
				}
			},
			delp() {
				let result = confirm("确定删除？");
				if (result) {

					this.$http.post("/delplan", {
						title: this.oldtitle,
					}).then((res) => {
						this.$message.success('删除成功')
					}).catch((err) => {
						confirm("操作失败")
						console.log(err)
					});

					this.$http.get("/getplan", {}).then((res) => {
						this.plan = res.data;
					}).catch((err) => {
						console.log(err)
					});

					document.querySelector(".openp").style.display = "none";
				}
			},

			openp(e) {

				this.$http.post("/openplan", {
					title: e.path[1].children[0].innerHTML
				}).then((res) => {
					this.openplan = res.data[0];
					this.oldtitle = this.openplan.title
				}).catch((err) => {
					console.log(err)
				});

				document.querySelector(".openp").style.display = "flex";

			},
			surem() {


				this.$http.post("/haveuser", {
					name: this.openmarketing.discoverer
				}).then((res) => {
					if (res.data[0]) {
						this.$http.post("/updatemarketing", {
							title: this.openmarketing.title,
							thing: this.openmarketing.thing,
							time: this.adddate(this.openmarketing.time, 0),
							discoverer: this.openmarketing.discoverer,
							type: this.openmarketing.type,
							contact: this.openmarketing.contact,
							remarks: this.openmarketing.remarks,
							location: this.openmarketing.location,
							oldtitle: this.oldtitle
						}).then((res) => {
							this.$message.success('修改成功')
							this.$http.get("/getmarketing", {}).then((res) => {
								this.marketing = res.data;
							}).catch((err) => {
								console.log(err)
							});
							document.querySelector(".openm").style.display = "none";
						}).catch((err) => {

							console.log(err)
						});
					} else {
						this.$message.error("修改失败，发现人不可用");
					}
				}).catch((err) => {
					console.log(err)
				});

			},
			surep() {
	
				this.$http.post("/haveuser", {
					name: this.openplan.planner
				}).then((res) => {
					if (res.data[0]) {
						if(!this.openplan.executor){
							this.$http.post("/updateplan", {
								title: this.openplan.title,
								content: this.openplan.content,
								starttime: this.adddate(this.openplan.starttime, 0),
								planner: this.openplan.planner,
								executor: this.openplan.executor,
								remarks: this.openplan.remarks,
								statu: this.openplan.statu,
								oldtitle: this.oldtitle
							}).then((res) => {
								this.$message.success('修改成功')
								this.$http.get("/getplan", {}).then((res) => {
									this.plan = res.data;
								}).catch((err) => {
									console.log(err)
								});
								document.querySelector(".openp").style.display = "none";
							}).catch((err) => {
								console.log(err)
							});
						}else{
							this.$http.post("/haveuser", {
								name: this.openplan.executor
							}).then((res) => {
								if (res.data[0]) {
									this.$http.post("/updateplan", {
										title: this.openplan.title,
										content: this.openplan.content,
										starttime: this.adddate(this.openplan.starttime, 0),
										planner: this.openplan.planner,
										executor: this.openplan.executor,
										remarks: this.openplan.remarks,
										statu: this.openplan.statu,
										oldtitle: this.oldtitle
									}).then((res) => {
										this.$message.success('修改成功')
										this.$http.get("/getplan", {}).then((res) => {
											this.plan = res.data;
										}).catch((err) => {
											console.log(err)
										});
										document.querySelector(".openp").style.display = "none";
									}).catch((err) => {
										console.log(err)
									});
								} else {
									this.$message.error("修改失败，执行人不可用");
								}
							}).catch((err) => {
								console.log(err)
							});
												
						}
					} else {
						this.$message.error("修改失败，拟定人不可用");
					}
				}).catch((err) => {
					console.log(err)
				});
			},
			addm() {
				document.querySelector(".addm").style.display = "flex";
			},
			addp() {
				document.querySelector(".addp").style.display = "flex";
			},
			sureaddm() {
			
			
				this.$http.post("/haveuser", {
					name: this.addmarketing.discoverer
				}).then((res) => {
					if (res.data[0]) {
						this.$http.post("/addmarketing", {
							title: this.addmarketing.title,
							thing: this.addmarketing.thing,
							time: this.adddate(this.addmarketing.time, 0),
							discoverer: this.addmarketing.discoverer,
							type: this.addmarketing.type,
							contact: this.addmarketing.contact,
							remarks: this.addmarketing.remarks,
							location: this.addmarketing.location,
						}).then((res) => {
							this.$message.success('添加成功')
							this.$http.get("/getmarketing", {}).then((res) => {
								this.marketing = res.data;
							}).catch((err) => {
								console.log(err)
							});
							document.querySelector(".addm").style.display = "none";
							this.clearaddm();
						}).catch((err) => {
							this.$message.error('请输入正确的数据')
						});
					} else {
						this.$message.error("添加失败，发现人不可用");
					}
				}).catch((err) => {
					console.log(err)
				});



			},
			sureaddp() {
				this.$http.post("/haveuser", {
					name: this.addplan.planner
				}).then((res) => {
					if (res.data[0]) {
						if(!this.addplan.executor){
								this.$http.post("/addplan", {
									title: this.addplan.title,
									content: this.addplan.content,
									starttime: this.adddate(this.addplan.starttime, 0),
									planner: this.addplan.planner,
									executor: this.addplan.executor,
									remarks: this.addplan.remarks,
									statu: this.addplan.statu,
								}).then((res) => {
									this.$message.success('添加成功');
									this.$http.get("/getplan", {}).then((res) => {
										this.plan = res.data;
									}).catch((err) => {
										console.log(err)
									});
									this.clearaddp();
									document.querySelector(".addp").style.display = "none";
								}).catch((err) => {
									this.$message.error('请输入正确的数据')
								});
						}else{
							this.$http.post("/haveuser", {
								name: this.addplan.executor
							}).then((res) => {
								if (res.data[0]) {
									this.$http.post("/addplan", {
										title: this.addplan.title,
										content: this.addplan.content,
										starttime: this.adddate(this.addplan.starttime, 0),
										planner: this.addplan.planner,
										executor: this.addplan.executor,
										remarks: this.addplan.remarks,
										statu: this.addplan.statu,
									}).then((res) => {
										this.$message.success('添加成功');
										this.$http.get("/getplan", {}).then((res) => {
											this.plan = res.data;
										}).catch((err) => {
											console.log(err)
										});
										this.clearaddp();
										document.querySelector(".addp").style.display = "none";
									}).catch((err) => {
										this.$message.error('请输入正确的数据')
									});
								} else {
									this.$message.error("添加失败，执行人不可用");
								}
							}).catch((err) => {
								console.log(err)
							});
						}
					} else {
						this.$message.error("添加失败，拟定人不可用");
					}
				}).catch((err) => {
					console.log(err)
				});
			},

		},
		created() {
			this.username = sessionStorage.bsusername;

			this.$http.get("/getmarketing", {}).then((res) => {
				this.marketing = res.data;
			}).catch((err) => {
				console.log(err)
			});

			this.$http.get("/getplan", {}).then((res) => {
				this.plan = res.data;
			}).catch((err) => {
				console.log(err)
			});


		},
	}
</script>

<style scoped>
	.marketing {
		height: 560px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 1366px;
		align-items: center;
	}

	.marketing-content {
		display: flex;
		flex-wrap: wrap;
		height: 500px;
		width: 1200px;
		border-top: 3px solid rgb(221, 222, 225);
	}

	.nav {
		width: 1366px;
		height: 57px;
		display: flex;
		flex-wrap: wrap;
	}

	.open,
	.close {}

	.open {
		display: block;
	}

	.minthing {
		min-height: 260px !important;
	}

	.close {
		display: none;
	}

	.nav-card {
		height: 50px;
		position: relative;
		top: 7px;
		left: 83px;
		background-color: #FFFFFF;
		line-height: 50px;
		width: 180px;
		color: rgb(221, 222, 225);
		text-align: center;
		cursor: pointer;
	}

	.card1 {
		color: black;
		border-bottom: 3px solid rgb(45, 140, 240);
	}

	.card3 {
		position: relative;
		left: 85px;
		height: 45px;
		top: 10px;
		user-select: none;
		/* display: none; */
		display: block;
	}

	.card4 {
		position: relative;
		left: 75px;
		height: 45px;
		top: 10px;
		user-select: none;
		display: none;
		/* display: block; */
	}

	.ombutton {
		padding-left: 200px;
	}


	.content-nav {
		height: 50px;
		width: 1200px;
		display: flex;
	}

	ul {
		width: 1200px;
		height: 450px;
		overflow: auto;
	}

	.vbox {
		height: 50px;
		line-height: 50px;
		text-align: center;
		text-indent: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.c-v-1 {
		width: 300px;
	}

	.c-v-2 {
		width: 120px;
	}

	.c-v-3 {
		width: 260px;
	}

	.c-v-4 {
		width: 120px;
	}

	.c-v-5 {
		width: 200px;
	}

	.c-v-6 {
		width: 200px;
	}

	li {
		margin-top: 3px;
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.1) inset;
	}

	.box-fl {
		position: absolute;
		top: 90px;
		height: 550px;
		width: 1200px;
		border-radius: 15px;
		display: none;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		border: 1px solid rgb(121, 187, 255);
	}

	.box-mo {
		height: 500px;
		width: 500px;
		background-color: aliceblue;
		display: flex;
		flex-wrap: wrap;
		align-items: ;
	}

	.box-c {
		border-left: 1px solid black;
		height: 500px;
	}

	.mo-title {
		width: 465px;
		height: 40px;
		margin-left: 10px;
		margin-top: 10px;
		display: flex;
	}

	.mo-thing {
		width: 465px;
		height: 300px;
		margin-left: 10px;
		margin-top: 10px;
		overflow: auto;
		display: flex;
		flex-wrap: wrap;
	}

	.must {
		height: 40px;
		line-height: 45px;
		color: red;
	}

	.tshi {
		width: 80px;
		align-items: center;
		height: 40px;
		line-height: 40px;
	}

	ul>li {
		cursor: pointer;
	}

	ul {
		overflow: auto;
	}
</style>
