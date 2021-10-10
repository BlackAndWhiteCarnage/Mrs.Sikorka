import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';

const RootProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default RootProvider;
