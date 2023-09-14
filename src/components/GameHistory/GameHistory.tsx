import React from 'react';
import { GameHistoryContainer } from './gameHistory.style';

function GameHistory({ gameHistory }: any) {

  return (
    <GameHistoryContainer>
      <div className="">
        <h2>Game History</h2>
      </div>
      {
        gameHistory.length == 0 ?
          <div className="">
            NONE
          </div>
          : (
            gameHistory.toReversed().map((gh: any) => (
              <div className="" key={gh.gameId}>
                {gh.gameId} : {gh.timestamp} = {gh.simulationResult.toString()}
              </div>
            ))
          )
      }
    </GameHistoryContainer>
  )

}

export default GameHistory;