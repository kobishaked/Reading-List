//how can i change this context file to a functional component?
//that store the state instead of storing in the App component 
//like now. 
//what the benefit for that?
import React, {createContext, useState, useContext } from 'react'

const ThemeContext = createContext({});
export const ThemeContextProvider = ThemeContext.Provider;

export default ThemeContext
