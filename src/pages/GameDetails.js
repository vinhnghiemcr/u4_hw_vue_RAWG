import React, { Component } from 'react'

export default class GameDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: props.match.params.gameId,
      gameDetails: {},
    }
  }

  componentDidMount() {
   
  }

  getGameDetails = async () => {
   
  }



  render() {
    return (
      <div className="game-content">
        <section className="image-container">
          <div>
           
          </div>
        </section>
        <section className="details">
          <div className="flex-row space">
         
          </div>
          <div>
         
            <h3>
              
            </h3>
          </div>
        </section>
      </div>
    );
  }
}
