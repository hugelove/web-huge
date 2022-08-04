<template>
  <div class="school">
      <h2>学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'TheSchool',
  data(){
    return {
      name: '谢婉莹',
      address: '钓鱼岛'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
