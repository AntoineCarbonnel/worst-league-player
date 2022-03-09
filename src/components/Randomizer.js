import React, {useEffect, useState} from "react"

const axios = require('axios').default

function Randomizer({getCurrentPlayer}) {
  axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/' + process.env.REACT_APP_API_URL
  axios.defaults.headers.common['X-Riot-Token'] = process.env.REACT_APP_API_KEY

  const [players, setPlayers] = useState([]);
  const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min) + min))

  const findRandomPlayer = async () => {
    await setPlayers([...[[{summonerName: 'zerckel'}, {summonerName: 'zerckfzefaezeael'}], [{summonerName: 'zffz'}]]])
    const scopeNumber = randomNumber(0, players.length)
    getCurrentPlayer(players[scopeNumber][randomNumber(0, players[scopeNumber].length)])
  }

  const getAllPlayers = () => {
    axios.get('lol/league/v4/entries/RANKED_SOLO_5x5/IRON/IV?pages=' + randomNumber(1, 25))
            .then(res => {
              setPlayers([res.data])
              console.log(players)
            })
  }

  getAllPlayers()
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
