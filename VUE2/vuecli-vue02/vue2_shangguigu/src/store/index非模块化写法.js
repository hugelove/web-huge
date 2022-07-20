//该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);


//准备actions -- 用于响应组件中的动作
const actions = {
  jiaOdd(context,value){
    console.log("actions中的jiaOdd被调用了",context,value);
    if(context.state.sum % 2){
      context.commit('JIA',value);
    }
  },
  jiaWait(context,value){
    console.log("actions中的jiaWait被调用了",context,value);
    setTimeout(() => {
      context.commit('JIA',value);
    }, 2000);
  },
  getBasicInfo(context,value){
    console.log('actions中的getBasicInfo被调用了',context,value);
    context.commit('GET_BASIC_INFO')
  }
}

/*
* 准备mutations -- 用于操作数据（state）
* mutations里面不要写任何的业务逻辑，也不要写什么ajax请求之类的
* 实在不理解，类比mutations是餐厅做饭的厨师团队，actions类比餐厅的服* 务员，客人就是组件（在这里就是Count.vue），客人有需求告知服务员，服* 务员转达给厨师需要做什么饭就可以。
**/

const mutations = {
  JIA(state,value){
    console.log("mutations中的JIA被调用了",state,value);
    state.sum += value
  },
  JIAN(state,value){
    console.log("mutations中的JIAN被调用了",state,value);
    state.sum -= value
  },
  GET_BASIC_INFO(state,value){
    console.log("mutations中的basicInfo被调用了",state,value);
    state.basicInfo.name = '胡歌super';
    state.basicInfo.address = '三号飞船'
  },
  ADD_PERSON(state,value){
    console.log('mutations中的ADD_PERSON被调用了',state,value);
    state.personList.unshift(value);
  }
}

//准备state -- 用于存储数据
const state = {
  sum: 0, // 当前和
  nameg: '胡歌',
  school: '上海第一高级中学',
  address: '上海.三壕滩.六号星星',
  basicInfo:{
    name: '胡歌',
    age: 18,
    address: '二号行星'
  },
  personList:[
    { id:'0001',name:'胡歌1' }
  ]
}

// 准备getters
/****
 * 当state中的数据需要经过加工后使用时，可以使用getters加工。
 * ****/
const getters = {
  bigSum(state){
    console.log(state);
    return state.sum * 10;
  }
}


// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
