import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-16 bg-white shadow-md justify-between w-full p-4'>
        <div className='flex items-center justify-center'>
            <h3 className='text-2xl leading-5 font-semibold'>Zeeks.dev</h3>
        </div>
        <div className='flex items-center justify-center'>
            <ul className='flex space-x-4'>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'><a href='#about'>About me</a></li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'><a href='#skills'>Skills</a></li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'><a href='#hobbies'>Hobbies</a></li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'><a href='#passions'>Passions</a></li>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'><a href='#education'>Academic Background</a></li>
             
            </ul>
        </div>
    </div>
  )
}

export default Navbar