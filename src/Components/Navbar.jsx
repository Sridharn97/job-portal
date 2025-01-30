import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate=useNavigate()
  const{setShowRecruiterLogin}=useContext(AppContext)

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="Company Logo" className="h-10" />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/applications" className="text-blue-600 hover:underline">
              Applied Jobs
            </Link>
            <p>|</p>
            <p className='max-sm:hidden'>Hi, {user.firstName + ' ' + user.lastName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button onClick={e=> setShowRecruiterLogin(true)} className="text-gray-600 hover:underline">
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
