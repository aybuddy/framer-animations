import styled from 'styled-components';

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: lightblue;
    position: absolute;
    top: 90px;
    height: 50vh;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
