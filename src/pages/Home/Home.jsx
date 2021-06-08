import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  fadeUp,
  pageTransitionFadeOut,
} from '../../components/animations/animations';

const HomeContainer = styled(motion.section)`
  width: 100%;
  background-color: var(--creamsicle);
  height: 100vh;
`;

const MainHeading = styled(motion.h1)`
  font-size: clamp(4.2rem, 11vw, 12rem);
  text-align: center;
  display: flex;
`;

const textArray = ['The', 'Home', 'Page'];

const Home = () => {
  return (
    <Layout>
      <HomeContainer
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {textArray.map((text, index) => {
          return (
            <MainHeading
              variants={fadeUp}
              initial='hidden'
              animate='visible'
              key={index}
            >
              {console.log(text)}
              {text}
            </MainHeading>
          );
        })}
      </HomeContainer>
    </Layout>
  );
};

export default Home;
