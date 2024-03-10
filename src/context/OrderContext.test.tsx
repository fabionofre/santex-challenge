import { fireEvent, render, waitFor } from '@testing-library/react';
import { OrderContext, OrderContextProvider } from './OrderContext';
import { useContext } from 'react';


const TestingComponent = (props: { mockedOrder: { subTotal: number } | undefined }) => {
    const orderContext = useContext(OrderContext);

    const handleSetOrderClick = () => {
        orderContext?.setOrder(props.mockedOrder);
    }

    return (
        <>
            <p data-testid="subtotal">{orderContext?.order?.subTotal}</p>
            <button data-testid="setorder" onClick={handleSetOrderClick}>Set Order</button>
        </>
    )
}

describe('OrderContextProvider', () => {
    test('Should wrap test component with Order context provider then update header subtotal every time setOrder is called', async () => {
        const { getByTestId } = render(
            <OrderContextProvider>
                <TestingComponent mockedOrder={{ subTotal: 100 }} />
            </OrderContextProvider>
        );
        await waitFor(() => {
            fireEvent.click(getByTestId("setorder"));
            expect(getByTestId('subtotal').innerHTML).toBe("100");
        });
    });

    test('Should provide an empty value for order subtotal', async () => {
        const { getByTestId } = render(
            <OrderContextProvider>
                <TestingComponent mockedOrder={undefined} />
            </OrderContextProvider>
        );
        await waitFor(() => {
            fireEvent.click(getByTestId("setorder"));
            expect(getByTestId('subtotal').innerHTML).toBe("");
        });
    });

});