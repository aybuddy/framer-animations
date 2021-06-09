import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import { motion } from "framer-motion";
import {
  fadeUpParent,
  fadeUpChild,
  pageTransitionFadeOut,
} from "../../components/animations/animations";
import './Home.css'
const HomeContainer = styled(motion.section)`
  width: 100%;
  background-color: var(--creamsicle);
  height: 100vh;
`;

const MainHeading = styled(motion.h1)`
  // font-size: clamp(4.2rem, 11vw, 12rem);
  font-size: 100px;
`;

const Home = () => {
  return (
    <Layout>
      <HomeContainer
        variants={pageTransitionFadeOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className='parentContainer' variants={fadeUpParent} initial="hidden" animate="show">
          <MainHeading variants={fadeUpChild}>The</MainHeading>
          <MainHeading variants={fadeUpChild}>Home</MainHeading>
          <MainHeading variants={fadeUpChild}>Page</MainHeading>
          
        </motion.div>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
