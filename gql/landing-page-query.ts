import { gql } from "@apollo/client";

const previewContentFragment = gql`
  fragment PreviewContent on SubsectionPreview {
    previewDescription
    titleFontSize
    previewImage {
      url
    }
    title
    url {
      id
    }
    contentType {
      type
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

export const subsectionQuery = gql`
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
