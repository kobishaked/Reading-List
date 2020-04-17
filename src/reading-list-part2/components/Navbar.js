import React, { useState, useEffect, useContext } from 'react'
// import '../index.css'
import BooksContext from '../contexts/BooksContext'
import styled from 'styled-components'


const Navbar = () => {

    const { booksList } = useContext(BooksContext);
    let msg = "";
    switch (booksList.length) {
        case 0:
            msg = "currently you don't have any books in the list"
            break;
        case 1:
            msg = "currently you have just one book left to read"
            break;
        default:
            msg = `currently you have ${booksList.length} books left to read`
            break;
    }




    return (

        <Nav>
            <h1> Ninja Reading List</h1>
            <p> {msg}</p>
        </Nav>

    )
}

export default Navbar



const Nav = styled.nav`
    padding: 10px 20px;
    text-align: center;
    background: #6d3d6d;
`
 