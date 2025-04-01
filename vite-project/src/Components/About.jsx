import React from 'react'
import AboutPic from '../assets/About.svg'

function About() {
  const config ={
    line1:` I'm Chowiya, a former Physician Assistant turned Full Stack Developer with a passion for building dynamic and user-friendly web applications. While my journey began in the medical field, my growing fascination with technology and problem-solving led me to make the exciting switch to web development.`,
    line2:`I'm a full-stack developer with a passion for creating dynamic and user-friendly web applications. While my journey began in the medical field, my growing fascination with technology and problem-solving led me to make the exciting switch to web development.`
    
        
  }
  return (
    <section className='flex flex-col md:flex-row bg-black text-white pt-10 px-5' id='about'>
        <div className=' py-5 md:w-1/2'>
        <img src={AboutPic} className='h-80'/>
        </div>
       <div className='md:w-1/2 font-mono'>
       <h1 className='text-yellow-500 font-bold text-4xl border-b-4 mb-5 w-[180px]'>About Me</h1>
        <h1>
        👋 Hey there!
        </h1>
        <p className='mt-5'>
       {config.line1}</p>
        <p className='mt-5'>
        🚀<span className='text-yellow-500 font-bold text-2xl'> What I Do Now:</span>
        I specialize in building full-stack web applications using <span className='text-amber-500'>React, Node.js, Express.js, and MongoDB.</span> My projects reflect my dedication to clean code, responsive design, and seamless functionality. I'm constantly learning, exploring new technologies, and working on real-world projects to sharpen my skills

        </p>
        <p className='mt-5'>
       <span className='text-yellow-500 font-bold text-2xl'> ✨ My Mission:</span>
I aim to combine my problem-solving mindset from healthcare with my tech expertise to create impactful and user-centric digital solutions.
<br></br>
✅ Let's build something amazing together! 🚀
        </p>
       </div>

    </section>
  )
}

export default About