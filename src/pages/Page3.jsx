import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Page3Container = styled.section`
  width: 100%;
  background-color: var(--blue3);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page3 = () => {
  return (
    <Layout>
      <Page3Container>Page 3</Page3Container>
    </Layout>
  );
};

export default Page3;
