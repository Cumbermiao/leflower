<template>
    <footer id="home_footer">
        <div>登录</div>
        <div>注册</div>
        <div @click="toTop">返回顶部</div>
        <p>
            <span>帮助&#x3000;</span>|
            <span>&#x3000;查单&&#x3000;</span>|
            <span>&#x3000;在线补款&#x3000;</span>|
            <span>&#x3000;客服&#x3000;</span>|
            <span>&#x3000;电脑</span>
        </p>
        <p>领先的中国鲜花速递品牌，鲜花速递专家！</p>
        <p>© 乐享花艺鲜花网 m.leflower.com</p>
    </footer>
</template>

<script>
export default {
    methods: {
        toTop() {
            $('body').animate({ scrollTop: 0 }, 300)
        }
    }
}
</script>

<style scoped>
#home_footer {
    font-size: 0.75rem;
    color: #999;
    background-color: #f0efed;
    padding: 1rem 0.5rem;
}

#home_footer>div {
    display: inline-block;
    color: #ff6600;
    padding: 0.3125rem 1rem;
    border: none;
    border-radius: 0.3125rem;
    border: 1px solid #ff6600;
    font-size: 0.875rem;
}

#home_footer>div:nth-child(3) {
    float: right;
}

#home_footer p {
    margin: 0.6rem 0;
    text-align: center;
}

#home_footer p:first-of-type {
    color: #666;
}
</style>


