import { createContext, useContext } from "react"

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};