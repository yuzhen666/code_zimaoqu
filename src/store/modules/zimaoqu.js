import axios from 'axios'

const state = {
    List: [],
    refresh: true,
    totalNum: 0,
    region: 'all',
    keywords: '',
    sort: 'down',
    differ: '4',
    pageNum: 0
};
const getters = {
    getList(state) {
        return state.List;
    },
    getRefresh(state) {
        return state.refresh;
    },
    getTotalNum(state) {
        return state.totalNum;
    },
    getRegion(state) {
        return state.region;
    },
    getKeywords(state) {
        return state.keywords;
    },
    getSort(state) {
        return state.sort;
    },
    getDiffer(state) {
        return state.differ;
    },
    getPageNum(state) {
        return state.pageNum;
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
    changeRefresh(state, item) {
        state.refresh = item.refresh;
    },
    changeRegion(state, item) {
        state.region = item.region;
    },
    changeKeywords(state, item) {
        state.keywords = item.keywords;
    },
    changeSort(state, item) {
        state.sort = item.sort;
    },
    changeDiffer(state, item) {
        state.differ = item.differ;
    },
    changePageNum(state, item) {
        state.pageNum = item.pageNum;
    }
};
const actions = {
    invokePageList(context, item) {
        context.commit('pageList', item);
    },
    invokeChangeRefresh(context, item) {
        context.commit('changeRefresh', item);
    },
    invokeChangeRegion(context, item) {
        context.commit('changeRegion', item);
    },
    invokeChangeKeywords(context, item) {
        context.commit('changeKeywords', item);
    },
    invokeChangeSort(context, item) {
        context.commit('changeSort', item);
    }, 
    invokeChangeDiffer(context, item) {
        context.commit('changeDiffer', item);
    },
    invokeChangePageNum(context, item) {
        context.commit('changePageNum', item);
    },
};
export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}