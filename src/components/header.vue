<template>
    <div id="header">
        <div class="header-left">
            <i class="el-icon-search search-icon"></i>
            <p class="header-text brand-color">自贸区新闻检索平台</p>
        </div>
        <div class="header-right">
            <input type="text" class="search-input" placeholder="请输入搜索内容..." v-model="keywords">
            <p class="search-text" style="color:cursor:pointer" @click="search">搜索</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "myHeader",
    data() {
        return {
            keywords: ""
        };
    },
    methods: {
        ...mapActions("zimaoqu", ["invokePageList"]),
        ...mapActions("zimaoqu", ["invokeChangeKeywords"]),
        currentChange() {
            this.invokePageList({
                pageNum: this.$refs.input1.internalCurrentPage - 1,
                region: this.region
            });
        },
        search() {
            this.invokeChangeKeywords({ keywords: this.keywords });
            this.invokePageList({
                region: "浙江",
                keywords: this.keywords,
                pageNum: 0
            });
        }
    },
    computed: {
        ...mapGetters("zimaoqu", {
            results: "getList",
            region: "getRegion",
            currentPage: "getCurrentPage",
            refresh: "getRefresh",
            totalNum: "getTotalNum"
            // keywords: "getKeywords"
        }),
        resultCounts() {
            return 1222222;
        },
        resultTime() {
            return 2.33;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#header
    height 120px;
    width 100%;
    display flex;
    justify-content space-between;
    align-items center;

    .header-left
        color rgb(64, 158, 255);
        font-weight bold;
        font-size 36px;
        display flex;
        align-items center;

        .search-icon
            margin-top 5px;

    .header-right
        // border-radius 30px;
        width 740px;
        height 45px;
        // background-color rgb(64, 158, 255);
        display flex;
        justify-content space-between;
        align-items center;

        // background-color brand;
        .search-input
            width 90%;
            height 40px;
            padding-left 20px;
            // border-radius 30px 0px 0px 30px;

        .search-text
            width 10%;
            height 44px;
            vertical-align center;
            color white;
            font-size 20px;
            font-weight bold;
            background-color rgb(64, 158, 255);
            line-height 44px;
</style>
