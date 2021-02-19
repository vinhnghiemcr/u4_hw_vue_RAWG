import React, { Component } from 'react'


export default class ViewGames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genreId: props.match.params.genreId,
      games: []
    }
  }

  componentDidMount() {

  }

  getGamesByGenre = async () => {
 
  }

  render() {
    return (
      <div className="container-grid">
        
      </div>
    );
  }
}
