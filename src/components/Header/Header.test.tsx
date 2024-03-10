import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { OrderContext, OrderContextProvider } from './../../context/OrderContext';
import { useContext } from 'react';
import Header from '.';


const TestingComponent = () => {
    const orderContext = useContext(OrderContext);

    const handleSetOrderClick = () => {
        orderContext?.setOrder({ subTotal: 50 });
    }

    return (
        <>
            <Header />
            <button data-testid="setorder" onClick={handleSetOrderClick}>Set Order</button>
        </>
    )
}

describe('HeaderComponent', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Should update header subtotal when an order is setted', async () => {
        const { getByTestId, getByRole } = render(
            <OrderContextProvider>
                <TestingComponent />
            </OrderContextProvider>
        );

        const subTotalDiv = getByRole('header-subtotal');
        expect(subTotalDiv.innerHTML).toBe("$ 0.00");
        await waitFor(() => {
            fireEvent.click(getByTestId("setorder"));
            act(() => {
                jest.advanceTimersByTime(5000);
            });
            expect(subTotalDiv.innerHTML).toBe("$ 50.00");
        });
    });
});