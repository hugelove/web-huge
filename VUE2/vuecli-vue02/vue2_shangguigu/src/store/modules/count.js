export default {
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