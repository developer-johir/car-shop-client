import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
  const {user, logout} = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

    const menuItems = <React.Fragment>
      <li className='font-semibold'><Link to="/">Home</Link></li>
        <li className='font-semibold'><Link to="/blog">Blog</Link></li>
        {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>

    return (
        <div className='max-w-screen-xl mx-auto py-3'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <div className='flex'>
      <Link to='/'><img className='w-12 h-12' src={logo} alt="" /></Link>
    <Link to='/' className="normal-case font-bold text-3xl mt-2 ml-2 text-red-600">CAR-SHOP</Link>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {menuItems}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;