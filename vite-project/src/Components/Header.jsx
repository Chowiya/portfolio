import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { FaDharmachakra } from "react-icons/fa";

function Header() {
   const [toggleMenu,setToggleMenu] = useState(false)
  return (
   <header className='flex justify-between bg-black text-white py-2 px-5 text-xl'>
    <a href='*' className='font-bold flex items-center hover:text-amber-600'><FaDharmachakra size={40}/>Chowiya</a>
     
     <nav className='hidden md:block'>
     <ul className='flex space-x-4 mt-3 font-mono'>
        <li><a href='/' className='hover:text-amber-600'>Home</a></li>
        <li><a href='#about' className='hover:text-amber-600'>About</a></li>
        <li><a href='#project' className='hover:text-amber-600'>Project</a></li>
        <li><a href='#contact' className='hover:text-amber-600'>Contact</a></li>
     </ul>

     </nav>

     { toggleMenu && <nav className='block md:hidden mobile-nav'>
     <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-center'>
        <li><a href='/' className='border-b-2 '>Home</a></li>
        <li><a href='#about' className='border-b-2'>About</a></li>
        <li><a href='#project' className='border-b-2'>Project</a></li>
        <li><a href='#contact' className='border-b-2'>Contact</a></li>
     </ul>

     </nav>}
     <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-6'/></button>
     
     
   </header>
  )
}

export default Header