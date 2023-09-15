import styled, { keyframes, css } from 'styled-components';
import headsBg from '../../static/heads.png'
import tailsBg from '../../static/tails.png'

const flipHeads = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(180deg);
  }
  100%{
    transform: rotateX(360deg);
  }
`;

const flipTails = keyframes`
  0% {
    transform: rotateX(180deg);
  }
  50% {
    transform: rotateX(360deg);
  }
  100%{
    transform: rotateX(540deg);
  }
`;

const spinHeads = keyframes`
  0%{
    transform: rotateX(0);
  }
  100%{
    transform: rotateX(720deg);
  }
`;


const spinTails = keyframes`
  0%{
    transform: rotateX(0);
  }
  100%{
    transform: rotateX(900deg);
  }
`;


const slide = keyframes`
  0%, 100%{
    left: -60px;
  }
  50%{
    left: 100%;
  }
`;

const shineHeads = keyframes`
  0%, 66% {
    box-shadow:0 0 50px #ffff0080;
  }
  33%, 100% {
    box-shadow:0 0 0 #ffff0080;
  }
`;

const shineTails = keyframes`
  0%, 66% {
    box-shadow:0 0 50px #ffffff80;
  }
  33%, 100% {
    box-shadow:0 0 0 #ffffff80;
  }
`;


export const CoinBody = styled.div`
  height: 150px;
  width: 150px;
  position: relative;
  margin: 20px auto;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  &.flipping {
    ${({ betResult }) => betResult === 0 && css`
        animation: ${flipHeads} 1s forwards infinite;
    `}
    ${({ betResult }) => betResult === 1 && css`
        animation: ${flipTails} 1s forwards infinite;
    `}
  }
  &.heads {
    animation: ${spinHeads} 5s forwards;
  }
  &.tails {
    animation: ${spinTails} 5s forwards;
  }
  ${({ betResult }) => betResult === 1 && css`
    transform: rotateX(180deg);
  `}
  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

export const CoinContainer = styled.div`
    margin: 0 20px;
`;

export const CoinSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    background: #ffffff4d;
    height: 100%;
    width: 50px;
    left: -60px;
    transform: skewX(-30deg);
  }
  &.heads {
    background-image: url(${headsBg});
  }
  &.tails {
    transform: rotateX(180deg);
    background-image: url(${tailsBg});
  }
  &.result {
    &.heads {
      animation: ${shineHeads} 2s;
    }
    &.tails {
      animation: ${shineTails} 2s;
    }
    &:before {
      animation: ${slide} 1s;
    }
  }
`;