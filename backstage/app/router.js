//router.js
module.exports = app => {
	const {
		router,
		controller
	} = app;
	router.post('/login.do', controller.loginController.login); //登录

	router.get("/showcode", controller.codeController.showCode); // 验证码

	router.post("/register", controller.loginController.register); // 注册

	router.post('/haveuser', controller.codeController.haveuser)
	//根据name获取user信息

	router.post("/getmyservice", controller.serviceController.getmyservice); //根据username获取我的任务

	router.post("/getmyclient", controller.clientController.getmyclient); //根据username获取我的客户

	router.get("/getmarketing", controller.marketingController.getmarketing);
	//查询marketing的数据

	router.get("/getplan", controller.planController.getplan);
	// 查询plan的数据

	router.post("/openmarketing", controller.marketingController.openmarketing); // 根据title查询marketing的数据

	router.post("/openplan", controller.planController.openplan);
	// 根据title查询plan的数据

	router.post("/updatemarketing", controller.marketingController.updatemarketing); // 根据标题更改marketing的数据

	router.post("/updateplan", controller.planController.updateplan); // 根据标题更改plan的数据

	router.post("/delmarketing", controller.marketingController.delmarketing);
	// 根据title删除marketing的数据

	router.post("/delplan", controller.planController.delplan);
	// 根据title删除plan的数据

	router.post("/addmarketing", controller.marketingController.addmarketing);
	// 增加记录到marketing表

	router.post("/addplan", controller.planController.addplan);
	// 增加记录到plan表

	router.get("/getclient", controller.clientController.getclient);
	//查询client的数据

	router.post("/delclient", controller.clientController.delclient);
	//根据id删除client的数据

	router.post("/openclient", controller.clientController.openclient);
	//根据id查询client的数据


	router.get("/groupclient", controller.clientController.groupclient); //根据优先级分组别查询client的数据

	router.get("/groupclienta", controller.clientController.groupclienta); //根据标签分组别查询client的数据

	router.get("/groupclientc", controller.clientController.groupclientc); //根据负责人分组别查询client的数据

	router.post("/addclient", controller.clientController.addclient); //增加记录到client表

	router.post("/updateclient", controller.clientController.updateclient); // 根据id更改client的数据

	router.post("/likeclient", controller.clientController.likeclient);
	//模糊查询client的数据

	router.post('/haveclient', controller.clientController.haveclient)
	//根据name获取公司信息

	router.post('/upload', controller.uploadController.upload)
	//上传客户名片

	router.post("/likelable", controller.lableController.likelable);
	//模糊查询lable的数据

	router.get('/getptlable', controller.lableController.getptlable)
	//获取普通标签信息

	router.get('/getsxlable', controller.lableController.getsxlable)
	//获取属性标签信息

	router.post('/havelable', controller.lableController.havelable)
	//根据name获取标签信息

	router.post("/updateptlable", controller.lableController.updateptlable); // 根据id更改普通lable的数据

	router.post("/updatesxlable", controller.lableController.updatesxlable); // 根据id更改属性lable的数据

	router.post("/addptlable", controller.lableController.addptlable); // 添加普通lable的数据

	router.post("/addsxlable", controller.lableController.addsxlable); // 添加属性lable的数据

	router.post("/delptlable", controller.lableController.delptlable); // 根据id删除lable的数据

	router.get("/getrecord", controller.recordController.getrecord);
	//查询record的数据

	router.post("/delrecord", controller.recordController.delrecord);
	//根据id删除record的数据

	router.post("/addrecord", controller.recordController.addrecord); //增加记录到record表

	router.post("/openrecord", controller.recordController.openrecord); // 根据id查询record的数据

	router.post("/updaterecord", controller.recordController.updaterecord); // 根据id编辑record的数据

	router.post("/likerecord", controller.recordController.likerecord);
	//模糊查询record的数据

	router.post("/haverecord", controller.recordController.haverecord);
	//根据标题查询record的数据

	router.post("/getservice", controller.serviceController.getservice); //获取所有任务


	router.get("/groupservice", controller.serviceController.groupservice); //服务对象分组查询service的数据

	router.get("/groupservicea", controller.serviceController.groupservicea); //等级分组查询service的数据

	router.get("/groupserviceb", controller.serviceController.groupserviceb); //负责人分组查询service的数据


	router.post("/addservice", controller.serviceController.addservice); //增加记录到service表

	router.post("/delservice", controller.serviceController.delservice); //根据id删除service的数据

	router.post("/openservice", controller.serviceController.openservice); //根据id查询service的数据

	router.post("/picservice", controller.serviceController.picservice); //查询有pic的service的数据

	router.post("/unpicservice", controller.serviceController.unpicservice); //查询没有pic的service的数据

	router.post("/bjservice", controller.serviceController.bjservice); //根据id修改service的数据

	router.post("/titleservice", controller.serviceController.titleservice); //根据title修改service的数据

	router.post("/updatepicservice", controller.serviceController.updatepicservice); //根据id修改service的pic
	router.post("/picstservice", controller.serviceController.picstservice); //查询已处理的service的数据

	router.post("/stservice", controller.serviceController.stservice); //根据id修改service的状态

	router.post("/instservice", controller.serviceController.instservice); //根据id修改service的状态

	router.post("/getbasicdata", controller.basicdataController.getbasicdata); //获取所有产品信息

	router.post("/addbasicdata", controller.basicdataController.addbasicdata); //增加记录到basicdata表

	router.post("/delbasicdata", controller.basicdataController.delbasicdata); //根据id删除basicdata的数据

	router.post("/updatebasicdata", controller.basicdataController.updatebasicdata); //根据id更新basicdata的数据

	router.post("/likebasicdata", controller.basicdataController.likebasicdata);
	//模糊查询basicdata的数据

	router.get("/getuser", controller.serviceController.getuser); //获取所有用户信息

	router.post("/updateusera", controller.serviceController.updateusera); //根据username修改user的状态

	router.post("/updateuserb", controller.serviceController.updateuserb); //根据username修改user的状态

	router.post("/cangl", controller.serviceController.cangl); //根据username查询user
	
	router.post("/likeuser", controller.basicdataController.likeuser); //模糊查询user的数据
	

};
