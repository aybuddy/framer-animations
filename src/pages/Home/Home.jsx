import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  fadeUpParent,
  fadeUpChild,
  pageTransitionFadeOut,
  fadeUp,
  fadeDown,
  fadeFromLeft,
  fadeFromRight,
  changeSize,
  leftToRight50,
  rightToLeft50,
  leftToRightDesiredWidth,
  imageOverlayLeftToRight,
  imageOverlayTopToBottom,
} from '../../components/animations/animations';
import './Home.css';

import { slideReveal } from '../../components/animations/StyledKeyframes';

// Styled Components
const HomeContainer = styled(motion.section)`
  width: 100%;
  background-color: var(--creamsicle);
  height: 100vh;
`;

const MainHeading = styled(motion.h1)`
  // font-size: clamp(4.2rem, 11vw, 12rem);
  font-size: 100px;
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

const Home = () => {
  return (
    <Layout>
      <HomeContainer
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <motion.div
          className='parentContainer'
          variants={fadeUpParent}
          initial='hidden'
          animate='visible'
        >
          <MainHeading variants={fadeUpChild}>The</MainHeading>
          <MainHeading variants={fadeUpChild}>Home</MainHeading>
          <MainHeading variants={fadeUpChild}>Page</MainHeading>
        </motion.div>
        <div className='wrapper'>
          <motion.div
            className='left'
            variants={leftToRight50}
            initial='hidden'
            animate='visible'
          ></motion.div>
          <motion.div
            className='right'
            variants={rightToLeft50}
            initial='hidden'
            animate='visible'
          ></motion.div>

          <div className='img-wrapper-pic'>
            <motion.img
              src='https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80'
              alt=''
              className='gazelle'
              variants={leftToRightDesiredWidth}
              initial='hidden'
              animate='visible'
            />
            <SlideRevealOverlay />
          </div>
        </div>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
