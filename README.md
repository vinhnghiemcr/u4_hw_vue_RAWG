# RAWG Router

<div>
  <img alt="rawg" src="https://i0.wp.com/operationrainfall.com/wp-content/uploads/2019/06/RAWG-Featured.jpg?fit=1920%2C1080&ssl=1" />
</div>

## Overview

We will be building a frontend website with Vue, Vue Router, and the RAWG API. We'll be getting practice with routing dynamically with `vue-router` elements and with making API calls with `axios` inside of Vue Lifecycle Methods. Try to think of this lab like a puzzle, where you'll be adding in the pieces we need to create a functioning website.

- [Api Documentation](https://api.rawg.io/docs/)
- The endpoints (URL strings) we will be using with this API have been provided below. Starter code and component files have also been provided.

## Retrieving An Api Key

Head over to this link [Here](https://rawg.io/apidocs) to get your own api key. You'll want to add this api key to a `.env` and add the `.env` file to your `.gitignore`

### Endpoints

```js
[GET] Search `https://api.rawg.io/api/games?search={searchQuery}&key=YourApiKey`
[GET] Genres `https://api.rawg.io/api/genres?key=YourApiKey`
[GET] Game Details `https://api.rawg.io/api/games/{gameId}?key=YourApiKey`
[GET] DLC `https://api.rawg.io/api/games/{gameId}/game-series?key=YourApiKey` (Bonus)
```

## Getting Started

- `Fork` and `clone` this repository
- `npm i` to install dependencies

### App Architecture

Let's take a look at the structure of the app we've just cloned. You've been provided with all of the components you'll need to complete this exercise.

<p align="center" >
  <img height="400" alt="tree" src="https://sei-r.s3.amazonaws.com/u4_lab_vue_rawg_router/folders.png" />
</p>

**Note: The app will show an error until `Step 2` is complete.**

## Step 1: Setting Up Vue Router

Let's start with `main.js`, followed by `App.vue`. In `main.js` we'll need a couple of additional imports:

```js
import VueRouter from 'vue-router'
import router from './router'
```

- We then need to add `VueRouter` as plugin
- Provide the `router` to our Vue instance.

**Note: The router has already been wired for you, however you have to write your own routes in the `router.js` file.**

```js
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```

## Step 2: Setting Up Routes

Head over to `router.js`. In here, we've scaffolded Vue Router for you:

```js
import VueRouter from 'vue-router'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import About from './pages/About'

const routes = []

export default new VueRouter({ routes, mode: 'history' })
```

You'll need to create your own routes and add them to the `routes` array utilizing the following table:

| Component   | Path              | Name          |
| ----------- | ----------------- | ------------- |
| Home        | /                 | 'Home'        |
| ViewGames   | /games            | 'ViewGames'   |
| GameDetails | /details/:game_id | 'GameDetails' |
| About       | /about            | 'About'       |

## Step 3: Setting Up The Router View

In `App.vue`, you're provided with the following:

```jsx
<template>
  <div id="app">
    <header>
      <!-- Nav Goes Here -->
    </header>
    <main>
      <!-- Router View Goes Here -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>
```

- You'll want to utilize the `Nav` component and add it between the provided `header` tags. **Remember to import the nav component and add it to your `components` object.**
- Don't forget to use the `router-view` component as this is where our components will get rendered. You can add it in between the provided `main` tags.

## Step 4: Loading Initial Data

In `Home.vue`, you've been provided with a few methods and some initial state, in this component, you should fire an axios request that retrieves a list of genres in the `getGenres` method. This method should be invoked once the component is mounted and should update the genre state.

- Once you've retrieved a list of genres from your api, iterate through the genre state and return a `GenreCard` for each item.
- The `GenreCard` should accept the image and name of each genre as props. You'll need to wire these up in the `GenreCard` component following the included prompts.

## Step 5: Setting Up Search Functionality

In `Home.vue` set up a form within the provided `search` classed tag. It should be displayed above the provided `h2`. This form should have an input and a button.

- The value of the input should be `searchQuery`
- `handleChange` should be used to update the `searchQuery` state
- The `@submit` event should fire the `getSearchResults` method which in turn should update the `searchResults` array.
- The `searched` state should be updated to `true` once the results are retrieved. If the the state is true, conditionally render the provided `div` with class of `genres` to be hidden. **The `!` operator may be useful here.**

## Step 6: Listing The Search Results

Now that we have the search results in state, you'll want to bring in the `GameCard` component in `Home.vue`. You should return a new card for each item in the `searchResults` array.

- You'll need to import the `GameCard` component
- Pass the name and image of the game as props.
- Display these props in the noted sections within `GameCard`.
- Don't forget to declare which props it will be recieving.

## Step 7: Navigation To Game Details

Next we'll want to select a game and view the game details.

- Attach an `@click` event to the `GenreCard` component, it should trigger the `selectGame` method.
  - **Hint: You can invoke the method to provide the `gameId` during the `@click` event.**
- The `selectGame` method should navigate you to `/details/:game_id`. The `game_id` parameter gets replaced with the provided `gameId` argument.
  - **Hint: `this.$router.someMethodThatNavigates` may be useful here.**

## Step 8: View Game Details

Once you've navigated to the `GameDetails` component, you can now start wiring the component to display some information.

- Utilize the `getGameDetails` method to make a request to retrieve the game information by the game id.
- Look at the props currently stored in the `Vue Devtools`. Utilize that to retrieve the `gameId` and provide it to the request.
- The `getGameDetails` method should be triggered once a component mounts.

Some `JSX` has been provided for you. You'll have creative freedom on what information to display here. The only requirements are the component must display:

- The cover image for the game
- Title of the game

Add a back button that allows you to go back to the home page.

## Bonus

Display a list of the game's most recent posts from its subreddit page in the `GameDetails` component.

Create two pages for `ViewPlatforms` and `PlatformDetails` to display the platform information available through the API.
- **Hint: This will likely require more components as well**
