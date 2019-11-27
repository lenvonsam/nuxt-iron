<template lang="pug">
  .content
    main-list
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainList from './MainList.vue'

@Component({
  layout: 'ShopMall',
  components: {
    MainList
  }
})
class Shop extends Vue {}
export default Shop
</script>
