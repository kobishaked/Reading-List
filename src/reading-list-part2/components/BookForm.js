import React, { useState, useEffect, useContext } from 'react'
import BooksContext from '../contexts/BooksContext'
import { v4 as uuidv4 } from 'uuid';
import '../index.css'

const BookForm = () => {
    const { addBook } = useContext(BooksContext);

    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({title: title, author: author, id: uuidv4()})
        setTitle("");
        setAuthor("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="book title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} required></input>
                <input type="text" placeholder="author name"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author} required></input>
                <input type="submit" value="add book">
                </input>
            </form>
        </div>
    )
}

export default BookForm



//question:
// for what reason we need the value property in the input and
//button 