import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  overflow-x: hidden;
  background-color: lightseagreen;
  /* height: 100%; */
  padding: 10px;

  @media screen and (max-width: 768px) {
    padding: 2%;
  }

  @media screen and (max-width: 425px) {
    padding: 1%;
  }
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: lightslategrey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 9px;

  @media screen and (max-width: 768px) {
    padding: 3%;
  }

  @media screen and (max-width: 425px) {
    padding: 3%;
  }
`;
