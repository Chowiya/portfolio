import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xdkglrav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // ✅ Clear inputs
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please check your internet connection.');
    }
  };

  return (
    <section className="flex flex-col bg-black text-white px-5 py-32" id="contact">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-yellow-500 font-bold text-4xl border-b-4 mb-5 w-[150px] text-center">Contact</h1>
        <h2 className="text-xl mb-2">📞 Get in Touch</h2>
        <p className="text-center mb-6 max-w-md">
          Have a question or want to work together? Just fill out the form below!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded border bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded border bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded border bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


