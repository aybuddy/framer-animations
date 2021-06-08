import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { pageTransitionFadeOut } from '../../components/animations/animations';

const Page3Container = styled(motion.section)`
  width: 100%;
  background-color: var(--blue3);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page3 = () => {
  return (
    <Layout>
      <Page3Container
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        Page 3
      </Page3Container>
    </Layout>
  );
};

export default Page3;
