import React from 'react'
import { Link } from 'react-router-dom'

const Destination = ({destination}) => {
  const {_id, tourist_spot, cost, image} = destination
  return (
    <div className="card bg-base-100 shadow-xl my-5">
      <figure><img src={image} alt="Destination" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{tourist_spot}</h2>
        <p>{name}</p>
        <p className='text-xl font-bold'>Average cost: {cost}</p>
        <div className="card-actions justify-end">
          <Link to={`/destination/${_id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Destination