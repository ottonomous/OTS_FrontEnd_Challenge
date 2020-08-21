<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['savedInput'])
  },
  mounted() {
    this.input = this.savedInput
  }
}
</script>

<template>
  <div class="container">
    <h3>Page 2</h3>
    <div>
      <h4>Saved input:</h4>
      <div>
        {{ savedInput ? savedInput : 'You have no saved input.' }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
