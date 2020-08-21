<script>
import gql from 'graphql-tag'
import CountryCard from '@/components/Exercise-3/CountryCard'
import LoadingCard from '@/components/Exercise-3/LoadingCard'

export default {
  components: {
    CountryCard,
    LoadingCard
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
    <h3 class="title">Countries</h3>
    <div class="grid-container">
      <template v-if="loading">
        <LoadingCard class="card" />
        <LoadingCard class="card" />
        <LoadingCard class="card" />
      </template>
      <template v-else>
        <CountryCard
          v-for="country in countries"
          :key="country.id"
          :country="country"
          class="card"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .card {
    height: 150px;
    justify-self: center;
    margin: 24px;
    width: 200px;
  }
}

.title {
  text-align: center;
}
</style>
