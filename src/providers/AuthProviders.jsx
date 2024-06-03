import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";





export const AuthContext = createContext(null);

const auth = getAuth(app);
// console.log(auth);

// google auth provide
const provider = new GoogleAuthProvider();



const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create  user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // logout user
    const logOutUser = () => {
        return signOut(auth);
    }


    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }



     // Google
     const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }




    const authInfo = {
        user,
        createUser,
        loading,
        signInUser,
        updateUserProfile,
        logOutUser,
        googleSignIn,
        setUser
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observe  current user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {

            unSubscribe

        }

    }, [])



    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProviders;