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
    <p>
      This challenge consists of 3 exercises. Please spend no more than 2 hours
      total on these exercises; the goal is to get a sense for how you solve
      problems and implement your code - these questions are not designed to
      trick you.
    </p>
    <em>
      Comments are a great way to explain your thinking and the choices you make
      as you work on each exercise.
    </em>
    <HelpfulLinks />
  </div>
</template>

<style lang="scss" scoped>
.instructions {
  margin: auto;
  max-width: 1000px;
}
</style>
