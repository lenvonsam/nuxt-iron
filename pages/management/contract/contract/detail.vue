<template lang="pug">
div
  MenuTitle(title="合同详情")
  .mt-10.bg-white.p-15.main-content
    .flex
      .col 合同号：DD19112400028
      .col 生成时间：2019-11-24 12:40
      .col.text-right 状态：
        span.text-red.ft-blod 已取消
    .mt-15.flex.flex-center
      .col 供应商：
        span.zhd-text-main 江苏智恒达型云网络科技有限公司
      .col.text-right
        button.zhd-btn.zhd-btn-warning 打印合同
    .pt-15.mt-15.border-top-line
      h2.ft-18.ft-bold 商品信息
    .mt-15
      UniteTable(:options="tableValue")
        template(slot="countPrice")
          .text-center(style="width:98px")
            .text-yellow.ft-bold ￥96417.76
            .ft-12.text-999 (含吊费:622.06)
      .flex.flex-center.border-bottom-line.pb-10.pt-5
        .col.p-0 共26支，26.531吨
        .col.text-right.p-0
          .ft-12 货款：98663.02元
          .ft-12 +吊费：663.28元
      .mt-10.ft-bold.text-black
        strong 实发总数量：
        span.zhd-text-main 0 支
        strong.pl-15 实发总重量：
        span.zhd-text-main 0 吨

  //- 支付详情
  .mt-10.bg-white.p-10.line-height-30
    .ft-bold.ft-18
      span.pr-10 支付详情
      img(src="@/assets/images/dingjin.png", width="31px", height="18px")
    .ft-bold 实发合同金额：
      span.zhd-text-main 0.00元
      span.ft-999 ( 实发货款：
      span.zhd-text-main 0.00元
      span.ft-999 + 实发吊费：
      span.zhd-text-main 0.00元
      span.text-999 )
    .ft-bold 已支付：
      span.text-green 0.00元
    .ft-bold 未支付：
      span.text-red 0元
    .ft-bold 仓储费：
      span.zhd-text-main 0元

  //- 补款信息
  //- .mt-10.bg-white.p-10.line-height-30
    .ft-bold.ft-18 补款信息
    .border-bottom-line.pb-20.pt-20
      span.ft-20.ft-bold 需补款：
        span.text-red ￥ 0 元
      span.pl-15.text-13 (账户余额：
      span.text-green 13.79
      span 元 ，如余额未被其他单据使用，只需补款 元 ）
    .mt-15.flex
      .col.p-0
        .mt-5.line-height-30
          p.pb-5 合同金额：
            span.zhd-text-main 132.5元
          p.pb-5 已支付：
            span.text-green 1000元
            span ( 定金支付：
            span.zhd-text-main 1000元
            span 定金实发抵扣： 白条支付：
            span.zhd-text-main 1000元
            span )
          p.text-red.ft-12 注：请尽可能一次性出库，如多次出库，会分批补款，定金会抵扣在最后几笔提单中！
      .col.p-0
        .flex.flex-center
          .ft-bold 打款信息
        .line-height-30
          p.pb-5 银行账号：
            span.zhd-text-main 10613501040017200
          p.pb-5 开户银行：中国农业银行股份有限公司常州九龙支行
          p.pb-5 开户名称：江苏智恒达型云网络科技有限公司
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
class Detail extends Vue {
  tableValue: any = {
    head: [
      { key: 'documentNo', label: '商品信息', width: '250px' },
      { key: 'documentNo', label: '仓库', width: '80px' },
      { key: 'documentNo', label: '单价', width: '80px' },
      { key: 'documentNo', label: '数量', width: '70px' },
      { key: 'documentNo', label: '重量', width: '80px' },
      { key: 'documentNo', label: '小计', width: '80px' },
      { key: 'documentNo', label: '提单计划', width: '80px' },
      { key: 'documentNo', label: '发货数量', width: '80px' },
      { key: 'documentNo', label: '发货重量', width: '80px' }
    ],
    slotList: [{ key: 'countPrice', label: '合同金额', width: '98px' }],
    tableData: [
      {
        list: [{ documentNo: 'ssssss' }]
      },
      {
        list: [{ documentNo: 'ssssss' }, { documentNo: 'ssssss' }]
      },
      {
        list: [
          { documentNo: 'ssssss' },
          { documentNo: 'ssssss' },
          { documentNo: 'ssssss' }
        ]
      }
    ]
  }
}
export default Detail
</script>
<style lang="stylus" scoped></style>
