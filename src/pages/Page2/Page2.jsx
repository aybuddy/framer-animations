import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { pageTransitionFadeOut } from '../../components/animations/animations';

const Page2Container = styled(motion.section)`
  width: 100%;
  background-color: var(--blue2);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page2 = () => {
  return (
    <Layout>
      <Page2Container
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        Page2
      </Page2Container>
      ;
    </Layout>
  );
};

export default Page2;
