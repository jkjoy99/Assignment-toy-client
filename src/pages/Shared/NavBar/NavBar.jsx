import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

  const { logOut, user } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then((result) => { })
      .catch((error) => {
        console.log(error.message);
      });
  };

 



  const navItems = <>
    <li><Link to='/'> Home</Link></li>
    <li><Link to='/blog'> Blog</Link></li>
    <li><Link to='/Alltoys'> All Toys</Link></li>
    {
      user ? <>
        <li><Link to='/addtoy'> Add A Toy</Link></li>
        <li><Link to='/mytoys'> My Toys</Link></li>
        <li><img className='rounded-full w-14 h-12 ml-4 ' title={user.email} src={user.photoURL} /> </li>
        <button
          onClick={handelLogOut}
          className="btn btn-outline btn-error text-black"
        >
          Logout
        </button>
      </> : <>
      <button className="btn bg-orange-400 text-white mt-3 text-2xl">
              <Link to="/login">LogIn</Link>
            </button>
        <li><Link to='/signup'> Sign Up </Link></li>
      </>
    }


  </>
  return (
    <div className="navbar bg-indigo-200 shadow-xl rounded-lg h-28 mt-6 mb-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" ">
          <img className='rounded-full w-16 h-16 ml-4  ' src="https://img.freepik.com/free-vector/stem-education-logo-banner-white-background_1308-58367.jpg?w=996&t=st=1684747400~exp=1684748000~hmac=66f2a9260c2d182afb696b47725e4320882e8ab6206f60195ee7aa984d6ff948" alt="" />
        </Link>
        <p className='ml-4 font-bold text-2xl'>Toys Engineering </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">
          {navItems}
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          </label>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;