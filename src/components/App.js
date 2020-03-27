import React, { useState } from 'react'
import Navbar from './Navbar'
import '../index.css'
import BookList from './BookList'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { AuthContextProvider } from '../contexts/AuthContext'

const App = () => {
    const [theme, setTheme] = useState(
        {
            isLightTheme: false,
            changeTheme: function () { 
                setTheme(prev => ({...theme, isLightTheme: !prev.isLightTheme}))                                         
             },            
            light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
            dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
        }
    )
    const [auth, setAuth] = useState({
        isAuth: true,
        changeLog: function () {
            setAuth(prev=>({...auth, isAuth: !prev.isAuth }))
            } 
    })


    return (
        <div className="App">
            <AuthContextProvider value={auth}>
                <ThemeContextProvider value={theme}>
                    <Navbar />
                    <BookList />
                </ThemeContextProvider>
            </AuthContextProvider>

        </div>
    )
}

export default App








//questions:
//1.   line 13-14 (changetheme function) 
//  a. when should i use () and {} in a arrow function?
//     for example here is should use () but most of the time 
//  b. is there other ways to write functions inside objects?