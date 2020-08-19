<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div class="home">
    <img alt="Prefect logo" class="logo" src="../assets/logo.svg" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  max-width: 300px;
}
</style>
