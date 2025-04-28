import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Auth from "../Firebase/Firebase.config";
import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  const userLogin = (email, password) =>{
    return signInWithEmailAndPassword(Auth, email, password);
  }
  const userLogout = () =>{
    return signOut(Auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Auth, (user)=>{
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe
  },[])
  
  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    userLogout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProviders