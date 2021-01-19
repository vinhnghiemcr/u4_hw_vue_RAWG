import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }
  }

  componentDidMount() {
 
  }

  getGenres = async () => {
    
  }

  getSearchResults = async (e) => {
    e.preventDefault()
  
  }

  handleChange = (event) => {
  
  }

  render() {
    return (
      <div>
      
   
          <div className="search">
            <h2>Search Results</h2>
            <section className="search-results container-grid">
            
            </section>
          </div>


        <div className="genres">
          <h2>Genres</h2>
          <section className="container-grid">
           
          </section>
        </div>
      </div>
    )
  }
}
