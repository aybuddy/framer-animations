import React from 'react';
import './Layout.styles';
import { LayoutContainer, LayoutWrapper } from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutWrapper>{children}</LayoutWrapper>
    </LayoutContainer>
  );
};

export default Layout;
