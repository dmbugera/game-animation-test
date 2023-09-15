// @ts-nocheck
import React, { useState, useEffect } from 'react';
import CoinToss, { EventEmit, BetResultEvent, GameResultEvent } from '../contract/coinToss';
import {
  GameContainer,
  SettingsContainer,
  SettingsSection,
  AnimationContainer,
  AnimatedTitle,
} from './coinToss.style';
import GameAnimation from './GameAnimation';
import GameHistory from './GameHistory';
import BetForm from './BetForm';
import BetHistory from './BetHistory';
import AnimatedBackground from './AnimatedBackground';


export enum GameAnimationState {
    IDLE = 0,
    AWAITING = 1,
    RESULTING = 2,
    RESULT = 3,
    ERROR = 4,
    LOADING =  5
}

const resultDelay = 5000;

export default function CoinTossUx({}) {

    const [game, setGame] = useState();
    const [gameAnimationState, setGameAnimationState] = useState(GameAnimationState.IDLE);
    const [lastGameResultEvent, setLastGameResultEvent] = useState(null);
    const [gameHistory, setGameHistory] = useState([]);
    const [betHistory, setBetHistory] = useState([]);


  const [numberOfCoins, setNumberOfCoins] = useState(1);
  const [side, setSide] = useState(0);

  const triggerAwaitingState = () => {
        setGameAnimationState(GameAnimationState.AWAITING);
    }


    const triggerResultingState = async (gameResultEvent: any) => {
        setGameAnimationState(GameAnimationState.RESULTING);
        setLastGameResultEvent(gameResultEvent)
        await new Promise(resolve => setTimeout(resolve, 1000) ); // Pretend resulting transition animation takes 1 second
        setGameAnimationState(GameAnimationState.RESULT);
        await new Promise(resolve => setTimeout(resolve, 3000) ); // Pretend result is displayed for  3 seconds
        setGameAnimationState(GameAnimationState.IDLE);
    }

    const callbackHandler = async (event: EventEmit) => {
        if (event.eventType == 'GameResult') {
            console.log('GameResult received:')
            console.log(event.eventObject)
            triggerResultingState(event.eventObject);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            addToGameHistory(event.eventObject);
        } else if (event.eventType == 'BetResult') {
            console.log('BetResult received:')
            console.log(event.eventObject);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            addToBetHistory(event.eventObject);
        } else {
            console.log('Unknown EventEmit received:')
            console.log(event)
        }
    }

    useEffect(() => {
            const g = new CoinToss();
            g.subscribeToGameEvents(
                callbackHandler
            )
            setGame(g);
        
        }, []
    )
    
    const addToBetHistory = (betResultEvent: BetResultEvent) => {
        const bh = betHistory;
        bh.push(betResultEvent);
        setBetHistory(bh)
    } 

    const addToGameHistory = (gameResultEvent: GameResultEvent) => {
        const gh = gameHistory;
        gh.push(gameResultEvent);
        setGameHistory(gh)
    } 

    return (
        <AnimatedBackground>
            <div className="">
                <AnimatedTitle>Coin Toss</AnimatedTitle>
            </div>
            <GameContainer>
                <AnimationContainer>
                  <GameAnimation
                    gameState={GameAnimationState[gameAnimationState].toString()}
                    gameResult={lastGameResultEvent}
                    numberOfCoins={numberOfCoins}
                    coinState={side}
                  />
                </AnimationContainer>
                <SettingsContainer>
                  <SettingsSection>
                    <BetForm
                      game={game}
                      triggerAwaitingState={triggerAwaitingState}
                      setNumberOfCoins={setNumberOfCoins}
                      numberOfCoins={numberOfCoins}
                      setSide={setSide}
                      side={side}
                      gameState={GameAnimationState[gameAnimationState].toString()}
                    />
                  </SettingsSection>
                  <SettingsSection>
                    <GameHistory gameHistory={gameHistory} />
                    <BetHistory betHistory={betHistory} />
                  </SettingsSection>
                </SettingsContainer>
            </GameContainer>
        </AnimatedBackground>
    )

}

