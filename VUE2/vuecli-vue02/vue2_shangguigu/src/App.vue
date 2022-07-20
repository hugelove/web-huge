<template>
  <div id="app">
    <!-- <button @click="showHuge">showshow</button>
    <h1 v-text="msg" ref="title"></h1> -->
    <count></count>
    <hr/>
    <person/>
    <hr/>
    <!-- <person-huge></person-huge> -->
  </div>
</template>

<script>
import Count from './components/moduleCom/Count'
import Person from './components/moduleCom/Person'
import PersonHuge from './components/notModule/PersonHuge.vue'

export default {
  name: 'App',
  components: {
    Count,
    PersonHuge,
    Person
},
  mounted() {
    console.log('app',this)
  },
  data(){
    return {
      msg:'学习vue 学习vue'
    }
  },
  methods:{
    showHuge(){
      console.log(this.$refs.title); // 真实DOM元素
      console.log(this.$refs.theSchool) // School组件的实例对象
      console.log('绿蚁新醅酒，红泥小火炉');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
