import { createUserWithEmailAndPassword,
        onAuthStateChanged , 
        signOut , 
        sendPasswordResetEmail , 
        updateEmail , 
        updatePassword , 
        signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useState } from "react";

import auth from "../firebase";


export const authContext = createContext();

export const AuthProvider = (props)=>{

const [currentUser , setCurrentUser] = useState('');
const [loading , setLoading] = useState(true);

const signup = (email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
}
const login = (email , password)=>{
    signInWithEmailAndPassword(auth , email, password)
}
const forgotPassword = (email)=>{
    sendPasswordResetEmail(auth , email)
}
const logOut = ()=>{
    return signOut(auth)
}
const updateUserEmail = (email)=>{
    return updateEmail(auth.currentUser, email)
}
const updateUserPassword = (password)=>{
    return  updatePassword(auth.currentUser, password)
}

useEffect(()=>{

    const unsuscribe = onAuthStateChanged(auth , (user)=>{
        setCurrentUser(user);
        setLoading(false);
    })

    return ()=>{
        unsuscribe();
    }

},[])

    return <authContext.Provider value={{
        currentUser,
        signup,
        login,
        forgotPassword,
        logOut,
        updateUserEmail,
        updateUserPassword

    }}>

        {!loading && props.children}

    </authContext.Provider>
}
