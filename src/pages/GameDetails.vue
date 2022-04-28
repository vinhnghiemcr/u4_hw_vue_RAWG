<template>
  <div v-if="gameDetails" class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" alt="game img">
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{gameDetails.name}}</h3>
        <StarRating 
          :rating="gameDetails.rating"
          show-rating=false
          read-only=true
          
        />
        <p>{{gameDetails.description_raw}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating'
const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'GameDetails',
    components: {
      StarRating
    },
    data: () => ({
      gameDetails: null
    }),
    mounted() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        // Get game id from router here
        const gameId = parseInt(this.$route.params.game_id)
        const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        console.log(res, "res")
        this.gameDetails = res.data
      }
    }
  }
</script>
