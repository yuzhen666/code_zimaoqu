<template>
    <div id="aside">
        <p>结果分类</p>
        <ul>
            <li>
                <label>
                    <input name="region" type="radio" value>上海自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" type="radio" value>福建自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" type="radio" value>广东自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" type="radio" value>河南自贸区
                </label>
            </li>
            <li>
                <label>
                    <input name="region" type="radio" value>陕西自贸区
                </label>
            </li>
        </ul>
        <p class="mgt25">时间范围</p>
        <ul>
            <li>
                <label>
                    <input name="timeRange" type="radio" value>时间不限
                </label>
            </li>
            <li>
                <label>
                    <input name="timeRange" type="radio" value>一天内
                </label>
            </li>
            <li>
                <label>
                    <input name="timeRange" type="radio" value>一周内
                </label>
            </li>
            <li>
                <label>
                    <input name="timeRange" type="radio" value>一月内
                </label>
            </li>
        </ul>
        <p class="mgt25">排序方式</p>
        <ul>
            <li>
                <label>
                    <input name="orderType" type="radio" value>按相关度排序
                </label>
            </li>
            <li>
                <label>
                    <input name="orderType" type="radio" value>按时间排序
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "myAside",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            radio2: 3
        };
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
</style>
