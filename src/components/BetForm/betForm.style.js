import styled, { css } from 'styled-components';

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  margin: 0 15px;
  flex-grow: 1;
  // width: 100%;
  & label {
    margin-bottom: 8px;
  }
  & .range-slider__wrap {
    display: flex;
    justify-content: center;
    & .range-slider__tooltip {
      margin-left: 10px;
    }
  }
  @media (max-width: 1167px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    margin: 0 0 20px;
  }
`;

export const FormSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100px;
    width: 100px;
  }
`;

export const FormContainer = styled.div`
  color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #2E2E2E;
  font-weight: 500;
  border-radius: 30px;
  width: 100%;
  max-width: 200px;
  padding: 10px 20px;
  background: linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%);
  ${({disabled}) => disabled && css`
    filter: grayscale(100%);
  `}
`;