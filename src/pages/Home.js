import React, {useState} from "react";
import Randomizer from "../components/Randomizer";
import PlayerCard from "../components/PlayerCard";

function Home() {

  const [currentPlayer, setCurrentPlayer] = useState({});

  return (
          <div id="home">
            <Randomizer getCurrentPlayer={setCurrentPlayer} />
            <PlayerCard currentPlayer={currentPlayer}/>
          </div>
  )
}

export default Home
