import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartItems, setcartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {

    }

    const contextValue = {
        food_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider