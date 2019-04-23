<template>
    <div id="aside">
        <p>地区 分类</p>
        <ul>
            <li>
                <label>
                    <input name="region" @click="selectRegion('all')" type="radio" value checked>不限
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('上海')" type="radio" value>上海自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('福建')" type="radio" value>福建自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('广东')" type="radio" value>广东自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('河南')" type="radio" value>河南自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('陕西')" type="radio" value>陕西自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('四川')" type="radio" value>四川自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('天津')" type="radio" value>天津自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('重庆')" type="radio" value>重庆自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('湖北')" type="radio" value>湖北自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('浙江')" type="radio" value>浙江自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" @click="selectRegion('辽宁')" type="radio" value>辽宁自贸区
                </label>
            </li>
        </ul>
        <p class="mgt25">时间范围</p>
        <ul>
            <li>
                <label>
                    <input name="timeRange" @click="selectDate('4')" type="radio" value checked>时间不限
                </label>
            </li>
            <li>
                <label>
                    <input name="timeRange" @click="selectDate('1')" type="radio" value>一个月内
                </label>
            </li>
            <li>
                <label>
                    <input name="timeRange" @click="selectDate('2')" type="radio" value>三个月内
                </label>
            </li>
            <li>
                <label>
                    <input name="timeRange" @click="selectDate('3')" type="radio" value>近一年内
                </label>
            </li>
        </ul>
        <p class="mgt25">排序方式</p>
        <ul>
            <!-- <li>
                <label>
                    <input name="orderType" type="radio" value>按相关度排序
                </label>
            </li>-->
            <li>
                <label>
                    <input name="orderType" @click="orderBy('down')" type="radio" value checked>按时间降序排序
                </label>
            </li>
            <li>
                <label>
                    <input name="orderType" @click="orderBy('up')" type="radio" value>按时间升序排序
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "myAside",
    data() {
        return {};
    },
    computed: {
        ...mapGetters("zimaoqu", {
            results: "getList",
            refresh: "getRefresh",
            totalNum: "getTotalNum",
            region: "getRegion",
            keywords: "getKeywords",
            sort: "getSort",
            differ: "getDiffer",
            pageNum: "getPageNum"
        })
    },
    methods: {
        ...mapActions("zimaoqu", ["invokePageList"]),
        ...mapActions("zimaoqu", ["invokeChangeRefresh"]),
        ...mapActions("zimaoqu", ["invokeChangeRegion"]),
        ...mapActions("zimaoqu", ["invokeChangeSort"]),
        ...mapActions("zimaoqu", ["invokeChangeDiffer"]),
        selectRegion(param) {
            this.scroll();
            this.invokeChangeRegion({ region: param });
            this.invokeChangeRefresh({ refresh: false });
            this.$nextTick(() => {
                this.invokeChangeRefresh({ refresh: true });
            });
            this.invokePageList({
                region: this.region,
                keywords: this.keywords,
                sort: this.sort,
                differ: this.differ,
                pageNum: 0
            });
        },
        selectDate(param) {
            this.scroll();
            this.invokeChangeDiffer({ differ: param });
            this.invokeChangeRefresh({ refresh: false });
            this.$nextTick(() => {
                this.invokeChangeRefresh({ refresh: true });
            });
            this.invokePageList({
                region: this.region,
                keywords: this.keywords,
                sort: this.sort,
                differ: this.differ,
                pageNum: 0
            });
        },
        orderBy(param) {
            this.scroll();
            this.invokeChangeSort({ sort: param });
            this.invokeChangeRefresh({ refresh: false });
            this.$nextTick(() => {
                this.invokeChangeRefresh({ refresh: true });
            });
            this.invokePageList({
                region: this.region,
                keywords: this.keywords,
                sort: this.sort,
                differ: this.differ,
                pageNum: 0
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#aside
    width 23%;
    padding 35px 30px 0px 30px;
    border-top 1px solid rgb(240, 240, 240);
    border-left 1px solid rgb(240, 240, 240);
    border-right 1px solid rgb(240, 240, 240);
    background-color #fff;

    p
        text-align left;
        font-weight bold;

    .mgt25
        margin-top 25px;

    li
        height 45px;
        border-bottom 1px solid rgb(240, 240, 240);
        display flex;
        align-items center;

        input
            margin-right 3px;
            cursor pointer;

        label
            cursor pointer;
</style>
