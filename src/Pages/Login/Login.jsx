import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Login = () => {
  const [error, setError] = useState('');
  const {userLogin, loginWithGoogle, loginWithGithub} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
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
        navigate(location?.state?.from?.pathname || '/');
        form.reset();
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      })
  }
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch(err => {
        setError(err.message);
      })
  }
  const handleGithubLogin = () => {
    loginWithGithub()
      .then(() => {
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      })
  }
  return (
    <div className='px-10 h-dvh py-10 lg:w-2/4 md:w-3/4 sm:w-3/4 max-sm:w-full mx-auto'>
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
            <div className='relative'>
              <input type={showPassword ? 'text' : 'password'} id='password' name='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder="Password" required />
              <span onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer absolute right-3 top-3 flex">
                {showPassword ? <FaRegEye></FaRegEye> :
                <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
          </div>
          <div className='mb-5'>
            <input type="submit" id='submit' value='Login' className='cursor-pointer font-semibold border border-black text-black rounded-md p-2 w-full bg-gray-300' />
          </div>
          <div className='items-center justify-center flex gap-5 mb-5'>
            <button className='btn' onClick={handleLoginWithGoogle}>Google</button>
            <button className='btn' onClick={handleGithubLogin} >Github</button>
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