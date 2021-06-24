import VueRouter from 'vue-router'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import About from './pages/About'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/games', component: ViewGames, name: 'ViewGames' },
  { path: '/details/:game_id', component: GameDetails, name: 'GameDetails' },
  { path: '/about', component: About, name: 'About' }
]

export default new VueRouter({ routes, mode: 'history' })
