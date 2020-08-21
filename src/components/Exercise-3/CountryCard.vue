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
  <div>{{ country }}</div>
</template>
