import styled, { keyframes } from 'styled-components/macro';

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10vh;

  color: white;
  font-size: calc(10px + 2vmin);

  background-color: #282c34;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  height: 100px;

  animation: ${rotate} infinite 10s linear;

  pointer-events: none;
`;
