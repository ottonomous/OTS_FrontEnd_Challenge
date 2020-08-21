<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      input: null
    }
  },
  computed: {
    ...mapGetters(['savedInput'])
  },
  mounted() {
    this.input = this.savedInput
  },
  methods: {
    ...mapMutations(['saveInput']),
    save() {
      this.saveInput(this.input)
    }
  }
}
</script>

<template>
  <div class="container">
    <h3>Page 1</h3>
    <textarea v-model="input" placeholder="Type something here..." />
    <button @click="save">Save</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

textarea {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  margin: auto;
  min-height: 200px;
  outline-color: #76d7c4;
  overflow: auto;
  resize: none;
  width: 85%;
}
</style>
