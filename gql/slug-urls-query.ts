import { gql } from "@apollo/client";

export const slugUrlsQuery = gql`
    query GetSlugUrls {
        slugUrlCollection{
    items{
        id
    }
 }
}
`;
