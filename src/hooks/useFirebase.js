import initializeAuthentication from "../firebase/firebase.init"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
        });
    }, [])
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError('')
            })
    }
    return {
        googleLogIn,
        user,
        error,
        handleLogOut
    }

}

export default useFirebase;