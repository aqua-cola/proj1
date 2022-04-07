import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../Components/UI/button/MyButton";
import { AuthContext } from "../context/context";
import "../Styles/App.css"

export const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const toLogout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={toLogout}>Выйти</MyButton>
            <div className="navbar_links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}