import React, {createContext, useState, useContext } from 'react'

const AuthContext = createContext({});
export const AuthContextProvider = AuthContext.Provider;

export default AuthContext
