import React, { useEffect, useState } from 'react'
import { createContext ,useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [total,setTotal] = useState(0);
    return <AuthContext.Provider value={{selectedProducts,setSelectedProducts,total,setTotal}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {

    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of provider")
    }
    return authContextValue;
}