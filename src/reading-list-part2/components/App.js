import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import BookList from './BookList'
import BookForm from './BookForm';
import { BooksContextProvider } from '../contexts/BooksContext'
import img from '../images/Reading_illustration.png'


const App = () => {


    return (
        <>
            <Wrapper>
                <Menu >
                    <BooksContextProvider>
                        <Navbar />
                        <BookList />
                        <BookForm />
                    </BooksContextProvider>
                </Menu>
                <Picture >
                    <img src={img} width="80%" align="right" background="transparent"></img>
                </Picture>
            </Wrapper>
        </>



    )
}


export default App



const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    background-color: #ecf0f1;
    @media (max-width: 640px) {
        grid-template-columns: auto;
      }
`
const Menu = styled.div`
    background-color: #E4E4F0;
`
const Picture = styled.div`
    backround: transparent;
    @media (max-width: 640px) {
        display: none;
      }

`











