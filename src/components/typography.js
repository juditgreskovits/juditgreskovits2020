import styled, { createGlobalStyle } from 'styled-components';

export const TypographyGlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  p, a, ul, ol, li {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.font.content};
    line-height: 1.6rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.s}px) {
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
  }
`;

export const H1 = styled.h1`
  margin: 68px 0 18px 0;
  font-family: ${({ theme }) => theme.font.content};
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.6rem;
  color: ${({ theme }) => theme.color.dark};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}px) {
    font-size: 3.6rem;

    br {
      display: none;
    }
  }
`;

export const H2 = styled.h2`
  margin: 54px 0;
  font-family: ${({ theme }) => theme.font.code};
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.color.light};

  span {
    color: ${({ theme }) => theme.color.brand};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.s}px) {
    margin: 68px 0;
    font-size: 3.2rem;

    br {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    margin: 92px 0;
    font-size: 3.6rem;
  }
`;

export const H3 = styled.h3`
  margin: 18px 0;
  font-family: ${({ theme }) => theme.font.content};
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.color.dark};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}px) {
    font-size: 3.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    br {
      display: none;
    }
  }
`;

export const UL = styled.ul``;

export const LI = styled.li`
  position: relative;
  margin: 0 0 8px 0;
`;

export const A = styled.a`
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;

  padding-left: 12px;

  &::before {
    position: absolute;
    left: 0;
    font-weight: 500;
    color: ${({ theme }) => theme.color.brand};
    content: '>';
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.s}px) {
    padding-left: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}px) {
    &:hover {
      padding-left: 24px;
      &::before {
        color: ${({ theme }) => theme.color.brand};
        content: '=>';
      }
    }
  }
`;
