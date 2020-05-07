import styled from 'styled-components';

export const SocialLink = styled.a`
  margin: 0 0 12px 12px;
  fill: ${({ theme }) => theme.color.brand};
  &:hover {
    fill: ${({ theme }) => theme.color.dark};
  }
`;
