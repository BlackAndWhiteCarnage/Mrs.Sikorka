import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Cursor from 'components/Cursor/Cursor';

const RootProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Cursor />
    </ThemeProvider>
  );
};

export default RootProvider;
