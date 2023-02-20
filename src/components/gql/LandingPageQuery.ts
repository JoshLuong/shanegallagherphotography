import { gql } from "@apollo/client";

const previewContentFragment = gql`
  fragment PreviewContent on SubsectionPreview {
    previewDescription
    previewImage {
      url
    }
    title
  }
`;

export const SUBSECTION_QUERY = gql`
  query GetSubSections {
    subsectionCollection (order:sys_firstPublishedAt_ASC) {
      items {
        title
        width
        primaryColor
        secondaryColor
        previewsCollection {
          items {
            ...PreviewContent
          }
        }
      }
    }
  }
  ${previewContentFragment}
`;
