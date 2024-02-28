import { gql } from '@apollo/client'

// We shouldn't anticipate more than 50 images, this helps us query the meta tags (i.e. this stops rate limiting complaints by contentful)
export const projectPageQuery = gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                title
                galleryCollection(limit: 50) {
                    items {
                        url
                        width
                        title
                        height
                        fileName
                        contentType
                        contentfulMetadata {
                            tags {
                                name
                                id
                            }
                        }
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
