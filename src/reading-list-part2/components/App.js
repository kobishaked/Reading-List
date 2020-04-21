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

                <Img src={img} width="80%" align="right" background="transparent"></Img>

            </Wrapper>
        </>



    )
}


export default App



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ecf0f1;
    height: 100vh;
`
const Menu = styled.div`
    background-color: #E4E4F0;
    width: 50%;
    
 
    @media (max-width: 600px) {
        width: 100%;
        height: 100vh;
    }
    
`
const Img = styled.img`
    width: 50%;
    height: 100%;
  
    @media (max-width: 600px) {
        display: none;
      }

`














