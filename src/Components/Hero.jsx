import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext.jsx'

const Hero = () => {
    const{setSearchFilter,setIsSearched}=useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = ()=>{
       setSearchFilter({
           title:titleRef.current.value,
           location:locationRef.current.value
       })
       setIsSearched(true)
    //    console.log({
    //     title:titleRef.current.value,
    //     location:locationRef.current.value
    //    })
    }
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
            <p className='mb-4 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
            <div className='flex items-center justify-between bg-white rouded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                <div className='flex items-center '>
                    <img className='h-4 sm:h-5'src={assets.search_icon} alt=""/>
                    <input type="text" placeholder="Search for jobs" 
                    className='max-sm:text-x p-2 rounded outline-none w-full'
                    ref={titleRef}/>
                </div>
                <div className='flex items-center '>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt=""/>
                    <input type="text" placeholder="Location" 
                    className='max-sm:text-x p-2 rounded outline-none w-full'
                    ref={locationRef}/>
                </div>
                <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
            </div>
        </div>
        
        <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
                <div className="logos-container flex justify-center gap-10 lg:gap-16 flex-wrap">
                    <p className="font-medium">Supported by</p>
                    <img className="h-6 logo-item" src={assets.microsoft_logo} alt="" />
                    <img className="h-6 logo-item" src={assets.walmart_logo} alt="" />
                    <img className="h-6 logo-item" src={assets.accenture_logo} alt="" />
                    <img className="h-6 logo-item" src={assets.samsung_logo} alt="" />
                    <img className="h-6 logo-item" src={assets.amazon_logo} alt="" />
                    <img className="h-6 logo-item" src={assets.adobe_logo} alt="" />
                </div>
            </div>

    </div>
  )
}

export default Hero