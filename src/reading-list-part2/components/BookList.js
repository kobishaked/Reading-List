import React, { useState, useEffect, useContext } from 'react'
import BooksContext from '../contexts/BooksContext'
// import Button from './Button';
import '../index.css'

const BookList = () => {

    const { booksList, addBook, removeBook } = useContext(BooksContext);

    return (
        <div className="book-list">
            <ul>
                {booksList.map((book) => (
                    <li key={book.id} onClick={() => removeBook(book)}>

                        <h1 className="title">{book.title} </h1>
                        <p className="author"> {book.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default BookList