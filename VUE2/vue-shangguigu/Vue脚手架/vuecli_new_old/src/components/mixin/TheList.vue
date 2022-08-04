<template>
  <div class="school">
      <h2 @click="showName">学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import { mixin,mixin2 } from '../../mixin'

export default {
  name: 'TheList',
  data(){
    return {
      name: '胡歌',
      address: '72号星球'
    }
  },
  mixins:[mixin, mixin2]
}
</script>

<style scoped>
</style>
