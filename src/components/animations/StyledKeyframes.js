import { keyframes } from 'styled-components';

export const slideReveal = keyframes`
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
`;
