<script>
import gql from 'graphql-tag'

export default {
  watch: {
    countries(val) {
      console.log(val)
    }
  },
  apollo: {
    countries: gql`
      query {
        countries(filter: { continent: { eq: "AS" } }) {
          code
          name
          capital
          phone
          continent {
            code
          }
          languages {
            name
          }

          currency
          emoji
        }
      }
    `
  }
}
</script>

<template>
  <div>
    {{ countries }}
  </div>
</template>

<style></style>
