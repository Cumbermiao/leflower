<template>
  <div id="app">
    <home></home>
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
        <router-link to="/type">
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
import jquery from '@/lib/jquery.min.js'
export default {
  name: 'app',
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
        $('#aside').animate({ bottom: '0' }, 300)
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
        content: $('.layer')
      })
    }
  },
  components: {
    home
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
</style>
