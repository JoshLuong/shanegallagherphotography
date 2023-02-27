import { gql } from "@apollo/client";

const previewContentFragment = gql`
  fragment PreviewContent on SubsectionPreview {
    previewDescription
    previewImage {
      url
    }
    title
    url {
      id
    }
  }
`;

const colourSchemeFragment = gql`
  fragment ColourScheme on Colour {
    primary
    secondary
    tertiary
  }
`;

export const SUBSECTION_QUERY = gql`
  query GetSubSections {
    subsectionCollection(order: sys_firstPublishedAt_ASC) {
      items {
        title
        width
        primaryColor
        secondaryColor
        tertiaryColor
        previewContent {
          ...PreviewContent
        }
        colourScheme {
          ...ColourScheme
        }
      }
    }
  }
  ${previewContentFragment}
  ${colourSchemeFragment}
`;
