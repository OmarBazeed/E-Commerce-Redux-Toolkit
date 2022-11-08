// بسم الله نستعين و الصلاه و السلام على سيد الخلق و اشرف المرسلين و الانبياء سيدنا محمد صلى الله عليه و سلم افضل الصلاه و التسليم
// اللهم لك الحمد كما ينبغى لجلال وجهك و عظيم سلطانك
// الحمد لله حمداً ملئ السوات و الارض
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله حمداً كثيراً
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى 
// الحمد لله حمداً تطيب به النفوس 
// الحمد لله حتى يبلغ الحمد منتهاه
// الحمد لله دائماً و ابداً
// و اللهم انى استودعك ما حفظت و ما قرءت و ما كتبت و ما فهمت امانه و وديعه عندك و اسالك اللهم ان ترده على عند حاجتى اليه فانت حسبى و نعم الوكيل
// الحمد لله .. الحمد لله .. الحمد لله


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
