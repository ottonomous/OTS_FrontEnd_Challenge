<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">{{ country }}</div>
</template>

<style lang="scss" scoped>
.card {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
  height: 200px;
  overflow: hidden;
  padding: 12px 24px;
  width: 200px;
}
</style>
