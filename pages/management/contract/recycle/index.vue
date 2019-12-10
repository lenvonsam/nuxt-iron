<template lang="pug">
div
  MenuTitle(title="发票管理")
  .mt-10.bg-white.p-15.main-content
    Search
    z-basic-table.mt-15.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
      template(slot="option")
        b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="") 恢复
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Search from './search.vue'
import MenuTitle from '@/components/Management/MenuTitle.vue'

@Component({
  layout: 'Management',
  components: {
    MenuTitle,
    Search
  }
})
class Index extends Vue {
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
}
export default Index
</script>
<style lang="stylus" scoped></style>
