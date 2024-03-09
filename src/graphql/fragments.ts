import { gql } from "@apollo/client";

export const PRODUCT_FRAGMENT = gql`
    fragment ProductInfo on Product {
        id
        name
        slug
        description
        slug
        assets {
            id
            source
            type
            preview
        }
        variants {
            id
            name
            price
            currencyCode
            priceWithTax
            stockLevel
        }
    }
`;