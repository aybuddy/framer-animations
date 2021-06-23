import React from 'react';
import './Menu.css';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

//transition
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

//variants
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
};

const Menu = () => {
  return (
    <AnimatePresence>
      <motion.div exit={{ opacity: 0 }} className='products'>
        <div className='menu-title'>Products</div>
        <div className='close'>
          <FaTimes />
        </div>
        <div className='menu'>
          <div className='container'>
            <div className='menu-inner'>
              <motion.ul
                // variants={}
                initial='initial'
                animate='animate'
                exit='exit'
              >
                <li>
                  <Link to='/'>
                    <div className='wrapper'>
                      <div className='line-left'>
                        {/* <div className="mask"></div> */}
                      </div>
                      <div className='title'>
                        <h2>
                          <motion.div
                            variants={titleSlideUp}
                            transition={transition}
                            className='text'
                          >
                            Products
                          </motion.div>
                        </h2>
                      </div>
                      <div className='thumbnail'>
                        <img src='' alt='' />
                        {/* <div className="mask"></div> */}
                      </div>
                      <div className='floating-image'>
                        <img src='' alt='' />
                      </div>
                      <div className='line right'>
                        <div className='mask right'></div>
                      </div>
                    </div>
                  </Link>
                  <Link to='/'>
                    <div className='wrapper'>
                      <div className='line-left'>
                        {/* <div className="mask"></div> */}
                      </div>
                      <div className='title'>
                        <h2>
                          <motion.div
                            variants={titleSlideUp}
                            transition={transition}
                            className='text'
                          >
                            Resources
                          </motion.div>
                        </h2>
                      </div>
                      <div className='thumbnail'>
                        <img src='' alt='' />
                        {/* <div className="mask"></div> */}
                      </div>
                      <div className='floating-image'>
                        <img src='' alt='' />
                      </div>
                      <div className='line right'>
                        <div className='mask right'></div>
                      </div>
                    </div>
                  </Link>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
