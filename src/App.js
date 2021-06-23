import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { Home, Page1, Page2, Page3, Page4, PageNotFound } from './pages';
import ScrollToTop from './components/shared/ScrollToTop';
import Navbar from './components/navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Menu from './components/menu/Menu';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
          <Route path='/page4' component={Page4} />
          {/* <Route exact path='/' component={Menu} /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
