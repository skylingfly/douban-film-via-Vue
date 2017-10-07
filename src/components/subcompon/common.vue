<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="'/details/'+item.id">
                    <img :src="item.images.large" alt="">
                </router-link>
                <div class="meta">
                    <h4>
                        <span>{{item.title}}</span>
                        <em>{{item.rating.average}}分</em>
                    </h4>
                    <div class="otherinfo">类型:
                        <span v-for="(gen,index) in item.genres" :key="index">{{gen}}</span>
                    </div>
                </div>
            </li>

        </ul>
        <div class="paging">
            <label>总共：{{total}}条记录,第{{currentpage}}/{{totalpage}}页</label>
            <!-- 加上disable类样式，表示按钮禁用状态 -->
            <button class="prev" :class="{disable:currentpage<=1}" :disabled="currentpage<=1" @click="gopage(currentpage-1)">上一页</button>
            <button class="next" :class="{disable:currentpage>=totalpage}" :disabled="currentpage>=totalpage" @click="gopage(currentpage+1)">下一页</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            totalpage: 0,
            start: 0,
            count: 20,
            total: 0,
            currentpage:1
//分页请求数据
        }
    },
    created() { 
        this.getdata();//初始化
    },
    watch:{
        $route:function(){
            this.getdata();
        }
    },
    methods: {
        getdata() {
            this.currentpage= this.$route.params.page || this.currentpage;
            var type = this.type;
            if(this.type.path=='/search'){//判断是否为搜索需求
                type = this.type.path+'?q='+this.type.q;
            }
            
            this.$http.jsonp('http://api.douban.com/v2/movie' + type,
                {
                    params: {
                        start: (this.currentpage-1)*this.count,
                        count: this.count
                    },
                }).then(res=>{
                    var data = res.body;
                    if (data) {
                        this.list = data.subjects;
                        this.currentpage = data.start/this.count+1;
                        this.total = data.total;
                        this.totalpage = Math.ceil(this.total / this.count);
                    }
                }, function() {
                    console.log('error')
                })
        },
        gopage(page) {
            this.$router.push('/'+this.$route.path.split('/')[1]+'/'+page);
        },
       
    },
    props: ['type'],
}
</script>

<style scoped>

</style>

