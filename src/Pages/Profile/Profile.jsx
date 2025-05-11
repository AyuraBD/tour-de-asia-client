import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProviders/AuthProviders'

const Profile = () => {
  const {user} = useContext(AuthContext);
  const [loadedUser, setLoadUser] = useState(null);
  const [error, setError] = useState('');
  useEffect( () =>{
    if(!user.email){
      return;
    }
    const fetchUser = async () =>{
      try {
        const response = await fetch(`http://localhost:3000/profile/${user.email}`);
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLoadUser(data);
      } catch (error) {
        setError(error.message);
      } 
    }
    fetchUser();
    
  }, [user?.email]);
  console.log(loadedUser);

  if(error){
    return <p className='text-red-500'>{error}</p>
  }
  if(!user){
    return <p className='text-red-500'>Please login to see your profile</p>
  }
  if(!loadedUser){
    return <progress className="progress w-56"></progress>
  }

  
  return (
    <div className='lg:w-2/3 m-auto px-10 py-10'>
      <div className='text-center py-10'>
        <h1 className='text-3xl font-bold'>User Profile</h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className='lg:w-1/3 md:full text-center'>
          <div className="avatar mb-3">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className='w-full rounded-full' src={loadedUser.photoURL} alt="" />
            </div>
          </div>
          <h3 className='text-2xl font-bold text-center'>{loadedUser.name}</h3>
        </div>
        <div className='lg:w-2/3 md:full'>
          <div className='mb-5'>
            <label htmlFor="email" className='block mb-2'>Your email</label>
            <input type="email" name='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder={user?.email}/>
          </div>
          <div className='mb-5'>
            <label htmlFor="name" className='block mb-2'>Your Phone</label>
            <input type="text" name='name' id='name' className='border border-gray-300 rounded-md p-2 w-full' placeholder={loadedUser.phone}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile