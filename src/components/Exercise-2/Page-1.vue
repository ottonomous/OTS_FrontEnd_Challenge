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

button {
  background-color: #76d7c4;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 4px;
  margin: 3rem auto;
  padding: 12px;
  text-transform: uppercase;
  width: 150px;
}

textarea {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  margin: auto;
  min-height: 200px;
  outline-color: #76d7c4;
  overflow: auto;
  padding: 24px;
  resize: none;
  width: 85%;
}
</style>
