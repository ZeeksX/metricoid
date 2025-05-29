import React from 'react'

const Education = () => {
    const education = [
        { degree: 'Bachelor of Science in Computer Science', institution: 'Babcock University', year: '2021 - 2025' },
        { degree: 'High School Diploma', institution: 'Babington Macaulay Junior Seminary', year: '2015 - 2021' }
    ]
    return (
        <div id="education" className='mt-10 flex flex-col items-center w-full justify-center p-10 gap-12'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-2xl font-medium'>Academic Background</h1>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                {education.map((edu, index) => (
                    <div key={index} className='flex flex-col items-center bg-white shadow-md rounded-lg p-4'>
                        <span className='text-base font-bold'>{edu.degree}</span>
                        <span className='text-sm text-gray-600'>{edu.institution}</span>
                        <span className='text-xs text-gray-500'>{edu.year}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education