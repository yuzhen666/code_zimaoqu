<template>
    <div class="index">
        <myHeader class="my-header"/>
        <div class="aside-main">
            <myAside/>
            <myMain/>
        </div>
    </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import myAside from "@/components/aside.vue";
import myMain from "@/components/main.vue";
export default {
    name: "index",
    components: { myHeader, myAside, myMain },
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.index
    .aside-main
        display flex;
</style>
