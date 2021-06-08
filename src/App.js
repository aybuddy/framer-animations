import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import ScrollToTop from './components/shared/ScrollToTop';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Route path='/page4' component={Page4} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
