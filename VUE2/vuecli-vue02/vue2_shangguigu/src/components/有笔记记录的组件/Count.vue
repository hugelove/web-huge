<!-- 求和 -->
<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <!-- 组件中读取getters中数据 -->
    <div>放大十倍之后是：{{ bigSum }}</div>
    <p>姓名：{{ nameg }}</p>
    <p>学校：{{ school }}</p>
    <p>住址：{{ address }}</p>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
     <br/> <br/>
    <button @click="increment(n)">+mapMutations写法</button> 
    <br/> <br/>
    <button @click="decrement(n)">-mapMutations写法</button> 
     <br/> <br/>
    <!-- 对应数组写法 -->
    <button @click="JIA(n)">数组写法+</button>  
    <br/> <br/>
    <button @click="JIAN(n)">数组写法-</button>  
    <br/> <br/>
    <!-- 
    <button @click="incrementOdd">当前求和为奇数再加非mapAction</button>  <br/>
    <button @click="incrementWait">等一等再加非mapAction</button>
    --> 
    <!-- 对应mapAction的对象写法 -->
    <button @click="incrementOdd(n)">当前求和为奇数再加mapAction对象写法</button>  
    <br/> <br/>
    <button @click="incrementWait(n)">等一等再加mapAction对象写法</button>   
    <br/> <br/>

    <!-- 对应mapAction的数组写法 -->
    <button @click="jiaOdd(n)">当前求和为奇数再加mapAction数组写法</button>
     <br/> <br/>
    <button @click="jiaWait(n)">等一等再加mapAction数组写法</button>
     <br/> <br/>

     <p style="color:cyan;font-weight: bold;">
      Person组件人员总数：{{ personList.length }}
     </p>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

export default{
  name:'Count',
  data(){
    return{
      n: 1, // 用户选择的数字
    }
  },
  computed: {
    // 没有mapState的写法
    // nameg(){
    //   return this.$store.state.nameg;
    // },
    // school(){
    //   return this.$store.state.school;
    // },
    // address(){
    //   return this.$store.state.address;
    // },

    // sum(){
    //   return this.$store.state.sum;
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum;
    // }
    
    /******************************************************************
     * 第一种写法：【对象写法】
     * 借助mapState生成计算属性，从state中读取数据。【对象写法】
     * **/ 
    // ...mapState({
    //     sum:'sum',
    //     nameg:'nameg',
    //     school:'school',
    //     address:'address'
    //   })
    /****************mapGetters*********************************/
    // ...mapGetters({bigSum:'bigSum'}),

    /*****************************************************************
     * 第二种写法：【数组写法】
     * 借助mapState生成计算属性，从state中读取数据。【数组写法】
     * **/
    ...mapState(['sum','nameg','school','address','personList']),
    /****************mapGetters*********************************/
    ...mapGetters(['bigSum'])
  },
  mounted() {
    console.log('count',this)
  },
  methods:{
    // increment(){
    //   // dispatch是给actions对话
    //   // this.$store.dispatch('jia',this.n)

    //   /**
    //    * 如果组件里没有业务逻辑可以跳过actions直接调用mutations
    //    * commit是给mutations对话
    //    * 所以上面的dispatch写法也可以写成下面的commit写法
    //    * **/ 
    //    this.$store.commit('JIA',this.n);
    // },
    // decrement(){
    // //  this.$store.dispatch('jian',this.n)
    // // 同理increment
    // this.$store.commit('JIAN',this.n);
    
    // },
    /***************************************************************************
     * 通常不会使用的方法
     * 页面上的代码increment(),decrement()中不用传参
     * *****/
    // increment(){
    //   this.hugeJia(this.n);
    // },
    // decrement(){
    //   this.hugeJian(this.n)
    // },
    // ...mapMutations({hugeJia:'JIA',hugeJian:'JIAN'}),

    /***************************************************************************/
    /****
     * 第一种写法[对象写法]
     * mapMutations 写法，替换increment,decrement方法
     * 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
     * ***/
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

     /****
      * 第二种写法[数组写法]
     * mapMutations 写法，替换increment,decrement方法
     * 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
     * ***/
    // ...mapMutations(['JIA','JIAN']),


    /***************************************************************************/
    /**
     * mapActions替换incrementOdd，incrementWait方法
     * 
    */
    // incrementOdd(){
    //   // if(this.$store.state.sum%2){
    //   //   this.$store.dispatch('jiaOdd',this.n);
    //   // }
    //   this.$store.dispatch('jiaOdd',this.n);
    // },
    // incrementWait(){
    //   setTimeout(() => {
    //     this.$store.dispatch('jiaWait',this.n)
    //   }, 2000);
    // },

    /***************************************************************************/
    /**
     * 第一种写法[对象写法]
     * ***/
    // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    /**
     * 第二种写法[数组写法]
     * ***/
    ...mapActions(['jiaOdd','jiaWait'])
  }
}
</script>

<style scoped>
 button{
  margin-left: 5px;
 }
</style>
