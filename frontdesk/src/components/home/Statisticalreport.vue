<template>
	 <section class="chart-container" style="display: flex; justify-content: space-around; position: relative; top: 50px;">
	        <el-row style="width:35%;">                     
	            <el-col :span="21">
	                <div id="chartPie" style="width:100%; height:400px;"></div>
	            </el-col>     
					 <el-button type="primary" @click="kh1">优先级</el-button>
					 <el-button type="primary" @click="kh2">标签</el-button>
					 <el-button type="primary" @click="kh3">负责人</el-button>
	        </el-row>
			
			<el-row style="width:35%;">
			    <el-col :span="21">
			        <div id="chartPiea" style="width:100%; height:400px;"></div>
			    </el-col>    
					 <el-button type="primary"  @click="kh4">服务对象</el-button>
					 <el-button type="primary"  @click="kh5">优先级</el-button>
					 <el-button type="primary"  @click="kh6">负责人</el-button>
			</el-row>
	    </section>
</template>

<script>
	import echarts from 'echarts';
	export default {
		data:function(){
			return{
				tableData1: [],
				tableData2: [],
				tableData3: [],
				chartPie: null,
			}
		},
		components: {
		},
		methods:{
			kh1(){
				this.$http.get("/groupclient", {}).then((res) => {
					this.tableData1 = res.data;
					for(let i=0;i<this.tableData1.length;i++){
						this.tableData1[i].name=this.tableData1[i].grade;
						this.tableData1[i].value=this.tableData1[i].value*1;
						delete this.tableData1[i].grade
					}
					this.chartPie.setOption({
					    title: {
					        text: '客户分析',
					        x: 'center'
					    },
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        left: 'left',
					    },
					    series: [
					        {
					            name: '客户优先级',
					            type: 'pie',
					            radius: '55%',
					            data: this.tableData1,
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					});
					}).catch((err) => {
						console.log(err)
					});
					
			},
			kh2(){
				this.$http.get("/groupclienta", {}).then((res) => {
					this.tableData1 = res.data;
					for(let i=0;i<this.tableData1.length;i++){
						this.tableData1[i].name=this.tableData1[i].lable;
						this.tableData1[i].value=this.tableData1[i].value*1;
						delete this.tableData1[i].lable
					}
					this.chartPie.setOption({
					    title: {
					        text: '客户分析',
					        x: 'center'
					    },
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        left: 'left',
					    },
					    series: [
					        {
					            name: '客户标签',
					            type: 'pie',
					            radius: '55%',
								center: ['50%', '60%'],
					            data: this.tableData1,
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					});
					}).catch((err) => {
						console.log(err)
					});
					
			},
			kh3(){
				this.$http.get("/groupclientc", {}).then((res) => {
					this.tableData1 = res.data;
					for(let i=0;i<this.tableData1.length;i++){
						this.tableData1[i].name=this.tableData1[i].pic;
						this.tableData1[i].value=this.tableData1[i].value*1;
						delete this.tableData1[i].pic
					}
					this.chartPie.setOption({
					    title: {
					        text: '客户分析',
					        x: 'center'
					    },
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        left: 'left',
					    },
					    series: [
					        {
					            name: '客户优先级',
					            type: 'pie',
					            radius: '55%',
								center: ['50%', '60%'],
					            data: this.tableData1,
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					});
					}).catch((err) => {
						console.log(err)
					});
					
			},
			kh4(){
				this.$http.get("/groupservice", {}).then((res) => {
					this.tableData2 = res.data;
					for(let i=0;i<this.tableData2.length;i++){
						this.tableData2[i].name=this.tableData2[i].clientname;
						this.tableData2[i].value=this.tableData2[i].value*1;
						delete this.tableData2[i].clientname
					}
					this.chartPiea.setOption({
					    title: {
					        text: '服务分析',
					        x: 'center'
					    },
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        left: 'left',
					    },
					    series: [
					        {
					            name: '服务对象',
					            type: 'pie',
					            radius: '55%',
					            center: ['50%', '60%'],
					            data: this.tableData2,
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					});
					}).catch((err) => {
						console.log(err)
					});
					
			},
			kh5(){
				this.$http.get("/groupservicea", {}).then((res) => {
					this.tableData2 = res.data;
					for(let i=0;i<this.tableData2.length;i++){
						this.tableData2[i].name=this.tableData2[i].lv;
						this.tableData2[i].value=this.tableData2[i].value*1;
						delete this.tableData2[i].lv
					}
					this.chartPiea.setOption({
					    title: {
					        text: '服务分析',
					        x: 'center'
					    },
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        left: 'left',
					    },
					    series: [
					        {
					            name: '优先级',
					            type: 'pie',
					            radius: '55%',
					            center: ['50%', '60%'],
					            data: this.tableData2,
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					});
					}).catch((err) => {
						console.log(err)
					});
					
			},
			kh6(){
				this.$http.get("/groupserviceb", {}).then((res) => {
					this.tableData2 = res.data;
					for(let i=0;i<this.tableData2.length;i++){
						this.tableData2[i].name=this.tableData2[i].pic;
						this.tableData2[i].value=this.tableData2[i].value*1;
						delete this.tableData2[i].pic
					}
					this.chartPiea.setOption({
					    title: {
					        text: '服务分析',
					        x: 'center'
					    },
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        left: 'left',
					    },
					    series: [
					        {
					            name: '负责人',
					            type: 'pie',
					            radius: '55%',
					            center: ['50%', '60%'],
					            data: this.tableData2,
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					});
					}).catch((err) => {
						console.log(err)
					});
					
			},
		 drawPieChart() {
						this.$http.get("/groupclient", {}).then((res) => {
							this.tableData1 = res.data;
							for(let i=0;i<this.tableData1.length;i++){
								this.tableData1[i].name=this.tableData1[i].grade;
								this.tableData1[i].value=this.tableData1[i].value*1;
								delete this.tableData1[i].grade
							}
								this.chartPie = echarts.init(document.getElementById('chartPie'));
								this.chartPie.setOption({
								    title: {
								        text: '客户分析',
								        x: 'center'
								    },
								    tooltip: {
								        trigger: 'item',
								        formatter: "{a} <br/>{b} : {c} ({d}%)"
								    },
								    legend: {
								        orient: 'vertical',
								        left: 'left',
								    },
								    series: [
								        {
								            name: '客户优先级',
								            type: 'pie',
								            radius: '55%',
											center: ['50%', '60%'],
								            data: this.tableData1,
								            itemStyle: {
								                emphasis: {
								                    shadowBlur: 10,
								                    shadowOffsetX: 0,
								                    shadowColor: 'rgba(0, 0, 0, 0.5)'
								                }
								            }
								        }
								    ]
								});
						}).catch((err) => {
							console.log(err)
						});
						
		            },
					drawPieCharta() {
						this.$http.get("/groupservice", {}).then((res) => {
							this.tableData2 = res.data;
							for(let i=0;i<this.tableData2.length;i++){
								this.tableData2[i].name=this.tableData2[i].clientname;
								this.tableData2[i].value=this.tableData2[i].value*1;
								delete this.tableData2[i].clientname
							}
					               this.chartPiea = echarts.init(document.getElementById('chartPiea'));
					               this.chartPiea.setOption({
					                   title: {
					                       text: '服务分析',
					                       x: 'center'
					                   },
					                   tooltip: {
					                       trigger: 'item',
					                       formatter: "{a} <br/>{b} : {c} ({d}%)"
					                   },
					                   legend: {
					                       orient: 'vertical',
					                       left: 'left',
					                   },
					                   series: [
					                       {
					                           name: '服务对象',
					                           type: 'pie',
					                           radius: '55%',
					                           center: ['50%', '60%'],
					                           data: this.tableData2,
					                           itemStyle: {
					                               emphasis: {
					                                   shadowBlur: 10,
					                                   shadowOffsetX: 0,
					                                   shadowColor: 'rgba(0, 0, 0, 0.5)'
					                               }
					                           }
					                       }
					                   ]
					               });
								   }).catch((err) => {
								   	console.log(err)
								   });
					           },
		            drawCharts() {
		                this.drawPieChart()
						this.drawPieCharta()
		            },
		},
		  mounted: function () {
		            this.drawCharts()
		        },
		created() {
		},
	}
</script>

<style scoped>
	*{
		user-select: none;
		padding: 0;
		margin: 0;
		text-align: center;
	}
	
	.tjbb{
		height: 577px;
		width: 1366px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.t-1{
		width: 30%;
		height: 60%;
		overflow: hidden;
		border: 1px solid #0080FF;
		border-radius: 5px;
	}
	.t-1-2{
		position: relative;
		top: 30px;
		left: 100px;
		width: 60%;
	}
	.t-1-3{
		position: relative;
		top: 70px;
		height: 50px;
		width: 100%;
	}
	.tiao{
		margin-bottom: 15px;
	}
	.but{
		cursor: pointer;
		width: 40%;
		display: flex;
		justify-content: space-between;
		left: 130px;
	}
	.yxj{
		display: block;
	}
	.bq{
		display: none;
	}
	.fzr{
		display: none;
	}
	 .chart-container {
	        width: 100%;
	        float: left;
	    }
	    .el-col {
	        padding: 30px 20px;
	    }
</style>
