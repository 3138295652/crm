<template>
	<!--  -->
	<div class="service">
		<!-- 导航菜单 -->
		<el-menu default-active="1" class="el-menu-vertical-demo" @select="a" background-color="#545c64" text-color="#fff"
		 active-text-color="#ffd04b">
			<el-menu-item index="1">
				<span slot="title">服务数据</span>
			</el-menu-item>
			<el-menu-item index="2">
				<span slot="title">服务分配</span>
			</el-menu-item>
			<el-menu-item index="3">
				<span slot="title">服务处理</span>
			</el-menu-item>
			<el-menu-item index="4">
				<span slot="title">服务归档</span>
			</el-menu-item>
		</el-menu>
		<!-- 右边内容 -->
		<!-- 服务数据 -->
		<div class="ser-l c1">

			<div class="ser-l-top1">
				<div class="fwsj">服务数据</div>
				<el-button style="height: 40px; position: relative; left: -20px;" @click="adser" type="primary">新增数据</el-button>
			</div>
			<el-table :data="tableData" border style="width: 100%" max-height="507px" height="490px">
				<el-table-column fixed prop="title" label="标题" width="300">
				</el-table-column>
				<el-table-column prop="clientname" label="客户名称" width="120">
				</el-table-column>
				<el-table-column prop="lv" label="等级" width="120">
				</el-table-column>
				<el-table-column prop="starttime" label="开始时间" width="120">
				</el-table-column>
				<el-table-column prop="overtime" label="结束时间" width="120">
				</el-table-column>
				<el-table-column prop="pic" label="负责人" width="200">
				</el-table-column>
				<el-table-column prop="type" label="服务方式" width="120">
				</el-table-column>
				<el-table-column prop="statu" label="状态" width="120">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="120">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click="handleClick1(scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!-- 点击新增数据 -->
		<div class="box-fl addp">

			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">标题:</span>
					<el-input style="width: 300px;" v-model="addser.title"></el-input>
				</div>
				<div class="mo-thing">
					<span class="must">*</span><span class="tshi">客户名称:</span>
					<el-input style="width: 300px;" v-model="addser.clientname"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">开始时间:</span>
					<el-date-picker v-model="addser.starttime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">结束时间:</span>
					<el-date-picker v-model="addser.overtime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<div class="box-c"></div>
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">负责人:</span>
					<el-input style="width: 300px;" v-model="addser.pic"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">等级:</span>
					<el-input style="width: 300px;" v-model="addser.lv"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">服务方式:</span>
					<el-input style="width: 300px;" v-model="addser.type"></el-input>
				</div>
				<div class="mo-title ombutton">
					<el-button type="success" @click="sureaddser">确定</el-button>
					<el-button type="danger" @click="closeall">取消</el-button>
				</div>
			</div>

		</div>

		<!-- 点击编辑数据 -->
		<div class="box-fl openser">

			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">标题:</span>
					<el-input style="width: 300px;" v-model="openser.title"></el-input>
				</div>
				<div class="mo-thing">
					<span class="must">*</span><span class="tshi">客户名称:</span>
					<el-input style="width: 300px;" v-model="openser.clientname"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">开始时间:</span>
					<el-date-picker v-model="openser.starttime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">结束时间:</span>
					<el-date-picker v-model="openser.overtime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<div class="box-c"></div>
			<div class="box-mo">
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">负责人:</span>
					<el-input style="width: 300px;" v-model="openser.pic"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">等级:</span>
					<el-input style="width: 300px;" v-model="openser.lv"></el-input>
				</div>
				<div class="mo-title">
					<span class="must">*</span><span class="tshi">服务方式:</span>
					<el-input style="width: 300px;" v-model="openser.type"></el-input>
				</div>
				<div class="mo-title ombutton">
					<el-button type="success" @click="surebjser">确定</el-button>
					<el-button type="danger" @click="closeall">取消</el-button>
				</div>
			</div>

		</div>



		<!-- 服务分配 -->
		<div class="ser-l">
			<div class="ser-l-top1">
				<div class="fwsj">服务分配</div>
			</div>
			<el-tabs value="first" style="width: 100%; height: 490px;">
				<el-tab-pane label="未分配" name="first">
					<el-table :data="unpicservice" border style="width: 100%" max-height="507px" height="450px">
						<el-table-column fixed prop="title" label="标题" width="300">
						</el-table-column>
						<el-table-column prop="clientname" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="lv" label="等级" width="120">
						</el-table-column>
						<el-table-column prop="starttime" label="开始时间" width="120">
						</el-table-column>
						<el-table-column prop="overtime" label="结束时间" width="120">
						</el-table-column>
						<el-table-column prop="pic" label="负责人" width="200">
						</el-table-column>
						<el-table-column prop="type" label="服务方式" width="120">
						</el-table-column>
						<el-table-column prop="statu" label="状态" width="120">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button @click="uppic(scope.row)" type="text" size="small">分配</el-button>
							</template>
						</el-table-column>
					</el-table>

				</el-tab-pane>
				<el-tab-pane label="已分配" name="second">
					<el-table :data="picservice" border style="width: 100%" max-height="507px" height="450px">
						<el-table-column fixed prop="title" label="标题" width="300">
						</el-table-column>
						<el-table-column prop="clientname" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="lv" label="等级" width="120">
						</el-table-column>
						<el-table-column prop="starttime" label="开始时间" width="120">
						</el-table-column>
						<el-table-column prop="overtime" label="结束时间" width="120">
						</el-table-column>
						<el-table-column prop="pic" label="负责人" width="200">
						</el-table-column>
						<el-table-column prop="type" label="服务方式" width="120">
						</el-table-column>
						<el-table-column prop="statu" label="状态" width="120">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button @click="uppic(scope.row)" type="text" size="small">分配</el-button>
							</template>
						</el-table-column>
					</el-table>


				</el-tab-pane>
			</el-tabs>



		</div>
		<!-- 服务处理 -->
		<div class="ser-l">
			<div class="ser-l-top1">
				<div class="fwsj">服务处理</div>
			</div>
			<el-tabs value="first" style="width: 100%; height: 490px;">
				<el-tab-pane label="未处理" name="first">
					<el-table :data="tableData" border style="width: 100%" max-height="507px" height="450px">
						<el-table-column fixed prop="title" label="标题" width="300">
						</el-table-column>
						<el-table-column prop="clientname" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="lv" label="等级" width="120">
						</el-table-column>
						<el-table-column prop="starttime" label="开始时间" width="120">
						</el-table-column>
						<el-table-column prop="overtime" label="结束时间" width="120">
						</el-table-column>
						<el-table-column prop="pic" label="负责人" width="200">
						</el-table-column>
						<el-table-column prop="type" label="服务方式" width="120">
						</el-table-column>
						<el-table-column prop="statu" label="状态" width="120">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button @click="statu(scope.row)" type="text" size="small">处理</el-button>
							</template>
						</el-table-column>
					</el-table>

				</el-tab-pane>
				<el-tab-pane label="已处理" name="second">
					<el-table :data="statuservice" border style="width: 100%" max-height="507px" height="450px">
						<el-table-column fixed prop="title" label="标题" width="300">
						</el-table-column>
						<el-table-column prop="clientname" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="lv" label="等级" width="120">
						</el-table-column>
						<el-table-column prop="starttime" label="开始时间" width="120">
						</el-table-column>
						<el-table-column prop="overtime" label="结束时间" width="120">
						</el-table-column>
						<el-table-column prop="pic" label="负责人" width="200">
						</el-table-column>
						<el-table-column prop="type" label="服务方式" width="120">
						</el-table-column>
						<el-table-column fixed="right" prop="statu" label="状态" width="240">
						</el-table-column>
					</el-table>


				</el-tab-pane>
			</el-tabs>
		</div>
		<!-- 服务归档 -->
		<div class="ser-l">
			<div class="ser-l-top1">
				<div class="fwsj">服务归档</div>
			</div>
			<el-tabs value="first" style="width: 100%; height: 490px;">
				<el-tab-pane label="未归档" name="first">
					<el-table :data="tableData" border style="width: 100%" max-height="507px" height="450px">
						<el-table-column fixed prop="title" label="标题" width="300">
						</el-table-column>
						<el-table-column prop="clientname" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="lv" label="等级" width="120">
						</el-table-column>
						<el-table-column prop="starttime" label="开始时间" width="120">
						</el-table-column>
						<el-table-column prop="overtime" label="结束时间" width="120">
						</el-table-column>
						<el-table-column prop="pic" label="负责人" width="200">
						</el-table-column>
						<el-table-column prop="type" label="服务方式" width="120">
						</el-table-column>
						<el-table-column prop="statu" label="状态" width="120">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button @click="statu1(scope.row)" type="text" size="small">归档</el-button>
							</template>
						</el-table-column>
					</el-table>

				</el-tab-pane>
				<el-tab-pane label="已归档" name="second">
					<el-table :data="statuservice" border style="width: 100%" max-height="507px" height="450px">
						<el-table-column fixed prop="title" label="标题" width="300">
						</el-table-column>
						<el-table-column prop="clientname" label="客户名称" width="120">
						</el-table-column>
						<el-table-column prop="lv" label="等级" width="120">
						</el-table-column>
						<el-table-column prop="starttime" label="开始时间" width="120">
						</el-table-column>
						<el-table-column prop="overtime" label="结束时间" width="120">
						</el-table-column>
						<el-table-column prop="pic" label="负责人" width="200">
						</el-table-column>
						<el-table-column prop="type" label="服务方式" width="120">
						</el-table-column>
						<el-table-column fixed="right" prop="statu" label="状态" width="240">
						</el-table-column>
					</el-table>


				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				clser: function clser() {
					let a = document.querySelectorAll(".ser-l");
					for (let i = 0; i < a.length; i++) {
						a[i].style.display = "none";
					}
				},
				picservice: [],
				unpicservice: [],
				statuservice: [],
				tableData: [],
				addser: [],
				openser: [],
				openid: "",
				myservice: "",
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

			}
		},
		components: {},
		methods: {
			a(index) {
				if (index == 1) {
					this.clser();
					document.querySelectorAll(".ser-l")[0].style.display = "flex";
				} else if (index == 2) {
					this.clser();
					document.querySelectorAll(".ser-l")[1].style.display = "flex";
				} else if (index == 3) {
					this.clser();
					document.querySelectorAll(".ser-l")[2].style.display = "flex";
				} else if (index == 4) {
					this.clser();
					document.querySelectorAll(".ser-l")[3].style.display = "flex";
				}
			},
			handleClick(row) {
				this.openid = row.id;
				this.$http.post("/openservice", {
					id: row.id
				}).then((res) => {
					this.openser = res.data[0];
					document.querySelector(".openser").style.display = "flex";
				}).catch((err) => {
					console.log(err)
				});

			},
			statu(row) {
				if (row.pic == sessionStorage.bsusername) {
					this.$confirm('确定更改状态', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					}).then(({}) => {
						this.$http.post("/stservice", {
							id: row.id
						}).then((res) => {
							this.$http.post("/picstservice", {}).then((res) => {
								this.statuservice = res.data;
							}).catch((err) => {
								console.log(err)
							});
							this.$http.post("/getservice", {}).then((res) => {
								this.tableData = res.data;
							}).catch((err) => {
								console.log(err)
							});


						}).catch((err) => {
							console.log(err)
						});
					}).catch(() => {});
				} else {
					this.$message.error("负责人不符");
				}

			},
			statu1(row) {
				
				this.$http.post("/cangl", {
					username: sessionStorage.bsusername,
				}).then((res) => {
					if (res.data[0].gd == "可操作") {
				
				this.$confirm('确定更改状态', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({}) => {
					this.$http.post("/stservice", {
						id: row.id
					}).then((res) => {
						this.$http.post("/picstservice", {}).then((res) => {
							this.statuservice = res.data;
						}).catch((err) => {
							console.log(err)
						});

						this.$http.post("/getservice", {}).then((res) => {
							this.tableData = res.data;
						}).catch((err) => {
							console.log(err)
						});

					}).catch((err) => {
						console.log(err)
					});
				}).catch(() => {});
			
			} else {
					this.$message({
						type: 'error',
						message: '您没有权限！'
					});
				}
			}).catch((err) => {
				console.log(err)
			});
			
			},
			instatu(row) {
				this.$confirm('确定更改状态', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({}) => {
					this.$http.post("/instservice", {
						id: row.id
					}).then((res) => {
						this.$http.post("/picstservice", {}).then((res) => {
							this.statuservice = res.data;
						}).catch((err) => {
							console.log(err)
						});
						this.$http.post("/picservice", {}).then((res) => {
							this.picservice = res.data;
						}).catch((err) => {
							console.log(err)
						});
					}).catch((err) => {
						console.log(err)
					});
				}).catch(() => {});
			},
			uppic(row) {
				this.$prompt('请输入负责人', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {

					this.$http.post("/updatepicservice", {
						pic: value,
						id: row.id
					}).then((res) => {
						this.$http.post("/picservice", {}).then((res) => {
							this.picservice = res.data;
						}).catch((err) => {
							console.log(err)
						});
						this.$http.post("/unpicservice", {}).then((res) => {
							this.unpicservice = res.data;
						}).catch((err) => {
							console.log(err)
						});
						this.$message({
							type: 'success',
							message: '分配成功'
						});
					}).catch((err) => {
						console.log(err)
					});

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消分配'
					});
				});
			},

			handleClick1(row) {


				this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$http.post("/delservice", {
						id: row.id,
					}).then((res) => {
						this.$http.post("/getservice", {}).then((res) => {
							this.tableData = res.data;
						}).catch((err) => {
							console.log(err)
						});
						this.$message.success("删除成功");
					}).catch((err) => {
						this.$message.error("删除失败");
						console.log(err)
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			adser() {
				document.querySelector(".box-fl").style.display = "flex";
			},
			sureaddser() {
				if (!this.addser.pic) {
					this.addser.pic = "无"
				};
				
				this.$http.post("/haveuser", {
					name:this.addser.pic
				}).then((res) => {
					if(res.data[0]){
				this.$http.post("/haveclient", {
					name:this.addser.clientname
				}).then((res) => {
					if(res.data[0]){
						
						
						this.$http.post("/addservice", {
							title: this.addser.title,
							clientname: this.addser.clientname,
							starttime: this.adddate(this.addser.starttime, 0),
							overtime: this.adddate(this.addser.overtime, 0),
							lv: this.addser.lv,
							type: this.addser.type,
							pic: this.addser.pic,
						}).then((res) => {
							this.$message.success("添加成功");
							this.$http.post("/getservice", {}).then((res) => {
								this.tableData = res.data;
							}).catch((err) => {
								console.log(err)
							});
							this.addser = {};
							document.querySelector(".box-fl").style.display = "none";
						}).catch((err) => {
							this.$message.error("添加失败，请确认数据无误");
							console.log(err)
						});
						
						
					}else{
						this.$message.error("添加失败，客户不存在");
					}
				}).catch((err) => {
					console.log(err)
				});
				}else{
						this.$message.error("添加失败，负责人不存在");
					}
				}).catch((err) => {
					console.log(err)
				});
				

			},
			surebjser() {
				
				this.$http.post("/haveuser", {
					name:this.openser.pic
				}).then((res) => {
					if(res.data[0]){
				this.$http.post("/haveclient", {
					name:this.openser.clientname
				}).then((res) => {
					if(res.data[0]){
						
						
				this.$http.post("/bjservice", {
					title: this.openser.title,
					clientname: this.openser.clientname,
					starttime: this.adddate(this.openser.starttime, 0),
					overtime: this.adddate(this.openser.overtime, 0),
					lv: this.openser.lv,
					type: this.openser.type,
					pic: this.openser.pic,
					id: this.openid
				}).then((res) => {
					this.$message.success("编辑成功");
					this.$http.post("/getservice", {}).then((res) => {
						this.tableData = res.data;
						if (this.myservice) {
							sessionStorage.removeItem("myservicetitle");
							this.$router.push("/home/Homepage")
						}
					}).catch((err) => {
						console.log(err)
					});
					this.openser = {};
					document.querySelector(".openser").style.display = "none";
				}).catch((err) => {
					this.$message.error("编辑失败，请确认数据无误");
					console.log(err)
				});

	}else{
						this.$message.error("编辑失败，客户不存在");
					}
				}).catch((err) => {
					console.log(err)
				});
				}else{
						this.$message.error("编辑失败，负责人不存在");
					}
				}).catch((err) => {
					console.log(err)
				});


			},

			closeall() {

				document.querySelector(".box-fl").style.display = "none";
				document.querySelector(".openser").style.display = "none";
				this.openser = {};
				if (this.myservice) {
					sessionStorage.removeItem("myservicetitle");
					this.$router.push("/home/Homepage")
				}
			}

		},
		mounted() {
			if (this.myservice) {
				
			this.$http.post("/titleservice", {
				title: this.myservice
			}).then((res) => {
				this.openser = res.data[0];
				this.openid = res.data[0].id;
				document.querySelector(".openser").style.display = "flex";
			}).catch((err) => {
				console.log(err)
			});


			}

		},
		created() {

			this.myservice = sessionStorage.myservicetitle;
			this.$http.post("/picservice", {}).then((res) => {
				this.picservice = res.data;
			}).catch((err) => {
				console.log(err)
			});
			this.$http.post("/unpicservice", {}).then((res) => {
				this.unpicservice = res.data;
			}).catch((err) => {
				console.log(err)
			});
			this.$http.post("/getservice", {}).then((res) => {
				this.tableData = res.data;
			}).catch((err) => {
				console.log(err)
			});
			this.$http.post("/picstservice", {}).then((res) => {
				this.statuservice = res.data;
			}).catch((err) => {
				console.log(err)
			});

		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.service {
		height: 577px;
		width: 1366px;
		display: flex;
	}

	.ser-l {
		width: 1260px;
		height: 560px;
		flex-wrap: wrap;
		display: none;
	}


	.fwsj {
		width: 80px;
		height: 30px;
		font-size: 20px;
		line-height: 30px;
		position: relative;
		left: 20px;
	}

	.ser-l-top1 {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		width: 1260px;
		height: 56px;
	}

	.c1 {
		display: flex;
	}


	.ser-r {
		display: none;
		flex-wrap: wrap;
		height: 577px;
		width: 1180px;
	}

	.lookser {
		width: 1366px;
		position: absolute;
		background-color: white;
		justify-content: center;
		z-index: 5;
		display: none;
		flex-wrap: wrap;
		background-color: rgb(242, 245, 250);
	}


	.box-fl {
		z-index: 5;
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
		left: 100px;
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

	.ombutton {
		padding-left: 200px;
	}
</style>
