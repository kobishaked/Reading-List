import React, {useContext, useState} from 'react'
import '../index.css'
import ThemeContext from '../contexts/ThemeContext'
 
const Navbar = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    console.log(isLightTheme)
    


    return (
        
            <nav style = {{background: theme.ui, color: theme.syntax}}>
                <h1> Context App</h1>
                <ul>
                    <li> Home </li>
                    <li> about </li>
                    <li> contact </li>
                </ul>
            </nav>
        
    )
}

export default Navbar
 //2