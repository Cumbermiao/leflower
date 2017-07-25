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
               <input type="checkbox"><label for="">一个月免登陆</label>
            </div>
        </form>
        <div>
            <a href="">8秒快速免费注册</a>
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
.form-g{
    margin-bottom: 1.5rem;
}
input[type=text],input[type=psw]{
    font-size: 0.95rem;
    padding: 0.625rem;
    width: 90%;
}


label {
    display: inline-block;
    font-weight: 700;
    margin: 0.5rem 0;
}
</style>
