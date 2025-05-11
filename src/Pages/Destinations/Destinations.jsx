import React, { useEffect, useState } from 'react'
import Destination from './Destination';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [sort, setSort] = useState('');
  useEffect(() =>{
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then (data => setDestinations(data))
  }, [])

  useEffect( () => {
    if (sort === 'asc') {
      const sortedDestinations = [...destinations].sort((a, b) => a.cost - b.cost);
      setDestinations(sortedDestinations);
    } else if (sort === 'desc') {
      const sortedDestinations = [...destinations].sort((a, b) => b.cost - a.cost);
      setDestinations(sortedDestinations);
    }
  },[destinations, sort]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className='px-10'>
      <div className='text-center'>
        <h1 className='text-3xl mb-3'>Our all destinations are here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem ut esse corrupti quam repudiandae non! Odit atque iste deleniti nisi placeat, quos omnis ad inventore aliquam quae? Ipsa, corporis.</p>
      </div>
      <div>
        {/* sort */}
        <div className="form-control flex items-center justify-end gap-3 w-full max-w-xs mt-10">
          <label htmlFor="sort" className="label">
            <span className="label-text">Sort by</span>
          </label>
          <select value={sort} onChange={handleSortChange} id="sort" className="select select-bordered w-full max-w-xs">
            <option value=''>Pick one</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {destinations.map(destination => <Destination key={destination._id} destination={destination}></Destination>)}
        </div>
      </div>
    </div>
  )
}

export default Destinations