<template>
  <div class="hello">
    <p @click="changeName">{{ name }}</p>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addItem">增加一项</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      name: '胡歌',
      list: ['huge1','huge2','huge3']
    }
  },
  methods:{
    changeName(){
      this.name = '胡歌胡歌胡歌'
    },
    addItem(){
      this.list.push(`${Date.now()}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
