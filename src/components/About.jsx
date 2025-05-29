import React from 'react'
import me from "../assets/me.jpg";

const About = () => {
    return (
        <div id="about" className='flex flex-row items-center justify-center gap-12 w-full mt-10 '>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-medium'>About me</h1>
                <p className='text-base font-normal'>
                    I am a passionate frontend developer with experience in React.js, Vue.js, HTML5, CSS3 and JavaScript</p>
            </div>
            <div className='flex items-center justify-center'>
                <img className='w-96 h-96 rounded-full object-cover' src={me} alt="My Picture" />
            </div>
        </div>
    )
}

export default About