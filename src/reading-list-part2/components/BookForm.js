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
        <>
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
        </>
    )
}

export default BookForm



const Form = styled.form`
   max-width: 60%;
   display: flex;
   flex-direction: column;
 
   margin: 3px auto;
`

const Input = styled.input`
    font-size: 10px;
    height: 20px;
    padding: 10px;
    box-sizing: border-box;
    margin: 3px 0;
    border-radius: 30px;
    border: 0;
    outline: none;
`

// padding: 5px 10px;
//     max-width: 300px;
//     text-align: center;
//     margin: 0px auto 0px;
//     background: ${props => (props.color==="orange"? "#FF4800": "#00CD71")};
//     border-radius: 30px;

const Submit = styled.input.attrs({ type: 'submit',})`
font-size: 10px;
   max-width: 80px;
    background: #499DE2;
    border: 0;
    padding: 3px 5px;
    text-align: end;
    border-radius: 30px;
    color: white;
    align-self: flex-end;
`

//question:
// for what reason we need the value property in the input and
//button 


