import { Product } from "../Product";
import * as S from './styles';

export default function ProductList() {
  return (
    <S.ListContainer>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </S.ListContainer>
  );
}
