<template>
  <div id="app">
    <!-- <the-school></the-school>
    <the-student name="胡歌" :age="18" school="上海高中"></the-student> -->
    <the-action></the-action>
    <hr/>
    <the-list></the-list>
  </div>
</template>

<script>
import TheAction from './components/mixin/TheAction.vue'
import TheList from './components/mixin/TheList.vue'
// import TheSchool from './components/TheSchool.vue'
// import TheStudent from './components/TheStudent.vue'

export default {
  name: 'App',
  components: {
    TheAction,
    TheList
    // TheSchool,
    // TheStudent
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
