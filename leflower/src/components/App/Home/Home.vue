<template>
    <div id="home">
        <header>
            <div class="header_left">
                <a href="#"></a>
            </div>
            <div class="header_right">
                <a id="home_search" href="#"></a>
                <a id="home_car" href="#"></a>
                <a id="home_user" href="#"></a>
            </div>
        </header>
        <div id="banner">
            <swiper :list="baseList" height="9.25rem" width="100%" v-model="index" @on-index-change="demo01_onIndexChange"></swiper>
        </div>
        <div id="banner_bottom">
            <a href="#" v-for="item in bannerBottomList" style="width:20%">
                <div :style="`backgroundColor:${item.bg};margin: 0.4rem auto;width:2.8rem;height:2.8rem;border-radius:50%;display:flex;align-items: center;
                                                                        justify-content: center`">
                    <img :src="item.img" alt="" style="width:1.5625rem;height:1.5625rem;">
                </div>
                <p style="font-size:0.75rem;text-align:center;color:#666">{{item.title}}</p>
            </a>
        </div>
        <div class="divider"></div>
        <!--特价鲜花  -->
        <section id="tejia">
            <a class="sec_header" href="#">
                <span class="sec_title">特价鲜花</span>
                <span class="sec_more">更多></span>
            </a>
            <ul>
                <li v-for="item2 in tejia" style="width:33%;">
                    <p class="tejia.title" style="text-overflow: ellipsis;font-size:0.875rem;color:red;">{{item2.title}}</p>
                    <p class="tejia.price" style="font-size:0.75rem;color:#b9b9b9;text-align:center;">{{item2.price}}</p>
                    <img :src="item2.img" :alt="item2.title" style="width:100%;">
                </li>
            </ul>
        </section>
        <div class="divider"></div>
        <!--热销鲜花  -->
        <section id="rexiao">
            <a class="sec_header" href="#">
                <span class="sec_title">热销鲜花</span>
                <span class="sec_more">更多></span>
            </a>
            <ul>
                <li v-for="item3 in rexiao " style="border:1px solid #E5E5E5;width:45%;margin-bottom:0.5rem;">
                    <a href="#" style="display:inline-block">
                        <img :src="item3.img" alt="" style="width:100%">
                        <p class="rexiao_title" style="font-size:0.875rem;color:#666;">{{item3.title}}</p>
                        <p class="rexiao_price" style="font-size:0.875rem;color:#f00;margin-bottom:0.375rem;">{{item3.price}}</p>
                    </a>
                </li>
            </ul>
        </section>
        <div class="divider"></div>
        <!--生日蛋糕  -->
        <section id="cakes">
            <a class="sec_header" href="#">
                <span class="sec_title">生日蛋糕</span>
                <span class="sec_more">更多></span>
            </a>
            <a href="" style="display:block">
                <img src="../../../assets/Home/cake1.png" alt="" style="width:100%;">
            </a>
            <ul>
                <li v-for="item4 in cakes" style="width:50%;display:inline-block;text-align:center">
                    <a href="#" style="display:inline-block">
                        <img :src="item4.img" alt="" style="width:90%">
                        <p class="rexiao_title" style="font-size:0.875rem;color:#666;">{{item4.title}}</p>
                        <p class="rexiao_price" style="font-size:0.875rem;color:#f00;">{{item4.price}}</p>
                    </a>
                </li>
            </ul>
        </section>
        <div class="divider"></div>
        <!--评价  -->
        <section id="comments">
            <a class="sec_header" href="#">
                <span class="sec_title">鲜花网最新评价</span>
                <span class="sec_more">更多></span>
            </a>
            <ul style="">
                <li v-for="item5 in comments" style="padding-bottom:0.5rem;">
                    <div class="line"></div>
                    <div style="display:flex;">
                        <div class="comments_left" style="">
                            <img :src="item5.img" alt="" style="height:3.1875rem;">
                        </div>
                        <div class="comments_right" style="">
                            <p>
                                <span class="stars"></span>
                                <span class="comments_id">{{item5.id}}</span>
                            </p>
                            <p>{{item5.content}}</p>
                        </div>
                    </div>
                </li>
                <li style="font-size:0.8125rem;color: #999;border:1px solid #E5E5E5;height:1.75rem;text-align:center;
                            line-height:1.75rem;margin-bottom:0.875rem;">
                    最近已有
                    <span style="color:red">1870619</span>人评论>
                </li>
            </ul>
    
        </section>
        <div class="divider"></div>
        <section style="padding:0.5rem 0;">
            <a href="#" v-for="item5 in markers" style="display:inline-block;width:25%;">
                <div style="margin: 0.4rem auto;width:2.8rem;height:2.8rem;border-radius:50%;display:flex;align-items: center;
                                                                        justify-content: center">
                    <img :src="item5.img" alt="" style="width:2.8125rem;">
                </div>
                <p style="font-size:0.75rem;text-align:center;color:#999;">{{item5.title}}</p>
            </a>
        </section>
        <foot></foot>  
        
    </div>
</template>
<script>
import { Swiper } from 'vux'
import foot from '@/components/Footer/footer'

export default {
    name: 'home',
    components: {
        Swiper,
        foot
    },
    data() {
        return {

            baseList: [{
                img: '../../../src/assets/Home/banner2.jpg',
            }, {
                img: '../../../src/assets/Home/banner2.jpg',
            }, {
                img: '../../../src/assets/Home/banner2.jpg',
            }],
            index: 0,
            bannerBottomList: [
                { img: "../../../src/assets/Home/flower_1.png", title: '鲜花', bg: '#fb8989' },
                { img: '../../../src/assets/Home/cake_2.png', title: "蛋糕", bg: "#de8dc5" },
                { img: "../../../src/assets/Home/flowersong_1.png", title: '开业用花', bg: "#77bae6" },
                { img: "../../../src/assets/Home/gifts_2.png", title: '卡通花', bg: "#f6b365" },
                { img: "../../../src/assets/Home/Plant_2.png", title: '更多分类', bg: "#88d4c0" }

            ],
            tejia: [
                { title: "咱俩是一对-12...", price: "￥159元", img: "../../../src/assets/Home/tejia1.jpg" },
                { title: "美丽相随-19...", price: "￥168元", img: "../../../src/assets/Home/tejia2.jpg" },
                { title: "99红玫瑰花束", price: "￥450元", img: "../../../src/assets/Home/tejia3.jpg" }
            ],
            rexiao: [
                { title: "天涯伴此生", price: "￥820元", img: "../../../src/assets/Home/rexiao1.jpg" },
                { title: "浪漫的日子", price: "￥373元", img: "../../../src/assets/Home/rexiao2.jpg" },
                { title: "天荒地老的承诺", price: "￥462元", img: "../../../src/assets/Home/rexiao3.jpg" },
                { title: "此生无你何欢", price: "￥199元", img: "../../../src/assets/Home/rexiao4.jpg" }
            ],
            cakes: [
                { title: "富贵满园", price: "￥210元", img: "../../../src/assets/Home/cake2.jpg" },
                { title: "花开吉祥", price: "￥210元", img: "../../../src/assets/Home/cake3.jpg" },
                { title: "阳光假日", price: "￥225元", img: "../../../src/assets/Home/cake4.jpg" },
                { title: "心意", price: "￥190元", img: "../../../src/assets/Home/cake5.jpg" }
            ],
            comments: [
                {
                    id: "23...", content: "评价：包装大气，怕开的时间短和客服说要多一点花骨朵少一点开了的，收到感觉如果全部是开的应该会更加好看大方",
                    img: "../../../src/assets/Home/comments1.jpg"
                },
                { id: "ye...", content: "评价：女朋友很满意，送花的人态度很好，换了地址又送去的，以后买花还来", img: "../../../src/assets/Home/comments2.jpg" },
                { id: "小海...", content: "评价：颜色很好看，粉嫩嫩的，闺蜜喜欢", img: "../../../src/assets/Home/comments3.jpg" }
            ],
            markers: [
                { title: "10年鲜花品牌", img: "../../../src/assets/Home/markers1.png" },
                { title: "行业认证龙头", img: "../../../src/assets/Home/markers2.png" },
                { title: "低价保证", img: "../../../src/assets/Home/markers3.png" },
                { title: "3小时送花", img: "../../../src/assets/Home/markers4.png" }
            ]
        }
    },
    methods: {
        demo01_onIndexChange(index) {
            this.demo01_index = index
        },
        toTop() {
            $('body').animate({ scrollTop: 0 }, 300)
        }
    }

}
</script>
<style scoped>
#home {
    text-overflow: ellipsis;
}

header {
    height: 3rem;
    background: #f00;
}

.header_left {
    float: left;
}

.header_left>a {
    /* border: 1px solid #000; */
    display: inline-block;
    width: 7.6rem;
    height: 3rem;
    background-image: url('../../../assets/Home/sprite1.png');
    background-size: 11.875rem;
    background-position: 0.5rem -3.3rem;
}

.header_right {
    height: 3rem;
    float: right;
    display: flex;
    align-items: center;
}

.header_right>a {
    display: block;
    margin: 0 0.6rem;
    height: 1.5rem;
    width: 1.8rem;
    color: #fff;
    background-image: url('../../../assets/Home/sprite1.png');
}

#home_search {
    background-size: 800%;
    background-position: -2.125rem -7.75rem;
}

#home_car {
    background-size: 750%;
    background-position: -7.5rem -7.2rem;
}

#home_user {
    background-size: 800%;
    background-position: -0.1rem -7.75rem;
}

#banner {
    width: 100%;
    height: 9.25rem
}

#banner_bottom {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding-bottom: 0.3rem
}

.divider {
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    height: 0.8125rem;
    background-color: #F1F1F5;
}

.sec_header {
    display: block;
    color: #666;
    padding: 0.5rem;
}

.sec_title {
    font-weight: 900;
}

.sec_more {
    font-size: 0.875rem;
    float: right;
}

#tejia ul {
    display: flex;
}

#rexiao ul {
    padding: 0.625rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#comments ul {
    padding: 0 0.5rem;
}

.line {
    border-top: 1px solid #E5E5E5;
    padding-bottom: 0.5rem;
}


.comments_right {
    font-size: 0.75rem;
    color: #999;
    float: right;
}

.comments_right p {
    text-align: left;
}

.stars {
    display: inline-block;
    width: 4.875rem;
    background-size: 11.875rem;
    height: 1.625rem;
    background-image: url('../../../assets/Home/sprite1.png');
    vertical-align: middle;
}

.comments_id {
    float: right;
}


</style>
