import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiEye, FiTrendingUp, FiCode, FiUsers } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'BetaFix Platform',
      category: 'startup',
      description: 'Professional artisan marketplace connecting skilled professionals with customers. Features include 15-minute response times, verified artisans, and comprehensive service categories.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Frontend Development', 'UI/UX Design', 'Responsive Design'],
      link: 'https://betafix.vercel.app/',
      github: '#',
      stats: { artisans: '500+', response: '15 min', services: '20+' }
    },
    {
      id: 2,
      title: 'Trading Algorithm Suite',
      category: 'trading',
      description: 'Advanced algorithmic trading system with real-time market analysis and automated execution.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Pandas', 'NumPy', 'TradingView API'],
      link: '#',
      github: '#',
      stats: { roi: '25%', trades: '500+', accuracy: '85%' }
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features, payment integration, and analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redux'],
      link: '#',
      github: '#',
      stats: { sales: '$500K+', users: '5K+', conversion: '12%' }
    },
    {
      id: 4,
      title: 'Portfolio Tracker',
      category: 'trading',
      description: 'Comprehensive portfolio management tool with real-time tracking and performance analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Chart.js', 'Firebase', 'WebSocket'],
      link: '#',
      github: '#',
      stats: { portfolios: '1K+', assets: '50+', accuracy: '99.9%' }
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      category: 'web',
      description: 'Intelligent chatbot powered by machine learning for customer support and engagement.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      link: '#',
      github: '#',
      stats: { conversations: '50K+', accuracy: '92%', satisfaction: '95%' }
    },
    {
      id: 6,
      title: 'Business Analytics Dashboard',
      category: 'startup',
      description: 'Comprehensive business intelligence platform with real-time data visualization.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#',
      stats: { insights: '100+', users: '500+', efficiency: '40%' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: FiEye },
    { id: 'startup', label: 'BetaFix', icon: FiUsers },
    { id: 'trading', label: 'Trading', icon: FiTrendingUp },
    { id: 'web', label: 'Web Dev', icon: FiCode }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-neon-purple/5 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my work across business leadership, trading systems, and web development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-neon-purple text-white glow-purple'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <filter.icon size={18} />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
              }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-neon-purple/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCode className="text-2xl text-neon-purple" />
                    </div>
                    <p className="text-gray-400 text-sm">Project Preview</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    className="p-3 bg-neon-purple rounded-full text-white hover:bg-neon-blue transition-colors duration-200"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded text-xs text-neon-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-2 bg-gray-700/50 rounded"
                    >
                      <div className="text-white font-semibold">{value}</div>
                      <div className="text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-lg hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 glow-purple"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
