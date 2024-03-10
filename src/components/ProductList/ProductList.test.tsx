import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ProductList from '.';
import { GET_PRODUCTS } from './../../graphql/queries';

const mockProductList = [
    {
        request: {
            query: GET_PRODUCTS,
            variables: {
                options: { take: 8, skip: 0 }
            }
        },
        result: {
            data: {
                products: {
                    items: [
                        {
                            id: "1",
                            name: "Laptop",
                            slug: "laptop",
                            description: "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
                            assets: [
                                {
                                    id: "1",
                                    source: "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
                                    type: "IMAGE",
                                    preview: "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
                                    __typename: "Asset"
                                }
                            ],
                            variants: [
                                {
                                    id: "1",
                                    name: "Laptop 13 inch 8GB",
                                    price: 129900,
                                    currencyCode: "USD",
                                    priceWithTax: 155880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                },
                                {
                                    id: "2",
                                    name: "Laptop 15 inch 8GB",
                                    price: 139900,
                                    currencyCode: "USD",
                                    priceWithTax: 167880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                },
                                {
                                    id: "3",
                                    name: "Laptop 13 inch 16GB",
                                    price: 219900,
                                    currencyCode: "USD",
                                    priceWithTax: 263880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                },
                                {
                                    id: "4",
                                    name: "Laptop 15 inch 16GB",
                                    price: 229900,
                                    currencyCode: "USD",
                                    priceWithTax: 275880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                }
                            ],
                            __typename: "Product"
                        }
                    ],
                    totalItems: 1
                }
            },
        },
    },
    {
        request: {
            query: GET_PRODUCTS,
            variables: {
                options: { take: 8, skip: 8 }
            }
        },
        result: {
            data: {
                products: {
                    items: [
                        {
                            id: "1",
                            name: "Laptop",
                            slug: "laptop",
                            description: "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
                            assets: [
                                {
                                    id: "1",
                                    source: "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
                                    type: "IMAGE",
                                    preview: "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
                                    __typename: "Asset"
                                }
                            ],
                            variants: [
                                {
                                    id: "1",
                                    name: "Laptop 13 inch 8GB",
                                    price: 129900,
                                    currencyCode: "USD",
                                    priceWithTax: 155880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                },
                                {
                                    id: "2",
                                    name: "Laptop 15 inch 8GB",
                                    price: 139900,
                                    currencyCode: "USD",
                                    priceWithTax: 167880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                },
                                {
                                    id: "3",
                                    name: "Laptop 13 inch 16GB",
                                    price: 219900,
                                    currencyCode: "USD",
                                    priceWithTax: 263880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                },
                                {
                                    id: "4",
                                    name: "Laptop 15 inch 16GB",
                                    price: 229900,
                                    currencyCode: "USD",
                                    priceWithTax: 275880,
                                    stockLevel: "IN_STOCK",
                                    __typename: "ProductVariant"
                                }
                            ],
                            __typename: "Product"
                        }
                    ],
                    totalItems: 1
                }
            },
        },
    },
];

describe('ProductListComponent', () => {
    test('Should render product list', async () => {
        const { getByRole } = render(
            <MockedProvider mocks={mockProductList} addTypename={false}>
                <ProductList />
            </MockedProvider>
        );

        await waitFor(() => {
            const listContainer = getByRole('products-list');

            expect(listContainer.children.length).toBe(1);
        });
    });
});
