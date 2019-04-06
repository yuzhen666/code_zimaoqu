<template>
    <div id="header">
        <div class="header-left">
            <i class="el-icon-search search-icon"></i>
            <p class="header-text brand-color">自贸区新闻检索平台</p>
        </div>
        <div class="header-right">
            <input type="text" class="search-input" placeholder="     请输入搜索内容...">
            <p class="search-text" style="color:cursor:pointer">搜索</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "myHeader",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
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
