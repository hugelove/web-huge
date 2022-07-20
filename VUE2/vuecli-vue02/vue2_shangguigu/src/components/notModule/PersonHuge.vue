<template>
  <div>
    <button @click="getBasicInfo">
      点击按钮获取胡歌最新个人信息
    </button>
    <br/>
   姓名： {{ $store.state.basicInfo.name }}<br/>
   年龄：{{ $store.state.basicInfo.age }}<br/>
   地址：{{ $store.state.basicInfo.address }}<br/>
  </div>
</template>

<script>
export default {
  name:'PersonHuge',
  data(){
    return{
      
    }
  },

  methods: {
    getBasicInfo(){
      this.$store.dispatch('getBasicInfo')
    }
  },
}
</script>
<style scoped>

</style>