import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const HomeContainer = styled.section`
  width: 100%;
  background-color: var(--creamsicle);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Home = () => {
  return (
    <Layout>
      <HomeContainer>Home</HomeContainer>
    </Layout>
  );
};

export default Home;
