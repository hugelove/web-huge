import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
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
    },
    addPersonServe(context,value){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(res => {
        context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
      },
      error => {
        alert(error.message)
      })
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