import React, { useState } from 'react'

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then (data => setDestinations(data))
  return (
    <div className='px-10'>
      <div className='text-center'>
        <h1 className='text-3xl mb-3'>Our all destinations are here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem ut esse corrupti quam repudiandae non! Odit atque iste deleniti nisi placeat, quos omnis ad inventore aliquam quae? Ipsa, corporis.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {destinations.map(destination => (
          <div key={destination._id} className="card bg-base-100 shadow-xl my-5">
            <figure><img src={destination.image} alt="Destination" /></figure>
            <div className="card-body">
              <h2 className="card-title">{destination.name}</h2>
              <p>{destination.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations