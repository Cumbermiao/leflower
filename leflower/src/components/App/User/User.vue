<template>
    <div>
        <myhead :title="title"></myhead>
        <form>
            <div class="form-g">
                <label for="">登录账户</label>
                <input type="text" v-model="username" placeholder="输入有效的账户名/手机号/邮箱">
            </div>
            <div class="form-g">
                <label for="">登录密码</label>
                <input type="psw" v-model="psw" placeholder="输入正确的登录密码">
            </div>
            <div class="form-g">
                <input type="checkbox">
                <label for="">一个月免登陆</label>
            </div>
        </form>
        <div class="button_group">
            <a class="register" href="">8秒快速免费注册</a>
            <a href="" class="login">登录</a>
        </div>
    </div>
</template>
<script>
import myhead from "@/components/Head/head"

export default {
    data() {
        return {
            title: "登录",
            username: '',
            psw: ""
        }
    },
    components: {
        myhead
    }
}
</script>
<style scoped>
form {
    padding: 0.9rem;
    border: 1px solid #ddd;
}

.form-g {
    margin-bottom: 1.5rem;
}

input[type=text],
input[type=psw] {
    font-size: 0.95rem;
    padding: 0.625rem;
    width: 90%;
}


label {
    display: inline-block;
    font-weight: 700;
    margin: 0.5rem 0;
}

.button_group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0.625rem;
}

.button_group a {
    display: inline-block;
    height: 2.2rem;
    width: 48%;
    font-size: 0.875rem;
    color: #fff;
    border-radius: 0.15rem;
    text-align: center;
    line-height: 2.2rem;
}

.register {
    background-color: #5eb95e;
}

.login {
    background-color: #dd514c;
}
</style>
