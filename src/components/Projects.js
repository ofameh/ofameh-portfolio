import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: 'BetaFix Platform',
      category: 'startup',
      description: 'Professional artisan marketplace connecting 500+ verified professionals with customers. Achieved 15-minute response times and 20+ service categories through innovative platform design.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Frontend Development', 'UI/UX Design', 'Responsive Design'],
      link: 'https://betafix.vercel.app/',
      github: '#',
      stats: { artisans: '500+', response: '15 min', services: '20+' }
    },
    {
      id: 2,
      title: 'Trading Journal',
      category: 'trading',
      description: 'Comprehensive trading journal platform for tracking trades, analyzing performance, and improving trading strategies. Features detailed analytics and performance metrics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Chart.js', 'Data Analytics', 'Performance Tracking'],
      link: '#',
      github: '#',
      stats: { trades: '100+', accuracy: '65%', analysis: 'Real-time' }
    },
    {
      id: 3,
      title: 'Sharon Portfolio',
      category: 'web',
      description: 'Modern portfolio website for Sharon showcasing professional work and achievements. Features smooth animations, responsive design, and elegant user experience.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
      link: '#',
      github: '#',
      stats: { sections: '6', animations: '12+', performance: '95%' }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const currentProject = filteredProjects[currentProjectIndex];

  return (
    <section id="projects" ref={ref} className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my latest work, from startup platforms to trading tools and web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {['all', 'startup', 'trading', 'web'].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentProjectIndex(0);
              }}
              className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent-blue text-white border-accent-blue'
                  : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-accent-blue hover:text-accent-blue'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -4,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
              className="group glass rounded-xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                    className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white hover:bg-accent-cyan transition-colors"
                  >
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-accent-blue transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-xs">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-slate-800/30 px-2 py-1 rounded border border-slate-700">
                      <span className="text-slate-100 font-medium">{value}</span>
                      <span className="text-slate-400 ml-1">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentProject?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-xl overflow-hidden card-hover"
          >
            {/* Project Image */}
            <div className="relative h-40 bg-gradient-to-br from-slate-700 to-slate-800">
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <a
                  href={currentProject?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${currentProject?.title} live site`}
                  className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white hover:bg-accent-cyan transition-colors"
                >
                  <FiExternalLink size={16} />
                </a>
                <a
                  href={currentProject?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${currentProject?.title} source code on GitHub`}
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <FiGithub size={16} />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-accent-blue transition-colors mb-2">
                {currentProject?.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {currentProject?.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject?.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-4 text-xs">
                {currentProject && Object.entries(currentProject.stats).map(([key, value]) => (
                  <div key={key} className="bg-slate-800/30 px-2 py-1 rounded border border-slate-700">
                    <span className="text-slate-100 font-medium">{value}</span>
                    <span className="text-slate-400 ml-1">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-300 hover:text-accent-blue transition-colors border border-slate-700"
            >
              <FiArrowLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProjectIndex 
                      ? 'bg-accent-blue' 
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              aria-label="Next project"
              className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-300 hover:text-accent-blue transition-colors border border-slate-700"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
