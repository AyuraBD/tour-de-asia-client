import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';

const Login = () => {
  const {error, setError} = useState("");
  const {userLogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || '/';
  // console.log(from);

  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then(() => {
        setTimeout(() =>{
          navigate(location?.state?.from?.pathname || '/');
        }, 2000);
        form.reset();
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      })
  }
  return (
    <div className='px-10 h-dvh'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold mb-3'>Please Login</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div className='mb-5'>
            <label htmlFor="email" className='block mb-2'>Your email</label>
            <input type="email" name='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your email' required/>
          </div>
          <div className='mb-5'>
            <label htmlFor="password" className='block mb-2'>Password</label>
            <input type="password" id='password' name='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your password' required/>
          </div>
          <div className='mb-5'>
            <input type="submit" id='submit' value='Login' className='cursor-pointer border border-gray-300 rounded-md p-2 w-full' />
          </div>
          <div>
            <p className="text-warning">{error}</p>
          </div>
        </form>
        <p className='text-center'>New here? Please <Link to='/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login