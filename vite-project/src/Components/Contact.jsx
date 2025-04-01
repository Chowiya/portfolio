
function Contact() {
  return (
    <section className='flex flex-col bg-black text-white px-5 py-32' id="contact">
    
       <div className='flex flex-col items-center justify-center'>
       <h1 className='text-yellow-500 font-bold text-4xl border-b-4 mb-5 w-[150px]'>Contact</h1>
        <h1>📞 Get in Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you. Feel free to reach out to me via email or phone. I'm always open to new opportunities and collaborations.</p>
        <a href="mailto:chowiya6@gmail.com" target="blank" className="hover:text-amber-600 underline mt-3"><span>Email:  </span>chowiya6@gmail.com</a>  
        <a href="https://www.linkedin.com/in/chowiya-vaj-536614342/" target="blank" className="hover:text-amber-600 underline mt-3"><span>Linkedin:  </span> Linkedin Profile</a>
        <a href="https://github.com/Chowiya" target="blank" className="hover:text-amber-600 underline mt-3"><span>GitHub:  </span>Github Profile</a>
        
       </div>

    </section>
  )
}

export default Contact