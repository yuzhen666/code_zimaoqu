<template>
    <div id="main">
        <p class="result-text1">为您找到相关结果约{{totalNum}}条。</p>
        <p class="result-text2" v-if="keywords != ''">以下为您显示“{{keywords}}”的搜索结果。</p>
        <ul>
            <li v-for="value in results" :key="value.id">
                <a class="result-title mgb10 blue" :href="value.url">{{value.title }}</a>
                <p class="result-content mgb10">{{value.abstract }}</p>
                <div class="result-info">
                    <a class="result-url mgb10 green" :href="value.url">{{value.url | formatUrl}}</a>
                    <span class="result-date">{{value.date | formatDate}}</span>
                </div>
            </li>
        </ul>
        <div v-if="displayVal">
            <div class="empty-result" v-if="totalNum == 0">
                <p>很抱歉，没有找到和您的查询相匹配的结果。</p>
                <p class="mgt20">您可以尝试更换检索词或更改筛选条件，重新检索。</p>
            </div>
        </div>
        <div v-if="totalNum != 0">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="Math.ceil(totalNum*10/6)"
                class="page-item"
                @current-change="currentChange()"
                ref="input1"
                v-if="refresh"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "myMain",
    data() {
        return {
            displayVal: false
        };
    },
    created() {
        this.invokePageList({
            region: "all",
            keywords: "",
            pageNum: 0
        });
    },
    beforeUpdate() {
        this.displayVal = true;
    },
    methods: {
        ...mapActions("zimaoqu", ["invokePageList"]),
        ...mapActions("zimaoqu", ["changePageNum"]),
        currentChange() {
            this.scroll();
            this.invokePageList({
                region: this.region,
                keywords: this.keywords,
                sort: this.sort,
                differ: this.differ,
                pageNum: this.$refs.input1.internalCurrentPage - 1
            });
        }
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
    filters: {
        formatUrl: function(value) {
            if (!value) {
                return "";
            } else {
                return value.slice(0, 50) + "...";
            }
        },
        formatDate: function(value) {
            if (!value) {
                return "";
            } else {
                return value.slice(0, 10);
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#main
    width 73%;
    border-top 1px solid rgb(240, 240, 240);
    border-right 1px solid rgb(240, 240, 240);
    padding 35px 30px 0px 30px;
    background-color #fff;

    .result-text1
        color rgb(153, 153, 153);
        font-weight bold;
        text-align left;

    .result-text2
        font-weight bold;
        text-align left;
        margin-top 15px;
        width 100%;
        padding-bottom 10px;
        border-bottom 1px solid rgb(240, 240, 240);

    li
        padding 30px 0px;
        text-align left;
        border-bottom 2px solid rgb(240, 240, 240);

        .result-url
            border-bottom 1px solid rgb(125 173 72);

        .mgb10
            margin-bottom 10px;

        .green
            color rgb(125 173 72);

        .result-title
            font-size 18px;
            color rgb(64, 158, 255);
            cursor pointer;

        .result-content
            font-size small;

        .result-info
            display flex;
            justify-content space-between;
            font-size 14px;
            margin-top 10px;

    .empty-result
        color red;
        margin-top 50px;

        .mgt20
            margin-top 20px;

    .page-item
        margin-top 30px;
        margin-bottom 70px;
</style>
