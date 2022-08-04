//该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// import {mixin1,mixin2} from './mixin'

// 关闭vue生产提示
Vue.config.productionTip = false

// 混入的全局写法
// Vue.mixin(mixin1)
// Vue.mixin(mixin2)


// 创建Vue实例对象---vm
new Vue({
  render: h => h(App),
}).$mount('#app')




/*****
 * vue: 核心 + 模板解析器（占1/3）
 * 关于不同版本vue:
 * 1,vue.js与vue.runtime.xxx.js区别：
 *    vue.js是完整版vue，包含核心+模板解析器
 *    vue.runtime.xxx.js是运行版的vue，只包含：核心功能，没有模板解析器
 * 2，因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
 * ***/ 

// new Vue({
//   el:'#app',
//   template: `<h1>你好，胡歌</h1>`,
//   components: {App}
// })

// new Vue({
//   el: '#app',
//   render(createElement){
//     return createElement('h1','你好啊');
//   }
// })

/***上面的挂载也可以写成下面的
  new Vue({
    el:'#app',
    render: h => h(App),
  })
 * ****/ 