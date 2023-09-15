// @ts-nocheck
import React, { useMemo, useState } from "react";
import RangeSlider from 'react-bootstrap-range-slider';
import { FormContainer, FormItem, Button, FormSection } from './betForm.style';

function BetForm({
  game,
  triggerAwaitingState,
  setNumberOfCoins,
  numberOfCoins,
  setSide,
  side,
  gameState,
}) {

  const [wager, setWager] = useState(1);
  const [numberCorrect, setNumberCorrect] = useState(1);
  const [probability, setProbability] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [potentialPayout, setPotentialPayout] = useState(0);
  const [validBet, setValidBet] = useState(false);
  const [invalidReason, setInvalidReason] = useState(null);
  const isDisabled = gameState !== 'IDLE';

  const placeBet = async () => {
    game.placeBet(
      1234, // userId: ,
      wager, // wager: number,
      side, // side: Side,
      numberOfCoins, // numberOfCoins: number,
      numberCorrect // numberCorrect: number
    )
    triggerAwaitingState();
  }

  useMemo(() => {
      if (game) {
        if (numberOfCoins > game.maxNumberOfCoins) {
          setProbability(0);
          setMultiplier(1);
          setPotentialPayout(0);
          setValidBet(false);
          setInvalidReason(`Number of Coins (${numberOfCoins}) exceeds the game maximum (${game.maxNumberOfCoins})`)
        } else if (wager > game.maxWager) {
          setProbability(0);
          setMultiplier(1);
          setPotentialPayout(0);
          setValidBet(false);
          setInvalidReason(`Wager (${wager}) excced max of ${game.maxWager}`)
        } else if (numberOfCoins < numberCorrect) {
          setProbability(0);
          setMultiplier(1);
          setPotentialPayout(0);
          setValidBet(false);
          setInvalidReason(`Number Correct (${numberCorrect}) must be <= Number of Coins (${numberOfCoins})`)
        } else {
          const p = game.getProbability(numberOfCoins, numberCorrect);
          const m = game.getMultiplier(numberOfCoins, numberCorrect);
          const po = wager * m;
          setProbability(p);
          setMultiplier(m);
          setPotentialPayout(po);
          setValidBet(true);
          setInvalidReason(null);
        }
      }
    }, [wager, game, numberOfCoins, numberCorrect]
  )

  const updateWager = (event) => {
    const target = event.target;
    var value = target.value;
    setWager(Number(value));
  }

  const updateNumberCorrect = (event) => {
    const target = event.target;
    var value = target.value;
    setNumberCorrect(Number(value));
  }

  const updateNumberOfCoins = (event) => {
    const target = event.target;
    var value = target.value;
    setNumberOfCoins(Number(value));
  }

  const updateSide = (event) => {
    const target = event.target.checked;
    setSide(target ? 0 : 1);
  };

  return (
    <FormContainer>
      <FormSection>
        <FormItem>
          <label >
            Wager
          </label>
          <RangeSlider
            id="wager"
            min={1}
            max={10}
            step={1}
            value={wager}
            onChange={updateWager}
            disabled={isDisabled}
          />
        </FormItem>

        <FormItem>
          <label >
            Side (is heads)
          </label>
          <input
            className=""
            id="isHeads"
            name="isHeads"
            type="checkbox"
            placeholder="true"
            checked={side==0}
            onChange={updateSide}
            disabled={isDisabled}
          />
        </FormItem>

        <FormItem>
          <label >
            Number of Coins
          </label>
          <RangeSlider
            id="numberOfCoins"
            min="1"
            max="10"
            step="1"
            value={numberOfCoins}
            onChange={updateNumberOfCoins}
            disabled={isDisabled}
          />
        </FormItem>
      </FormSection>
      <FormSection>
        <FormItem>
          <label >
            Number Correct
          </label>
          <RangeSlider
            id="numberCorrect"
            min="1"
            max={numberOfCoins}
            step="1"
            value={numberCorrect}
            onChange={updateNumberCorrect}
            disabled={isDisabled}
          />
        </FormItem>

        <FormItem>
        {
          validBet ? (
              <>
                <div className="">
                  <label >
                    Multiplier:
                  </label>
                  <span className="">
                    {multiplier.toFixed(2)} ({(probability*100).toFixed(2)}%)
                  </span>
                </div>
                <div className="">
                  <label >
                    Potential Payout:
                  </label>
                  <span className="">
                    {potentialPayout.toFixed(2)}
                  </span>
                </div>
              </>
            )
            : (
              <div className="">
                Invalid bet: {invalidReason}
              </div>
            )
        }
        </FormItem>

        <FormItem>
          <Button
            onClick={validBet ? placeBet : ()=>{}}
            disabled={!validBet || isDisabled}
          >
            Place Bet
          </Button>
      </FormItem>
      </FormSection>
    </FormContainer>
  )

}

export default BetForm;