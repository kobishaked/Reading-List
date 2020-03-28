import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {

    const [auth, setAuth] = useState({
        isAuth: true,
        changeLog: function () {
            setAuth(prev => ({ ...auth, isAuth: !prev.isAuth }))
        }
    })

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

