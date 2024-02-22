import { gql } from '@apollo/client'

export const subsectionQuery = gql`
    query GetSubSections {
        projectCollection(order: sys_firstPublishedAt_ASC) {
            items {
                title
                isProjectFeatured
                previewImage {
                    url
                }
                url {
                    id
                }
            }
        }
    }
`
