import React, {useContext, useState} from 'react'
import ThemeContext from '../ThemeContext'
import Button from './Button';

const BookList = () => {
  
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        
        <div className='book-list' style = {{background: theme.bg, color: theme.syntax}}>
            <ul>
                <li style = {{background: theme.ui}}> first book </li>
                <li style = {{background: theme.ui}}> second book </li>
                <li style = {{background: theme.ui}}> third book </li>
            </ul>
            <Button/>
        </div>
    )
}

export default BookList
//2