import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='container bg-gradient-to-r from-violet-50 to-purple-50 flex items-center px-4 2xl:px-20 mx-auto my-20'>
        <div className='relative  p-12 sm:p-24 lg:p-32 rounded-lg'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Download Mobile App For Better Experience</h1>
            <div className='flex gap-4'>
                <a href="#" className='inline-block'>
                    <img className='h-12' src={assets.play_store} alt=""/>
                </a>
                <a href="#" className='inline-block'>
                    <img  className='h-12' src={assets.app_store} alt=""/>
                </a>
            
            </div>
            
        </div>
        <img className='absolute px-150 2xl:px-20 w-full  mx-auto my-20 ' src={assets.app_main_img} alt=""/>
    </div>
  )
}

export default AppDownload