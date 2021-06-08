import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Page2Container = styled.section`
  width: 100%;
  background-color: var(--blue2);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page2 = () => {
  return (
    <Layout>
      <Page2Container>Page2</Page2Container>;
    </Layout>
  );
};

export default Page2;
