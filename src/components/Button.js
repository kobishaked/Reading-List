import React, {useContext, useState} from 'react'
import ThemeContext from '../contexts/ThemeContext'

import AuthContext from '../contexts/AuthContext'


const Button = () => {
    const {isLightTheme, light, dark, changeTheme} = useContext(ThemeContext);
    return (
        <button onClick = {changeTheme}> change theme </button>
    )
}

export default Button
