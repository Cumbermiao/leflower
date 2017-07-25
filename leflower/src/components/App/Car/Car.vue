<template>
    <div>
        <myhead></myhead>
        <div id="cart">
            <img :src="imgurl" alt="">
            <h4> 购物车还是空的，去挑几件中意的商品吧 </h4>
            <div class="to_home">
                <router-link to="/" style="display:block;color:#fff;height:100%;width:100%;">
                    开始购物
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import myhead from "@/components/Head/head"
import cart from "@/assets/Car/cart_kong.png"
import router from '@/router/router'

export default {
    data() {
        return {
            imgurl: cart
        }
    },
    components: {
        myhead
    },
    router
}
</script>
<style scoped>
#cart {
    text-align: center;
    padding: 0 0.625rem;
    margin-top: 2.2rem;
}

h4 {
    font-size: 0.95rem;
    line-height: 6rem;
}
.to_home{
    background-color: #CC0000;
    height: 2.375rem;
    line-height: 2.375rem;
}

</style>
