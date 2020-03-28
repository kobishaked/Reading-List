import React, {createContext, useState, useContext } from 'react'

const ThemeContext = createContext({});

export const ThemeContextProvider = (props) => {

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

    return (
       <ThemeContext.Provider value = {theme}>
           {props.children}
       </ThemeContext.Provider>
    )
}

export default ThemeContext










//questions:
//1.   in the changetheme function inside the theme object:
//  a. when should i use () and {} in an arrow function?
//     for example here is should use () but most of the time 
//     need to use the {} in arrow function.
//  b. is there other ways to write functions inside objects?
