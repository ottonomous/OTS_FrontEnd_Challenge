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
        For this exercise, you'll create a component (or components) that query
        a GraphQL API of your choice and render the data you get back. The
        <code>Countries</code> component below has been provided as a brief
        example.
      </p>

      <div class="info-box text-caption ma-auto">
        <em>Note:</em> This exercise is more open-ended than the previous
        exercises. Use this as an opportunity to show off your design chops but
        don't let this take you longer than the allotted time!
      </div>

      <ul class="instruction-list ma-auto my-6">
        <strong>To complete this exercise, ensure that you have...</strong>
        <li>
          replaced the <code>Countries</code> component with your own component
        </li>
        <li>pulled some data from one of the provided GraphQL APIs</li>
        <li>rendered that data in the mode of your choosing</li>
      </ul>

      <p>
        You may use any publicly-available GraphQL API. The
        <a href="https://github.com/APIs-guru/graphql-apis" target="_blank"
          >graphql-apis</a
        >
        repo on GitHub has a list that you can use; each has a link to "Try it!"
        that will allow you to test your queries against the live API.
      </p>

      <p>
        When you've chosen your API, you'll need to get the GraphQL endpoint;
        you'll replace the <code>httpEndpoint</code> variable in
        <code>/src/vue-apollo.js</code> with your endpoint.
      </p>

      <hr />
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-container exercise-3">
      <Countries />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exercise-3 {
  min-width: 500px;
  width: 750px;
}
</style>
