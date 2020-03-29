import React, { createContext, useState, useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

const BooksContext = createContext({});

export const BooksContextProvider = (props) => {

    const [books, setBooks] = useState(
        {
            booksList: [],
            addBook: function (book) {
                setBooks(produce(draft => {
                    draft.booksList.push(book)
                }))
            },
            removeBook: function (book) {
                setBooks(produce(draft => {
                    draft.booksList = draft.booksList.filter((item) =>
                        item.id !== book.id)
                }))

            }
        })

    useEffect(() => {
        if (localStorage.getItem("books")) {
            setBooks(produce(draft => {
                draft.booksList = JSON.parse(localStorage.getItem("books"));
            }))
        }
    }, [])

    useEffect(() => {
        setBooks(produce(draft => {
            localStorage.setItem("books", JSON.stringify(books.booksList))
        }))
    }, [books])


    return (
        <BooksContext.Provider value={books}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContext










//questions:
//1.   in the changetheme function inside the theme object:
//  a. when should i use () and {} in an arrow function?
//     for example here is should use () but most of the time 
//     need to use the {} in arrow function.
//  b. is there other ways to write functions inside objects?









// addBook: function (book) {
//     setBooks(prevBooks=>(
//         produce(prevBooks, draft=>{
//             draft.booksList.push(book)
//         })
//     ))
// }


// addBook: function (book) {
//     setBooks(produce(draft => {
//         draft.booksList.push(book)
//     }))
// }