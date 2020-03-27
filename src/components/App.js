import React, {useState} from 'react'
import Navbar from './Navbar'
import '../index.css'
import BookList from './BookList'
import {ThemeContextProvider} from '../ThemeContext'

const App = () => {
    const [theme, setTheme] = useState(
        {
            isLightTheme: true,
            light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
            light: {syntax: '#ddd', ui: '#333', bg: '#555'}
        }
    )
    
   
    return (
        <div className="App">
            <ThemeContextProvider value = {theme}>
                <Navbar />
                <BookList />
            </ThemeContextProvider>

        </div>
    )
}

export default App



//2