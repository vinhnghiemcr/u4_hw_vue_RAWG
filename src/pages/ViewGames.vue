<template>
  <button class="sort-btn" @click="sort">{{sortDescending ? 'Sort by descending' : 'Sort by ascending' }}</button>
  <div className="container-grid">    
    <GameCard v-for="game in games" :key="game.id" :game="game" @click="selectGame(game.id)" />
  </div>
</template>

<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'

const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'ViewGames',
    data: () => ({
      games: [],      
      sortDescending: true
    }),
    components: {
      GameCard
    },
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        // Get Genre Id here
        const genreId = parseInt(this.$route.params.genre_id)
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.games = res.data.results
        
      },
       selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      sort() {
        this.sortDescending = !(this.sortDescending)
        if (this.sortDescending) {
          this.games.sort((a,b) => b.rating - a.rating)
        } else {
          this.games.sort((a,b) => a.rating - b.rating)
        }
      }
    }
  }
</script>

<style >
  .sort-btn {
    position: absolute;
    right: 10%;
  }
  .container-grid {
    margin-top: 50px;
  }
</style>