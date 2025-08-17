import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBarChart2, FiCode } from 'react-icons/fi';

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas = [
    {
      icon: FiBriefcase,
      title: 'CEO & Leadership',
      subtitle: 'Strategic Vision',
      description: 'Leading BetaFix marketplace with data-driven strategies that connect skilled artisans with customers. Driving platform growth through innovative business models and market analysis.',
      skills: ['Strategic Planning', 'Team Leadership', 'Business Development', 'Market Analysis'],
      achievements: ['500+ Verified Artisans', '15-Min Response Time', '20+ Service Categories'],
      color: 'accent-emerald',
    },
    {
      icon: FiBarChart2,
      title: 'Trading & Analytics',
      subtitle: 'Market Expertise',
      description: 'Professional trading with systematic approach to technical analysis and risk management. Delivering consistent returns through disciplined strategies and market research.',
      skills: ['Technical Analysis', 'Risk Management', 'Portfolio Strategy', 'Market Research'],
      achievements: ['65% Win Rate', '1+ Year Experience', 'Consistent Returns'],
      color: 'accent-blue',
    },
    {
      icon: FiCode,
      title: 'Frontend Development',
      subtitle: 'React Specialist',
      description: 'Building modern, responsive web applications that deliver exceptional user experiences. Focus on performance optimization, clean architecture, and scalable solutions.',
      skills: ['React', 'JavaScript', 'HTML & CSS', 'Responsive Design'],
      achievements: ['10+ Projects', '100% Client Satisfaction', 'Modern UI/UX'],
      color: 'accent-cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="expertise" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A unique combination of business leadership, market expertise, and technical skills 
            that drives innovation and delivers results.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass p-6 rounded-xl card-hover group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${area.color}/10 text-${area.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon size={24} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                {area.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-300 mb-3">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3">Achievements</h4>
                <ul className="space-y-2">
                  {area.achievements.map((achievement) => (
                    <li key={achievement} className="text-sm text-slate-400 flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${area.color} mr-3`}></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
