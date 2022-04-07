import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/context';
import { Navbar } from './pages/Navbar';
import { Routing } from './pages/Routing';
import "./Styles/App.css"


function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [isAuthLoading, setIsAuthLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsAuthLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isAuthLoading}}>
            <BrowserRouter>
                <div className='root'>
                    <Navbar />
                    <Routing />
                </div>
            </BrowserRouter>
        </AuthContext.Provider >
    )
}

export default App;
