import Vue from "vue";
import VueRouter from "vue-router";

import home from "../views/home.vue"; // 首页
import login from "../components/home/login.vue"; // 登录页面
import Homepage from "../components/home/Homepage.vue"; // 主页
import Marketing from "../components/home/Marketing.vue"; // 营销
import client from "../components/home/client.vue"; // 客户
import service from "../components/home/service.vue"; // 服务
import Statisticalreport from "../components/home/Statisticalreport.vue"; // 统计报表
import Basicdata from "../components/home/Basicdata.vue"; // 基础数据
import authoritymanagement from "../components/home/authoritymanagement.vue"; // 权限管理

//避免重复触发同一个路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}//避免重复触发同一个路由


Vue.use(VueRouter);

const routes = [
	
	{ // 打开网页
		path: "/",
		name: "",
		component: home
	},

	{ // 首页
		path: "/home",
		name: "home",
		component: home,
		children:[
			{
				path:'Homepage',
				component: Homepage
			},
			{
				path:'Marketing',
				component: Marketing
			},
			{
				path:'client',
				component: client
			},
			{
				path:'service',
				component: service
			},
			{
				path:'Statisticalreport',
				component: Statisticalreport
			},
			{
				path:'Basicdata',
				component: Basicdata
			},
			{
				path:'authoritymanagement',
				component: authoritymanagement
			},
		]
	},
	{ // 登录页面
		path: "/login",
		name: "login",
		component: login,
		beforeEnter(to,from,next) {
			if (sessionStorage.bsusername == null) {
				next();
			} else {
				next(false);
			}
		},
	},
];

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});

export default router;
