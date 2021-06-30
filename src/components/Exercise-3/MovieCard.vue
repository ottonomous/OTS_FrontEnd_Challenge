<template>
  <div class="movie-card">
    <div class="movie-ranking">
      {{ranking + "."}}
    </div>
    <div> 
      <img :src="movie.poster"/>
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
    height: 300px;
    justify-self: center;
    margin: 20px;
    text-align: left;
    width: 90%;
  }
</style>