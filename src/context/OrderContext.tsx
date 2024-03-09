import { ReactChild, createContext, useContext, useEffect, useState } from "react";
import useStateWithStorage from "../hooks/useStateWithStorage";

interface OrderType {
    subTotal: number;
}

interface OrderContextType {
    order: OrderType | undefined;
    setOrder: React.Dispatch<React.SetStateAction<OrderType | undefined>>;
}

export const OrderContext = createContext<OrderContextType>(
    {
        order: {
            subTotal: 0
        },
        setOrder: () => null
    }
);

export const OrderContextProvider = ({ children }: { children: ReactChild }) => {
    const { value: orderValue, storeValue } = useStateWithStorage<OrderType>('order', { subTotal: 0 });
    const [order, setOrder] = useState<OrderType | undefined>(orderValue);

    useEffect(() => {
        if (order) storeValue(order);
    }, [order]);

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};