<template lang="pug">
div
  Search
  .mt-20.text-red.zhd-tishi
    i.iconfont.icon-tishi
    span.pl-5 *月末至月初为开票高峰期，票务如有延迟，敬请谅解1
  .mt-15
    z-basic-table.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
      template(slot="option")
        b-button.zhd-btn.bg-primary.zhd-btn-sm(@click.stop="appliedInvoice") 申请
      template(slot="footer")
        b-form-checkbox(v-model="allSelected", @change="allSelectedEvent")
        .text-right
          button.zhd-btn 批量申请
  z-dialog-prompt(:options="dialogOptions", :status="promptStatus", @close="promptStatus = false", @back="promptCancel")
    template(slot="content")
      b-row.mb-15
        b-col.pr-0.text-right(cols="3") 提单编号:
        b-col(cols="9") TD19120500008
      b-row.mb-15
        b-col.pr-0.text-right(cols="3")
          span.text-red *
          span 抬头:
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
        b-col.pr-0.text-right(cols="3") 发票领取方式:
        b-col(cols="9")
          .flex
            b-form-radio(v-model="invoiceType" value="0") 线下领票
            b-form-radio.ml-15(v-model="invoiceType" value="1") 邮寄领票
      template(v-if="invoiceType === '1'")
        b-row.mb-15.flex-center
          b-col.pr-0.text-right(cols="3")
            span.text-red *
            span 收件人:
          b-col.pl-0(cols="9")
            z-input(type="text")
        b-row.mb-15.flex-center
          b-col.pr-0.text-right(cols="3")
            span.text-red *
            span 手机号:
          b-col.pl-0(cols="9")
            z-input(type="number")
        b-row.mb-15.flex-center
          b-col.pr-0.text-right(cols="3")
            span.text-red *
            span 收票地址:
          b-col.pl-0(cols="9")
            z-input(type="text")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Search from './search.vue'

@Component({
  components: {
    Search
  }
})
class NotApplied extends Vue {
  allSelected: boolean = false
  promptStatus: boolean = false
  dialogOptions: any = {}

  invoiceType: any = '0'

  tableValue: any = {
    selectMode: 'multi',
    selectable: true,
    pagination: true,
    count: 15,
    fields: [
      { key: 'selected', label: '选项', class: 'basic-table-selected' },
      { key: 'documentNo', label: '商品信息' },
      { key: 'num', label: '仓库' },
      { key: 'weight', label: '单价' },
      { key: 'totalAmount', label: '数量' },
      { key: 'invoiceNum', label: '重量' },
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

  appliedInvoice() {
    this.promptStatus = true
  }

  promptCancel() {
    this.promptStatus = false
  }
}
export default NotApplied
</script>
<style lang="stylus" scoped></style>
