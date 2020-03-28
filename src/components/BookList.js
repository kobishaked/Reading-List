import React, {useContext, useState} from 'react'
import ThemeContext from '../contexts/ThemeContext'
import AuthContext from '../contexts/AuthContext'
import Button from './Button';

const BookList = () => {
  
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuth, changeLog} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return (
        <>
        
        <div className='book-list' style = {{background: theme.bg, color: theme.syntax}}>
        {isAuth?<div onClick = {changeLog}>logged in</div>:<div onClick = {changeLog}>logged out</div>}
            <ul>
                <li style = {{background: theme.ui}}> first book </li>
                <li style = {{background: theme.ui}}> second book </li>
                <li style = {{background: theme.ui}}> third book </li>
            </ul>
            <Button/>
        </div>
        </>
    )
}

export default BookList



