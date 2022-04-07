import React, { useContext } from "react";
import "../Styles/App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import Posts from "./Posts";
import { Error } from "./Error";
import { PostPage } from "./PostPage";
import { Login } from "./Login";
import { AuthContext } from "../context/context";
import { Loader } from "../Components/UI/loader/Loader";

export const Routing = () => {

    const {isAuth, isAuthLoading} = useContext(AuthContext);

    if (isAuthLoading) {
        return (
            <Loader/>
        )
    }

    return (
        isAuth
            ?
            <div>
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<PostPage />} />
                    <Route path='*' element={<Posts />} />
                </Routes>
            </div>
            :
            <div>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<Login />} />
                </Routes>
            </div >
    )
}