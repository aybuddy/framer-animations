import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Page1Container = styled.section`
  width: 100%;
  background-color: var(--blue1);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page1 = () => {
  return (
    <Layout>
      <Page1Container>Page 1</Page1Container>
    </Layout>
  );
};

export default Page1;
