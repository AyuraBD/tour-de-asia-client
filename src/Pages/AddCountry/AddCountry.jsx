import Swal from "sweetalert2";

const AddCountry = () => {
  const handleAddCountry = (event) => {
    event.preventDefault();
    const form = event.target;
    const country_name = form.country_name.value;
    const description = form.description.value;
    const image = form.image.value;

    const countryData = {
      country_name,
      description,
      image
    }
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to add this country?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    })
    .then((result) =>{
      if(result.isConfirmed){
        fetch('http://localhost:3000/addcountry', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(countryData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your country has been added",
              showConfirmButton: false,
              timer: 2500
            });
          }
          form.reset();
        })
        .catch(err => {
          console.log(err.message);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 2500
          });
        })
      }
    })
  }
  return (
    <div className='container mx-auto lg:px-20 md:px-10 px-4 py-10'>
      <div className='text-center mb-10'>
        <h3 className='text-3xl font-semibold mb-2'>Add country</h3>
        <p>Add country that you would love to go</p>
      </div>
      <div>
        <form onSubmit={handleAddCountry} className='w-full lg:w-1/2 m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="country_name" className='block mb-2'>Country name</label>
              <input type="text" id='country_name' name="country_name" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Country name" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="description" className='block mb-2'>Description</label>
              <input type="text" id='description' name="description" className='border border-gray-300 rounded-md p-2 w-full' placeholder="A short description" required />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
            <div className='w-full'>
              <label htmlFor="image" className='block mb-2'>Image URL</label>
              <input type="text" id='image' name="image" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Image URL" required />
            </div>
          </div>
          <div className='mb-5 text-center'>
            <input type="submit" id='submit' value='Add country' className='cursor-pointer border border-gray-300 rounded-md p-2 w-1/2 btn btn-primary' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCountry