import { Link } from "react-router-dom"
import { AuthContext } from "../../AuthProviders/AuthProviders"
import { useContext } from "react"

const Header = () => {
  const {user, userLogout} = useContext(AuthContext);
  const dropdownUl = 
    <>
      <li><a>About us</a></li>
      <li><Link to="/destinations">Destinations</Link></li>
      {/* <li>
        <details>
          <summary>Destinations</summary>
          <ul className="w-full p-2 dropdown-list z-10">
            <li><a>Bangladesh</a></li>
            <li><a>Thailand</a></li>
            <li><a>Cambodia</a></li>
            <li><a>Sri Lanka</a></li>
            <li><a>Maldieves</a></li>
            <li><a>Vietnam</a></li>
          </ul>
        </details>
      </li> */}
      <li><a>Travel Guides</a></li>
      <li><a>Blogs</a></li>
      <li><Link to='/adddestinations'>Add destinations</Link></li>
    </>
  const handleLogout = () => {
    userLogout()
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {dropdownUl}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Tour De Asia</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {dropdownUl}
        </ul>
      </div>
      {
        user ? 
        <div className="navbar-end">
          <Link to='/profile' className="btn btn-ghost">{user.displayName}</Link>
          <button onClick={handleLogout} className="btn">Logout</button>
        </div>
        :
        <div className="navbar-end">
          <Link to='/login' className="btn">Login</Link>
        </div>
      }
    </div>
  )
}

export default Header