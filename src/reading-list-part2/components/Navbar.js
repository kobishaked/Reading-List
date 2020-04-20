import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import BooksContext from '../contexts/BooksContext'


const Navbar = () => {

    const { booksList } = useContext(BooksContext);
    let msg = "";
    switch (booksList.length) {
        case 0:
            msg = <P color={"orange"}> currently you don't have any books in the list</P>
            break;
        case 1:
            msg = <P> currently you have <b>one book</b> left to read</P>
            break;
        default:
            msg = <P> currently you have <b>{booksList.length} books</b> left to read</P>
            break;
    }




    return (
        <>
            <H1> Reading List</H1>
            {msg}
        </>
    )
}

export default Navbar


const H1 = styled.h1`
    margin: 30px 0px 15px 0px;
    color: #499DE2;
    text-align: center;
    font-size: 45px;
`

const P = styled.p`
    padding: 5px 10px;
    width: 50%;
    text-align: center;
    margin: 0px auto 0px;
    background: ${props => (props.color==="orange"? "#FF4800": "#00CD71")};
    border-radius: 30px;
`
