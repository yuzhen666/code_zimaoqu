import axios from 'axios'

const state = {
    List: [],
};
const getters = {
    getList(state) {
        return state.List;
    }
};
const mutations = {
    initList(state) {
        axios.get("http://127.0.0.1:7001/")
            .then(res => {
                res.data.results.forEach(element => {
                    state.List.push(element)
                });
            }, res => {
                console.log(err);
            })
    }
};
const actions = {
    invokeInitList(context) {
        context.commit('initList');
    }
};
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}