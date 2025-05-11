import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProviders/AuthProviders'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
  const {user} = useContext(AuthContext);
  const [loadedMyLists, setLoadedMyLists] = useState(null);
  const [error, setError] = useState(''); 
  console.log(loadedMyLists);
  useEffect(() => {
    if(!user.email){
      return
    }
    const fetchMyList = async () =>{
      try {
        const response = await fetch(`http://localhost:3000/mylist/${user.email}`);
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLoadedMyLists(data);
      } catch (error){
        setError(error.message);
      }
    }
    fetchMyList();  
  }, [user]);
  if(!user.email){
    return (
      <div className='container mx-auto lg:px-20 md:px-10 px-4 py-10'>
        <h3 className='text-3xl font-semibold mb-2'>Please login to see your list</h3>
      </div>
    )
  }
  const handleDelete = async (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/mylist/${id}`, {
          method: 'DELETE'
        })
        .then(res => {
          console.log(res.message);
          const remainList = loadedMyLists.filter(list => list._id !== id);
          setLoadedMyLists(remainList);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your list has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          setError(err.message);
          console.log(err.message);
        })
      }
    })
  }
  return (
    <div className='container mx-auto lg:px-20 md:px-10 px-4 py-10'>
      {/* heading */}
      <div className='text-center'>
        <h3  className='text-3xl font-semibold mb-2'>My tourist spot lists</h3>
        <p>Here is the list that you added here.</p>
      </div>
      {loadedMyLists?.length === 0 && <p className='py-10 text-center'>No list found. click <Link className='text-blue-600' to="/adddestinations">here</Link> to add some tourist spot.</p>}
      {error && <p className='text-red-500 text-center'>{error}</p>}
      {loadedMyLists?.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {loadedMyLists.map((list) => (
            <div key={list._id} className="card w-full bg-base-100 shadow-xl">
              <figure><img src={list.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title"> <span>Name: </span> {list.tourist_spot}</h2>
                <p><span>Location:</span>{list.location}</p>
                <p> <span>Average cost: </span>{list.cost}</p>
                <div className="card-actions justify-end">
                  <Link to={`/mylist/update/${list._id}`} className="btn btn-primary">Update</Link>
                  <button onClick={() => handleDelete(`${list._id}`)} className='btn btn-error'>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyList