import React, { useState, useEffect } from 'react';
import { CoinContainer, CoinBody, CoinSide } from './coin.style';

const Coin = ({ status, result, state }: any) => {
  const [coinClass, setCoinClass] = useState('');
  const [currentResult, setCurrentResult] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [sideClass, setSideClass] = useState('');

  console.log(currentResult, "currentResult")
  useEffect(() => {
    if (status === 'AWAITING') {
      setSideClass('');
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

  useEffect(() => {
    if (currentStatus === 'RESULT' && status === 'IDLE') {
      setSideClass('result');
    }
    setCurrentStatus(status);
  }, [status]);
  return (
    <CoinContainer>
      {/*
// @ts-ignore */}
      <CoinBody betResult={currentResult} className={coinClass}>
        <CoinSide className={`heads ${sideClass}`} />
        <CoinSide className={`tails ${sideClass}`} />
      </CoinBody>
    </CoinContainer>
  );
};

export default Coin;





