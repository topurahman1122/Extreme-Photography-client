import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navItem = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ?

                <>
                    <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addservice'>Add Services</Link></li>
                    <li className='font-semibold'><Link onClick={handelLogout} to='/'>Logout</Link></li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link to='/register'>Register</Link></li>
                </>

        }
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-cyan-500 text-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <span className="flex items-center justify-center mr-2 w-8 h-8 rounded-full bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
                                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                            </svg>
                        </span>  ExPhotography</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/about' className="btn btn-outline">About Me</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;