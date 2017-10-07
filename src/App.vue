<template>
  <div id="app">

    <!-- 顶部导航栏开始 -->
    <div class="top">
      <div class="header">
        <a href="/home_page"><img src="./assets/img/logo.jpg" alt=""></a>
        <div class="search">
          <input class="my-input" type="text" placeholder="电影搜索" v-model="searchtxt">
          <button @click="search">搜索</button>
        </div>
      </div>
      <nav class="nav" menu-active>
        <ul>
          <!--li中添加 active 类样式，显示焦点状态。-->
          <li :class="{active:path.startsWith('/home_page')}" >
            <router-link to="/home_page">首页</router-link>
          </li>
          <li :class="{active:path.startsWith('/in_theaters')}" >
            <router-link to="/in_theaters">正在热映</router-link>
          </li>
          <li :class="{active:path.startsWith('/coming_soon')}">
            <router-link to="/coming_soon">即将上映</router-link>
          </li>
          <li :class="{active:path.startsWith('/top250')}">
            <router-link to="/top250">Top250</router-link>
          </li>
        </ul>

      </nav>
    </div>
    <!-- 顶部导航栏结束 -->
    <div class="container">

      <router-view></router-view>

    </div>

    <footer class="footer">
      <div class="container">
        <p>版权所有&copy; 仿Douban电影(不允许侵权)</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  data(){
    return{
      searchtxt:'',
    }
   },
   computed:{
     path(){
       return this.$route.path
     }
   },
  methods:{
    search(){
      this.$router.push({path:'search',query:{q:this.searchtxt}});
      this.searchtxt='';
    }
  }
}
</script>

<style>

</style>
