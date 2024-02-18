import { gql } from '@apollo/client'

const previewContentFragment = gql`
    fragment PreviewContent on SubsectionPreview {
        titleFontSize
        title
        secondaryText
        tertiaryText
        url {
            id
        }
        contentType {
            type
        }
        previewImagesCollection {
            items {
                url
            }
        }
        photo {
            url
        }
    }
`

const colourSchemeFragment = gql`
    fragment ColourScheme on Colour {
        primary
        secondary
        tertiary
    }
`

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
`
