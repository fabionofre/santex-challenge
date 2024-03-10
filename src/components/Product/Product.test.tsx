import { fireEvent, render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Product } from '.';
import { ProductType } from '../ProductList';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';

import { OrderContext } from './../../context/OrderContext';

const props: { product: ProductType } = {
    product: {
        id: "1",
        description: "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
        picture: "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
        price: 129900,
        variantId: "1"
    }
}

const mocks = [
    {
        request: {
            query: ADD_ITEM_TO_ORDER,
            variables: {
                productVariantId: props.product.variantId,
                quantity: 1
            }
        },
        result: {
            data: {
                addItemToOrder: {
                    id: "30",
                    state: "AddingItems",
                    type: "Regular",
                    total: 2075692,
                    __typename: "Order"
                }
            },
        },
    }
];

const emptyMock = [
    {
        request: {
            query: ADD_ITEM_TO_ORDER,
            variables: {
                productVariantId: props.product.variantId,
                quantity: 1
            }
        },
        result: {
            data: null
        },
    }
];

const mockContextValue = {
    setOrder: jest.fn(),
};

describe('ProductComponent', () => {
    test('Should call setOrder context function after add an item to order', async () => {
        const { getByRole } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <OrderContext.Provider value={{ order: undefined, setOrder: mockContextValue.setOrder }}>
                    <Product {...props} />
                </OrderContext.Provider>
            </MockedProvider>
        );

        const buyButton = getByRole("buy-button");

        fireEvent.click(buyButton);
        await waitFor(() => {
            expect(mockContextValue.setOrder).toHaveBeenCalled();
        });
    });

    test('Should not call setOrder if dont have response data', async () => {
        const { getByRole } = render(
            <MockedProvider mocks={emptyMock} addTypename={false}>
                <OrderContext.Provider value={{ order: undefined, setOrder: mockContextValue.setOrder }}>
                    <Product {...props} />
                </OrderContext.Provider>
            </MockedProvider>
        );

        const buyButton = getByRole("buy-button");

        fireEvent.click(buyButton);
        await waitFor(() => {
            expect(mockContextValue.setOrder).toHaveBeenCalledTimes(0);
        });
    });
});