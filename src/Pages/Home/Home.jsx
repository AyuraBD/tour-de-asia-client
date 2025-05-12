import React, { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loadedDestinations, setLoadedDestinations] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(false);
  
  const handleChange = (e)=>{
    setIsDark(e.target.checked);
    if(e.target.checked){
      document.getElementById('check').setAttribute('data-theme', 'dark');
    }else{
      document.querySelector('check').setAttribute('data-theme', 'light');
    }
  }
  useEffect(() => {
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(data => {
      setLoadedDestinations(data);
      const limitedDestinations = data.slice(0, 6);
      setDestinations(limitedDestinations);
    })
  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/country')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
  })
  return (
  <div className='home' data-theme={isDark ? 'dark' : 'light'}>
    <Banner></Banner>

    {/* Tourist spots */}
    <div className='px-10 py-10'>
      <div className='flex justify-start items-center mb-5 gap-3'>
        <input type="checkbox" id="check" className='toggle' onClick={() => setIsDark(!isDark)} checked={isDark}   />
        <label htmlFor="check" className='text-gray-500'>{isDark ? 'Dark': 'Light'} mode</label>
      </div>
      <div className='mb-10 text-center'>
        <h1 className='text-3xl font-bold mb-2'>All Tourist Spots</h1>
        <p className=''>Explore the most beautiful places in Asia</p>
      </div>

      {/* Tourist spots */}
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {destinations.map(destination => <div key={destination._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure><img src={destination.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Tourist spot name: {destination.tourist_spot}</h2>
                <h2 className='card-title'>Country: {destination.country_name}</h2>
              </div>
            </div>
          </div>)}
        </div>
        {loadedDestinations.length > 6 && <div className='text-center mt-10'><Link className='btn btn-primary' to='/destinations'>See all tourist spots</Link></div>}
      </div>
    </div>

    {/* Countries to go  */}
    <div className='countries px-10 py-10'>
      <div className='mb-10 text-center'>
        <h3 className='text-3xl font-bold mb-2'>Countries in Asia</h3>
        <p className='text-gray-500'>Most visited countries in Asia. You should visit too.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {countries.map(country => <div key={country._id}>
            <Link to={`/country/${country.country_name}`}>
              <div className="card bg-base-100 relative shadow-xl">
                <figure><img src={country.image} alt="" /></figure>
                <div className="card-body absolute left-0 bottom-0 w-full text-white p-5">
                  <h2 className="text-xl font-semibold">{country.country_name}</h2>
                  <p>{country.description}</p>
                </div>
              </div>
            </Link>
          </div>)}
      </div>
    </div>

    {/* Our tourist guides */}
    <div className='px-10 py-10'>
      <div className='mb-10 text-center'>
        <h3 className='text-3xl font-bold mb-2'>Our tourist guides</h3>
        <p className='text-gray-500'>Here is our tourist guides to help you to explore.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">John Doe</h2>
          <p>John Doe is a professional tourist guide. He has been working in this field for 10 years.</p>
        </div>

        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">Philip Martin</h2>
          <p>Jane Doe is a professional tourist guide. She has been working in this field for 8 years.</p>
        </div>

        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">Mark Smith</h2>
          <p>Mark Smith is a professional tourist guide. He has been working in this field for 5 years.</p>
        </div>
        <div className='p-4 rounded-2xl shadow-lg'>
          <h2 className="card-title text-2xl mb-2">Ali Azam</h2>
          <p>Mark Smith is a professional tourist guide. He has been working in this field for 5 years.</p>
        </div>
      </div>
    </div>

    {/* Our tourist guides */}
    <div className='px-10 py-10'>
      <div className='mb-10 text-center'>
        <h3 className='text-3xl font-bold mb-2'>Newsletter</h3>
        <p className='text-gray-500'>Subscribe to our newsletter to get updated with us.</p>
      </div>
      <div className='text-center'>
        <form>
          <input type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs mb-3 lg:mb-0 md:mb-0" />
          <button className='btn btn-primary ml-2'>Subscribe</button>
        </form>
      </div>
    </div>

  </div>
  )
}

export default Home