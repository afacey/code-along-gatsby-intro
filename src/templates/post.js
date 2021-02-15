import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
// import { MDXRenderer} from 'gat'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      excerpt
    }
  }
`;

export default function PostTemplate({
  data: {
    mdx: {
      frontmatter: { title, author },
      excerpt,
    },
  },
}) {
  return (
    <Layout>
      <h1>{title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {author}
      </p>

      <p>{excerpt}</p>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
}
