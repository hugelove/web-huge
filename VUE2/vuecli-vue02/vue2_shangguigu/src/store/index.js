//该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

import countOptions from './modules/count'
import personOptions from './modules/person'

// 创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
