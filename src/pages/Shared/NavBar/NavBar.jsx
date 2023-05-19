import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItems = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/addtoy'> Add A Toy</Link></li>
        <li><Link to='/mytoys'> My Toys</Link></li>
        <li><Link to='/blog'> Blog</Link></li>
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
                    <img className='rounded-full w-16 h-16 ml-4 bg-yellow-300 ' src="https://cdn-icons-png.flaticon.com/512/1129/1129120.png?w=740&t=st=1684430953~exp=1684431553~hmac=486a260954692ef0703b86181da1c49f8f076e53ff4e252a572a166cd83164a6" alt="" />
                </Link>
                <p className='ml-4 font-bold text-2xl'>Toys Engineering </p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default NavBar;