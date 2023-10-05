import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import { auth } from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // sign in user
     const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    //    observe
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('observe from auth provider', currentUser)
            setUser(currentUser)
            setLoading(false)
           })
           return ()=> {
            unSubscribe()  
        } 
    },[])

   

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}