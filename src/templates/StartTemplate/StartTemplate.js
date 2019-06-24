import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StartTemplatePhone from './StartTemplatePhone/StartTemplatePhone';
import StartTemplateDesktop from './StartTemplateDesktop/StartTemplateDesktop';

const StartTemplate = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulStronaGlownaZjecie {
          edges {
            node {
              id
              title
              description {
                description
              }
              image {
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
    render={({ allContentfulStronaGlownaZjecie: { edges } }) => (
      <>
        <StartTemplatePhone edges={edges} />
        <StartTemplateDesktop edges={edges} />
      </>
    )}
  />
);
export default StartTemplate;
