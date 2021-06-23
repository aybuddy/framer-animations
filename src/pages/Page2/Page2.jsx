import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { pageTransitionFadeOut } from '../../components/animations/animations';
import './Page2.css';

const Page2Container = styled(motion.section)`
  width: 100%;
  background-color: var(--blue2);
  /* height: calc(100vh - 90px); */
  height: 100vh;
`;

//transition
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9], delay: 1.2 };

//variants
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
};

const Page2 = () => {
  return (
    <Layout>
      <Page2Container
        variants={pageTransitionFadeOut}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='title2'>
          <h2>
            <motion.div
              className='text'
              // variants={titleSlideUp}
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={transition}
            >
              Products
            </motion.div>
          </h2>
        </div>
      </Page2Container>
      ;
    </Layout>
  );
};

export default Page2;
