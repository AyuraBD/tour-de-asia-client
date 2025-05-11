import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMylist = () => {
  const {id} = useParams();
  const [updateMyListData, setUpdateMyListData] = useState({});
  const {image, tourist_spot, country_name, location, description, cost, seasonality, time, visitors} = updateMyListData;
  useEffect(() =>{
      fetch(`http://localhost:3000/mylist/update/${id}`)
      .then(res => res.json())
      .then(data => {
        setUpdateMyListData(data);
      })
  }, [id])
  const [error, setError] = useState("");
  if (!updateMyListData) {
    return <div className="flex justify-center items-center h-screen">
            <progress className="progress w-56"></progress>
          </div>
  }
  // const {image, tourist_spot, country_name, location, description, cost, seasonality, time, visitors} = myListSingleData;
  const handleEditMyList = (e) =>{
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourist_spot = form.tourist_spot.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const updateMyListData = {
      image,
      tourist_spot,
      country_name,
      location,
      description,
      cost,
      seasonality,
      time,
      visitors
    }
    setError("");
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this destination?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    })
    .then((result) =>{
      if(result.isConfirmed){
        fetch(`http://localhost:3000/mylist/update/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateMyListData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            setError("");
            form.reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your destination has been updated",
                showConfirmButton: false,
                timer: 2500
              });
          }
        })
      }
    })
  }

  return (
    <div className='container mx-auto lg:px-20 md:px-10 px-4 py-10'>
      <div className='text-center mb-10'>
        <h3 className='text-3xl font-semibold mb-2'>Update {tourist_spot}</h3>
        <p>You can always edit your list that added previously.</p>
      </div>
      <div>
        <form onSubmit={handleEditMyList}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="image" className='block mb-2'>Image URL</label>
              <input type="text" id='image' name="image" className='border border-gray-300 rounded-md p-2 w-full' placeholder={image} />
            </div>
            <div className='mb-5'>
              <label htmlFor="tourist_spot" className='block mb-2'>Tourist spot name</label>
              <input type="text" id='tourist_spot' name="tourist_spot" className='border border-gray-300 rounded-md p-2 w-full' placeholder={tourist_spot} />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="country_name" className='block mb-2'>Country name</label>
              <input type="text" id='country_name' name='country_name' className='border border-gray-300 rounded-md p-2 w-full' placeholder={country_name} />
            </div>
            <div className='mb-5'>
              <label htmlFor="location" className='block mb-2'>Location</label>
              <input type="text" id='location' name='location' className='border border-gray-300 rounded-md p-2 w-full' placeholder={location} />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="description" className='block mb-2'>Short description</label>
              <input type="text" id='description' name='description' className='border border-gray-300 rounded-md p-2 w-full' placeholder={description} />
            </div>
            <div className='mb-5'>
              <label htmlFor="cost" className='block mb-2'>Average cost</label>
              <input type="text" id='cost' name='cost' className='border border-gray-300 rounded-md p-2 w-full' placeholder={cost}  />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="seasonality" className='block mb-2'>Seasonality</label>
              <input type="text" id='seasonality' name='seasonality' className='border border-gray-300 rounded-md p-2 w-full' placeholder={seasonality} />
            </div>
            <div className='mb-5'>
              <label htmlFor="time" className='block mb-2'>Travel time</label>
              <input type="text" id='time' name='time' className='border border-gray-300 rounded-md p-2 w-full' placeholder={time} />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='mb-5'>
              <label htmlFor="totalvisitors" className='block mb-2'>Total visitors per year</label>
              <input type="number" id='visitors' name='visitors' className='border border-gray-300 rounded-md p-2 w-full' placeholder={visitors} />
            </div>
          </div>
          <div className='mb-5 text-center'>
            <input type="submit" id='submit' value='Update your tourist spot' className='cursor-pointer border border-gray-300 rounded-md p-2 w-1/2 btn btn-primary' />
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

export default UpdateMylist