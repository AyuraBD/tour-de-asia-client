import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProviders/AuthProviders'

const PrivateRouter = ({children}) => {
  const {loading, user} = useContext(AuthContext);
  const location = useLocation();
 
  if(loading){
    return <div className="flex justify-center items-center h-screen">
      <progress className="progress w-56"></progress>
    </div>
  }
  if(user){
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>
}

export default PrivateRouter