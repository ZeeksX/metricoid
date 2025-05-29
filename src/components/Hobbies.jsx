import React from 'react'

const Hobbies = () => {
  const hobbies = [
    { name: 'Reading books', },
    { name: 'Singing', },
    { name: 'Watching movies', },
    { name: 'Playing games', },
    { name: 'Watching and playing football', }
  ]
  return (
    <div className='mt-10 flex flex-col items-center w-full justify-center p-10 gap-12'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-2xl font-medium'>Hobbies & Interests</h1>
            <p className='text-base font-normal text-italic'>Here are some of my hobbies and interests:</p>
        </div>
         <div className='flex flex-row items-center justify-center gap-4'>
                {hobbies.map((hobby, index) => (
                    <div key={index} className='flex flex-col items-center bg-white shadow-md rounded-lg p-4'>
                        {hobby.image && <img src={hobby.image} alt={hobby.name} className='w-16 h-16' />}
                        <span className='text-base font-bold'>{hobby.name}</span>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Hobbies