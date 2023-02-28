import { gql } from "@apollo/client";

const projectContentFragment = gql`
  fragment ProjectContent on Projects {
    title
    galleryCollection {
      items {
        url
      }
    }
    description {
      json
    }
  }
`;

export const PROJECT_QUERY = gql`
  query GetProjectBySlug($slug: String!) {
    projectsCollection(where: { url: { id: $slug } }) {
      items {
        ...ProjectContent
      }
    }
  }
  ${projectContentFragment}
`;
