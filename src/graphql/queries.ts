import { gql } from "@apollo/client";
import { PRODUCT_FRAGMENT } from "./fragments";



export const GET_PRODUCTS = gql`
  query GetProducts($options: ProductListOptions) {
    products(options: $options)  {
      items{
        ...ProductInfo
      },
      totalItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
