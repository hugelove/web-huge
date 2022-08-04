export const mixin = {
  methods:{
    showName(){
      alert(this.name);
    }
  },

  //声明周期钩子不以任何一个为主
  mounted(){
    console.log('你好啊。。。。');
  }
}

export const mixin2 = {
  /**
   * data数据以组件中原来写的为主，例如：组件中已经有x:899,那么获取的是组件中899
   * ****/
  data(){
    return{
      x: 100,
      y: 299
    }
  }
}