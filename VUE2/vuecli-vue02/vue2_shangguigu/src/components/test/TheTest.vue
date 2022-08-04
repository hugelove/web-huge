<template>
  <div class="main-wrap">
      <div class="search-wrap">
        <input type="text" v-model="keyword" placeholder="Please Enter" @keydown.enter="getList"/>
        <button @click.stop="getList">Search</button>
      </div>
      <div class="container">
          <div class="content-txt" v-for="item in resList" :key="item.title">
              <h4>{{ item.title }}</h4>
              <div>{{ item.content }}</div>
          </div>
      </div>
      <div v-if="isShowTips">查无结果</div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {
    
  },
  data() {
    return {
      keyword: '',
      resList: [
        {
          title: '标题',
          content: 'neirongnierong'
        },
        {
          title: '标题',
          content: 'neirongnierong1212'
        },
        {
          title: '标题',
          content: 'neirongnierong1212ggg'
        },
      ],
      response: {},
      isShowTips: false, //无结果进行提示
    };
  },
  mounted() {},
  methods: {
    // 发送搜索列表请求
    async getList() {
      const response = await this.$http.get('http://douyin.bytedance.com/api/list', {
        params: {
          // 搜索词
          keyword: this.keyword,
          // 分页个数
          pageSize: 10,
          // 页码
          page: 1,
        },
      });
      if(response.data.status === 0){
          this.resList = response.data.list;
          this. isShowTips = false;
      }else{
          this.resList = [];
          this. isShowTips = true;
      }
      
    },
  },
};
</script>
<style>
  .search-wrap{
    display: flex;
    background-color: #ffffff;
  }
  .search-wrap input{
    width: 98%;
    border: 1px solid #E6E6E6;
    padding:8px 0;
  }
  .search-wrap input:hover,
  .search-wrap input:focus{
    border: 1px solid #1990FF;
    outline: none;
  }
  .search-wrap button{
    background-color: #1990FF;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .container{
    text-align: left;
    background-color: #ffffff;
    /* padding: 10px; */
  }
  .container .content-txt{
    background-color: #FAFAFA;
    padding: 5px 0;
    margin: 12px 0;
  }
</style>