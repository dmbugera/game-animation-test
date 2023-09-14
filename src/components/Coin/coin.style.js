import styled, { keyframes, css } from 'styled-components';
import headsBg from '../../static/heads.png'
import tailsBg from '../../static/tails.png'

const flip = keyframes`
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

const spinHeadsFromHeads = keyframes`
  0%{
    transform: rotateX(0);
  }
  100%{
    transform: rotateX(720deg);
  }
`;

const spinHeadsFromTails = keyframes`
  0%{
    transform: rotateX(180deg);
  }
  100%{
    transform: rotateX(720deg);
  }
`;


const spinTailsFromHeads = keyframes`
  0%{
    transform: rotateX(0);
  }
  100%{
    transform: rotateX(900deg);
  }
`;


const spinTailsFromTails = keyframes`
  0%{
    transform: rotateX(180deg);
  }
  100%{
    transform: rotateX(900deg);
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
    animation: ${flip} 1s forwards infinite;
  }
  &.heads {
    animation: ${spinHeadsFromHeads} 5s forwards;
    ${({ betResult }) => betResult === 0 && css`
        animation: ${spinHeadsFromHeads} 5s forwards;
    `}
    ${({ betResult }) => betResult === 1 && css`
        animation: ${spinHeadsFromTails} 5s forwards;
    `}
  }
  &.tails {
    animation: ${spinTailsFromHeads} 5s forwards;
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
  &.heads {
    background-image: url(${headsBg});
  }
  &.tails {
    transform: rotateX(180deg);
    background-image: url(${tailsBg});
  }
`;