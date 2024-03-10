import { useMutation } from '@apollo/client';
import { ProductType } from '../ProductList';
import * as S from './styles';
import { useContext } from 'react';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import { formatPrice } from '../../helpers';
import { OrderContext } from '../../context/OrderContext';

export interface ProductProps {
    product: ProductType;
}

export function Product(props: ProductProps) {
    const [addItemToOrder, { loading }] = useMutation(ADD_ITEM_TO_ORDER);
    const orderContext = useContext(OrderContext);

    const handleBuyButtonClick = async () => {
        const response = await addItemToOrder({
            variables: {
                productVariantId: props.product.variantId,
                quantity: 1
            }
        });

        if (response.data) {
            orderContext?.setOrder({ subTotal: response.data.addItemToOrder.total });
        }
    }

    return (
        <S.Card>
            <S.CardHeader>
                <img alt="product-picutre" src={props.product.picture} />
            </S.CardHeader>
            <S.CardBody>
                <S.ProductDescription>
                    {props.product.description}
                </S.ProductDescription>
            </S.CardBody>
            <S.Price>$ {formatPrice(props.product.price)}</S.Price>
            <S.CardFooter>
                <S.BuyButton onClick={handleBuyButtonClick} role="buy-button">{loading ? "Buying..." : "Buy"}</S.BuyButton>
            </S.CardFooter>
        </S.Card>
    );
}
