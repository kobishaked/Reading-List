import React, { useState } from 'react'
import Navbar from './Navbar'
import '../index.css'
import BookList from './BookList'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { AuthContextProvider } from '../contexts/AuthContext'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
   
    return (
        <div className="App">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <BookList />
                </ThemeContextProvider>
            </AuthContextProvider>

        </div>
    )
}

export default App







