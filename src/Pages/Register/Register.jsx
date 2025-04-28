import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import {AuthContext} from "../../AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const contextInfo = useContext(AuthContext);
  const { createUser } = contextInfo;

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    if (password !== confirmPassword) {
      setError("Your password did not match")
      return
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }
    setError("");
    // Create user
    createUser(email, password)
      .then(res => {
        console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been created",
          showConfirmButton: false,
          timer: 2500
        });
        form.reset();
        updateProfile(res.user,{
          displayName: name
        })
        .then(() => {

        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
        })
      })
      .catch(err =>{
        console.log(err.message);
        setError(err.message);
      })
    console.log(name, email, password, confirmPassword)
  }
  return (
    <div className="px-10 h-dvh">
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold mb-3'>Please Register</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <form onSubmit={handleRegister}>
          <div className='mb-5'>
            <label htmlFor="name" className='block mb-2'>Your full name</label>
            <input type="text" id='name' name="name" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Your full name" required />
          </div>
          <div className='mb-5'>
            <label htmlFor="email" className='block mb-2'>Email</label>
            <input type="email" id='email' name="email" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Your email" required />
          </div>
          <div className='mb-5'>
            <label htmlFor="password" className='block mb-2'>Password</label>
            <input type="password" id='password' name='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Password" required />
          </div>
          <div className='mb-5'>
            <label htmlFor="confirmPassword" className='block mb-2'>Confirm Password</label>
            <input type="password" id='confirmPassword' name='confirmPassword' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Confirm password" required />
          </div>
          <div className='mb-5'>
            <input type="submit" id='submit' value='Register' className='cursor-pointer border border-gray-300 rounded-md p-2 w-full' />
          </div>
          {/* Alert */}
          <div>
            <p className="text-warning">{error}</p>
          </div>
        </form>
        <p className="text-center">Already have an account? Please <Link to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register