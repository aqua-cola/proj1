import { createContext, Dispatch, SetStateAction } from "react";

type AuthContextType = {
    isAuth: boolean
    setIsAuth: Dispatch<SetStateAction<boolean>>
    isAuthLoading: boolean
}

export const AuthContext = createContext({} as AuthContextType)