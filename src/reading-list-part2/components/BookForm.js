import React, { useState, useEffect, useContext } from 'react'
import BooksContext from '../contexts/BooksContext'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'


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
padding: 20px;
`
const Input = styled.input`
width: 100%;
padding: 10px;
box-sizing: border-box;
margin: 6px 0;
background: #3c1f3c;
color: #fff;
border: 0;
`

const Submit = styled.input.attrs({ type: 'submit',})`
margin: 10px auto;
background: thistle;
border: 0;
padding: 6px 20px;
display: block;
`

//question:
// for what reason we need the value property in the input and
//button 