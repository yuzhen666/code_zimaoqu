import axios from 'axios'

const state = {
    List: [],
    region: 'SH',
    refresh: true,
    totalNum: 0,
    keywords: ''
};
const getters = {
    getList(state) {
        return state.List;
    },
    getRegion(state) {
        return state.region;
    },
    getRefresh(state) {
        return state.refresh;
    },
    getTotalNum(state) {
        return state.totalNum;
    },
    getKeywords(state) {
        return state.keywords;
    },
};
const mutations = {
    pageList(state, item) {
        var url = `http://127.0.0.1:7001/?region=${item.region}&differ=${item.differ}&keywords=${item.keywords}&sort=${item.sort}&pageNum=${item.pageNum}`
        axios.get(url)
            .then(res => {
                state.List = [];
                res.data.results.results.forEach(element => {
                    state.List.push(element)
                });
                state.totalNum = res.data.results.totalNum;
            }, res => {
                console.log(err);
            })
    },
    changeRegion(state, item) {
        state.region = item.region;
    },
    changeRefresh(state, item) {
        state.refresh = item.refresh;
    },
    changeKeywords(state, item) {
        state.keywords = item.keywords;
    }
};
const actions = {
    invokePageList(context, item) {
        context.commit('pageList', item);
    },
    invokeChangeRegion(context, item) {
        context.commit('changeRegion', item);
    },
    invokeChangeRefresh(context, item) {
        context.commit('changeRefresh', item);
    },
    invokeChangeKeywords(context, item) {
        context.commit('changeKeywords', item);
    },
};
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}