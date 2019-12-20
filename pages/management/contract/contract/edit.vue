<template lang="pug">
div
  MenuTitle(title="修改合同详情页")
  .mt-10.bg-white.p-15
    .contract-title.flex.flex-center
      .col
        span 合同号:
        span.zhd-text-main.pl-5 DD19121600003
        span.pl-10 合同状态：
        span.ft-16.text-red.ft-bold 待支付
      .col.text-right.ft-12.text-666 下单时间：2019-12-16 08:14
    UniteTable.mt-15(:options="tableValue")
      template(slot="documentNo")
        .text-left
          .zhd-text-main 角钢
          .ft-12 Q235 25*25*3 6.0米 唐山
      template(slot="number", slot-scope="item")
        z-input-num(@add="inputNumberAdd(item.data)", @reduce="inputNumberReduce(item.data)", :value="item.data.number")
    z-text-prompt.mt-10(content="合同修改后物资数量不得少于本合同已制作提单物资数量！")
    .mt-10.border-d4f0fc
      b-row.head.ft-bold
        b-col.border-right-d4f0fc.ft-bold 旧单信息
        b-col.ft-bold 新单信息
      b-row
        b-col.border-right-d4f0fc
          b-row.pb-10
            b-col.mt-10(cols="4") 货款：
              span.zhd-text-main 118.47元
            b-col.mt-10(cols="4") 吊费：
              span.zhd-text-main 0.83元
            b-col.mt-10(cols="4") 合同合计：
              span.zhd-text-main 119.3元
            b-col.mt-10(cols="4") 实际金额：
              span.zhd-text-main 30.0元
            b-col.mt-10(cols="4") 已结算：
              span.zhd-text-main 0.0元
        b-col
          b-row.pb-10
            b-col.mt-10(cols="4") 货款：
              span.zhd-text-main 118.47元
            b-col.mt-10(cols="4") 吊费：
              span.zhd-text-main 0.83元
            b-col.mt-10(cols="4") 合同合计：
              span.zhd-text-main 119.3元
            b-col.mt-10(cols="4") 实际金额：
              span.zhd-text-main 30.0元
            b-col.mt-10(cols="4") 已结算：
              span.zhd-text-main 0.0元
    z-text-prompt.mt-10(content="以合同修改后的实际发货物资明细进行结算（多退少补）！")
    .mt-25.text-center.pb-30
      button.zhd-btn.zhd-btn-main 申请修改
      button.ml-20.zhd-btn.zhd-btn-warning 放弃修改
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MenuTitle from '@/components/Management/MenuTitle.vue'
import UniteTable from '@/components/UniteTable.vue'

@Component({
  layout: 'Management',
  components: {
    MenuTitle,
    UniteTable
  }
})
class Edit extends Vue {
  tableValue: any = {
    head: [
      { key: 'documentNo', label: '商品信息', width: '250px' },
      { key: 'num', label: '仓库', width: '80px' },
      { key: 'weight', label: '单价', width: '80px' },
      { key: 'totalAmount', label: '旧单数量', width: '80px' },
      { key: 'invoiceNum', label: '旧单重量', width: '80px' },
      { key: 'invoiceNum1', label: '新单重量', width: '80px' },
      { key: 'invoiceNum2', label: '新单金额', width: '120px' },
      { key: 'number', label: '新单数量', width: '208px' }
    ],
    tableData: [
      {
        list: [
          {
            documentNo: 'TD19112000180',
            num: '202',
            weight: '26.63',
            totalAmount: '256666.36',
            invoiceNum: '03652169',
            number: 2
          },
          {
            documentNo: 'TD19112000180',
            num: '202',
            weight: '26.63',
            totalAmount: '256666.36',
            invoiceNum: '03652169',
            number: 1
          }
        ]
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
export default Edit
</script>
<style lang="stylus" scoped>
.contract-title
  width 100%
  padding 10px 0
  background #ebf7ff
  margin-top 15px
  border 1px solid #d4f0fc
.border-d4f0fc
  border 1px solid #d4f0fc
.border-right-d4f0fc
  border-right 1px solid #d4f0fc
.head
  background #f6f6f6
  border-bottom 1px solid #d4f0fc
  // padding-left 50px
  height 60px
  line-height 60px
/deep/.row
  margin 0
</style>
