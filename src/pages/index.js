import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout, { Dark, Light, Container } from '../components/layout';
import SEO from '../components/seo';

import Social from '../components/social';
import { H1, H2, H3, UL, LI, A } from '../components/typography';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteContentQuery {
      site {
        siteMetadata {
          index {
            headline
            code
            talk
          }
          talks {
            link
            title
          }
        }
      }
    }
  `);

  const { index, talks } = data.site.siteMetadata;
  const { headline, code, talk } = index;

  return (
    <Layout>
      <SEO title="Home" />
      <Light>
        <Container>
          <H1>{headline}</H1>
        </Container>
      </Light>
      <Dark>
        <Container>
          <H2>
            I mostly write <span>code</span>.
          </H2>
        </Container>
      </Dark>
      <Light>
        <Container>
          <H3>{talk}</H3>
          <UL>
            {talks.map((t, i) => (
              <LI key={`talk-${i}`}>
                <A href={t.link} target="_blank">
                  {t.title}
                </A>
              </LI>
            ))}
          </UL>
        </Container>
      </Light>
      <Social />
    </Layout>
  );
};

export default IndexPage;
