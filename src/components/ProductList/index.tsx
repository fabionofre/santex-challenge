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
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const itemsPerPage = 8;

  const { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      options: { take: itemsPerPage, skip: page > 1 ? (page * itemsPerPage - itemsPerPage) : 0 }
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
      setTotalPages(Math.ceil(data.products.totalItems / itemsPerPage));
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <S.ListContainer role="products-list">
        {products.map((product: ProductType) => <Product product={product} key={product.id} />)}
      </S.ListContainer>
      <S.Pagination>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((p) => {
          return (<S.PaginationItem active={page === p} onClick={() => setPage(p)}>{p}</S.PaginationItem>);
        })}

      </S.Pagination>
    </>
  );
}
