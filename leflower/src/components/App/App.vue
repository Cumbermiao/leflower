<template>
  <div id="app">
    <router-view></router-view>
    <aside id="aside">
      <div @click="wx()">
        <img src="../../assets/App/xf_wx.png" alt="">
      </div>
      <div>
        <img src="../../assets/App/xf_kf.png" alt="">
      </div>
      <div>
        <img @click="toTop" src="../../assets/App/scroll-to-top-icon.png" alt="">
      </div>
    </aside>
  
    <footer>
      <div>
        <router-link to="/">
          <img src="../../assets/App/footer01.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/types">
          <img src="../../assets/App/footer02.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/car">
          <img src="../../assets/App/footer03.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <img src="../../assets/App/footer04.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/more">
          <img src="../../assets/App/footer05.png" alt="">
        </router-link>
      </div>
    </footer>
    <div class="layer">
      亲爱的主人
      <br> 加我微信吧
      <br> 微信号 a4006785912
      <br> 我可以更好的为您服务
      <br>
    </div>
  </div>
</template>

<script>
import home from './Home/Home'
import types from './Types/Types'
// import jquery from '@/lib/jquery.min.js'
import router from '@/router/router'

export default {
  name: 'app',
  components: {
    types
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    var that = this;
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 0) {
        $('#aside').animate({ bottom: '3rem' })
      }
      if (document.body.scrollTop == 0) {
        // console.log('执行开始' )
        if($('#aside').is(":animated")){
          console.log('上次动画在执行' )
        }
        $('#aside').stop(true,false).animate({ bottom: '0' }, 300)
        // console.log(document.body.scrollTop )
      }
    })
  },
  methods: {
    toTop() {
      $('body').animate({ scrollTop: 0 }, 300)
    },
    wx() {
      layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        skin: '#999',
        content: $('.layer'),
        btn: ["关闭"],
        btnAlign: "c",
        cloaseBtn: 1
      })
    }
  }
}
</script>

<style scoped>
aside {
  width: 2.5rem;
  position: fixed;
  right: 0.8rem;
  bottom: 0rem;
}

aside img {
  width: 2.5rem;
  height: 2.5rem
}

aside div {
  height: 3.1rem
}

footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #f7f7f7
}

footer>div {
  padding: 0 0.4rem;
  flex-grow: 2;
}

img {
  height: 2.8rem
}

.layer {
  background-color: #eee;
  text-align: center;
  padding: 2rem;
  line-height: 2rem;
  display: none;
}
</style>
