import { gql } from '@apollo/client'

export const aboutContentQuery = gql`
    query GetAboutContent {
        about(id: "4FDsbUOwdVs6Ot1T2PpL2l") {
            description {
                json
            }
            portraitsCollection {
                items {
                    url
                    width
                    height
                }
            }
            # add the fields you want to query
        }
    }
`
