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
    <h3 class="title">Countries List (Example)</h3>
    <div v-if="loading" class="grid-container">
      <LoadingCard v-for="i in 6" :key="i" class="card" />
    </div>

    <div v-else class="grid-container">
      <CountryCard
        v-for="(country, i) in countries"
        :key="i"
        :country="country"
        class="card"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.grid-container {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: calc(100vh - 300px);
  overflow: scroll;
  width: 100%;

  .card {
    height: 150px;
    justify-self: center;
    margin: 24px;
    text-align: left;
    width: 300px;
  }
}

.title {
  text-align: center;
}
</style>
