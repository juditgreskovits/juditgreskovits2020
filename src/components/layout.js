/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { theme } from './theme';

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
`;

const Layout = ({ children }) => (
  <>
    <Reset />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Layout;
