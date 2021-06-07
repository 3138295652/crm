<template>
	<!--  -->
	<div class="client">
		<!-- 左边导航栏 -->
		<div class="client-l">
			<ul @click="qiehuan">
				<li class="cl-l-card bac">客户基本信息</li>
				<li class="cl-l-card">标签管理</li>
				<li class="cl-l-card">客户商谈记录管理</li>
			</ul>
		</div>

		<!-- 右边客户基本信息模块 -->
		<div class="client-r jb">
			<p class="khjb">客户基本信息</p>
			<div style="width: 1000px;"></div>
			<el-input style="width: 400px; margin-left: 10px;" placeholder="搜索名称、标签、电话号码、负责人......" v-model="input3" class="input-with-select">
				<el-button slot="append" icon="el-icon-search" @click="search"></el-button>
			</el-input>
			<p style="line-height: 40px; height: 40px; padding-left: 10px; color: #2d8cf0; cursor: pointer;" @click="clearall">清空全部筛选</p>
			<el-button type="primary" style="position: relative;left: 500px; top: -10px;" @click="adclient">新增客户</el-button>
			<div class="cl-khjb">
				<el-table :data="tableData" border style="width: 100%; " height="460">
					<el-table-column fixed sortable prop="id" label="编号" width="150">
					</el-table-column>
					<el-table-column prop="name" label="名称" width="120">
					</el-table-column>
					<el-table-column prop="grade" label="优先级" width="120">
					</el-table-column>
					<el-table-column prop="address" label="地址" width="300">
					</el-table-column>
					<el-table-column prop="lable" label="标签" width="120">
					</el-table-column>
					<el-table-column prop="pic" sortable label="负责人" width="150">
					</el-table-column>
					<el-table-column prop="goto" sortable label="最近往来" width="120">
					</el-table-column>
					<el-table-column prop="tel" label="电话号码" width="120">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="150">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text" size="small">编辑/查看</el-button>
							<el-button type="text" @click="delclient(scope.row)" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

			</div>
		</div>


		<!-- 右边标签管理模块 -->
		<div class="client-r biaoq">
			<div class="biaoq-top">
				<div style="font-size: 20px;">标签管理</div>
				<el-dropdown trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						添加标签<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a" icon="el-icon-plus">普通标签</el-dropdown-item>
						<el-dropdown-item command="b" icon="el-icon-circle-plus">属性标签</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div style="width: 1180px; height: 40px; display: flex; position: relative;
    top: -4px;">
				<el-input style="width: 300px; margin-left: 10px;" placeholder="搜索标签名、标签内容" v-model="input4" class="input-with-select">
					<el-button slot="append" icon="el-icon-search" @click="search1"></el-button>
				</el-input>
				<p style="line-height: 40px; margin-left: 20px; width: 300px; height: 40px;  color: #2d8cf0; cursor: pointer;"
				 @click="clearall">清空全部筛选</p>
			</div>
			<el-col :span="2">
				<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
				 active-text-color="#ffd04b" style="height: 497px;">
					<el-menu-item index="1" @click="openptbq" class="opentb">
						<span slot="title">普通标签</span>
					</el-menu-item>
					<el-menu-item index="2" @click="opensxbq" class="opensx">
						<span slot="title">属性标签</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<div class="biaoq-content biaoq-pt">
				<el-table :data="ptlable" border style="width: 100%; " height="470">
					<el-table-column prop="id" label="编号" sortable width="310">
					</el-table-column>
					<el-table-column prop="name" label="标签名" sortable width="470">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="200">
						<template slot-scope="scope">
							<el-button @click="bq1Click(scope.row)" type="text" size="small">编辑</el-button>
							<el-button type="text" @click="dellable1(scope.row)" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="biaoq-content biaoq-sx">

				<el-table :data="sxlable" border style="width: 100%; " height="460">
					<el-table-column prop="id" label="编号" sortable width="310">
					</el-table-column>
					<el-table-column prop="name" label="标签名" sortable width="280">
					</el-table-column>
					<el-table-column prop="content" label="标签内容" sortable width="200">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="200">
						<template slot-scope="scope">
							<el-button @click="bq2Click(scope.row)" type="text" size="small">编辑</el-button>
							<el-button type="text" @click="dellable1(scope.row)" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

			</div>
		</div>

		<!-- 右边商谈记录模块 -->
		<div class="client-r stjl">
			<p class="khjb">客户商谈记录</p>
			<div style="width: 1000px;"></div>
			<el-input style="width: 400px; margin-left: 10px;" placeholder="搜索客户名称、时间、内容、负责人......" v-model="input5" class="input-with-select">
				<el-button slot="append" icon="el-icon-search" @click="search2"></el-button>
			</el-input>
			<p style="line-height: 40px; height: 40px; padding-left: 10px; color: #2d8cf0; cursor: pointer;" @click="clearall">清空全部筛选</p>
			<el-button type="primary" style="position: relative;left: 500px; top: -10px;" @click="adrecord">新增记录</el-button>
			<div class="cl-khjb">
				<el-table :data="record" border style="width: 100%; " height="460">
					<el-table-column fixed sortable prop="id" label="编号" width="150">
					</el-table-column>
					<el-table-column prop="title" label="标题" width="120">
					</el-table-column>
					<el-table-column prop="time" sortable label="时间" width="120">
					</el-table-column>
					<el-table-column prop="client_name" label="客户" width="120">
					</el-table-column>
					<el-table-column prop="content" label="内容" width="300">
					</el-table-column>
					<el-table-column prop="pic" sortable label="负责人" width="150">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="150">
						<template slot-scope="scope">
							<el-button @click="bjrecord(scope.row)" type="text" size="small">编辑</el-button>
							<el-button type="text" @click="delrecord(scope.row)" size="small">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

			</div>
		</div>

		<!-- 客户基本信息模块点击查看/编辑 -->
		<div class="client-r lookclient">
			<div class="clientlookbox c1">客户详细信息</div>
			<div class="clientlookbox c2">
				<div class="c2-in">编号: {{client.id}}</div>
				<div class="c2-in">名字: {{client.name}}</div>
				<div class="c2-in">优先级: {{client.grade}}</div>
				<div class="c2-in">电话: {{client.tel}}</div>
				<div class="c2-in">邮箱: {{client.mail}}</div>
				<div class="c2-in">标签: {{client.lable}}</div>
				<div class="c2-in">最近往来: {{client.goto}}</div>
				<div class="c2-in">负责人: {{client.pic}}</div>
				<div class="c2-in">地址: {{client.address}}</div>
			</div>
			<div class="clientlookbox c3">
				<div class="c3-l">
					<div>名片：</div>
					<img v-if="client.businesscard" :src=client.businesscard class="img" />
					<div v-else>暂无</div>
				</div>
				<div class="c3-r">
					商谈记录：{{client.negotiationrecord}}
				</div>
				<el-button type="primary" style="position: relative; left: 10px; top:90px" @click="updateclient">编辑</el-button>
				<el-button type="success" style="position: relative; left: -10px; top:90px" @click="closeall">返回</el-button>
			</div>
		</div>

		<!-- 商谈记录模块点击新增记录 -->
		<div class="client-r lookclient addrecord">
			<div class="clientlookbox c1">新增商谈记录</div>
			<div class="clientlookbox c2">
				<span>*</span><span>编号:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addrecord.id"></el-input>
				<span>*</span><span>标题:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addrecord.title"></el-input>
				<span>*</span><span>时间:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addrecord.time"></el-input>
				<span>*</span><span>客户:</span>
				<el-input style="width: 185px; margin-right:50px; " v-model="addrecord.client_name"></el-input>
				<span>*</span><span>负责人:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addrecord.pic"></el-input>
			</div>
			<div class="clientlookbox c3">
				<span style="position: relative; left: -290px; ">*</span><span style="position: relative; left: -900px; ">内容:</span>
				<el-input type="text" v-model="addrecord.content"></el-input>
				<el-button type="primary" style="position: relative; left: 750px; " @click="sureaddrecord">确认</el-button>
				<el-button type="danger" style="position: relative; left: 200px; " @click="closeall">取消</el-button>
			</div>
		</div>

		<!-- 客户信息模块点击新增客户 -->
		<div class="client-r lookclient addclient">
			<div class="clientlookbox c1">新增客户详细信息</div>
			<div class="clientlookbox c2">
				<span>*</span><span>编号:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addclient.id"></el-input>
				<span>*</span><span>名字:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addclient.name"></el-input>
				<span>*</span><span>优先级:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addclient.grade"></el-input>
				<span>*</span><span>电话:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addclient.tel"></el-input>
				<span>*</span><span>邮箱:</span>
				<el-input style="width: 185px; margin-right:50px; " v-model="addclient.mail"></el-input>
				<span>*</span><span>标签:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addclient.lable"></el-input>
				<span>*</span><span>最近往来:</span>
				<el-input style="width: 155px; margin-right:17px; " v-model="addclient.goto"></el-input>
				<span>*</span><span>负责人:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="addclient.pic"></el-input>
				<span>*</span><span>地址:</span>
				<el-input style="width: 300px; margin-right:17px; " v-model="addclient.address"></el-input>
			</div>
			<div class="clientlookbox c3">
				<div class="c3-l">
					<div>名片：</div>
					<input type="file" id="choose1"></input>
					<el-button @click="upcard1">上传图片</el-button>
					<img v-if="addclient.businesscard" class="upimg" :src=addclient.businesscard />
					<div v-else>暂无</div>
				</div>
				<div class="c3-r">
					商谈记录：
					<el-input style="width: 155px; margin-right:17px; " v-model="addclient.negotiationrecord"></el-input>
				</div>
				<el-button type="primary" style="position: relative; left: 10px; top:90px" @click="sureaddclitent">确认</el-button>
				<el-button type="danger" style="position: relative; left: -10px; top:90px" @click="closeall">取消</el-button>
			</div>
		</div>

		<!-- 客户详细信息界面点击编辑 -->
		<div class="client-r lookclient bjclient">
			<div class="clientlookbox c1">编辑客户详细信息</div>
			<div class="clientlookbox c2">
				<span>*</span><span>编号:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="client.id"></el-input>
				<span>*</span><span>名字:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="client.name"></el-input>
				<span>*</span><span>优先级:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="client.grade"></el-input>
				<span>*</span><span>电话:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="client.tel"></el-input>
				<span>*</span><span>邮箱:</span>
				<el-input style="width: 185px; margin-right:50px; " v-model="client.mail"></el-input>
				<span>*</span><span>标签:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="client.lable"></el-input>
				<span>*</span><span>最近往来:</span>
				<el-input style="width: 155px; margin-right:17px; " v-model="client.goto"></el-input>
				<span>*</span><span>负责人:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="client.pic"></el-input>
				<span>*</span><span>地址:</span>
				<el-input style="width: 300px; margin-right:17px; " v-model="client.address"></el-input>
			</div>
			<div class="clientlookbox c3">
				<div class="c3-l">
					<div>名片：</div>
					<input type="file" id="choose2"></input>
					<el-button @click="upcard2">上传图片</el-button>
					<img v-if="client.businesscard" class="upimg" :src=client.businesscard />
					<div v-else>暂无</div>
				</div>
				<div class="c3-r">
					商谈记录：
					<el-input style="width: 155px; margin-right:17px; " v-model="client.negotiationrecord"></el-input>
				</div>
				<el-button type="primary" style="position: relative; left: 10px; top:90px" @click="surebjclitent">确认</el-button>
				<el-button type="danger" style="position: relative; left: -10px; top:90px" @click="closeall">取消</el-button>
			</div>
		</div>

		<!-- 商谈记录模块点击编辑 -->
		<div class="client-r lookclient bjrecord">
			<div class="clientlookbox c1">编辑商谈记录</div>
			<div class="clientlookbox c2">
				<span>*</span><span>编号:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="openrecord.id"></el-input>
				<span>*</span><span>标题:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="openrecord.title"></el-input>
				<span>*</span><span>时间:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="openrecord.time"></el-input>
				<span>*</span><span>客户:</span>
				<el-input style="width: 185px; margin-right:50px; " v-model="openrecord.client_name"></el-input>
				<span>*</span><span>负责人:</span>
				<el-input style="width: 185px; margin-right:17px; " v-model="openrecord.pic"></el-input>
			</div>
			<div class="clientlookbox c3">
				<span style="position: relative; left: -290px; ">*</span><span style="position: relative; left: -900px; ">内容:</span>
				<el-input type="text" v-model="openrecord.content"></el-input>
				<el-button type="primary" style="position: relative; left: 750px; " @click="surebjrecord">确认</el-button>
				<el-button type="danger" style="position: relative; left: 200px; " @click="closeall">取消</el-button>
			</div>
		</div>


	</div>
</template>

<script>
	import New from '@/bus.js'
	export default {
		data: function() {
			return {
				havelable: "",
				sxname: "",
				input3: '',
				input4: '',
				input5: '',
				tableData: [],
				client: {},
				addclient: {},
				addrecord: {},
				oldid: "",
				ptlable: [],
				sxlable: [],
				likelable: [],
				record: [],
				openrecord: [],
				myclient: "",
				clearstyle: function() {
					document.querySelector(".jb").style.display = "none";
					document.querySelector(".biaoq").style.display = "none";
					document.querySelector(".stjl").style.display = "none";
					document.querySelectorAll(".cl-l-card")[0].style.backgroundColor = "transparent";
					document.querySelectorAll(".cl-l-card")[1].style.backgroundColor = "transparent";
					document.querySelectorAll(".cl-l-card")[2].style.backgroundColor = "transparent";
					document.querySelector(".bac").style.backgroundColor = "transparent";
				}
			}
		},
		components: {},
		methods: {
			// 标签管理模块点击添加标签
			handleCommand(command) {
				if (command == "a") {
					this.$prompt('请输入标签名', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					}).then(({
						value
					}) => {
						if (value != null) {
							this.$http.post("/addptlable", {
								name: value
							}).then((res) => {
								this.$message({
									type: 'success',
									message: '添加成功'
								});

								this.$http.get("/getptlable", {}).then((res) => {
									this.ptlable = res.data;
								}).catch((err) => {
									console.log(err)
								});
							}).catch((err) => {
								this.$message({
									type: 'error',
									message: '请输入正确信息（标签名不能重复）！'
								});
								console.log(err)
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

				} else if (command == "b") {
					this.$prompt('请输入标签名称', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
					}).then(({
						value
					}) => {
						if (value != null) {
							this.sxname = value;
							this.$prompt('请输入标签含义', '提示', {
								confirmButtonText: '确定',
								cancelButtonText: '取消',
							}).then(({
								value
							}) => {

								if (value != null) {
									this.$http.post("/addsxlable", {
										name: this.sxname,
										content: value
									}).then((res) => {
										this.$message({
											type: 'success',
											message: '编辑成功'
										});

										this.$http.get("/getsxlable", {}).then((res) => {
											this.sxlable = res.data;
										}).catch((err) => {
											console.log(err)
										});
									}).catch((err) => {
										this.$message({
											type: 'error',
											message: '请输入正确信息（标签名和标签内容不能重复）！'
										});
									});
								} else {
									this.$message({
										type: 'error',
										message: '内容不能为空！'
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

				}
			},

			openptbq() {

				this.$http.get("/getptlable", {}).then((res) => {
					this.ptlable = res.data;
				}).catch((err) => {
					console.log(err)
				});
				document.querySelector(".biaoq-pt").style.display = "flex";
				document.querySelector(".biaoq-sx").style.display = "none";
			},
			opensxbq() {

				this.$http.get("/getsxlable", {}).then((res) => {
					this.sxlable = res.data;
				}).catch((err) => {
					console.log(err)
				});
				document.querySelector(".biaoq-pt").style.display = "none";
				document.querySelector(".biaoq-sx").style.display = "flex";
			},
			upcard1() {
				let file = document.getElementById("choose1").files[0];
				if (file) {
					// 验证文件后缀名是否为图片,否则是可以上传任何文件
					let finename = file["name"];
					console.log(finename);
					let patt = /.+(.JPEG|.jpeg|.JPG|.jpg|.PNG|.png)$/;
					let result = patt.test(finename);
					if (!result) {
						alert("图片格式不对");
						return;
					}
					let formData = new FormData();
					formData.append("uploadFile", file, file.name);
					const config = {
						headers: {
							"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
						}
					};


					this.$http.post("/upload", formData, config).then((res) => {
						this.addclient.businesscard = res.data;
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});

				} else {
					this.$message.error("请选择文件！")
				}

			},
			bq1Click(row) {
				this.$prompt('请输入标签名', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					if (value != null) {
						console.log(value)
						this.$http.post("/updateptlable", {
							id: row.id,
							name: value
						}).then((res) => {

							this.$http.get("/getptlable", {}).then((res) => {
								this.ptlable = res.data;
							}).catch((err) => {
								console.log(err)
							});
						}).catch((err) => {
							console.log(err)
						});
						this.$message({
							type: 'success',
							message: '编辑成功'
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
			dellable1(row) {
				if (confirm("确定删除此标签？")) {
					this.$http.post("/delptlable", {
						id: row.id,
					}).then((res) => {

						this.$http.get("/getptlable", {}).then((res) => {
							this.ptlable = res.data;
						}).catch((err) => {
							console.log(err)
						});

						this.$http.get("/getsxlable", {}).then((res) => {
							this.sxlable = res.data;
						}).catch((err) => {
							console.log(err)
						});

						this.$message.success('删除成功');

					}).catch((err) => {
						console.log(err)
					});
				}
			},
			bq2Click(row) {

				this.$prompt('请输入标签名称', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(({
					value
				}) => {
					if (value != null) {
						this.sxname = value;
						this.$prompt('请输入标签含义', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
						}).then(({
							value
						}) => {

							if (value != null) {
								this.$http.post("/updatesxlable", {
									id: row.id,
									name: this.sxname,
									content: value
								}).then((res) => {
									this.$message({
										type: 'success',
										message: '编辑成功'
									});

									this.$http.get("/getsxlable", {}).then((res) => {
										this.sxlable = res.data;
									}).catch((err) => {
										console.log(err)
									});
								}).catch((err) => {
									console.log(err)
								});
							} else {
								this.$message({
									type: 'error',
									message: '内容不能为空！'
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

			upcard2() {
				let file = document.getElementById("choose2").files[0];
				if (file) {
					// 验证文件后缀名是否为图片,否则是可以上传任何文件
					let finename = file["name"];
					console.log(finename);
					let patt = /.+(.JPEG|.jpeg|.JPG|.jpg|.PNG|.png)$/;
					let result = patt.test(finename);
					if (!result) {
						alert("图片格式不对");
						return;
					}
					let formData = new FormData();
					formData.append("uploadFile", file, file.name);
					const config = {
						headers: {
							"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
						}
					};


					this.$http.post("/upload", formData, config).then((res) => {
						this.client.businesscard = res.data;
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});

				} else {
					this.$message.error("请选择文件！")
				}

			},
			handleClick(row) {
				this.oldid = row.id;
				this.$http.post("/haveclient", {
					name: row.name
				}).then((res) => {
					this.client = res.data[0];
					console.log(res.data)
				}).catch((err) => {
					console.log(err)
				});

				document.querySelector(".bjclient").style.display = "flex";
			},
			bjrecord(row) {
				this.$http.post("/openrecord", {
					id: row.id
				}).then((res) => {
					this.openrecord = res.data[0];
				}).catch((err) => {
					console.log(err)
				});
				this.oldid = row.id;
				document.querySelector(".bjrecord").style.display = "flex";
			},
			search() {
				this.$http.post("/likeclient", {
					words: this.input3
				}).then((res) => {
					this.tableData = res.data;
				}).catch((err) => {
					console.log(err)
				});

			},
			search1() {
				document.querySelector(".opensx").click();
				this.$http.post("/likelable", {
					words: this.input4
				}).then((res) => {
					this.sxlable = res.data
				}).catch((err) => {
					console.log(err)
				});
				console.log(this.likelable)
			},
			search2() {
				this.$http.post("/likerecord", {
					words: this.input5
				}).then((res) => {
					this.record = res.data
				}).catch((err) => {
					console.log(err)
				});
			},
			delclient(row) {
				if (confirm("确定删除？")) {
					this.$http.post("/delclient", {
						id: row.id
					}).then((res) => {
						this.$message.success('删除成功')
						this.$http.get("/getclient", {}).then((res) => {
							this.tableData = res.data;
						}).catch((err) => {
							console.log(err)
						});
					}).catch((err) => {
						console.log(err)
					});
				}
			},
			delrecord(row) {
				if (confirm("确定删除？")) {
					this.$http.post("/delrecord", {
						id: row.id
					}).then((res) => {
						this.$message.success('删除成功')
						this.$http.get("/getrecord", {}).then((res) => {
							this.record = res.data;
						}).catch((err) => {
							console.log(err)
						});
					}).catch((err) => {
						console.log(err)
					});
				}
			},
			updateclient() {
				this.oldid = this.client.id;
				document.querySelector(".bjclient").style.display = "flex";
			},
			clearall() {
				this.input5 = "";
				this.input4 = "";
				this.input3 = "";
				this.$http.get("/getclient", {}).then((res) => {
					this.tableData = res.data;
				}).catch((err) => {
					console.log(err)
				});
				this.$http.get("/getsxlable", {}).then((res) => {
					this.sxlable = res.data;
				}).catch((err) => {
					console.log(err)
				});
				this.$http.get("/getrecord", {}).then((res) => {
					this.record = res.data;
				}).catch((err) => {
					console.log(err)
				});

			},
			closeall() {

				if (document.querySelector(".addclient").style.display == "flex") {
					if (confirm("确定取消？")) {
						document.querySelector(".addclient").style.display = "none";
						this.client = {};
						this.addclient = {};
					}
				} else if (document.querySelector(".bjclient").style.display == "flex") {
					if (confirm("确定取消？")) {
						document.querySelector(".bjclient").style.display = "none";
						console.log("11")
						if (this.myclient) {
							sessionStorage.removeItem("myclientname");
							this.$router.push("/home/Homepage")
						}
					}
				} else if (document.querySelector(".bjrecord").style.display == "flex") {
					if (confirm("确定取消？")) {
						document.querySelector(".bjrecord").style.display = "none";
					}
				} else if (document.querySelector(".addrecord").style.display == "flex") {
					if (confirm("确定取消？")) {
						document.querySelector(".addrecord").style.display = "none";
						this.addrecord = {};
					}
				} else {
					document.querySelector(".lookclient").style.display = "none";
					this.client = {};
					this.oldid = "";
					this.addclient = {};
				}



			},
			adclient() {
				document.querySelector(".addclient").style.display = "flex";
			},
			adrecord() {
				document.querySelector(".addrecord").style.display = "flex";
			},
			qiehuan(e) {
				this.clearstyle();
				e.target.style.backgroundColor = "rgb(31, 132, 244)";
				if (e.target.innerHTML == "客户基本信息") {
					this.$http.get("/getclient", {}).then((res) => {
						this.tableData = res.data;
					}).catch((err) => {
						console.log(err)
					});
					document.querySelector(".jb").style.display = "flex";
				} else if (e.target.innerHTML == "标签管理") {

					document.querySelector(".opentb").click();
					this.$http.get("/getptlable", {}).then((res) => {
						this.ptlable = res.data;
					}).catch((err) => {
						console.log(err)
					});

					this.$http.get("/getsxlable", {}).then((res) => {
						this.sxlable = res.data;
					}).catch((err) => {
						console.log(err)
					});

					document.querySelector(".biaoq").style.display = "flex";
				} else if (e.target.innerHTML == "客户商谈记录管理") {
					this.$http.get("/getrecord", {}).then((res) => {
						this.record = res.data;
					}).catch((err) => {
						console.log(err)
					});
					document.querySelector(".stjl").style.display = "flex";
				}
			},
			surebjclitent() {

				if (!this.client.negotiationrecord) {
					if (confirm("确认名片已上传或更新")) {
						this.$http.post("/havelable", {
							name: this.client.lable
						}).then((res) => {
							if (res.data[0]) {
								this.$http.post("/haveuser", {
									name: this.client.pic
								}).then((res) => {
									if (res.data[0]) {

										this.$http.post("/updateclient", {
											id: this.client.id,
											name: this.client.name,
											grade: this.client.grade,
											lable: this.client.lable,
											tel: this.client.tel,
											mail: this.client.mail,
											goto: this.client.goto,
											businesscard: this.client.businesscard,
											negotiationrecord: this.client.negotiationrecord,
											pic: this.client.pic,
											address: this.client.address,
											oldid: this.oldid,
										}).then((res) => {
											if (this.myclient) {
												sessionStorage.removeItem("myclientname");
												this.$router.push("/home/Homepage")
											}
											this.$message.success("编辑成功");
											this.$http.get("/getclient", {}).then((res) => {
												this.tableData = res.data;
											}).catch((err) => {
												console.log(err)
											});
											this.addclient = {};
											document.querySelector(".bjclient").style.display = "none";

										}).catch((err) => {
											this.$message.error("编辑失败，请确认数据无误");
											console.log(err)
										});
									} else {
										this.$message.error("编辑失败，负责人不可用");
									}
								}).catch((err) => {
									console.log(err)
								});
							} else {
								this.$message.error("编辑失败，请使用已有的标签");
							}

						}).catch((err) => {
							console.log(err)
						});

					}

				} else {

					this.$http.post("/haverecord", {
						title: this.client.negotiationrecord
					}).then((res) => {
						if (res.data[0]) {
							if (confirm("确认名片已上传或更新")) {
								this.$http.post("/havelable", {
									name: this.client.lable
								}).then((res) => {
									if (res.data[0]) {
										this.$http.post("/haveuser", {
											name: this.client.pic
										}).then((res) => {
											if (res.data[0]) {

												this.$http.post("/updateclient", {
													id: this.client.id,
													name: this.client.name,
													grade: this.client.grade,
													lable: this.client.lable,
													tel: this.client.tel,
													mail: this.client.mail,
													goto: this.client.goto,
													businesscard: this.client.businesscard,
													negotiationrecord: this.client.negotiationrecord,
													pic: this.client.pic,
													address: this.client.address,
													oldid: this.oldid,
												}).then((res) => {

													if (this.myclient) {
														sessionStorage.removeItem("myclientname");
														this.$router.push("/home/Homepage")
													}

													this.$message.success("编辑成功");
													this.$http.get("/getclient", {}).then((res) => {
														this.tableData = res.data;
													}).catch((err) => {
														console.log(err)
													});
													this.addclient = {};
													document.querySelector(".bjclient").style.display = "none";
												}).catch((err) => {
													this.$message.error("编辑失败，请确认数据无误");
													console.log(err)
												});
											} else {
												this.$message.error("编辑失败，负责人不可用");
											}
										}).catch((err) => {
											console.log(err)
										});
									} else {
										this.$message.error("编辑失败，请使用已有的标签");
									}

								}).catch((err) => {
									console.log(err)
								});
							}
						} else {
							this.$message.error("编辑失败，请填写已有的商谈记录");
						}
					}).catch((err) => {
						console.log(err)
					});


				}


			},
			sureaddclitent() {


				if (!this.addclient.negotiationrecord) {

					if (this.addclient.businesscard) {
						this.$http.post("/havelable", {
							name: this.addclient.lable
						}).then((res) => {
							if (res.data[0]) {
								this.$http.post("/haveuser", {
									name: this.addclient.pic
								}).then((res) => {
									if (res.data[0]) {
										this.$http.post("/addclient", {
											id: this.addclient.id,
											name: this.addclient.name,
											grade: this.addclient.grade,
											lable: this.addclient.lable,
											tel: this.addclient.tel,
											mail: this.addclient.mail,
											goto: this.addclient.goto,
											businesscard: this.addclient.businesscard,
											negotiationrecord: this.addclient.negotiationrecord,
											pic: this.addclient.pic,
											address: this.addclient.address,
										}).then((res) => {
											this.$message.success("添加成功");
											this.$http.get("/getclient", {}).then((res) => {
												this.tableData = res.data;
											}).catch((err) => {
												console.log(err)
											});
											this.addclient = {};
											document.querySelector(".addclient").style.display = "none";
										}).catch((err) => {
											this.$message.error("添加失败，请确认数据无误");
											console.log(err)
										});
									} else {
										this.$message.error("添加失败，负责人不可用");
									}
								}).catch((err) => {
									console.log(err)
								});
							} else {
								this.$message.error("添加失败，请使用已有的标签");
							}
						}).catch((err) => {
							console.log(err)
						});
					} else {
						if (confirm("名片未上传，确认添加？")) {
							this.$http.post("/havelable", {
								name: this.addclient.lable
							}).then((res) => {
								if (res.data[0]) {
									this.$http.post("/haveuser", {
										name: this.addclient.pic
									}).then((res) => {
										if (res.data[0]) {
											this.$http.post("/addclient", {
												id: this.addclient.id,
												name: this.addclient.name,
												grade: this.addclient.grade,
												lable: this.addclient.lable,
												tel: this.addclient.tel,
												mail: this.addclient.mail,
												goto: this.addclient.goto,
												businesscard: this.addclient.businesscard,
												negotiationrecord: this.addclient.negotiationrecord,
												pic: this.addclient.pic,
												address: this.addclient.address,
											}).then((res) => {
												this.$message.success("添加成功");
												this.$http.get("/getclient", {}).then((res) => {
													this.tableData = res.data;
												}).catch((err) => {
													console.log(err)
												});
												this.addclient = {};
												document.querySelector(".addclient").style.display = "none";
											}).catch((err) => {
												this.$message.error("添加失败，请确认数据无误");
												console.log(err)
											});

										} else {
											this.$message.error("添加失败，负责人不可用");
										}
									}).catch((err) => {
										console.log(err)
									});
								} else {
									this.$message.error("添加失败，请使用已有的标签");
								}
							}).catch((err) => {
								console.log(err)
							});
						}
					}

				} else {

					this.$http.post("/haverecord", {
						title: this.addclient.negotiationrecord
					}).then((res) => {
						if (res.data[0]) {

							if (this.addclient.businesscard) {
								this.$http.post("/havelable", {
									name: this.addclient.lable
								}).then((res) => {
									if (res.data[0]) {
										this.$http.post("/haveuser", {
											name: this.addclient.pic
										}).then((res) => {
											if (res.data[0]) {
												this.$http.post("/addclient", {
													id: this.addclient.id,
													name: this.addclient.name,
													grade: this.addclient.grade,
													lable: this.addclient.lable,
													tel: this.addclient.tel,
													mail: this.addclient.mail,
													goto: this.addclient.goto,
													businesscard: this.addclient.businesscard,
													negotiationrecord: this.addclient.negotiationrecord,
													pic: this.addclient.pic,
													address: this.addclient.address,
												}).then((res) => {
													this.$message.success("添加成功");
													this.$http.get("/getclient", {}).then((res) => {
														this.tableData = res.data;
													}).catch((err) => {
														console.log(err)
													});
													this.addclient = {};
													document.querySelector(".addclient").style.display = "none";
												}).catch((err) => {
													this.$message.error("添加失败，请确认数据无误");
													console.log(err)
												});
											} else {
												this.$message.error("添加失败，负责人不可用");
											}
										}).catch((err) => {
											console.log(err)
										});
									} else {
										this.$message.error("添加失败，请使用已有的标签");
									}
								}).catch((err) => {
									console.log(err)
								});

							} else {
								if (confirm("名片未上传，确认添加？")) {
									this.$http.post("/havelable", {
										name: this.addclient.lable
									}).then((res) => {
										if (res.data[0]) {
											this.$http.post("/haveuser", {
												name: this.addclient.pic
											}).then((res) => {
												if (res.data[0]) {
													this.$http.post("/addclient", {
														id: this.addclient.id,
														name: this.addclient.name,
														grade: this.addclient.grade,
														lable: this.addclient.lable,
														tel: this.addclient.tel,
														mail: this.addclient.mail,
														goto: this.addclient.goto,
														businesscard: this.addclient.businesscard,
														negotiationrecord: this.addclient.negotiationrecord,
														pic: this.addclient.pic,
														address: this.addclient.address,
													}).then((res) => {
														this.$message.success("添加成功");
														this.$http.get("/getclient", {}).then((res) => {
															this.tableData = res.data;
														}).catch((err) => {
															console.log(err)
														});
														this.addclient = {};
														document.querySelector(".addclient").style.display = "none";
													}).catch((err) => {
														this.$message.error("添加失败，请确认数据无误");
														console.log(err)
													});

												} else {
													this.$message.error("添加失败，负责人不可用");
												}
											}).catch((err) => {
												console.log(err)
											});
										} else {
											this.$message.error("添加失败，请使用已有的标签");
										}
									}).catch((err) => {
										console.log(err)
									});
								}
							}

						} else {
							this.$message.error("添加失败，请填写已有的商谈记录");
						}

					}).catch((err) => {
						console.log(err)
					});
				}

			},
			sureaddrecord() {
				this.$http.post("/haveclient", {
					name: this.addrecord.client_name
				}).then((res) => {
					if (res.data[0]) {
						this.$http.post("/haveuser", {
							name: this.addrecord.pic
						}).then((res) => {
							if (res.data[0]) {
								this.$http.post("/addrecord", {
									id: this.addrecord.id,
									time: this.addrecord.time,
									client_name: this.addrecord.client_name,
									title: this.addrecord.title,
									content: this.addrecord.content,
									pic: this.addrecord.pic,
								}).then((res) => {
									this.$message.success("添加成功");
									this.$http.get("/getrecord", {}).then((res) => {
										this.record = res.data;
									}).catch((err) => {
										console.log(err)
									});
									this.addrecord = {};
									document.querySelector(".addrecord").style.display = "none";
								}).catch((err) => {
									this.$message.error("添加失败，请确认数据无误");
									console.log(err)
								});
							} else {
								this.$message.error("添加失败，负责人不可用");
							}
						}).catch((err) => {
							console.log(err)
						});
					} else {
						this.$message.error("添加失败，请填写已有的客户");
					}
				}).catch((err) => {
					console.log(err)
				});

			},
			surebjrecord() {
				this.$http.post("/haveclient", {
					name: this.openrecord.client_name
				}).then((res) => {
					if (res.data[0]) {
						this.$http.post("/haveuser", {
							name: this.openrecord.pic
						}).then((res) => {
							if (res.data[0]) {
								this.$http.post("/updaterecord", {
									id: this.openrecord.id,
									client_name: this.openrecord.client_name,
									time: this.openrecord.time,
									content: this.openrecord.content,
									pic: this.openrecord.pic,
									title: this.openrecord.title,
									oldid: this.oldid,
								}).then((res) => {
									this.$message.success("编辑成功");
									this.$http.get("/getrecord", {}).then((res) => {
										this.record = res.data;
									}).catch((err) => {
										console.log(err)
									});
									this.openrecord = {};
									document.querySelector(".bjrecord").style.display = "none";
								}).catch((err) => {
									this.$message.error("编辑失败，请确认数据无误");
									console.log(err)
								});
							} else {
								this.$message.error("添加失败，负责人不可用");
							}
						}).catch((err) => {
							console.log(err)
						});
					} else {
						this.$message.error("添加失败，请填写已有的客户");
					}
				}).catch((err) => {
					console.log(err)
				});
			}
		},
		mounted() {
			if (this.myclient) {
				
				this.$http.post("/haveclient", {
					name: this.myclient
				}).then((res) => {
					this.client = res.data[0];
					this.oldid = res.data[0].id;
					document.querySelector(".bjclient").style.display = "flex";
				}).catch((err) => {
					console.log(err)
				});
			}

		},
		created() {

			this.myclient = sessionStorage.myclientname;

			this.$http.get("/getclient", {}).then((res) => {
				this.tableData = res.data;
			}).catch((err) => {
				console.log(err)
			});

			this.$http.get("/getptlable", {}).then((res) => {
				this.ptlable = res.data;
			}).catch((err) => {
				console.log(err)
			});

			this.$http.get("/getsxlable", {}).then((res) => {
				this.sxlable = res.data;
			}).catch((err) => {
				console.log(err)
			});


			this.$http.get("/getrecord", {}).then((res) => {
				this.record = res.data;
			}).catch((err) => {
				console.log(err)
			});


		},

	}
</script>

<style scoped>
	.client {
		height: 577px;
		width: 1366px;
		display: flex;
	}

	.khjb {
		padding-left: 19px;
		height: 40px;
		width: 180px;
		font-size: 20px;
		line-height: 40px;
	}

	.bac {
		background-color: rgb(31, 132, 244);
	}

	.client-l {
		padding-top: 20px;
		height: 557px;
		width: 186px;
		display: flex;
		flex-wrap: wrap;
		background-color: rgb(72, 79, 96);
	}

	.client-r {
		display: none;
		flex-wrap: wrap;
		height: 577px;
		width: 1180px;
	}

	.biaoq-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		margin-right: 50px;
		margin-left: 50px;
		width: 1040px;
	}

	.biaoq-content {
		width: 1081px;
		height: 497px;
	}

	.biaoq-pt {}

	.biaoq-sx {
		display: none;
	}

	.jb {
		/* display: none; */
		display: flex;
	}

	.biaoq {
		display: none;
		/* display: flex; */
	}

	.stjl {
		display: none;
		/* display: flex; */
	}

	ul {
		height: 77px;
	}

	.lookclient {
		width: 1366px;
		position: absolute;
		background-color: white;
		justify-content: center;
		z-index: 5;
		display: none;
		flex-wrap: wrap;
		background-color: rgb(242, 245, 250);
	}

	.clientlookbox {
		background-color: white;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: center;
		width: 1280px;
		padding-left: 30px;
	}

	.c1 {
		height: 40px;
	}

	.c2 {
		height: 200px;
	}

	.c2-in {
		width: 250px;
		height: 100px;
		line-height: 100px;
	}

	.c3 {
		height: 330px;
		justify-content: space-around;
	}

	.img {
		position: relative;
		top: -20px;
		left: 70px;
		width: 300px;
		height: 280px;
	}

	.upimg {

		background-color: lightblue;
		width: 300px;
		height: 240px;
	}

	.c3-l {
		height: 300px;
		width: 500px;
	}

	.c3-r {
		text-indent: 20px;
		height: 300px;
		width: 500px;
	}

	.addclient {
		/* display: flex; */
	}

	.cl-khjb {
		height: 480px;
		width: 1180px;
	}

	.cl-l-card {
		text-indent: 20px;
		color: white;
		padding-top: 5px;
		font-size: 14px;
		height: 30px;
		width: 186px;
		line-height: 30px;
		cursor: pointer;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}
</style>
