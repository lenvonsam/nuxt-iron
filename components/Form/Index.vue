<template lang="pug">
.form
  slot(name="content", :data="{labelWidth}")
  //- slot(name="footer")
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

interface rules {
  required: boolean
  message: string
  trigger: string
}

@Component
class Index extends Vue {
  @Prop() model: any
  @Prop() rules: rules
  @Prop({ default: '60px' }) labelWidth: string
}
export default Index
</script>
<style scoped>
</style>
