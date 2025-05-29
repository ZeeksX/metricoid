import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-16 bg-white shadow-md justify-between w-full p-4'>
        <div className='flex items-center justify-center'>
            <h3 className='text-2xl leading-5 font-semibold'>Zeeks.dev</h3>
        </div>
        <div className='flex items-center justify-center'>
            <ul className='flex space-x-4'>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>About me</li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Skills</li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Hobbies</li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Academic Background</li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Work Experience</li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Certifications</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar