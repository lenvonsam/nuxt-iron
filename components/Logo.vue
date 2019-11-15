<template lang="pug">
  div
    span {{message}} -- {{nowDate}}
    b-button.ml-10(@click="btnClick") 测试点击
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { loadData } from '~/models/logo'

interface User {
  firstName: string
  lastName: number
}

@Component({})
class Logo extends Vue {
  @Prop({ type: Object, required: true }) readonly user!: User

  message: string = 'This is a message'
  nowDate: string = (this as any).toStringDate(new Date())
  // apiObj: object = (this as any).api.logoApi
  constructor() {
    super()
    console.log(this)
  }
  mounted() {
    this.$nextTick(() => {
      this.loadData()
    })
  }

  get apiObj(): object {
    return (this as any).api.logoApi
  }

  loadData(): void {
    const paramsBody: object = {driverIdcard: '320382199003078572'}
    const params: loadData = {
      body: JSON.stringify(paramsBody)
    }
    const that = (this as any)
    that.requestDecode(that.urlProxy + (this.apiObj as any).loadData, params, 'post').then((res: any) => {
      console.log(res)
    }).catch((err: any) => {
      console.error(err)
    })
  }

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  btnClick(): void {
    console.log('----btnClick')
    this.nowDate = (this as any).toStringDate(new Date())
  }
}
export default Logo
</script>

<style>
</style>
