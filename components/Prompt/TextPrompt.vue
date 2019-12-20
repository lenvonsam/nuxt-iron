<template lang="pug">
  .zhd-tishi.text-red
    i.iconfont.icon-tishi
    span.pl-5 {{content}}
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
class TextPrompt extends Vue {
  @Prop({ type: String }) content: string
}
export default TextPrompt
</script>
<style scoped>
</style>
