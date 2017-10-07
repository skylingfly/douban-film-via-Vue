<template>
    <div class="detail" v-if="detail.images">
      
      <h1 v-text="detail.title"></h1>
      <div>
        <div><img v-if='detail' :src="detail.images.large"></div>
        <div>
          <p>
            <strong>导演：</strong>

            <span v-for="(d,index) in detail.directors" :key="index">{{d.name}}&nbsp;</span>

          </p>
          <p>
            <strong>主演：</strong>

            <span v-for="(c,index) in detail.casts" :key="index">{{c.name}}&nbsp;</span>

          </p>
          <p>
            <strong>类型：</strong>{{detail.genres.join(' ')}}</p>
          <p>
            <strong>国家：</strong>{{detail.countries.join(' ')}}</p>
          <p>
            <strong>评分：</strong>{{detail.rating.average}}</p>
          <p>
            <strong>时间：</strong>{{detail.year}}</p>
          <p>
            <strong>又名：</strong>{{detail.aka.join(' ')}}.</p>
        </div>
      </div>
      <h3>剧情简介:</h3>
      <p style="color:#676767">{{detail.summary}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}//解决异步取数据模板渲染时间不同步，让v-if取到再渲染
    }
  },
  created(){
    
    this.$http.jsonp('http://api.douban.com/v2/movie/subject/'+this.$route.params.id).then(res=>{
      if(res){
          this.detail = res.body;
      }
    })
  }
}
</script>

<style scoped>

</style>


