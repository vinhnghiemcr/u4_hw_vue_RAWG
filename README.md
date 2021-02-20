# RAWG Router (APIs with React Router) Lab
<div>
  <img alt="rawg" src="https://i0.wp.com/operationrainfall.com/wp-content/uploads/2019/06/RAWG-Featured.jpg?fit=1920%2C1080&ssl=1" />
</div>

## Overview
In this lab, we will be building a frontend website with React, React Router, and the RAWG API. We'll be getting practice with routing dynamically with `react-router-dom` elements and with making API calls with `axios` inside of React Lifecycle Methods.
- https://rawg.io/apidocs, a must have API for gamers!
- The endpoints (url strings) we will be using with this API have been provided below. Starter code and component files have also been provided.

### Endpoints
```js
[GET] Search `https://api.rawg.io/api/games?search={searchQuery}`
[GET] Genres `https://api.rawg.io/api/genres`
[GET] Game Details `https://api.rawg.io/api/games/{gameId}`
[GET] DLC `https://api.rawg.io/api/games/{gameId}/game-series` (Bonus)
```

## Getting Started
- `Fork` and `clone` this repository 
- `npm i` to install dependencies



## Instructions
### App Architecture
Let's take a look at the structure of the app we've just cloned. How are components nested in its file structure? What does this inform us about where we will be using React Router and which components will be called within it when building this app?
<p align="center" >
  <img height="400" alt="tree" src="https://res.cloudinary.com/ahonore42/image/upload/v1603983629/Screen_Shot_2020-10-29_at_10.59.18_AM_ah4q0q.png" />
</p>

Let's start with `index.js`, followed by `App.js`. 
- In `index.js` we need one additional import:
```js
import { BrowserRouter } from 'react-router-dom'
```
- `BrowserRouter` should then be wrapped around `App` to allow routing within our application.
```js
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
```

#### App.js
Let's move on to `App.js`.
- In `App.js` what we want is a `<Header />` that will be displayed at all times at the top of our website along with a section where our `<main>` content will be displayed
- You will need to import 5 components into `App.js`, the first of which should be our `<Header />`. 
- We also want to be able to control navigation between all pages and display the Home page.



- Each one of these components should be accessible with a Route, with a path for each Route inside of our Switch.
- One Route should have an *exact path*, so it is displayed when the app is first rendered. Here is the skeleton of how this app should be structured
- To accomplish this, first we need to:
```js 
import { Route, Switch } from 'react-router-dom'
import Header from
```

```js
<div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="" component={} />
          <Route path="" component={} />
          <Route path="" component={} />
          <Route path="" component={} />
        </Switch>
      </main>
    </div>
```
- Add the proper component for each Route within the Switch. Each Route should have a path denoting specific url patterns to render each component.

Once finished we've set up the structure of the app! Congrats!

___
### Components
For this section, we will start by building the smallest reusable parts of our app, its components. We will be working in the `components` folder. For now, we are only concerned with the structure of each component, so their props will not be defined to begin with. However, these components will inform how we are going to build out our pages later on.

#### Header
Let's start with the Header, so we can have active navigation between pages.
- Our Header only requires one import:
```js
import { NavLink } from 'react-router-dom'
```
- Within it's nav tag, it will need 2 NavLinks that are links *to* our Home `'/'` Route and our `'/about'` Route.
- Once these NavLinks are finished, you are done with the Header component!

#### Search
Next, let's build out the Search component. This component will be used for searching our API later on.
- The Search component does not require any additional imports, but it does have access to props, which will be important later on. It's available props will be:
```js
this.props.onSubmit, this.props.onChange, this.props.value
```
- Notice that the Search component is a *form*
- To build out Search properly, we need an input and a submit button
- The input in Search should have these attributes: `type="text", name="search", value={this.props.value}, placeholder="Search Games", onChange={this.props.onChange}`
- It's button should be a type of `"submit"`
- It's form should have access to `this.props.onSubmit` within its own onSubmit attribute

#### GameCard
Now, we will build out the structure for our GameCard. This component will be used to display and allow users to click on games on our Home and ViewGames pages.
- GameCard will have access to 4 props: 
```js
this.props.onClick, this.props.image, this.props.name, this.props.rating
```
- Inside its `'info-wrapper'` div, it will need an h3 tag displaying props.name, and a p tag displaying props.rating
- Within its `'img-wrapper'` div, it will need an img tag with a src of props.image. Don't forget to give it an alt!
- Lastly, its `'game-card'` div should have an onClick with access top props.Onclick

#### GenreCard
The GenreCard will be used to display a card for each genre within our Home page.
- GenreCard will have access to 4 props:
```js
this.props.image, this.props.name, this.props.gamesCount, and this.props.onClick
```
- Its `'card'` div should have an onClick with access to props.onClick
- Its `'img-wrapper'` div should have an img with a src of props.image
- Its `'info-wrapper'` div should have an h3 tag displaying props.name and a p tag displaying props.gamesCount

With that, we've finished the basic structor for our components!

___
### Home and About Pages and Methods
Now that we've finished the basic structure of our app's reusable components, let's build out the pages! Each page is unique, so we will look at each one individually. We will start with the least complex page structure and work our way up. In this section you will be working with the files inside of the `pages` folder in your app.

#### About Page
The about page is typically the simplest page in an app. For our purposes, all we need with this page is an h1 tag inside the main div in `About.js` denoting that it is in fact, the about page. More information can be added later on. No Imports are required with this page. The Route for this page in `App.js` should be `/about`.

#### Home Page
Let's move on to the Home page. It's route should be `'/'` in `App.js`

In `Home.js` we need 4 additional imports: `Search, Axios, GameCard, and GenreCard`

Notice the state variables within the state object for Home. What do these variables imply for our page?
- `Home.js` will need 3 methods and an instance of `componentDidMount()` to fire one of its 3 methods, which will access our API when the component is mounted.
- The URLs we will be working with here are `https://api.rawg.io/api/genres` and `https://api.rawg.io/api/games?search={searchQuery}`
- Its methods are as follows: 
```js
  getGenres(), getSearchResults, handleChange()
```
- `getGenres()` will set the state of our genres
- `getSearchResults()` will set the state of our searchResults, set searched to true, and set the searchQuery back to an empty string.
- `handleChange()` will set the state of our searchQuery

In the render we will:
- Render the Search component at the top of the page
- Conditionally render search results as GameCard components in the search-results div.
- Render all genres within the genres container-grid as GenreCards

___
### GameDetails and ViewGames Pages
We will be building out these pages as a code-along in class.

GameDetails will display specific information for an individual game.
- GameDetails requires Axios and this url: `https://api.rawg.io/api/games/${this.state.gameId}`
- It's Route path is: `/games/details/:gameId`

ViewGames will display a page with up to 40 games.
- ViewGames requires Axios, GameCard, and this url: `https://api.rawg.io/api/games?page_size=40&genres=${this.state.genreId}`
- Its Route path is: `/view/games/:genreId`

## Recap
In this lab we built a video game application utilizing the `RAWG` API through `axios` calls within Lifecycle Methods like `componentDidMount` and built dynamically rendered pages with navigation through 'react-router-dom' elements. Important concepts we reviewed include:
- Using URL params to create dynamic `<Route />`s for specific components rendered from large `mapped` datasets
- Creating methods within our components that make API calls with `axios` and store the data in `state`
- Establishing proper application architecture, with site navigation separate from `<main>` content delivered through `<Route />`s

## Resources
- [React with APIs Lesson](https://github.com/SEI-R-1-25/u2_lesson_react_with_apis)
- [React Router Lesson](https://github.com/SEI-R-1-25/u2_lesson_react_router)
- [React Lifecycle Methods Lesson](https://github.com/SEI-R-1-25/u2_lesson_react_lifecycle)
