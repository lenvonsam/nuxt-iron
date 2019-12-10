<template lang="pug">
div
  MenuTitle(title="历史单据")
  .bg-white.p-15.mt-20
    .text-red.zhd-tishi
      i.iconfont.icon-tishi
      span.pl-5 请在合同支付后 5 天内提货，如出现多次延时提货，平台将酌情收取仓储费用！
    .mt-15
      button.zhd-btn 历史订单
      button.ml-10.zhd-btn.zhd-btn-warning 历史合同
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MenuTitle from '@/components/Management/MenuTitle.vue'

@Component({
  layout: 'Management',
  components: {
    MenuTitle
  }
})
class Index extends Vue {}
export default Index
</script>
<style scoped>
</style>
