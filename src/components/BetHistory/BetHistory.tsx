import React from 'react';
import { BetHistoryContainer } from './betHistory.style';

function BetHistory({betHistory}: any) {

  return (
    <BetHistoryContainer>
      <div className="">
        <h2>Bet History</h2>
      </div>
      {
        betHistory.length == 0 ?
          <div className="">
            NONE
          </div>
          : (
            betHistory.toReversed().map((bh: any) => (
              <div className="" key={bh.betId}>
                {bh.betId} ({bh.gameId}): {bh.timestamp} = {bh.wager} | {bh.payout}
              </div>
            ))
          )
      }
    </BetHistoryContainer>
  )

}

export default BetHistory;