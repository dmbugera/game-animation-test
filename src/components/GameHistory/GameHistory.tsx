import React from 'react';
import { GameHistoryContainer } from './gameHistory.style';
import { Coin, Line } from './gameHistory.style';

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
              <Line key={gh.gameId}>
                {gh.gameId + 1} = { gh.simulationResult.map((item: number) => <Coin className={item === 0 ? 'heads' : 'tails' } />)}
              </Line>
            ))
          )
      }
    </GameHistoryContainer>
  )

}

export default GameHistory;