import { gql } from '@apollo/client'

const projectContentFragment = gql`
    fragment ProjectContent on Projects {
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
`

export const projectPageQuery = gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                ...ProjectContent
            }
        }
    }
    ${projectContentFragment}
`

export const projectPageImageBehaviourQuery = gql`
    query GetProjectBySlug($slug: String!) {
        projectsCollection(where: { url: { id: $slug } }) {
            items {
                behaviourCollection {
                    items {
                        index
                        behaviour
                    }
                }
            }
        }
    }
`
