import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import BooksContext from '../contexts/BooksContext'

const BookList = () => {

    const { booksList, addBook, removeBook } = useContext(BooksContext);


    return (
            <Ul>
                {booksList.map((book) => (
                    <Li key={book.id} onClick={() => removeBook(book)}>
                        <H1>{book.title} </H1>
                        <P> {book.author}</P>
                    </Li>
                ))}
            </Ul>
    )
}


export default BookList




const Ul = styled.ul`
    max-width: 60%;
    padding: 0px;
    margin: auto;
    list-style-type: none;
`

const Li = styled.li`
    padding: 5px;
    background: #4A4E7C;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px auto;
    &:hover{
        opacity: 0.7;
        text-decoration: line-through;  
    }
`

const H1 = styled.h1`
    font-weight: bold;
    color: #fff;
    padding: 0;
    font-size: 1.2em;
    margin: 0;
`

const P = styled.p`
    font-size: 0.9em;
    padding: 0;
    color: #ddd;
    margin: 5px 0px 0px 0px;
`