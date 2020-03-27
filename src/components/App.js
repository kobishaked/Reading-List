import React, { useState } from 'react'
import Navbar from './Navbar'
import '../index.css'
import BookList from './BookList'
import { ThemeContextProvider } from '../ThemeContext'

const App = () => {
    const [theme, setTheme] = useState(
        {
            isLightTheme: false,
            //is there other ways to write functions inside objects?
            changeTheme: function () {changeTheme1()},
            light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
            dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
        }
    )

    const changeTheme1 = () => {
        //when should i use () and {} in a arrow function?
        //for example here is should use () but most of the time 
        //needs to use {}
        setTheme(prev => (
            {...theme, isLightTheme: !prev.isLightTheme}
        ) 
        )
    
    }
    


    return (
        <div className="App">
            <ThemeContextProvider value={theme}>
                <Navbar />
                <BookList />
            </ThemeContextProvider>

        </div>
    )
}

export default App



//2