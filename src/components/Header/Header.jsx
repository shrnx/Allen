import React from 'react'
import { Link } from 'react-router-dom'
import AllenLogo from '../../assets/AllenLogo'
import PhoneLogo from '../../assets/PhoneLogo'

function Header() {
  return (
    <>
      <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <div className='flex justify-around p-2 w-7/12 pl-4'>
              <AllenLogo />

              <div className='pl-6 font-normal cursor-pointer'>Courses</div>

              <div className='pl-6 font-normal cursor-pointer'>Test Series</div>

              <div className='pl-6 font-normal cursor-pointer'>Scholarships</div>

              <div className='pl-6 font-normal cursor-pointer'>Results</div>
              <div className='bg-[#E8900E] text-white h-5 w-8 rounded-2xl text-xs p-0.5 relative bottom-2'>NEW</div>

              <div className='pl-6 font-normal cursor-pointer'>Study Materials</div>

              <div className='pl-6 font-normal cursor-pointer'>About Us</div>
            </div>

            <div className='flex justify-center w-2/12 pl-2'>
              <div className='bg-[#0b64ca] rounded-full h-9 w-9 flex items-center pl-2 cursor-pointer'> <PhoneLogo /> </div>

              <div className='mt-0.5 ml-5 pl-3 pt-1.25 text-sm font-semibold border-blue-700 border-2 rounded-l-3xl rounded-r-3xl w-16 cursor-pointer'>Login</div>
            </div>

          </div>
        </nav>
      </header>
    </>
  )
}

export default Header