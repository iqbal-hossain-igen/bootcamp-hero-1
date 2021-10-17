import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initiateAuthentication from "../Shared/Login/firebase/firebase.init";

initiateAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const signInUsingGoogle=()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        .catch(error => {
            const erroMessage = error.message;
            console.log(erroMessage);
        })
    }
    useEffect(() =>{
        const unsubcribed = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
        
    },[])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            
          }).finally(()=>setIsLoading(false))
    }
    return {
        user,
        signInUsingGoogle,
        isLoading,
        logout

    }
}
export default useFirebase;