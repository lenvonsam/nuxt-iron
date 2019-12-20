<template lang="pug">
b-modal(ref="dialogModal", :size="options.size", v-model="modalShow", centered, :dialog-class="options.className")
  template(v-slot:modal-title)
    span {{options.title || '提示信息' }}
  slot(name="content")
    p {{options.content}}
  template(v-slot:modal-footer="{ ok, cancel, hide }")
    slot(name="footer")
      button.zhd-btn(@click="back(btn)", v-for="(btn, index) in options.btns || btns", :key="index", :class="btn.class || 'zhd-btn-blue'") {{btn.label}}
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'

interface options {
  title: string
  content: string
}

@Component
class DialogPrompt extends Vue {
  @Prop(Object) options: options
  @Prop(Boolean) status: boolean
  modalShow: boolean = false
  btns: Array<any> = [
    {
      label: '确认',
      class: 'zhd-btn-blue'
    },
    {
      label: '取消',
      class: 'zhd-btn-default'
    }
  ]

  @Watch('modalShow')
  onModalShowChange(val: boolean) {
    if (!val) {
      this.$emit('close')
    }
  }

  @Watch('status')
  onStatusChange(val: boolean) {
    console.log('onStatusChange', val)
    if (val) {
      this.modalShow = true
    } else {
      this.modalShow = false
    }
  }

  @Emit('back')
  back(btn: any): void {
    this.modalShow = false
    return btn
  }
}
export default DialogPrompt
</script>
<style lang="stylus" scoped>
.dialog
  width 1200px
</style>
