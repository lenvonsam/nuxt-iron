<template lang="pug">
div
  MenuTitle(title="合同支付")
  .mt-10.bg-white.p-15.main-content
    .flex
      .col 合同号：DD19121200009
      .col.text-center 生成时间：2019-12-12 08:44
      .col.text-right 付款截止时间：
        span.text-red 2019-12-12 10:44
    .flex.flex-content-between.flex-center.mt-20
      .col 供应商：
        span.zhd-text-main 江苏智恒达型云网络科技有限公司
      .col.text-right.ft-16.text-red.ft-bold 待支付
    .mt-20.border-top-line.pt-20.border-bottom-line
      .ft-16 商品信息
      BasicTable.mt-15.text-center(:options="tableValue", ref="basicTable")
      .text-right.ft-13.line-height-25.mb-10
        p 货款：131.67元
        p +吊费：0.83元
    .mt-15.flex
      .col.p-0 总重量：0.033吨 总数量：1支
      .col.p-0.text-right 合同金额：
        span.text-red.ft-bold ￥132.50 元
  .mt-10.bg-white.p-15
    .pay-title 合同付款
    .pay-info
      .flex
        .pay-type(:class="payType === '全款支付' ? 'active' : ''", @click="checkPayType('全款支付')") 全款支付
        .pay-type(:class="payType === '定金支付' ? 'active' : ''", @click="checkPayType('定金支付')")
          .pay-type-content
            p 定金支付
              .ft-12.text-grey (约合同金额的20%)
      .flex.mt-15.flex-center
        .col.p-0
          .ft-16.ft-bold 扣款明细
          .mt-20.line-height-30
            p.pb-5 合同金额：
              span.zhd-text-main 132.5元
            p.pb-5 账户余额
              span.zhd-text-main (优先抵扣)
              span ：17.5元
            p.pb-5 待转账：115
        .col.p-0
          .flex.flex-center
            .ft-16.ft-bold 打款信息
            button.zhd-btn.zhd-btn-xs.ml-5(v-b-modal.modal-sm, v-clipboard:copy="copyPayInfo", v-clipboard:success="getCopyPayInfo") 复制
          .mt-20.line-height-30
            p.pb-5 银行账号：
              span.zhd-text-main 10613501040017200
            p.pb-5 开户银行：中国农业银行股份有限公司常州九龙支行
            p.pb-5 开户名称：江苏智恒达型云网络科技有限公司
          b-form-checkbox.text-grey(v-model="sendPhone", label="发送供应商账号到手机") 发送供应商账号到手机
      .mt-20.border-top-line.pay-options.text-center.pt-20
        .ft-18 需转账:
          span.text-red
            strong.ft-24.pl-10 115
            span.ft-13.pl-5 元
        .mt-5.text-grey.ft-13 (优先抵扣余额后，还需转账金额)
      .mt-10
        .text-red.zhd-tishi
          i.icon.iconfont.icon-tishi
          span.pl-5 请点击支付，并按照需转账金额线下转账!
      .mt-10.flex.flex-center
        .col.flex.flex-center
          span.text-red.ft-20() *
          .col.p-0
            z-input(label="支付密码", type="password")
        .col.p-0
          router-link(to="/").zhd-text-main 忘记密码？
      .mt-35.text-center
        button.zhd-btn.zhd-btn-lg.mr-20 确认支付
        button.zhd-btn.zhd-btn-default.zhd-btn-lg(@click="back") 返回
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MenuTitle from '@/components/Management/MenuTitle.vue'
import BasicTable from '@/components/BasicTable.vue'

@Component({
  components: {
    MenuTitle,
    BasicTable
  },
  layout: 'Management'
})
class Index extends Vue {
  sendPhone: string = ''
  modalMsg: string = ''
  modalMsgShow: boolean = false
  payType: string = '全款支付'
  tableValue: any = {
    fields: [
      { key: 'documentNo', label: '品名' },
      { key: 'num', label: '材质' },
      { key: 'weight', label: '规格' },
      { key: 'totalAmount', label: '长度(m)' },
      { key: 'invoiceNum', label: '产地' },
      { key: 'invoiceNum1', label: '仓库' },
      { key: 'invoiceNum2', label: '计量方式' },
      { key: 'invoiceNum3', label: '公差范围' },
      { key: 'invoiceNum4', label: '重量范围' },
      { key: 'invoiceNum5', label: '单价(元)' },
      { key: 'invoiceNum6', label: '数量' },
      { key: 'invoiceNum7', label: '重量' },
      { key: 'invoiceNum8', label: '金额(元)' }
    ],
    tableData: [
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      }
    ]
  }

  copyPayInfo: string =
    '银行账号：10613501040017200,开户银行：中国农业银行股份有限公司常州九龙支行,开户名称：江苏智恒达型云网络科技有限公司'

  checkPayType(type: string) {
    this.payType = type
  }

  getCopyPayInfo() {
    const me: any = this
    me.msgShow({ msg: '复制成功' })
  }
}
export default Index
</script>
<style lang="stylus", scoped>
.pay-title
  background #fff
  border 1px solid #ddd
  border-bottom 1px solid #fff
  color #0289fb
  position relative
  width 120px
  height 50px
  line-height 50px
  margin-top 15px
  margin-bottom -1px
  text-align center
  font-size 16px
  border-top-left-radius 5px
  border-top-right-radius 5px
.pay-info
  border 1px solid #ddd
  padding 30px
.pay-type
  width 195px
  height 85px
  text-align center
  border 1px solid #ddd
  margin-right 25px
  cursor pointer
  line-height 85px
  position relative
  font-size 16px
  &.active
    font-size 18px
    color #0289fb
    border 1px solid #0289fb
    &:after
      position absolute
      z-index 2
      content ''
      width 30px
      height 30px
      right 0
      top 0
      background url('../../../../assets/images/zf_checked.png') no-repeat center
  .pay-type-content
    display inline-block
    vertical-align middle
    line-height 20px
.pay-options
  position relative
  &:before, &:after
    position absolute
    // display block
    top -20px
    content ''
    border-top 10px transparent dashed
    border-left 10px transparent dashed
    border-right 10px transparent dashed
    border-bottom 10px #ddd solid
  &:after
    top -19px
    border-bottom 10px #fff solid
</style>
