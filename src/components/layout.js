/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import { theme } from './theme';
import { GlobalTypography } from './typography';

export const Dark = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
`;

export const Light = styled.div`
  background-color: ${({ theme }) => theme.color.light};
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 8px 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}px) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.color.light};
  }
  ${GlobalTypography}
`;

const Layout = ({ children }) => (
  <>
    <Reset />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
