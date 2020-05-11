import React from 'react';

import Layout, { Dark, Light, Container } from '../components/layout';
import SEO from '../components/seo';

import Social from '../components/social';
import { H1, H2 } from '../components/typography';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Social />
    <Light>
      <Container>
        <H1>Not found</H1>
      </Container>
    </Light>
    <Dark>
      <Container>
        <H2>404</H2>
      </Container>
    </Dark>
  </Layout>
);

export default NotFoundPage;
