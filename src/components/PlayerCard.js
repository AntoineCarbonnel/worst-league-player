import React from "react";
import division from "../assets/img/division.webp"

function PlayerCard({currentPlayer}) {
  return (
          <article>
            <img src={division} alt=""/>
            {currentPlayer.summonerName}
          </article>
  )
}

export default PlayerCard
