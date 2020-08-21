<script>
import Countries from '@/components/Exercise-3/Countries'

export default {
  components: {
    Countries
  }
}
</script>

<template>
  <!-- You may modify any code above this line -->
  <div class="exercise-grid">
    <!-- Please do not modify the code between these comments! -->
    <div class="instructions-container">
      <h2>
        Exercise 3
      </h2>
      <p>
        For this exercise, you'll query a GraphQL API of your choice using the
        following component and decide how to render the data you get back. A
        sample query has been provided for you
      </p>

      <div class="info-box text-caption ma-auto">
        <em>Note:</em> This exercise is more open-ended than the previous
        exercises. Use this as an opportunity to show off your design chops but
        don't let this take you longer than the allotted time!
      </div>

      <ul class="instruction-list ma-auto my-6">
        <strong>A user can...</strong>
        <li> </li>
      </ul>

      <p class="my-6">
        Modify the components as you see fit to accomplish the above stories.
      </p>

      <hr />
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-container">
      <Countries />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exercise-3 {
  min-height: 700px;
}
</style>
