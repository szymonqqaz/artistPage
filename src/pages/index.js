import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import StartTemplate from 'templates/StartTemplate/StartTemplate';
import ImagesTemplate from 'templates/ImagesTemplate/ImagesTemplate';
import './index.style.css';

const IndexPage = () => (
  <MainTemplate>
    <>
      <StartTemplate />
      <ImagesTemplate />
    </>
  </MainTemplate>
);

export default IndexPage;

{
  /* <StaticQuery
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
        }
      }
    }
  }
`}
render={({ allContentfulStronaGlownaZjecie: { edges } }) => (
  <>
    <div>
      <h1>{edges[0].node.title}</h1>
    </div>
  </>
)}
/> */
}
