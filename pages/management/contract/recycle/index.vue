<template lang="pug">
div
  MenuTitle(title="合同回收站")
  .mt-10.bg-white.p-15.main-content
    Search
    z-basic-table.mt-15.text-center(:options="tableValue", ref="basicTable")
      template(v-slot:dataTest)
        span {{dataTest('123')}}
      template(slot="option")
        b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="restoreBtn") 恢复
    //- span(v-for="i in 9", :key="i") {{i}}
  z-dialog-prompt(:options="dialogOptions", :status="promptStatus", @close="promptStatus = false", @back="promptCancel")
    template(slot="content")
      Detail
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Search from './search.vue'
import Detail from './detail.vue'
import MenuTitle from '@/components/Management/MenuTitle.vue'

@Component({
  layout: 'Management',
  components: {
    MenuTitle,
    Search,
    Detail
  }
})
class Index extends Vue {
  dataTest: Function = function(a: any) {
    console.log('aaaa', a)
  }

  dialogOptions: any = {
    className: 'dialog-width-1200',
    title: '恢复合同',
    btns: [
      {
        label: '生成合同',
        class: 'zhd-btn-blue'
      },
      {
        label: '关闭',
        class: 'zhd-btn-default'
      }
    ]
  }

  promptStatus: boolean = false
  tableValue: any = {
    pagination: true,
    count: 0,
    fields: [
      { key: 'documentNo', label: '提单编号' },
      { key: 'num', label: '开票单位' },
      { key: 'weight', label: '数量（支）' },
      { key: 'totalAmount', label: '重量（吨）' },
      { key: 'invoiceNum', label: '总金额（元）' },
      { key: 'invoiceNum', label: '取票方式' },
      { key: 'option', label: '操作', class: 'basic-table-option' }
    ],
    tableData: [
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元'
      },
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元'
      },
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元'
      },
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元'
      }
    ]
  }

  restoreBtn() {
    console.log('----------------a')
    this.promptStatus = true
  }

  promptCancel(res: any) {
    console.log('----promptCancel', res)
    this.promptStatus = false
  }
}
export default Index
</script>
<style lang="stylus" scoped></style>
