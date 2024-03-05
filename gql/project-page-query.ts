import { gql } from '@apollo/client'

// We shouldn't anticipate more than 50 images, this helps us query the meta tags (i.e. this stops rate limiting complaints by contentful)
export const projectPageQuery = gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                sys {
                    publishedAt
                }
                title
                galleryCollection(limit: 50) {
                    items {
                        sys {
                            publishedAt
                        }
                        url
                        width
                        title
                        height
                        fileName
                        contentType
                        description
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
                sys {
                    publishedAt
                }
                title
                url {
                    id
                }
            }
        }
    }
`
