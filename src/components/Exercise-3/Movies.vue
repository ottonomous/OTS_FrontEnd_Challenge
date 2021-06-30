<template>
  <div class="container">
    <h3 class="title">Top 50 Movies on ImDB (With Posters)</h3>
    <div class="movie-container"> 
      <!-- Movie Card component here, we pass the movie and the index so we can calculate ranking! -->
      <MovieCard
        v-for="(movie, index) in movies"
        :key="movie.id"
        :ranking="index + 1"
        :movie="movie"
        class="movie-card"
      />
    </div>
  </div>
</template>


<script>
import gql from 'graphql-tag'
import MovieCard from './MovieCard.vue'

export default {
  name: 'movies',
  components: {
    MovieCard
  },
  data() {
    return {
      movies: []
    }
  },
  computed: {
  },
  apollo: {
    movies: {
      query: gql`
        query {
          Movie (first:50, orderBy: imdbRating_desc, filter:{imdbRating_not: null, poster_not: null}){
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
        // We add a update hook here otherwise apollo will throw an error
        // This is because the property name of the data returned does not match the name we have on line 34 "movies".
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

.movie-container {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  max-height: calc(100vh - 300px);
  overflow: scroll;
  width: 100%;
  border: 1px solid rgba(128, 128, 128, 0.336);
  border-radius: 25px;
  padding: 30px, 15px 30px 15px;
}

.title {
  text-align: center;
}
</style>
