import { createContext, useEffect, useState } from "react";

import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,   } from "firebase/auth";
import auth from "./firebase.config";


    
export const fireContext = createContext(null)

       const GP = new GoogleAuthProvider();

const AuthContext = ({children}) => {
    

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{

      return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) =>{

      return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
       
        signOut(auth)
    }

    const Googlelog = () => {

        return signInWithPopup(auth, GP)
    }

    /////////////
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            
         })
         return() => {
            unSubscribe();
         }
         } , [])
    ///////////////
    



    const authInfo = {user, createUser, login, Googlelog, logOut }


    return (
        <div>

            <fireContext.Provider value={authInfo}>

                {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;