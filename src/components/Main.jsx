import React from 'react'
import About from './About'
import Skills from './Skills'
import Hobbies from './Hobbies'
import Passions from './Passions'
import Education from './Education'

const Main = () => {
    return (
        <div className='flex flex-col from-100 to-blue-500 bg-gradient-to-b min-h-screen pb-8'>
            <About />
            <Skills/>
            <Hobbies/>
            <Passions/>
            <Education/>
        </div>
    )
}

export default Main