import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import styled, { createGlobalStyle } from 'styled-components'


import BookList from './BookList'
import { BooksContextProvider } from '../contexts/BooksContext'
import { v4 as uuidv4 } from 'uuid';
import BookForm from './BookForm';


const App = () => {


    return (
        <Div>
            <GlobalStyle />
            <BooksContextProvider>
                <Navbar />
                <BookList />
                <BookForm />
            </BooksContextProvider>


        </Div>
    )
}


export default App



const GlobalStyle = createGlobalStyle`
    body{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #553055;
    }
`

const Div = styled.div`
    background: #4c2a4c;
    margin: 20px auto;
    width: 90%;
    max-width: 700px;
    color: #eee;
`












