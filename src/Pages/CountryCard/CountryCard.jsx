import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CountryCard = () => {
  const {country_name} = useParams();
  const [countryCard, setCountryCard] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    fetch(`http://localhost:3000/country/${country_name}`)
    .then(res => res.json())
    .then(data => {
      setCountryCard(data);
      setLoading(false);
    })
    .catch (err => {
      setError(err.message);
      setLoading(false);
    })
  }, [country_name])

  return (
    <div className='container mx-auto lg:px-20 md:px-10 px-4 py-10'>
      <div className='mb-10 text-center'>
        <h3 className='text-2xl font-semibold'>Here is the all tourist spot of {country_name}</h3>
        <p>Have a look and make a plan where to go for next vacation.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          countryCard && countryCard.map((country) => <div key={country._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure><img src={country.image} alt={country.country_name} /></figure>
              <div className="card-body">
                <h2 className="card-title">Tourist spot name: {country.tourist_spot}</h2>
                <h2 className='card-title'>Country: {country.country_name}</h2>
                <h2 className='card-title'>Location: {country.location}</h2>
                <h2 className='card-title'>Average Cost: {country.cost}</h2>
                <h2 className='card-title'>Seasonality: {country.seasonality}</h2>
                <p>Description: {country.description}</p>
              </div>
              <Link to={`/country/touristspot/${country._id}`} className='btn btn-primary'>View details</Link>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default CountryCard