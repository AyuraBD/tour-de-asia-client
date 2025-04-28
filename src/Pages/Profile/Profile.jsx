import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProviders/AuthProviders'

const Profile = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className='px-10 h-dvh'>
      <div className='text-center py-10'>
        <h1 className='text-3xl font-bold'>User Profile</h1>
      </div>
      <div>
        <div className='mb-5'>
          <label htmlFor="email" className='block mb-2'>Your email</label>
          <input type="email" name='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder={user?.email}/>
        </div>
        <div className='mb-5'>
          <label htmlFor="name" className='block mb-2'>Your name</label>
          <input type="text" name='name' id='name' className='border border-gray-300 rounded-md p-2 w-full' placeholder={user?.displayName}/>
        </div>
      </div>
    </div>
  )
}

export default Profile