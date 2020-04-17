import React, { useState, useEffect, useContext } from 'react'
import BooksContext from '../contexts/BooksContext'
// import Button from './Button';
import styled from 'styled-components'

const BookList = () => {

    const { booksList, addBook, removeBook } = useContext(BooksContext);


    return (
        <Div>
            <Ul>
                {booksList.map((book) => (
                    <Li key={book.id} onClick={() => removeBook(book)}>

                        <H1>{book.title} </H1>
                        <P> {book.author}</P>
                    </Li>
                ))}
            </Ul>
        </Div>
    )
}


export default BookList





const Div = styled.div`
    margin: 20px;
`

const Ul = styled.ul`
    padding: 0;
    list-style-type: none;
`

const Li = styled.li`
    background: #6d3d6d;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    &:hover{
        opacity: 0.7;
        text-decoration: line-through;  
    }
`


const H1 = styled.h1`
    font-weight: bold;
    color: #fff;
    font-size: 1.2em;
`

const P = styled.p`
    font-size: 0.9em;
    color: #ddd;
`