<template lang="pug">
div
  menuTitle(title="求购发布")
  //- z-form(:model="form", :rules="rules")
    template(v-slot:content)
  .mt-10.bg-white.p-15.main-content
    .mb-10.flex.flex-between
      z-input.col(label="品名", prop="name", :value.sync="form.name", :rule="rules.name", :labelWidth="'80px'")
      z-input.col(label="产地", prop="proAdd", :value.sync="form.proAdd", :rule="rules.proAdd", :labelWidth="'80px'")
    .mb-10.flex.flex-between
      z-input.col(label="材质", :labelWidth="'80px'")
      z-input.col(label="规格", :labelWidth="'80px'")
    .flex
      z-input.col(label="联系电话", :labelWidth="'80px'")    
  .text-center.mt-10
    button.zhd-btn(@click="submit") 提交

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import menuTitle from '@/components/Management/MenuTitle.vue'

interface form {
  name: string
  proAdd: string
}

@Component({
  layout: 'Management',
  components: {
    menuTitle
  }
})
class Release extends Vue {
  form: form

  constructor() {
    super()
    this.form = {
      name: '',
      proAdd: ''
    }
  }

  rules: any = {
    name: { message: '不能为空', required: true, trigger: 'change' },
    proAdd: { message: '不能为空', required: true, trigger: 'change' }
  }

  submit() {
    console.log('submit', this.form)
  }
}
export default Release
</script>
<style scoped>
</style>
