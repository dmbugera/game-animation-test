import styled from 'styled-components';

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