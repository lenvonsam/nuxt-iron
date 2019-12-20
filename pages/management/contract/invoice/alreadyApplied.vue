<template lang="pug">
div
  Search
  .mt-20.text-red.zhd-tishi
    i.iconfont.icon-tishi
    span.pl-5 *月末至月初为开票高峰期，票务如有延迟，敬请谅解
  .mt-15
    z-basic-table.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
      template(slot="option")
        b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="invoiceDetail") 详情
  z-dialog-prompt(:options="dialogOptions", :status="promptStatus", @close="promptStatus = false", @back="promptCancel")
    template(slot="content")
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 提单编号:
        b-col(cols="9") TD19120500008
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 抬头:
        b-col(cols="9") 上海和济钢铁有限公司
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 类型:
        b-col(cols="9") 明细
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 货款金额:
        b-col(cols="9") 1081.08元
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 吊费:
        b-col(cols="9") 7.15元
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 总金额:
        b-col(cols="9") 1088.23元
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 领票方式:
        b-col(cols="9") 线下领票
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Search from './search.vue'

@Component({
  components: {
    Search
  }
})
class AlreadyApplied extends Vue {
  allSelected: boolean = false
  dialogOptions: any = {
    btns: [
      {
        label: '确认',
        class: 'zhd-btn-blue'
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

  rowSelected(row: Array<any>) {
    console.log('rowSelected', row)
  }

  allSelectedEvent(val: boolean) {
    const basicTable: any = this.$refs.basicTable
    val ? basicTable.selectAllRows() : basicTable.clearSelected()
  }

  invoiceDetail() {
    this.promptStatus = true
  }

  promptCancel(res: any) {
    console.log('----promptCancel', res)
    this.promptStatus = false
  }
}
export default AlreadyApplied
</script>
<style lang="stylus" scoped></style>
