import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import './Page1.css';

// Animations
import {
  leftToRight50,
  leftToRight502,
  pageTransitionFadeOut,
  rightToLeft50,
} from '../../components/animations/animations';
import { slideReveal } from '../../components/animations/StyledKeyframes';

// Styled Components
const Page1Container = styled(motion.section)`
  width: 100%;
  /* background-color: var(--blue1); */
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

const SlideRevealOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: var(--blue1);
  animation: ${slideReveal} 2s cubic-bezier(0.19, 1, 0.22, 1) 500ms;
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
        <div className='wrapper'>
          <motion.div
            className='leftPage1 flex50'
            variants={leftToRight50}
            initial='hidden'
            animate='visible'
          ></motion.div>
          <motion.div
            className='rightPage1 flex50'
            variants={leftToRight502}
            initial='hidden'
            animate='visible'
          ></motion.div>
        </div>
      </Page1Container>
    </Layout>
  );
};

export default Page1;
