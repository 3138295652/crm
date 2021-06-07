<template>
	<!--  -->
	<div class="basicdata">
		<div class="client-r">
			<p class="khjb">产品基本信息</p>
			<el-input style="width: 400px; margin-left: 10px; margin-bottom: 20px;" placeholder="搜索商品名称、剩余库存、单价......" v-model="input3">
				<el-button slot="append" icon="el-icon-search" @click="search2"></el-button>
			</el-input>
			<p style="width: 600px; line-height: 40px; height: 40px;top: 120px; margin-left: 420px; position: absolute; color: #2d8cf0; cursor: pointer;" @click="clearall">清空全部筛选</p>

			<el-button @click="handleCommand" type="primary" style="position: relative;left: 790px; top: -10px;">新增数据</el-button>
			<div class="cl-khjb">

				<el-table :data="tableData" border style="width: 100%; " height="460">
					<el-table-column fixed sortable prop="id" label="编号" width="150">
					</el-table-column>
					<el-table-column prop="name" label="商品名称" width="120">
					</el-table-column>
					<el-table-column prop="stock" sortable label="剩余库存" width="120">
					</el-table-column>
					<el-table-column prop="price" sortable label="单价" width="300">
					</el-table-column>
					<el-table-column prop="pic" label="负责人" width="300">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="300">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="updatabac(scope.row)">编辑</el-button>
							<el-button type="text" size="small" @click="delbac(scope.row)">删除</el-button>
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


			delbac(row) {

				if (confirm("确定删除？")) {
					this.$http.post("/delbasicdata", {
						id: row.id
					}).then((res) => {
						this.$http.post("/getbasicdata", {}).then((res) => {
							this.tableData = res.data;
						}).catch((err) => {
							console.log(err)
						});
					}).catch((err) => {
						console.log(err)
					});
				}
			},
			// 点击添加数据
			handleCommand() {
				this.$prompt('请输入产品名称', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					if (value != null) {
						this.addbasicdata.name = value;
						this.$prompt('请输入产品库存', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
						}).then(({
							value
						}) => {
							if (value != null) {
								this.addbasicdata.stock = value;
								this.$prompt('请输入产品单价', '提示', {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
								}).then(({
									value
								}) => {
									if (value != null) {
										this.addbasicdata.price = value;
										this.$prompt('请输入产品负责人', '提示', {
											confirmButtonText: '确定',
											cancelButtonText: '取消',
										}).then(({
											value
										}) => {
											if (value != null) {
												this.addbasicdata.pic = value;
												this.$http.post("/addbasicdata", {
													name: this.addbasicdata.name,
													stock: this.addbasicdata.stock,
													price: this.addbasicdata.price,
													pic: this.addbasicdata.pic,
												}).then((res) => {
													this.$http.post("/getbasicdata", {}).then((res) => {
														this.tableData = res.data;
													}).catch((err) => {
														console.log(err)
													});
												}).catch((err) => {
													console.log(err)
												});
											} else {
												this.$message({
													type: 'error',
													message: '负责人不能为空！'
												});
											}
										}).catch(() => {
											this.$message({
												type: 'info',
												message: '取消添加'
											});
										});

									} else {
										this.$message({
											type: 'error',
											message: '单价不能为空！'
										});
									}
								}).catch(() => {
									this.$message({
										type: 'info',
										message: '取消添加'
									});
								});
							} else {
								this.$message({
									type: 'error',
									message: '库存不能为空！'
								});
							}
						}).catch(() => {
							this.$message({
								type: 'info',
								message: '取消添加'
							});
						});
					} else {
						this.$message({
							type: 'error',
							message: '名称不能为空！'
						});
					}
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消添加'
					});
				});
			},
			search2() {
				this.$http.post("/likebasicdata", {
					words: this.input3
				}).then((res) => {
					this.tableData = res.data
				}).catch((err) => {
					console.log(err)
				});
			},
			clearall() {
				this.input3 = "";
				this.$http.post("/getbasicdata", {}).then((res) => {
					this.tableData = res.data;
				}).catch((err) => {
					console.log(err)
				});
			},
			updatabac(row) {

				this.$prompt('请输入产品名称', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					if (value != null) {
						this.updatabasicdata.name = value;
						this.$prompt('请输入产品库存', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
						}).then(({
							value
						}) => {
							if (value != null) {
								this.updatabasicdata.stock = value;
								this.$prompt('请输入产品单价', '提示', {
									confirmButtonText: '确定',
									cancelButtonText: '取消',
								}).then(({
									value
								}) => {
									if (value != null) {
										this.updatabasicdata.price = value;
										this.$prompt('请输入产品负责人', '提示', {
											confirmButtonText: '确定',
											cancelButtonText: '取消',
										}).then(({
											value
										}) => {
											if (value != null) {
												this.updatabasicdata.pic = value;
												this.$http.post("/updatebasicdata", {
													name: this.updatabasicdata.name,
													stock: this.updatabasicdata.stock,
													price: this.updatabasicdata.price,
													pic: this.updatabasicdata.pic,
													id: row.id,
												}).then((res) => {
													this.$http.post("/getbasicdata", {}).then((res) => {
														this.tableData = res.data;
													}).catch((err) => {
														console.log(err)
													});
												}).catch((err) => {
													console.log(err)
												});
											} else {
												this.$message({
													type: 'error',
													message: '负责人不能为空！'
												});
											}
										}).catch(() => {
											this.$message({
												type: 'info',
												message: '取消编辑'
											});
										});

									} else {
										this.$message({
											type: 'error',
											message: '单价不能为空！'
										});
									}
								}).catch(() => {
									this.$message({
										type: 'info',
										message: '取消编辑'
									});
								});
							} else {
								this.$message({
									type: 'error',
									message: '库存不能为空！'
								});
							}
						}).catch(() => {
							this.$message({
								type: 'info',
								message: '取消编辑'
							});
						});
					} else {
						this.$message({
							type: 'error',
							message: '名称不能为空！'
						});
					}
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消编辑'
					});
				});
			},
		},
		created() {

			this.$http.post("/getbasicdata", {}).then((res) => {
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
