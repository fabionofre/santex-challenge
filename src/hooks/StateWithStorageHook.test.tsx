import { act, renderHook } from '@testing-library/react-hooks';
import useStateWithStorage from './useStateWithStorage';
import { OrderType } from '../context/OrderContext';

describe('StateWithStorageHook', () => {
    test('Should store a value on localStorage for persists in context', async () => {
        const { result } = renderHook(() => useStateWithStorage<OrderType>('order', { subTotal: 0 }));

        act(() => {
            result.current.storeValue({ subTotal: 60 });
        });

        const localStorageOrder = localStorage.getItem("order");
        let parsedOrder = {
            subTotal: 0
        };
        if (localStorageOrder) {
            parsedOrder = JSON.parse(localStorageOrder);
        }


        expect(parsedOrder.subTotal).toBe(result.current.value?.subTotal);
    });

    test('Should remove item from localStorage when resetValue method is called', async () => {
        const { result } = renderHook(() => useStateWithStorage<OrderType>('order', { subTotal: 0 }));

        act(() => {
            result.current.storeValue({ subTotal: 60 });
            result.current.resetValue();
        });

        const localStorageOrder = localStorage.getItem("order");
        expect(localStorageOrder).toBeNull();
    });
});