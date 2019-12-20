<template lang="pug">
div
  .flex.flex-center.flex-content-between
    .col.flex.flex-center
      span 提货方式:
      .pick-type.active 买方自提
    .col.text-center 合同号：DD19121800008
    .col.zhd-text-main.text-right 恢复到购物车
  z-basic-table.mt-15.text-center(:options="tableValue", ref="basicTable")
    template(v-slot:number="{data}")
      z-input-num(@add="inputNumberAdd(data.item)", @reduce="inputNumberReduce(data.item)", :value="data.item.number")
    template(slot="option")
      b-button.zhd-btn.bg-danger.zhd-btn-sm(@click.stop="restoreBtn") 删除
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class Detail extends Vue {
  tableValue: any = {
    fields: [
      { key: 'documentNo', label: '品名', width: '57px' },
      { key: 'num', label: '材质', width: '66px' },
      { key: 'weight', label: '规格', width: '138px' },
      { key: 'totalAmount', label: '长度(m)', width: '73px' },
      { key: 'invoiceNum', label: '产地', width: '45px' },
      { key: 'invoiceNum1', label: '仓库', width: '55px' },
      { key: 'invoiceNum2', label: '单价(元)', width: '73px' },
      { key: 'invoiceNum3', label: '支数/重量', width: '133px' },
      { key: 'invoiceNum4', label: '计量方式', width: '110px' },
      { key: 'invoiceNum5', label: '公差范围', width: '77px' },
      { key: 'invoiceNum6', label: '重量范围', width: '78px' },
      { key: 'invoiceNum7', label: '吊费(元)', width: '73px' },
      { key: 'number', label: '数量(支)', width: '119px' },
      { key: 'invoiceNum9', label: '重量', width: '57px' },
      {
        key: 'option',
        label: '操作',
        // class: 'basic-table-option',
        width: '46px'
      }
    ],
    tableData: [
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元',
        number: 1
      },
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元',
        number: 1
      },
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元',
        number: 1
      },
      {
        documentNo: 'TD19112400062',
        num: '江苏智恒达型云网络科技有限公司',
        weight: '10支',
        totalAmount: '7.92吨',
        invoiceNum: '31165.2元',
        number: 1
      }
    ]
  }

  inputNumberAdd(data: any): void {
    let val = Number(data.number)
    data.number = ++val
    console.log(val)
  }

  inputNumberReduce(data: any): void {
    console.log('inputNumberReduce')
    let val = Number(data.number)
    data.number = --val
  }
}
export default Detail
</script>
<style lang="stylus" scoped>
.pick-type
  margin 10px
  width 75pt
  height 30px
  border 1px solid #e2e2e2
  color #333
  text-align center
  line-height 30px
  cursor pointer
  &.active
    border 1px solid #0289fb
    color #0289fb
    background url('../../../../assets/images/checked.png') no-repeat right bottom
</style>
