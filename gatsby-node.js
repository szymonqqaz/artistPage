const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const myTemplate = path.resolve(
    `src/templates/ImageTemplateOncePhoto/ImageTemplateOncePhoto.js`
  );
  const albumsQuery = await graphql(`
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
  `);

  albumsQuery.data.allContentfulZdjecia.edges.forEach(project => {
    createPage({
      path: project.node.photo.id,
      component: myTemplate,
      context: {
        data: project.node,
      },
    });
  });
};
