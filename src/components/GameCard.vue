<template>
  <div class="card game-card" >
    <div class="image-wrapper">
      <img :src="game.background_image" alt="game img" />
    </div>
    <div class="info-wrapper flex-col">
      {{game.name}}
    </div>
    <StarRating 
          :rating="game.rating" 
          read-only="true"
          show-rating="false"
        />
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
  export default {
    name: 'GameCard',
    components: {
      StarRating
    },
    props: {
      game: Object
    }
  }
</script>
