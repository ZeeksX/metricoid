import React from 'react'

const Passions = () => {
    const passions = [
        { name: 'Web Development', },
        { name: 'Education - SDG 4', },
        { name: 'AI & Machine Learning', },
    ]
  return (
     <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-medium'>Passions</h1>
                <p className='text-base font-normal italic'>See some of my passions:</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                {passions.map((passion, index) => (
                    <div key={index} className='flex flex-col items-center bg-white shadow-md rounded-lg p-4'>
                        {passion.image && <img src={passion.image} alt={passion.name} className='w-16 h-16' />}
                        <span className='text-base font-bold'>{passion.name}</span>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Passions