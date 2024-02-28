import { gql } from '@apollo/client'

export const moodboardQuery = gql`
    query GetMoodboardImages($fileNames: [String!]) {
        assetCollection(
            where: {
                fileName_in: $fileNames
            }
        ) {
            items {
                fileName
                url
                width
                height
            }
        }
    }
`
