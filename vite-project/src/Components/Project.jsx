import React from 'react'
import landingpage from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
function Project() {
  const config ={
    projects:[{
        img:landingpage,
        desc:`🌐 Landing Page: "Responsive Landing Page Built with HTML & CSS"`,
        link:"https://stellular-duckanoo-2b419d.netlify.app/"
    },
    {
      img:project2,
      desc:`🐾 Pet Adoption Platform: "Full-Stack Pet Adoption Platform Using MERN"`,
      link:"https://home4paws.netlify.app/"
  },
  {
    img:project3,
    desc:`💬 Chat App (In Progress): "Real-Time Chat Application with MERN Stack (In Progress)"`,
    link:"https://github.com/Chowiya/application.git"
}]
}
  return (
    <section className='flex flex-col py-20 px-5 justify-center text-white bg-black font-mono' id='project'>
        <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
        <h1 className='text-yellow-500 font-bold text-4xl border-b-4 mb-5 w-[160px]'>Projects</h1>
        <p>🚀 "Check out my project built with HTML, CSS, Tailwind CSS, and the MERN stack!" 💻</p>
        </div>
           
        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
       {config.projects.map((project,index)=>(
        
        <div key={index} className='relative'>
        <img className='h-[180px]' src={project.img} alt="" />
        <div className='project-desc'><p className='text-center px-5 py-5'>{project.desc}</p>
        
        <div className='flex justify-center'>
        <a className='btn' target='blank' href={project.link}>View project</a>
        </div>
        </div>

        
        
        </div>
       ))}
          

        </div>
        
        </div>
    </section>
  )
}

export default Project