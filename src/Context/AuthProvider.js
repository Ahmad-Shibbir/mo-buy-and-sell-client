import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (userInfo)=>{
        return updateProfile(user, userInfo);

    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log('observing user');
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {createUser, signIn, logout,updateUser, user, loading}

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;