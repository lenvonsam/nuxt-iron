<template lang="pug">
.z-table
  .head.flex
    .td(v-for="(head, index) in copyOptions.head", :key="index", :class="head.className", :style="{width: head.width ? head.width : '100px'}")
      template(v-if="copyOptions.selectable && index === 0")
        .text-left.pl-10
          b-form-checkbox(:checked="selected.length === copyOptions.tableData.length", @change="selectAllRowsToggle") {{head.label}}
      template(v-else) 
        span {{head.label}}
    .td(v-for="(item, index) in copyOptions.slotList", :key="item.key", :style="{width: item.width ? item.width : '100px'}") {{item.label}}    
  .tbody(ref="uniteTableTbody")
    b-form-checkbox-group(v-model="selected")
      .tbody-list(v-for="(item, index) in copyOptions.tableData", :key="index")
        .title.flex
          b-form-checkbox(style="width:17px", :value="item", @change="rowSelectedChange", v-if="copyOptions.selectable")
          .col.p-0
            slot(name="title", :data="item")
        .flex.item-body
          .td
            .tr.item-detail(v-for="(content, index) in item.list", :key="index")
              .list(v-for="(item, index) in copyOptions.head", :key="index", :style="{width: item.width ? item.width : '100px'}")                
                slot(:name="item.key", :data="item")
                  span {{content[item.key]}}
          .flex.slot-list(v-for="(itemSlot, index) in copyOptions.slotList", :key="itemSlot.key")
            .td(:style="{width: itemSlot.width ? itemSlot.width : '100px'}")
              slot(:name="itemSlot.key", :data="item")
  slot(name="footer")        
  pagination.mt-15(:count="copyOptions.count", @changePage="getActivePage", v-if="copyOptions.pagination")         
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import pagination from '@/components/Pagination.vue'

interface options {
  tableData: Array<any>
  head: Array<any>
  pagination: boolean
  slotList?: Array<any>
}

@Component({
  components: {
    pagination
  }
})
class UniteTable extends Vue {
  @Prop(Object) options: options
  allSelected: boolean = false
  selected: Array<any> = []
  copyOptions: any = {}

  @Watch('selected')
  onSelectedChange(val: Array<any>) {
    this.$emit('onRowSelected', val)
  }

  @Watch('options.tableData', { immediate: true, deep: true })
  onTableValueChange(options: any) {
    console.log('tableValue', options)
    this.copyOptions = this.options
  }

  getActivePage(page: number) {
    console.log('page', page)
  }
  selectAllRowsToggle(val: boolean) {
    val ? this.selectAllRows() : this.clearSelected()
  }
  rowSelectedChange(row: any) {
    console.log('onRowSelected', row)
  }
  selectAllRows() {
    this.selected = this.copyOptions.tableData
  }
  clearSelected() {
    this.selected = []
  }
}
export default UniteTable
</script>
<style lang="stylus" scoped>
.z-table
  width 980px
  overflow auto
  .head
    padding 12px 0px
    background #f6f6f6
    font-weight bold
    text-align center
    .td
      float left
  .tbody
    /deep/.custom-control.custom-control-inline.custom-checkbox
      display none
    .tbody-list
      margin-top 15px
      /deep/.custom-control.custom-control-inline.custom-checkbox
        display inline
        margin-right 0
    .title
      width 100%
      padding 10px
      background #ebf7ff
      border 1px solid #d4f0fc
      border-bottom 0
    .item-body
      width 100%
      height 100%
      border 1px solid #d4f0fc
      border-top none
      margin-top -1px
      position relative
      font-size 13px
      display table
      .td
        display table-cell
        vertical-align middle
        // align-self center
        &:last-child
          border-right none
      .td-right-border
        width 1px
        height 100%
        align-self stretch
        background #d4f0fc
      .item-detail
        border-top 1px solid #d4f0fc
        height 100%
        display table
        .list
          display table-cell
          vertical-align middle
          border-right 1px solid #d4f0fc
          box-sizing border-box
          padding 9px
      .slot-list
        border-top 1px solid #d4f0fc
        border-right 1px solid #d4f0fc
        display table-cell
        vertical-align middle
        &:last-child
          border-right none
          // .td-right-border
          // display none
</style>
