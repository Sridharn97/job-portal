import React from 'react';
import { Outlet } from 'react-router-dom';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
  
    <div className="min-h-screen">
      {/* Navbar for recruiter Panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">  
          <img className="max-sm:w-32 cursor-pointer" src={assets.logo} alt="Company Logo" />
          <div className="flex items-center gap-3">
            <p className="hidden sm:hidden display:block">Welcome, Google</p>
            <div className="relative group">
          
              <img
                className="w-8 border rounded-full cursor-pointer"
                src={assets.company_icon}
                alt="Company Icon"
              />           
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded  pt-12">
                <ul className="list-none m-0 p-2 text-sm">
                  <li className="py-1 px-2 cursor-pointer hover:bg-gray-100">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-start'>
         {/* Left Side bar with options to add job manage job, veiw application */}
         <div className='iniline-block min-h-screen border-r-2'>
            <ul className='flex flex-col items-start pt-5 text-gray-800'>
                <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/add-job'}>
                      <img className='min-w-4' src={assets.add_icon} alt="" />
                      <p className='max-sm:hidden'>Add Job</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manage-jobs'}>
                      <img className='min-w-4' src={assets.home_icon} alt="" />
                      <p className='max-sm:hidden'>Manage Jobs</p>
                </NavLink >
                <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/view-applications'}>
                      <img className='min-w-4' src={assets.person_tick_icon} alt="" />
                      <p className='max-sm:hidden'>Veiw Applications</p>
                </NavLink>
               
            </ul>
         </div>
         <div>
            <Outlet/>

          
         </div>
        </div>
      </div>
     </div>
  );
};

export default Dashboard;
