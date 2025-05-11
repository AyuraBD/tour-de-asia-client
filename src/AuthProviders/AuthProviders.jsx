import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from "../Firebase/Firebase.config";
import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const createUser = (email, password) =>{ 
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  const userLogin = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  }
  const userLogout = () =>{
    setLoading(true);
    return signOut(Auth);
  }
  const loginWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  }
  const loginWithGithub = () =>{
    setLoading(true);
    return signInWithPopup(Auth, githubProvider)
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
    setLoading,
    createUser,
    userLogin,
    userLogout,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProviders