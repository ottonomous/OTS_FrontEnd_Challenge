<template>
  <div class="movie-card">
    <!-- ranking div! -->
    <div class="movie-ranking">
      {{`${ranking}.`}}
    </div>
    <!-- Poster image! -->
    <div class="movie-poster"> 
      <img :src="movie.poster"/>
    </div>
    <!-- details div! -->
    <div class="movie-details">
      <b>Title: </b>{{movie.title}} <br/>
      <b>Release Date: </b> {{movie.year}} <br/>
      <b>IMDB Rating: </b> {{movie.imdbRating}} <br/>
      <div class="actor-names-container">
        <b>
          Actors: 
        </b>
        <br/> 
          <div v-for="actor in movie.actors" :key="actor.name" class="actor-names">
            {{actor.name}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MovieCard",
  props: ['movie', 'ranking']
}

</script>

<style lang="scss" scoped>

img {
  width: 12em;
  
}

.movie-details {
  position:relative;
  padding: 15px;
  width: auto;
  line-height:30px;
}

.actor-names-container {
  direction: row;
  overflow: wrap;
}

.actor-names {
  margin: 5px;
  font-size: 0.9em;
  display: inline-block;
  padding: 8px 20px 8px 20px;
  height: px;
  line-height: 20px;
  border-radius: 25px;
  background-color: #325ff35d;
}

.movie-ranking{
  font-size: 2em;
  font-weight: bold;
  padding: 10px;
  margin: 20px;
}

.movie-card {
    border-radius: 25px;
    padding: 20px;
    margin: 50px;
    background-color: rgba(133, 167, 168, 0.158);
    display: flex;
    flex-direction: row;
    height: auto;
    justify-self: center;
    margin: 20px;
    text-align: left;
    width: 90%;
  }
</style>