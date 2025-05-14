import landingpage from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project4.png';

function Project() {
  const projects = [
    {
      title: "🐾 Pet Adoption Platform",
      description: "Full-Stack Pet Adoption Platform Using MERN",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      deployed: "https://home4paws.netlify.app/",
      frontendGithub: "https://github.com/Chowiya/Home4paw-FE",
      backendGithub: "https://github.com/Chowiya/Home4paw-Be",
      img: project2
      
    },
    {

       title: "🛒 E-Commerce Platform",
      description: "Develop a ReactJS e-commerce application with dedicated product listing and cart management pages. Implement core shopping functionalities including product display, cart operations, and dynamic pricing with discounts.",
      techStack: ["React router", "HTML", "Tailwind Css"],
      deployed: 'https://chowiyaa.netlify.app/',
      frontendGithub: "https://github.com/Chowiya/my-app-store-task6",
      backendGithub: null,
      img: project4
      
    },
    {
      title: "💬 Chat App (In Progress)",
      description: "Real-Time Chat Application with MERN Stack (In Progress)",
      techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      deployed: null,
      frontendGithub: "https://github.com/Chowiya/application.git",
      backendGithub: null,
      img: project3
    },
    {
     title: "🌐 Landing Page",
      description: "Responsive Landing Page Built with HTML & CSS",
      techStack: ["HTML", "CSS"],
      deployed: "https://stellular-duckanoo-2b419d.netlify.app/",
      frontendGithub: "https://github.com/Chowiya/landing-page",
      backendGithub: null,
      img: landingpage
    }
  ];

  return (
    <section className='flex flex-col py-20 px-5 justify-center text-white bg-black font-mono' id='project'>
      <div className='px-10 py-5'>
        <h1 className='text-yellow-500 font-bold text-4xl border-b-4 mb-5 w-[160px]'>Projects</h1>
        <p>🚀 "Explore some of the projects I've built using HTML, CSS, and the MERN stack!" 💻</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-md transition transform hover:scale-105'
          >
            <img
              className='w-full md:w-1/2 h-auto rounded-lg object-cover'
              src={project.img}
              alt={`Project ${index + 1}`}
            />
            <div className='flex flex-col gap-3 text-left'>
              <h2 className='text-xl font-semibold text-yellow-400'>{project.title}</h2>
              <p className='text-gray-300'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mt-2'>
                {project.techStack.map((tech, i) => (
                  <span key={i} className='bg-yellow-700 text-xs px-2 py-1 rounded'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-4 mt-4'>
                {project.deployed && (
                  <a href={project.deployed} target='_blank' rel='noreferrer' className='text-blue-400 underline'>
                    🌐 Live Demo
                  </a>
                )}
                {project.frontendGithub && (
                  <a href={project.frontendGithub} target='_blank' rel='noreferrer' className='text-green-400 underline'>
                    💻 Frontend Code
                  </a>
                )}
                {project.backendGithub && (
                  <a href={project.backendGithub} target='_blank' rel='noreferrer' className='text-red-400 underline'>
                    🛠 Backend Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;