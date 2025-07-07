'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaFire } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiDart, SiPhp, SiNextdotjs, SiReact, SiFigma, SiPostman } from 'react-icons/si';

// Custom Scroll Bar Component
const CustomScrollBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);

  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const thumbHeightPercentage = (innerHeight / scrollHeight) * 100;
      const maxScroll = scrollHeight - innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * (innerHeight - (innerHeight * thumbHeightPercentage) / 100) : 0;

      setThumbHeight(thumbHeightPercentage);
      setScrollProgress(progress);
      setIsVisible(true);
      const timeoutId = setTimeout(() => setIsVisible(false), 1000); // Hide after 1 second

      return () => clearTimeout(timeoutId);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll(); // Initial call to set values

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // Only render scrollbar in the browser
  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="fixed top-0 right-0 w-2 h-full bg-blue-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full bg-blue-300"
        style={{ height: `${thumbHeight}%` }}
        animate={{ y: scrollProgress }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white fixed w-full top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Muhamad Ali</a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-6 ${isOpen ? 'block absolute top-16 left-0 w-1/2 bg-blue-900 p-4' : 'hidden md:block'}`}>
          <a href="#about" className="block py-2 hover:text-blue-300 transition-colors">About</a>
          <a href="#skills" className="block py-2 hover:text-blue-300 transition-colors">Skills</a>
          <a href="#education" className="block py-2 hover:text-blue-300 transition-colors">Education</a>
          <a href="#experience" className="block py-2 hover:text-blue-300 transition-colors">Experience</a>
          <a href="#projects" className="block py-2 hover:text-blue-300 transition-colors">Projects</a>
          <a href="#contact" className="block py-2 hover:text-blue-300 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

// About Section
const About = () => (
  <motion.section
    id="about"
    className="pt-40 pb-25 bg-gray-900 text-white"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/my.jpg"
          alt="Profile Picture"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6 border-4 border-blue-700"
          priority
        />
      </motion.div>
      <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Muhamad Ali Akbar Abil Aziz</h1>
      <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
        A passionate developer skilled in Flutter, Laravel, React, and Firebase, dedicated to building responsive and user-friendly applications.
      </p>
      <motion.a
        href="#contact"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </div>
  </motion.section>
);

// Skills Section
const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="w-12 h-12 text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12 text-blue-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="w-12 h-12 text-purple-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-teal-500" /> },
    { name: 'Laravel', icon: <Image src="/laravel.png" alt="Laravel" width={48} height={48} className="w-12 h-12" /> },
    { name: 'Php', icon: <SiPhp className="w-12 h-12 text-blue-600" /> },
    { name: 'React', icon: <SiReact className="w-12 h-12 text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
    { name: 'Flutter', icon: <SiFlutter className="w-12 h-12 text-blue-400" /> },
    { name: 'Dart', icon: <SiDart className="w-12 h-12 text-blue-700" /> },
    { name: 'PostgreSQL', icon: <Image src="/postgre.png" alt="PostgreSQL" width={48} height={48} className="w-12 h-12" /> },
    { name: 'Firebase', icon: <FaFire className="w-12 h-12 text-orange-500" /> },
    { name: 'Figma', icon: <SiFigma className="w-12 h-12 text-purple-500" /> },
    { name: 'Postman', icon: <SiPostman className="w-12 h-12 text-orange-400" /> },
  ];

  return (
    <motion.section
      id="skills"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Education Section
const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Politeknik LP3I Kampus Tasikmalaya',
      period: '2023 - 2026',
      description: 'Graduated with a focus on web and mobile application development, with coursework in algorithms, databases, and software engineering.',
    },
    {
      degree: 'High School Diploma',
      institution: 'SMA Negeri 1 Ciawi',
      period: '2020 - 2023',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-16 bg-blue-950 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      position: 'Frontend Developer Intern',
      company: 'PT Teknologi Indonesia',
      period: 'June 2022 - August 2022',
      tasks: [
        'Developed responsive web interfaces using React and Tailwind CSS.',
        'Collaborated with backend team to integrate APIs for e-commerce features.',
        'Optimized web performance, reducing load time by 20%.',
      ],
    },
    {
      position: 'Mobile Developer Intern',
      company: 'Startup XYZ',
      period: 'January 2021 - March 2021',
      tasks: [
        'Built a cross-platform mobile app using Flutter and Firebase.',
        'Implemented user authentication and real-time data syncing.',
        'Conducted UI/UX testing to improve user experience.',
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
              <p className="text-gray-300 mb-1">{exp.company}</p>
              <p className="text-gray-400 mb-2">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Projects Section
const Projects = () => (
  <motion.section
    id="projects"
    className="py-16 bg-blue-950 text-white"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-3">Tokopedia Clone</h3>
          <p className="text-gray-300 mb-4">A simplified e-commerce app built with Flutter and Firebase.</p>
          <a href="#" className="text-blue-400 hover:underline">View Project</a>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-3">Responsive Navbar</h3>
          <p className="text-gray-300 mb-4">A responsive navigation bar built with React and Tailwind CSS.</p>
          <a href="#" className="text-blue-400 hover:underline">View Project</a>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-3">Booking Management</h3>
          <p className="text-gray-300 mb-4">A React component for managing user bookings with API integration.</p>
          <a href="#" className="text-blue-400 hover:underline">View Project</a>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Contact Section
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Note: This is a static site, so no data is sent.)');
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-700"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-700"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-700"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-blue-900 text-white p-6 text-center">
    <p>&copy; 2025 Muhamad Ali. All rights reserved.</p>
  </footer>
);

// Main Page Component
export default function Page() {
  return (
    <div>
      <CustomScrollBar />
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}