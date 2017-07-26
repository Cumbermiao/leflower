<template>
    <div>
        <myhead :title="title"></myhead>
        <ul>
            <li v-for="item in orderList">
                <a href="#" style="border-bottom:1px solid #ddd;">
                    <img :src="item.img" alt="" style="">
                    <span>{{item.name}}</span>
                    <img :src="lt" alt="" style="float:right">
                </a>
            </li>
        </ul>
    
        <ul>
            <li v-for="item2 in serviceList">
                <a href="#" style="border-bottom:1px solid #ddd;">
                    <img :src="item2.img" alt="" style="">
                    <span>{{item2.name}}</span>
                    <img :src="lt" alt="" style="float:right">
                </a>
            </li>
        </ul>
        <div class="button_group">
            <a href="">服务热线：400-678-5912</a>
            <a href="">在线客服</a>
        </div>
    
        <foot></foot>
    
    </div>
</template>
<script>
import myhead from "@/components/Head/head"
import foot from "@/components/Footer/footer"
import more1 from "@/assets/More/more1.png"
import more2 from "@/assets/More/more2.png"
import more3 from "@/assets/More/more3.png"
import more4 from "@/assets/More/more4.png"
import more5 from "@/assets/More/more5.png"
import more6 from "@/assets/More/more6.png"
import more7 from "@/assets/More/more7.png"
import more8 from "@/assets/More/more8.png"
import lt from "@/assets/More/li_r.jpg"
export default {
    data() {
        return {
            title: "首页",
            lt,
            orderList: [
                { name: "补交货款", img: more1 },
                { name: "订单查询", img: more2 }
            ],
            serviceList: [
                { name: "服务声明", img: more3 },
                { name: "会员服务", img: more4 },
                { name: "付款指南", img: more5 },
                { name: "配送说明", img: more6 },
                { name: "订单帮助", img: more7 },
                { name: "售后说明", img: more8 }
            ]
        }
    },
    components: {
        myhead,
        foot
    }
}
</script>
<style scoped>
ul {
    margin: 0.625rem 0.4375rem 0 0.4375rem;
    border: 1px solid #ddd;
    border-radius: 0.2rem;
}

ul>li>a {
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
    color: #333;
    font-weight: 900;
    box-sizing: border-box;
}

ul img {
    width: 1.875rem;
    height: 1.875rem;
    vertical-align: middle;
}

.button_group {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 0.625rem;
}

.button_group a {
    display: inline-block;
    height: 2.2rem;
    width: 100%;
    color: #fff;
    border-radius: 0.15rem;
    text-align: center;
    line-height: 2.2rem;
    margin-bottom: 0.5rem;
}

.button_group a:first-child {
    background-color: #cc0000;
}

.button_group a:nth-of-type(2) {
    background-color: #6cb248;
}
</style>
