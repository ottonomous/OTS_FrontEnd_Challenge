<script>
import gql from 'graphql-tag'
import CountryCard from '@/components/Exercise-3/CountryCard'

export default {
  components: {
    CountryCard
  },
  data() {
    return {
      loadingKey: 0
    }
  },
  computed: {
    loading() {
      return this.loadingKey > 0
    }
  },
  apollo: {
    countries: {
      query: gql`
        query {
          countries(filter: { continent: { eq: "AS" } }) {
            capital
            code

            continent {
              code
            }

            currency
            emoji

            languages {
              name
            }

            name
            phone
          }
        }
      `,
      loadingKey: 'loadingKey'
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <CountryCard
        v-for="country in countries"
        :key="country.id"
        :country="country"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 12px 24px;
  width: 700px;
}
</style>
