import profilePic from "../assets/profilePic.png";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";

function Hero() {
  const config = {
    subtitle: `I specialize in building modern, user-friendly web applications using React and Node.js`
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 pl-5 bg-black text-white justify-center items-center">
      
      
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-5xl font-hero-font font-mono">
          Hello!<br /> I'm <span className="text-amber-400">Chowiya</span>
        </h1>
        <p className="text-3xl mt-5">A <span className="text-amber-400 text-4xl">Full Stack Developer </span>{config.subtitle}</p>

       
        <div className="flex py-8">
          <a href="mailto:chowiya6@gmail.com" className="pr-5 hover:text-amber-500" aria-label="Email">
            <GoMail size={40} />
          </a>
          <a href="https://github.com/Chowiya" target="_blank" rel="noopener noreferrer" className="pr-5 hover:text-amber-500" aria-label="GitHub">
            <FaSquareGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/chowiya-vaj-536614342/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500" aria-label="LinkedIn">
            <CiLinkedin size={40} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-15">
          <a href="#project" className="bg-amber-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300">
            View My Work
          </a>
          <a target="blank" href="https://www.canva.com/design/DAGjAQT_yLk/OcWiZX3-MIe0ozmbNrJoFQ/view?utm_content=DAGjAQT_yLk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he284c2e3dd" className="bg-transparent border border-amber-500 text-amber-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-amber-500 hover:text-black transition-all duration-300">
           View Resume
          </a>
        </div>
      </div>

   
<img 
  src={profilePic} 
  className="md:w-1/3 rounded-full border-4 border-yellow-500 shadow-lg shadow-yellow-500/50" 
  alt="Profile" 
/>

    </section>
  );
}

export default Hero;


