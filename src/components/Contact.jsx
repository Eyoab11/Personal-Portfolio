import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(87,86,79,0.15)' },
    tap: { scale: 0.95 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      const response = await emailjs.send(
        'service_dnyxv58', // Replace with your emailjs service ID
        'template_0ibr1p1', // Replace with your emailjs template ID
        templateParams,
        '6TzVXzOCTngItaqso' // Replace with your emailjs user ID
      );

      if (response.status === 200) {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    }
  };

  const handleNavigate = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[60vh] py-16 bg-transparent overflow-hidden">
      <motion.div
        className="w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#57564F] mb-12 text-center"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-[#F8F3CE]"
          variants={itemVariants}
        >
        {sent ? (
          <motion.p
            className="text-[#57564F] text-center mb-4 text-xl font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully!
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit}>
            <motion.div className="mb-6" variants={itemVariants}>
              <label htmlFor="name" className="block text-[#57564F] font-semibold mb-3 text-lg">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border-2 border-[#DDDAD0] rounded-xl focus:outline-none focus:border-[#57564F] bg-white/60 text-[#57564F] placeholder-[#7A7A73] transition-all duration-200"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants}>
              <label htmlFor="email" className="block text-[#57564F] font-semibold mb-3 text-lg">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-[#DDDAD0] rounded-xl focus:outline-none focus:border-[#57564F] bg-white/60 text-[#57564F] placeholder-[#7A7A73] transition-all duration-200"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="mb-8" variants={itemVariants}>
              <label htmlFor="message" className="block text-[#57564F] font-semibold mb-3 text-lg">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 border-2 border-[#DDDAD0] rounded-xl focus:outline-none focus:border-[#57564F] bg-white/60 text-[#57564F] placeholder-[#7A7A73] transition-all duration-200 resize-none"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </motion.div>

            {error && (
              <motion.p
                className="text-red-500 text-sm mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              className="w-full bg-[#57564F] hover:bg-[#7A7A73] text-[#F8F3CE] px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F8F3CE]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </form>
        )}
        </motion.div>
      
      <motion.div
        className='flex flex-row justify-center gap-8 mt-12'
        variants={itemVariants}
      >
        <motion.button 
          onClick={() => handleNavigate('https://github.com/Eyoab11')} 
          className='p-4 bg-white/80 rounded-2xl shadow-lg border-l-4 border-[#F8F3CE] hover:shadow-xl transition-all duration-200'
          whileHover={{ scale: 1.1, boxShadow: '0 8px 32px 0 rgba(87,86,79,0.15)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon 
            icon={faGithub} 
            size="2x" 
            className='text-[#57564F] hover:text-[#7A7A73] transition-colors duration-200'
          />
        </motion.button>
        <motion.button 
          onClick={() => handleEmail('eyoabamare3@gmail.com')} 
          className='p-4 bg-white/80 rounded-2xl shadow-lg border-l-4 border-[#F8F3CE] hover:shadow-xl transition-all duration-200'
          whileHover={{ scale: 1.1, boxShadow: '0 8px 32px 0 rgba(87,86,79,0.15)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon 
            icon={faEnvelope} 
            size="2x" 
            className='text-[#57564F] hover:text-[#7A7A73] transition-colors duration-200'
          />
        </motion.button>
        <motion.button 
          onClick={() => handleNavigate('https://www.linkedin.com/in/eyoabamare')} 
          className='p-4 bg-white/80 rounded-2xl shadow-lg border-l-4 border-[#F8F3CE] hover:shadow-xl transition-all duration-200'
          whileHover={{ scale: 1.1, boxShadow: '0 8px 32px 0 rgba(87,86,79,0.15)' }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon 
            icon={faLinkedin} 
            size="2x" 
            className='text-[#57564F] hover:text-[#7A7A73] transition-colors duration-200'
          />
        </motion.button>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
