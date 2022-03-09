import React from "react"
const axios = require('axios').default

function Randomizer() {

  let players = []

  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  axios.defaults.headers.common['X-Riot-Token'] = process.env.REACT_APP_API_KEY

  axios.get( 'lol/league/v4/entries/RANKED_SOLO_5x5/IRON/IV?pages='+ (Math.floor(Math.random() * (25 - 1)) + 1))
          .then(res => players = res)

  console.log(players)

  return (
          <div id="randomizer">
            <h1>
              Find the worst player in West Europe
            </h1>
            <button>
              Find
            </button>
          </div>
  )
}

export default Randomizer
