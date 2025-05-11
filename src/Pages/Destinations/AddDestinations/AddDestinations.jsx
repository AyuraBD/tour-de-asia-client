import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../AuthProviders/AuthProviders'

const AddDestinations = () => {
  const {user} = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleAddDestination = (e) => {
    e.preventDefault();
    const form = e.target
    const image = form.image.value
    const tourist_spot = form.tourist_spot.value
    const country_name = form.country_name.value
    const location = form.location.value
    const description = form.description.value
    const cost = form.cost.value
    const seasonality = form.seasonality.value
    const time = form.time.value
    const visitors = form.visitors.value
    const destinationData = {
      image,
      tourist_spot,
      country_name,
      location,
      description,
      cost,
      seasonality,
      time,
      visitors,
      email: user?.email,
      name: user?.displayName
    }
    setError("");
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to add this destination?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch('http://localhost:3000/adddestination', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(destinationData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your destination has been added",
              showConfirmButton: false,
              timer: 2500
            });
          }
        }
        )
        .catch(err => {
          console.log(err.message);
          setError(err.message);
        })
        form.reset()
      }
    })
  }
  return (
    <div className='px-10 lg:py-10 md:py-6 sm:py-6 max-sm:py-4'>
      <div className='lg:w-3/4 m-auto text-center mb-10'>
        <h2 className='text-3xl mb-2'>Add your destinations</h2>
        <p>Add more destination to travellers to explore more. This isn't dummy text.</p>
      </div>
      <div>
        <form onSubmit={handleAddDestination}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="image" className='block mb-2'>Image URL</label>
              <input type="text" id='image' name="image" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Image URL" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="tourist_spot" className='block mb-2'>Tourist spot name</label>
              <input type="text" id='tourist_spot' name="tourist_spot" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Tourist spot name" required />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="country_name" className='block mb-2'>Country name</label>
              <input type="text" id='country_name' name='country_name' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Country name" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="location" className='block mb-2'>Location</label>
              <input type="text" id='location' name='location' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Location" required />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="description" className='block mb-2'>Short description</label>
              <input type="text" id='description' name='description' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Short description" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="cost" className='block mb-2'>Average cost</label>
              <input type="text" id='cost' name='cost' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Average cost" required />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="seasonality" className='block mb-2'>Seasonality</label>
              <input type="text" id='seasonality' name='seasonality' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Seasonality  'Summer', 'Winter'" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="time" className='block mb-2'>Travel time</label>
              <input type="text" id='time' name='time' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Travel time" required />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='mb-5'>
              <label htmlFor="totalvisitors" className='block mb-2'>Total visitors per year</label>
              <input type="number" id='visitors' name='visitors' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Total visitors per year" required />
            </div>
          </div>
          <div className='mb-5 text-center'>
            <input type="submit" id='submit' value='Add to your destinations' className='cursor-pointer border border-gray-300 rounded-md p-2 w-1/2 btn btn-primary' />
          </div>
          {/* Alert */}
          <div>
            <p className="text-warning">{error}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDestinations



// https://i.ibb.co.com/jPrgZNz6/thailand.webp