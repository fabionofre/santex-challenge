import { useEffect, useState } from "react";
import { Product } from "../Product";
import * as S from './styles';
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";

export interface ProductType {
  id: string;
  picture: string;
  description: string;
  price: number;
  variantId: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(1);

  const { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      options: { take: 8, skip: page > 1 ? (page * 8) : 0 }
    }
  });


  useEffect(() => {
    if (data) {
      const mappedProducts = data.products.items.map(((product: any) => {
        return {
          id: product.id,
          picture: product.assets[0].preview,
          description: product.description,
          price: product.variants[0].price,
          variantId: product.variants[0].id
        };
      }));

      setProducts(mappedProducts);
      setTotalProducts(data.products.totalItems);
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <S.ListContainer role="products-list">
      {products.map((product: ProductType) => <Product product={product} key={product.id} />)}
    </S.ListContainer>
  );
}
