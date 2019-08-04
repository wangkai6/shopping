<template>
    <div class="footer">
        <div @click="distribution()">配送到家</div>
        <div @click="shopping">购物车</div>
        <div @click="me">我的</div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods : {
        distribution(){
            this.$router.push({
                path:"/distribution"
            })
        },
        shopping(){
            this.$router.push({
                path:"/shopping"
            })
        },
        me(){
            this.$router.push({
                path:"/me"
            })
        }
    }
}
</script>
<style>
    .footer{
        width:100%;
        height:45px;
        display:flex;
    }
    .footer div{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>