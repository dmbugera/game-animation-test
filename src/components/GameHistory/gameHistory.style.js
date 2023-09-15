import styled from 'styled-components';
import headsBg from '../../static/heads.png'
import tailsBg from '../../static/tails.png'

export const GameHistoryContainer = styled.div`
  color: #fff;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Coin = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  border-radius: 50%;
  margin-right: 5px;
  &:first-child {
    margin-left: 5px;
  }
  &.heads {
    background-image: url(${headsBg});
  }
  &.tails {
    background-image: url(${tailsBg});
  }
`;