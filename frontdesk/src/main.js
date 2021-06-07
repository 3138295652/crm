import Vue from "vue";
import router from "./router";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:7001";
Vue.prototype.$http = axios;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
