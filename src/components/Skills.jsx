import React from 'react'
import javascript from "../assets/img_js.png"

const Skills = () => {
    const skills = [
        { name: 'JavaScript', image: javascript },
        { name: 'React.js', },
        { name: 'Vue.js', },
        { name: 'HTML5', },
        { name: 'CSS3', },
        { name: 'Tailwind CSS', },
        { name: 'Node.js' }]
    return (
        <div id="skills" className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-medium'>Skills</h1>
                <p className='text-base font-normal italic'>Here are some of the technologies I have worked with:</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                {skills.map((skill, index) => (
                    <div key={index} className='flex flex-col items-center bg-white shadow-md rounded-lg p-4'>
                        {skill.image && <img src={skill.image} alt={skill.name} className='w-16 h-16' />}
                        <span className='text-base font-bold'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills