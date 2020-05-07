import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { SocialLink } from '../components/social-link';
import { GithubIcon, LinkedInIcon } from '../components/icons';

const SocialContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const Social = () => {
  const data = useStaticQuery(graphql`
    query SiteSocialQuery {
      site {
        siteMetadata {
          social {
            github {
              link
            }
            linkedIn {
              link
            }
          }
        }
      }
    }
  `);

  const { github, linkedIn } = data.site.siteMetadata.social;

  return (
    <SocialContainer>
      <SocialLink href={github.link} target="_blank">
        <GithubIcon />
      </SocialLink>
      <SocialLink href={linkedIn.link} target="_blank">
        <LinkedInIcon />
      </SocialLink>
    </SocialContainer>
  );
};

export default Social;
