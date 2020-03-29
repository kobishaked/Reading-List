import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import '../index.css'

import BookList from './BookList'
import { BooksContextProvider } from '../contexts/BooksContext'
import { v4 as uuidv4 } from 'uuid';
import BookForm from './BookForm';

const App = () => {

    return (
        <div className="App">
            <BooksContextProvider>
                <Navbar />
                <BookList />
                <BookForm/>
            </BooksContextProvider>


        </div>
    )
}

export default App







