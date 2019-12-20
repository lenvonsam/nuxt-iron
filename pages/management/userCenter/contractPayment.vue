<template lang="pug">
div
  .zhd-tishi.text-red
    i.iconfont.icon-tishi
    span.pl-5 请在合同支付后 5 天内提货，如出现多次延时提货，平台将酌情收取仓储费用！
  .mt-15
    UniteTable.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="uniteTable")
      template(slot="title", slot-scope="item")
        .flex.flex-center.flex-content-between
          .col.p-0.flex.flex-center
            //- b-form-checkbox(v-model="item.selected", label="")
            span.pr-5 合同号:
            img(src="@/assets/images/ding.png", width="18px", height="18px")
            router-link.pl-5.ft-bold.zhd-text-main(to="/") DD19112400011
            span.pl-15 合同金额：
            span.text-red.ft-bold ￥6233.04
            span.text-999.ft-12 （预计1.584吨，实发1.584吨，含吊费：39.6）
          .ft-12.text-999.text-right
            button.zhd-btn.zhd-btn-border.zhd-btn-border-warning.zhd-btn-xs.mr-10(@click="jump('/management/contract/contract/edit')") 申请修改
            button.zhd-btn.zhd-btn-border.zhd-btn-border-danger.zhd-btn-xs.mr-10.event-cancel(@click="cancelContract(item)") 取消合同
            span 下单时间：2019-11-24 09:08
      template(slot="documentNo")
        .text-left
          .zhd-text-main 角钢
          .ft-12 Q235 25*25*3 6.0米 唐山
      template(slot="status", slot-scope="item")
        .text-red.ft-bold 待支付
        .ft-bold 00:00:00
        .ft-12.text-999 支付倒计时
        //- .text-center.text-success.ft-bold(style="width:79px") {{item.data.status}}
      template(slot="options", slot-scope="item")
        .text-center.pb-5(style="width:88px")
          //- router-link.zhd-btn.zhd-btn-default.zhd-btn-sm.zhd-btn-abs.mt-5(:to="btn.path", v-for="(btn, index) in item.data.options", :key="index") {{btn.label}}
          .zhd-btn.zhd-btn-blue.zhd-btn-sm.zhd-btn-abs.mt-5(@click="$router.push('/management/contract/pay')") 去支付
          .zhd-btn.zhd-btn-default.zhd-btn-sm.zhd-btn-abs.mt-5 合同详情
      template(slot="footer")
        .flex.flex-content-between.mt-15.pl-10
          b-form-checkbox(:checked="selected.length === tableValue.tableData.length", @change="selectAllRows")
            span 全选
            span.pl-10 已选0支，共0吨
          .text-right.pr-10.flex.flex-content-end
            .line-height-20
              p 合计：
                span.ft-16.text-red.ft-bold 0
                span 元
              .text-999.ft-12 (含吊费：0元)
            button.ml-10.zhd-btn 批量支付
  //- z-dialog-prompt(:options="dialogOptions", :status="promptStatus")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import UniteTable from '@/components/UniteTable.vue'

@Component({
  components: {
    UniteTable
  }
})
class ContractPayment extends Vue {
  promptStatus: boolean = false
  allSelected: boolean = false
  selected: Array<any> = []
  tableValue: any = {
    pagination: true,
    selectable: true,
    count: 150,
    head: [
      {
        key: 'documentNo',
        label: '商品信息',
        width: '250px'
      },
      { key: 'warehouse', label: '仓库', width: '80px' },
      { key: 'price', label: '单价', width: '80px' },
      { key: 'warehouse', label: '数量', width: '80px' },
      { key: 'warehouse', label: '重量', width: '80px' },
      { key: 'warehouse', label: '小计', width: '80px' },
      { key: 'warehouse', label: '可提数量', width: '80px' },
      { key: 'warehouse', label: '发货出库', width: '80px' }
    ],
    slotList: [
      { key: 'status', label: '合同状态', width: '79px' },
      { key: 'options', label: '操作', width: '88px' }
    ],
    tableData: [
      {
        header: true,
        status: '已完成',
        check: false,
        options: [
          { label: '合同详情', path: '/management/contract/contract/detail' },
          { label: '去支付', path: '/management/contract/contract/detail' }
        ],
        list: [{ documentNo: 'ssssss', price: '111', warehouse: 'aaa' }]
      },
      {
        header: true,
        status: '已完成',
        check: false,
        options: [
          { label: '合同详情', path: '/management/contract/contract/detail' }
        ],
        list: [
          { documentNo: 'ssssss', price: '111', warehouse: 'aaa' },
          { documentNo: 'ssssss', price: '111', warehouse: 'aaa' }
        ]
      },
      {
        header: true,
        status: '已完成',
        check: false,
        options: [
          { label: '合同详情', path: '/management/contract/contract/detail' }
        ],
        list: [
          { documentNo: 'ssssss', price: '111', warehouse: 'aaa' },
          { documentNo: 'ssssss', price: '111', warehouse: 'aaa' },
          { documentNo: 'ssssss', price: '111', warehouse: 'aaa' }
        ]
      }
    ]
  }

  mounted() {
    this.$nextTick(() => {
      this.$emit('count', this.tableValue.count)
      this.promptStatus = true
    })
  }

  rowSelected(row: Array<any>) {
    this.selected = row
  }

  selectAllRows(val: boolean) {
    const uniteTable: any = this.$refs.uniteTable
    val ? uniteTable.selectAllRows() : uniteTable.clearSelected()
  }

  cancelContract(data: any) {
    const me: any = this
    me.confirmShow({
      msg: '确定要取消合同吗？',
      success: () => {
        console.log('success')
      },
      cancel: () => {
        console.log('cancel')
      }
    })
    console.log('cancelContract', data)
  }
}
export default ContractPayment
</script>
<style lang="stylus" scoped></style>
