//该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

const countOptions = {
  namespaced:true,
  action: {
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
  },
  mutations: {
    JIA(state,value){
      console.log("mutations中的JIA被调用了",state,value);
      state.sum += value
    },
    JIAN(state,value){
      console.log("mutations中的JIAN被调用了",state,value);
      state.sum -= value
    },
  },
  state:{
    sum: 0, // 当前和
    nameg: '胡歌',
    school: '上海第一高级中学',
    address: '上海.三壕滩.六号星星',
  },
  getters:{
    bigSum(state){
      console.log(state);
      return state.sum * 10;
    }
  }
}

const personOptions = {
  namespaced:true,
  actions:{
    getBasicInfo(context,value){
      console.log('actions中的getBasicInfo被调用了',context,value);
      context.commit('GET_BASIC_INFO')
    },
    addPersonWang(context,value){
      if(value.name.indexOf('王') === 0){
        context.commit('ADD_PERSON',value)
      }else{
        alert('输入姓王的！')
      }
    }
  },
  mutations:{
    GET_BASIC_INFO(state,value){
      console.log("mutations中的basicInfo被调用了",state,value);
      state.basicInfo.name = '胡歌super';
      state.basicInfo.address = '三号飞船'
    },
    ADD_PERSON(state,value){
      console.log('mutations中的ADD_PERSON被调用了',state,value);
      state.personList.unshift(value);
    }
  },
  state:{
    basicInfo:{
      name: '胡歌',
      age: 18,
      address: '二号行星'
    },
    personList:[
      { id:'0001',name:'胡歌1' }
    ]
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name;
    }
  }
}
// 创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
