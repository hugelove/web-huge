<template>
  <div>
    <h3>人员列表组件</h3>
    添加人员：<input type="text" v-model="name" placeholder="请输入名字"/>
    <button @click="addPerson">添加</button>
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
    // personList(){
    //   return this.$store.state.personList
    // },
    ...mapState(['personList','sum'])
  },
  methods: {
    addPerson(){
      const id = nanoid();
      let personObj = {id:id,name:this.name};
      this.$store.commit('ADD_PERSON',personObj);
      this.name = '';
    },
    // ...mapMutations(['ADD_PERSON'])
  },
}
</script>