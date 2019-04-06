// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = axios

// main.js的主要作用是把项目中最顶层的app.vue组件挂载到DOM中，其他所有的组件都可以看做是app.vue的子组件。
new Vue({
    el: '#app',
    router,
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    // 子组件能通过 this.$store 访问到。
    store,
    components: { App },
    template: '<App/>'
})
