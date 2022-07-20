<template>
  <div>
    <h3>人员列表组件</h3>
    添加人员：<input type="text" v-model="name" placeholder="请输入名字"/>
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加王</button>
    <button @click="addPersonServe">添加随机文字</button>
    <p style="color: crimson;font-weight:bold;">
        列表中第一个人的名字是： {{ firstPersonName }}
    </p>
    <p style="color:cyan;font-weight: bold;">求和数据为：{{ sum }}</p>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
import { nanoid } from 'nanoid'
import { mapState,mapMutations } from 'vuex'

export default {
  name:'Person',
  data(){
    return {
      name:''
    }
  },
  computed:{
    /***非map写法****/
    personList(){
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    addPerson(){
      const id = nanoid();
      let personObj = {id:id,name:this.name};
      this.$store.commit('personAbout/ADD_PERSON',personObj);
      this.name = '';
    },
    addPersonWang(){
      const personObj = {id:nanoid(),name:this.name};
      this.$store.dispatch('personAbout/addPersonWang',personObj);
      this.name = '';
    },
    addPersonServe(){
      this.$store.dispatch('personAbout/addPersonServe');
      this.name = '';
    }
  },
}
</script>
<style scoped>
  button{
    margin-left: 8px;
  }
</style>