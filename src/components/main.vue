<template>
    <div id="main">
        <p class="result-text1">为您找到相关结果约{{totalNum}}条。</p>
        <p class="result-text2" v-if="keywords != ''">以下为您显示“{{keywords}}”的搜索结果。</p>
        <ul>
            <li v-for="value in results" :key="value.id">
                <p class="result-title mgb10 blue">{{value.title }}</p>
                <p class="result-content mgb10">{{value.abstract | formatContent }}</p>
                <div class="result-info">
                    <a class="result-url mgb10 green" :href=value.url>{{value.url | formatUrl}}</a>
                    <span class="result-date">{{value.date | formatDate}}</span>
                </div>
            </li>
        </ul>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="totalNum*10"
            class="page-item"
            @current-change="currentChange()"
            ref="input1"
            v-if="refresh"
        ></el-pagination>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "myMain",
    data() {
        return {};
    },
    created() {
        this.invokePageList({
            region: "all",
            keywords: "",
            pageNum: 0
        });
    },
    methods: {
        ...mapActions("zimaoqu", ["invokePageList"]),
        currentChange() {
            this.invokePageList({
                pageNum: this.$refs.input1.internalCurrentPage - 1,
                region: this.region
            });
        }
    },
    computed: {
        ...mapGetters("zimaoqu", {
            results: "getList",
            region: "getRegion",
            currentPage: "getCurrentPage",
            refresh: "getRefresh",
            totalNum: "getTotalNum",
            keywords: "getKeywords"
        }),
    },
    filters: {
        formatContent: function(value) {
            if (!value) {
                return "";
            } else {
                return value.slice(0, 200) + "...";
            }
        },
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

        .result-content
            font-size small;

        .result-info
            display flex;
            justify-content space-between;
            font-size 14px;
            margin-top 10px;

    .page-item
        margin-top 30px;
        margin-bottom 70px;
</style>
