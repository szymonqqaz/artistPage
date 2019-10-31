import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ImageTemplateContent from './ImageTemplateContent';
import ImageTemplateDesktop from './ImageTemplateDesktop';

const ImagesTemplate = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulZdjecia {
          edges {
            node {
              id
              title
              description {
                description
              }
              photo {
                id
                file {
                  url
                  fileName
                  contentType
                }
                resize {
                  width
                  height
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
    // eslint-disable-next-line
    render={({ allContentfulZdjecia: { edges } }) => (
      <>
        <ImageTemplateContent edges={edges} />
        <ImageTemplateDesktop edges={edges} />
      </>
    )}
  />
);
export default ImagesTemplate;
