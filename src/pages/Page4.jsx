import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Page4Container = styled.section`
  width: 100%;
  background-color: var(--blue4);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page4 = () => {
  return (
    <Layout>
      <Page4Container>Page 4</Page4Container>
    </Layout>
  );
};

export default Page4;
