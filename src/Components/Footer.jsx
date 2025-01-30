import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-6 mt-20 border-t border-gray-300">
  
      <img width={160} src={assets.logo} alt="Logo" />


      <p className="flex-1 text-center sm:text-left text-sm text-gray-500 hidden sm:block">
        Copyright © Sridhar | All rights reserved.
      </p>

      <div className="flex gap-2.5">
        <img width={30} src={assets.facebook_icon} alt="Facebook" />
        <img width={30} src={assets.twitter_icon} alt="Twitter" />
        <img width={30} src={assets.instagram_icon} alt="Instagram" />
      </div>
    </div>
  );
};

export default Footer;
