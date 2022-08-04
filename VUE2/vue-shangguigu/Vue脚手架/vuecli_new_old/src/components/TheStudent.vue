<template>
  <div>
    <div>{{ msg }}</div>
    <div>我的名字是：{{ name }}</div>
    <div>我的年龄是：{{ myAge }}</div>
    <div>我的学校是：{{ school }}</div>
    <hr/>
    <!-- 接收到的数据不能修改 -->
    <button @click="updateAge">修改一下年龄</button>
  </div>
</template>
<script>
export default {
  name: 'TheStudent',
  // 第一种写法
  // props:['name','age','school'], //简单声明接收
  
  // 第二种写法 接收的同时对数据进行类型限制
  // props:{
  //   name: String,
  //   age: Number,
  //   school: String
  // },

  //第三种写法  接收的同时对数据进行 类型限制 + 默认值指定 + 必要性限制
  props:{
    name:{
      type: String, //name类型是字符串
      required: true //name 是否必须
    },
    age:{
      type: Number,
      default: 99 //默认值
    },
    school:{
      type: String,
      required: true
    }
  },
  
  data(){
    return {
      msg: '大家好，我是胡歌',
      myAge: this.age
    }
  },

  methods:{
    updateAge(){
      console.log('fafdas',this.age,this.myAge);
      this.myAge++
    }
  }
}
</script>

<style >

</style>