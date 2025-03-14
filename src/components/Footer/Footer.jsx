import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-[#EDF2FA]">
        <div className="mx-auto justify-center w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-around">

            <div className='max-w-44 pl-8'>
              <h2>About</h2>
              <ul className="pt-2">
                <li className='pt-3 text-sm'><a href="">About us</a></li>
                <li className='pt-3 text-sm'><a href="">Blog</a></li>
                <li className='pt-3 text-sm'><a href="">News</a></li>
                <li className='pt-3 text-sm'><a href="">MyExam EduBlogs</a></li>
                <li className='pt-3 text-sm'><a href="">Privacy policy</a></li>
                <li className='pt-3 text-sm'><a href="">Public notice</a></li>
                <li className='pt-3 text-sm'><a href="">Careers</a></li>
                <li className='pt-3 text-sm'><a href="">Dhoni Inspires NEET Aspirants</a></li>
                <li className='pt-3 text-sm'><a href="">Dhoni Inspires JEE Aspirants</a></li>
              </ul>
            </div>

            <div className='max-w-44'>
              <h2>Help & Support</h2>
              <ul className="pt-2">
                <li className='pt-3 text-sm'><a href="">Refund policy</a></li>
                <li className='pt-3 text-sm'><a href="">Transfer policy</a></li>
                <li className='pt-3 text-sm'><a href="">Terms & Conditions</a></li>
                <li className='pt-3 text-sm'><a href="">Contact us</a></li>
              </ul>
            </div>

            <div className='max-w-44'>
              <h2>Popular Goals</h2>
              <ul className="pt-2">
                <li className='pt-3 text-sm'><a href="">NEET UG</a></li>
                <li className='pt-3 text-sm'><a href="">JEE Advanced</a></li>
                <li className='pt-3 text-sm'><a href="">6th to 10th</a></li>
              </ul>
            </div>

            <div className='max-w-44'>
              <h2>Courses</h2>
              <ul className="pt-2">
                <li className='pt-3 text-sm'><a href="">Online Courses</a></li>
                <li className='pt-3 text-sm'><a href="">Distance Learning</a></li>
                <li className='pt-3 text-sm'><a href="">Online Test Series</a></li>
                <li className='pt-3 text-sm'><a href="">NEET Test Series</a></li>
                <li className='pt-3 text-sm'><a href="">JEE Test Series</a></li>
                <li className='pt-3 text-sm'><a href="">JEE Main Test Series</a></li>
              </ul>
            </div>

            <div className='max-w-44'>
              <h2>Centres</h2>
              <ul className="pt-2">
                <li className='pt-3 text-sm'><a href="">Kota</a></li>
                <li className='pt-3 text-sm'><a href="">Bangalore</a></li>
                <li className='pt-3 text-sm'><a href="">Indore</a></li>
                <li className='pt-3 text-sm'><a href="">Delhi</a></li>
                <li className='pt-3 text-sm'><a href="">More centres</a></li>
              </ul>
            </div>

            <div className='max-w-32'>
              <h2>Exam Information</h2>
              <ul className="pt-2">
                <li className='pt-3 text-sm'><a href="">JEE Main</a></li>
                <li className='pt-3 text-sm'><a href="">JEE Advanced</a></li>
                <li className='pt-3 text-sm'><a href="">NEET UG</a></li>
                <li className='pt-3 text-sm'><a href="">Class 10</a></li>
                <li className='pt-3 text-sm'><a href="">Class 12</a></li>
                <li className='pt-3 text-sm'><a href="">Olympiad Exam</a></li>
                <li className='pt-3 text-sm'><a href="">CUET Exam</a></li>
                <li className='pt-3 text-sm'><a href="">JEE Main 2025 Session 1 Answer Key</a></li>
              </ul>
            </div>


          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between ">
            <span className="text-sm text-gray-500 sm:text-center pl-18">
              ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 pr-14">
              <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp?_upload_ref=ic_img_tool&__ar__=1.00" alt="" className='h-16' />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer