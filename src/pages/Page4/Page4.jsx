import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { pageTransitionFadeOut } from '../../components/animations/animations';

const Page4Container = styled(motion.section)`
  width: 100%;
  background-color: var(--blue4);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const Page4 = () => {
  return (
    <Layout>
      <Page4Container
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        Page 4
      </Page4Container>
    </Layout>
  );
};

export default Page4;
