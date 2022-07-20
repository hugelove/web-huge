<template>
  <div class="shool">
    <h2>学校：{{ school }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  export default{
    name: 'TheSchool',
    data(){
      return{
        school:'水平真高',
        address:'二号行星'
      }
    }
  }
</script>

<style scoped>
  .school{
    background-color: aquamarine;
  }
</style>
