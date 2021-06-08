import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { pageTransitionFadeOut } from '../../components/animations/animations';

const Page1Container = styled(motion.section)`
  width: 100%;
  background-color: var(--blue1);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page1 = () => {
  return (
    <Layout>
      <Page1Container
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        Page 1
      </Page1Container>
    </Layout>
  );
};

export default Page1;
