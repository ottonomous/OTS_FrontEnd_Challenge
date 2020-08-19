<script>
import HelpfulLinks from '@/components/HelpfulLinks.vue'

export default {
  name: 'Instructions',
  components: {
    HelpfulLinks
  }
}
</script>

<template>
  <div class="instructions">
    <h2>
      Instructions
    </h2>
    <p>
      If you've made it this far you've already completed the first step by
      installing the project dependencies and starting your Vue development
      server... good job!
    </p>
    <HelpfulLinks />
  </div>
</template>

<style lang="scss" scoped>
.instructions {
  margin: auto;
  max-width: 1000px;
}
</style>
