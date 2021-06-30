<template>
  <div class="container">
    <h3 class="title">Top 50 Movies on ImDB </h3>
    <div class="movie-container"> 
    </div>
  </div>
</template>


<script>
import gql from 'graphql-tag'

export default {
  name: 'Movies',
  // components: {

  // },
  data() {
    return {
    }
  },
  computed: {
  },
  apollo: {
    Movies: {
      query: gql`
        query {
          Movie (first:50, orderBy: imdbRating_desc, filter:{imdbRating_not: null}){
            title
            year
            poster
            imdbRating
            actors {
              name
            }
          }
        }
      `,
      update(data) {
        return data.Movie
      }
    }    
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
}
</style>
