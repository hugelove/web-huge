<template>
  <div class="school">
      <h2 @click="showName">学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import { mixin,mixin2 } from '../../mixin'

export default {
  name: 'TheAction',
  data(){
    return {
      name: '谢婉莹',
      address: '钓鱼岛'
    }
  },
  mixins:[mixin, mixin2]
}
</script>

<style scoped>
</style>
