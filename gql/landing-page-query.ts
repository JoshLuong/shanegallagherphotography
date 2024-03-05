import { gql } from '@apollo/client'

export const subsectionQuery = gql`
    query GetSubSections {
        projectCollection(order: sys_firstPublishedAt_ASC) {
            items {
                sys {
                    publishedAt
                }
                title
                thumbnailXCoordinate
                thumbnailYCoordinate
                isProjectFeatured
                shouldDisplayPreviewImage
                previewImage {
                    url
                    width
                    height
                    description
                }
                url {
                    id
                }
            }
        }
    }
`
