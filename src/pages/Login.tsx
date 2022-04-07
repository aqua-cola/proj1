import React, { useContext } from "react";
import { MyButton } from "../Components/UI/button/MyButton";
import { MyInput } from "../Components/UI/input/MyInput";
import { AuthContext } from "../context/context";

export const Login = () => {

    const {setIsAuth} = useContext(AuthContext)

    const toLogin = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='password' placeholder='Введите пароль'/>
                <MyButton onClick={toLogin}>Войти</MyButton>
            </form>
        </div>
    )
}