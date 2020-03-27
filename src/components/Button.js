import React, {useContext, useState} from 'react'
import ThemeContext from '../ThemeContext'



const Button = () => {

    const {isLightTheme, light, dark, changeTheme} = useContext(ThemeContext);
    return (
        <button onClick = {changeTheme}> change theme </button>
    )
}

export default Button
