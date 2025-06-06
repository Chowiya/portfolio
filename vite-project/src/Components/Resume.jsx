import React from 'react'
import resume from '../assets/resume.svg'

function Resume() {
  const config ={
    link:"https://www.canva.com/design/DAGjAQT_yLk/OcWiZX3-MIe0ozmbNrJoFQ/view?utm_content=DAGjAQT_yLk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he284c2e3dd"
  }
  return (
    <section className='flex flex-col md:flex-row bg-black text-white pt-10 px-5' id='resume'>
        <div className=' py-5 md:w-1/2 flex justify-center'>
        <img src={resume} className='w-[300px]'/>
        </div>
       <div className='md:w-1/2 font-mono'>
       <h1 className='text-yellow-500 font-bold text-4xl border-b-4 mb-5 w-[150px]'>Resume</h1>
        <h1>
        You can view my Resume <a href={config.link} target='blank' className='btn'>Download</a>
        </h1>
        
        
       </div>

    </section>
  )
}

export default Resume