<template>
	<!--  -->
	<div class="basicdata">
		<div class="client-r">
			<p class="khjb">用户权限管理</p>
			<el-input style="width: 400px; margin-left: 10px; margin-bottom: 20px;" placeholder="搜索用户名称" v-model="input3">
				<el-button slot="append" icon="el-icon-search" @click="search2"></el-button>
			</el-input>
			<p style="width: 600px; line-height: 40px; height: 40px;top: 120px; margin-left: 420px; position: absolute; color: #2d8cf0; cursor: pointer;"
			 @click="clearall">清空全部筛选</p>

			<div class="cl-khjb">

				<el-table :data="tableData" border style="width: 100%; " height="460">
					<el-table-column fixed prop="username" label="用户名称" width="230">
					</el-table-column>
					<el-table-column prop="gl" label="管理权限" width="230">
					</el-table-column>
					<el-table-column label="操作" width="230">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="delbac1(scope.row)">更改</el-button>
						</template>
					</el-table-column>

					<el-table-column prop="gd" label="归档权限" width="230">
					</el-table-column>
					<el-table-column sortable fixed="right" label="操作" width="230">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="delbac2(scope.row)">更改</el-button>
						</template>
					</el-table-column>
				</el-table>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				addbasicdata: [],
				updatabasicdata: [],
				tableData: [],
				input3: '',
			}
		},
		components: {},
		methods: {
			delbac1(row) {
				this.$http.post("/cangl", {
					username: row.username,
				}).then((res) => {
					if (res.data[0].gl == "可操作") {
						if (confirm("确定更改？")) {
							if (row.gl == "可操作") {
								this.$http.post("/updateusera", {
									username: row.username,
									to: "不可操作"
								}).then((res) => {
									this.$http.get("/getuser", {}).then((res) => {
										this.tableData = res.data;
									}).catch((err) => {
										console.log(err)
									});
								}).catch((err) => {
									console.log(err)
								});
							} else {
								this.$http.post("/updateusera", {
									username: row.username,
									to: "可操作"
								}).then((res) => {
									this.$http.get("/getuser", {}).then((res) => {
										this.tableData = res.data;
									}).catch((err) => {
										console.log(err)
									});
								}).catch((err) => {
									console.log(err)
								});
							}

						}
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
			delbac2(row) {
				this.$http.post("/cangl", {
					username: row.username,
				}).then((res) => {
					if (res.data[0].gl == "可操作") {
						
						
						if (confirm("确定更改？")) {
							if (row.gd == "可操作") {
								this.$http.post("/updateuserb", {
									username: row.username,
									to: "不可操作"
								}).then((res) => {
									this.$http.get("/getuser", {}).then((res) => {
										this.tableData = res.data;
									}).catch((err) => {
										console.log(err)
									});
								}).catch((err) => {
									console.log(err)
								});
							} else {
								this.$http.post("/updateuserb", {
									username: row.username,
									to: "可操作"
								}).then((res) => {
									this.$http.get("/getuser", {}).then((res) => {
										this.tableData = res.data;
									}).catch((err) => {
										console.log(err)
									});
								}).catch((err) => {
									console.log(err)
								});
							}
						}


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
			search2() {
				this.$http.post("/likeuser", {
					words: this.input3
				}).then((res) => {
					this.tableData = res.data
				}).catch((err) => {
					console.log(err)
				});
			},
			clearall() {
				this.input3 = "";
				this.$http.get("/getuser", {}).then((res) => {
					this.tableData = res.data;
				}).catch((err) => {
					console.log(err)
				});
			},
		},
		created() {

			this.$http.get("/getuser", {}).then((res) => {
				this.tableData = res.data;
			}).catch((err) => {
				console.log(err)
			});

		},
	}
</script>

<style scoped>
	.basicdata {
		height: 577px;
		width: 1366px;
		display: flex;
	}

	.client-r {

		flex-wrap: wrap;
		height: 577px;
		width: 1366px;
	}


	.khjb {
		padding-left: 19px;
		height: 40px;
		width: 180px;
		font-size: 20px;
		line-height: 40px;
	}

	.cl-khjb {
		height: 480px;
		width: 1366px;
	}
</style>
