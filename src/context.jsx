import { useState, useContext, createContext } from "react";
import {data} from "../data.js"

const CustomContext = createContext({});

function ContextProvider({children}) {
    const cards = [data[0]];
    const [cart, setCart] = useState({})
    return (
        <CustomContext.Provider value={{cart, setCart, cards}}>{children}</CustomContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(CustomContext)



export default ContextProvider
