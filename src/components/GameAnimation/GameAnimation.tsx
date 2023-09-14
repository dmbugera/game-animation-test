import React, { useState, useEffect } from 'react';
import { GameAnimationState } from "../coinToss";
import Coin from '../Coin';
import { AnimatedContainer } from './gameAnimation.style';

type GameResult = {
  gameId: number,
  numberOfCoins: number,
  simulationResult: number[],
  timestamp: number
}

type GameAnimationProps = {
  gameState: number,
  gameResult: GameResult,
  numberOfCoins: number,
  coinState: number,
}

export default function GameAnimation({ gameState, gameResult, numberOfCoins, coinState }: GameAnimationProps) {
  const [coinsList, setCoinsList] = useState([]);

  useEffect(() => {
    const newList = Array(numberOfCoins).fill((Math.random() + 1).toString(36).substring(7));
    // @ts-ignore
    setCoinsList(newList);
  }, [numberOfCoins]);

  return (
    <>
      <AnimatedContainer>
        {coinsList.map((item, index) => (
          <Coin
            // key={item.id}
            state={coinState}
            status={GameAnimationState[gameState].toString()}
            result={gameResult?.simulationResult[index]}
          />
        ))}
      </AnimatedContainer>
    </>
  )

}