import React, { useEffect, useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../Context/AppContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { companyData, setCompanyData, setCompanyToken } = useContext(AppContext);

  const logout = () => {
    setCompanyToken(null);
    localStorage.removeItem("companyToken");
    setCompanyData(null);
    navigate("/");
  };

  useEffect(() => {
    if (companyData) {
      navigate("/dashboard/manage-jobs");
    }
  }, []); 

  return (
    <div className="min-h-screen">
     
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          {companyData && (
            <div className="flex items-center gap-3">
              <p className="hidden sm:block text-gray-800">Welcome, {companyData.name}</p>
              <div className="relative group">
                <img
                  className="w-10 h-10 border rounded-full cursor-pointer"
                  src={companyData.image}
                  alt=""
                />
                <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg border rounded-lg py-2 w-32">
                  <ul className="text-sm">
                    <li onClick={logout} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-start">
          {/* Sidebar */}
          <div className="inline-block min-h-screen border-r-2">
            <ul className="flex flex-col items-start pt-5 text-gray-800">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                    isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                  }`
                }
                to={"/dashboard/add-job"}
              >
                <img className="min-w-4" src={assets.add_icon} alt="" />
                <p className="max-sm:hidden">Add Job</p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                    isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                  }`
                }
                to={"/dashboard/manage-jobs"}
              >
                <img className="min-w-4" src={assets.home_icon} alt="" />
                <p className="max-sm:hidden">Manage Jobs</p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                    isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                  }`
                }
                to={"/dashboard/view-applications"}
              >
                <img className="min-w-4" src={assets.person_tick_icon} alt="" />
                <p className="max-sm:hidden">View Applications</p>
              </NavLink>
            </ul>
          </div>
          {/* Content Area */}
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
