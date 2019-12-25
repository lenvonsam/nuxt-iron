<template lang="pug">
div
  .flex.flex-center
    span(:style="{width: labelWidth, 'text-align': labelAlign}", v-if="label") 
      span.text-red(v-show="rule.required") *
      span {{label}}
    .col
      input.zhd-input(
        :id="`${prop}-tooltip-variant`",
        :type="type", 
        :placeholder="placeholder", 
        v-model="copyVal", 
        @input="change", 
        @blur="blur",
        :class="isRuleShow && rule.required ? 'border-red' : 'border'")
  b-tooltip(:target="`${prop}-tooltip-variant`", variant="danger", :show.sync="isRuleShow && rule.required", triggers="")
    span {{rule.message}}
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'

interface ruleModal {
  required?: boolean
  message: string
  trigger?: string
}

@Component
class Input extends Vue {
  @Prop({ default: '60px' }) labelWidth: string
  @Prop({ default: 'right' }) labelAlign: string
  @Prop({ default: '' }) label: string
  @Prop({ default: '' }) placeholder: string
  @Prop({ default: 'text' }) type: string
  @Prop({ default: '' }) prop: string
  @Prop({
    type: Object,
    default: () => {
      return {
        message: '不能为空',
        required: false
      }
    }
  })
  rule: ruleModal
  @Prop({
    default: () => {
      return false
    }
  })
  validator: Function
  @Prop({ default: '' }) value: string
  isRuleShow: boolean = false
  // copyVal: string = ''

  // @Watch('isRuleShow')
  // onValueChange(newVal: any, oldVal: any) {
  //   const tooltip: any = this.$refs.tooltip
  //   console.log('isRuleShow', newVal)
  //   // :show.sync="isRuleShow && rule.required"
  //   if (newVal && this.rule.required) {
  //     tooltip.$emit('open')
  //   } else {
  //     tooltip.$emit('close')
  //   }
  // }

  get copyVal() {
    return this.value || ''
  }

  set copyVal(newValue) {
    this.$emit('update:value', newValue)
  }

  vali(val: string) {
    if (this.validator) {
      this.isRuleShow = this.validator()
    } else {
      this.isRuleShow = val === '' ? true : false
    }
  }

  @Emit('change')
  change(e: any) {
    const value = e.target.value
    if (this.rule.trigger === 'change') this.vali(e.target.value)
  }

  blur() {
    console.log('----blur', this.isRuleShow)
    // if (this.rule.trigger === 'blur') this.vali()
  }
}
export default Input
</script>

<style lang="stylus" scoped>
input[type=text]:focus
  border 1px solid #1e90ff !important
input.border-red[type=text]:focus, .border-red
  border 1px red solid !important
</style>
