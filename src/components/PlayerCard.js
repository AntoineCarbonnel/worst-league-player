import React from "react";

function PlayerCard({currentPlayer}) {
  return (
          <article>
            {currentPlayer.summonerName}
          </article>
  )
}

export default PlayerCard
