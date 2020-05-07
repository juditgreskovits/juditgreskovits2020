import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 68px 0 18px 0;
  font-family: ${({ theme }) => theme.font.content};
  font-weight: 500;
  font-size: 36px;
  color: ${({ theme }) => theme.color.dark};
`;

export const H2 = styled.h2`
  margin: 92px 0;
  font-family: ${({ theme }) => theme.font.code};
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.color.light};

  span {
    color: ${({ theme }) => theme.color.brand};
  }
`;

export const H3 = styled.h3`
  margin: 18px 0;
  font-family: ${({ theme }) => theme.font.content};
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.color.dark};
`;

export const UL = styled.ul``;

export const LI = styled.li`
  margin: 0 0 8px 0;
`;

export const A = styled.a`
  font-family: ${({ theme }) => theme.font.content};
  font-weight: 500;
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  &:hover {
    /* text-decoration: underline; */
    &::before {
      color: ${({ theme }) => theme.color.brand};
      content: '=> ';
    }
  }
`;
