import { gql } from '@apollo/client'

export const projectPageQuery = gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                title
                galleryCollection {
                    items {
                        url
                        width
                        height
                        contentType
                    }
                }
                description {
                    json
                }
            }
        }
    }
`

export const projectUrlsQuery = gql`
    query GetProjectUrls {
        projectCollection(order: sys_firstPublishedAt_ASC) {
            items {
                title
                url {
                    id
                }
            }
        }
    }
`
