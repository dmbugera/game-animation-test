import styled, { keyframes } from 'styled-components';

const shiningTitle = keyframes`
	0%, 10% {
		background-position: -1000px;
	}
	20% {
		background-position: top left;
	}
	90% {
		background-position: top right;
	}
	100% {
		background-position: 1000px;
	}
`;

export const GameContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  z-index: 1;
  flex-grow: 1;
  & > div {
    flex-grow: 1;
    height: 100%;
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  & > div {
    padding: 20px;
    box-sizing: border-box;
    &:last-child {
      flex-grow: 1;
    }
  }
`;

export const SettingsSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AnimatedTitle = styled.h1`
  font-size: 34px;
	background: #222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat;
	background-size: 150px;
	color: rgba(255, 255, 255, 0.3);
	-webkit-background-clip: text;
	animation: ${shiningTitle} 7s infinite;
	text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
`;