<template lang="pug">
  section.container
    div
      Logo(:user="user", ref="helloComponent")
      h1.title
        router-view
      h2.subtitle {{title}}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
class App extends Vue {
  name: string = 'index'
  title: string = 'test'
  user: object = {
    firstName: '1',
    lastName: 2
  }
}
export default App
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
