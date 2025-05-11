import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import {AuthContext} from "../../AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const contextInfo = useContext(AuthContext);
  const { createUser } = contextInfo;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photourl.value;
    const phone = form.phone.value;
    
    // Validation
    if (password !== confirmPassword) {
      setError("Your password do not match.")
      return
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Password must contain at least one number.")
      return
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Password must contain at least one special character.")
      return
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter.")
      return
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter.")
      return
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    } 
    setError("");
    // Create user
    createUser(email, password)
      .then(res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been created",
          showConfirmButton: false,
          timer: 2500
        });
        form.reset();
        fetch(`http://localhost:3000/register`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            photoURL,
            phone
          })
        })
        .then( () =>{}).catch (() =>{})
        updateProfile(res.user,{
          displayName: name
        })
        .then(() => {})
        .catch(err => {
          setError(err.message);
        })
      })
      .catch(err =>{
        setError(err.message);
      })
  }
  return (
    <div className="px-10 py-10">
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold mb-3'>Please Register</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="lg:w-3/4 m-auto">
        <form onSubmit={handleRegister}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="name" className='block mb-2'>Your full name</label>
              <input type="text" id='name' name="name" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Your full name" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="email" className='block mb-2'>Your email</label>
              <input type="email" id='email' name="email" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Your email" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="password" className='block mb-2'>Password</label>
              <div className='relative'>
                <input type={showPassword ? 'text' : 'password'} id='password' name='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Password" required />
                <span onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer absolute right-3 top-3 flex">
                  {showPassword ? <FaRegEye></FaRegEye> :
                  <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
            </div>
            <div className='mb-5'>
              <label htmlFor="confirmPassword" className='block mb-2'>Confirm Password</label>
              <div className='relative'>
                <input type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' name='confirmedPassword' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Confirmed password" required />
                <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer absolute right-3 top-3 flex">
                  {showConfirmPassword ? <FaRegEye></FaRegEye> :
                  <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className='mb-5'>
              <label htmlFor="photoURL" className='block mb-2'>Photo URL</label>
              <input type="text" id='photourl' name="photourl" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Photo URL" required />
            </div>
            <div className='mb-5'>
              <label htmlFor="phone" className='block mb-2'>Phone number</label>
              <input type="number" id='phone' name="phone" className='border border-gray-300 rounded-md p-2 w-full' placeholder="Phone number" required />
            </div>
          </div>
          <div className='mb-5'>
            <input type="submit" id='submit' value='Register' className='cursor-pointer font-semibold border border-black text-black rounded-md p-2 w-full bg-gray-300' />
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