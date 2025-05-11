import React from 'react'
import { Link } from 'react-router-dom'

const notfound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-5xl mb-3'>404 : Not Found</h1>
        <p>Please go back to <Link to='/'>Home</Link> </p>
      </div>
    </div>
  )
}

export default notfound