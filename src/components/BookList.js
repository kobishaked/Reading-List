import React, {useContext, useState} from 'react'
import ThemeContext from '../ThemeContext'

const BookList = () => {
    const [theme, setTheme] = useState(useContext(ThemeContext))
    console.log("s")
    console.log(theme)
    console.log("5")
    return (
        
        <div className='book-list'>
            <ul>
                <li> first book </li>
                <li> second book </li>
                <li> third book </li>
            </ul>
        </div>
    )
}

export default BookList
//2