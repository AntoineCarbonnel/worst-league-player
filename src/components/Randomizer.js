import React, {useState} from "react"

const axios = require('axios').default

function Randomizer() {
  axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/' + process.env.REACT_APP_API_URL
  axios.defaults.headers.common['X-Riot-Token'] = process.env.REACT_APP_API_KEY

  const [players, setPlayers] = useState([]);

  const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min)

  const findRandomPlayer = () => {
    const scopeNumber = randomNumber(0, players.length)
    console.log(scopeNumber)
    console.log(players.length)
    return players[scopeNumber][randomNumber(0, scopeNumber)]
  }

  axios.get('lol/league/v4/entries/RANKED_SOLO_5x5/IRON/IV?pages=' + randomNumber(1, 25))
          .then(res => {
            console.log(res)
          })


  return (
          <div id="randomizer">
            <h1>
              Find the worst player in West Europe
            </h1>
            <button onClick={findRandomPlayer}>
              Find
            </button>
          </div>
  )
}

export default Randomizer
