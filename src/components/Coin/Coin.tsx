import React, { useState, useEffect } from 'react';
import { CoinContainer, CoinBody, CoinSide } from './coin.style';

const Coin = ({ status, result, state }: any) => {
  const [coinClass, setCoinClass] = useState('');
  const [currentResult, setCurrentResult] = useState(0);

  useEffect(() => {
    if (status === 'AWAITING') {
      setCoinClass('flipping');
    } else if (status === 'RESULTING') {
      setCoinClass(result === 0 ? 'heads' : 'tails');
    } else if (status === 'RESULT') {
      setCurrentResult(result);
    }
  }, [status, result]);


  useEffect(() => {
    setCurrentResult(state);
    setCoinClass('');
  }, [state])
  return (
    <CoinContainer>
      {/*
// @ts-ignore */}
      <CoinBody betResult={currentResult} className={coinClass}>
        <CoinSide className="heads" />
        <CoinSide className="tails" />
      </CoinBody>
    </CoinContainer>
  );
};

export default Coin;





