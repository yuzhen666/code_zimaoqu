import Vue from 'vue';
import Vuex from 'vuex';
import zimaoqu from './modules/zimaoqu'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        zimaoqu,
    }
});