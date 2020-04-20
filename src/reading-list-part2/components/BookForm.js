import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import BooksContext from '../contexts/BooksContext'


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
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="book title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} required></Input>
                <Input type="text" placeholder="author name"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author} required></Input>
                <Submit type="submit" value="add book">
                </Submit>
            </Form>
        </div>
    )
}

export default BookForm



const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 60%;
   margin: 10px auto;
`

const Input = styled.input`
    height: 30px;
    padding: 10px;
    box-sizing: border-box;
    margin: 6px 0;
    border-radius: 30px;
    border: 0;
    outline: none;
`

const Submit = styled.input.attrs({ type: 'submit',})`
   max-width: 80px;
    background: #499DE2;
    border: 0;
    padding: 6px 15px;
    text-align: end;
    border-radius: 30px;
    color: white;
    align-self: flex-end;
`

//question:
// for what reason we need the value property in the input and
//button 