import React from 'react'
import { GoMail } from "react-icons/go";            
import { FaSquareGithub } from "react-icons/fa6";  
import { CiLinkedin } from "react-icons/ci";  

function Footer() {
  return (
    <section>
    <div className='bg-black text-white py-4 text-center border-t-1 border-amber-50'>
       © Chowiya 2025
       
    </div>
    <div className="flex justify-center py-5 text-white bg-black">
                  
                   <a href="mailto:chowiya6@gmail.com" className="pr-5 hover:text-amber-500" aria-label="Email">
                     <GoMail size={30} />
                   </a>
       
              
                   <a href="https://github.com/Chowiya" target="_blank" rel="noopener noreferrer" className="pr-5 hover:text-amber-500" aria-label="GitHub">
                     <FaSquareGithub size={30} />
                   </a>
       
                  
                   <a href="https://www.linkedin.com/in/chowiya-vaj-536614342/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500" aria-label="LinkedIn">
                     <CiLinkedin size={30} />
                   </a>
                 </div>
       
    </section>
  )
}

export default Footer