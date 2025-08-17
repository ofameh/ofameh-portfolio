import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiBarChart2, FiTool,
  FiGithub, FiFigma, FiTrello, FiSlack
} from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      skills: [
        { name: 'React', level: 90, color: 'accent-blue' },
        { name: 'JavaScript', level: 85, color: 'accent-cyan' },
        { name: 'HTML & CSS', level: 90, color: 'accent-emerald' },
        { name: 'Tailwind CSS', level: 85, color: 'accent-rose' },
      ],
    },
    {
      title: 'Trading & Analytics',
      icon: FiBarChart2,
      skills: [
        { name: 'TradingView', level: 90, color: 'accent-blue' },
        { name: 'Technical Analysis', level: 85, color: 'accent-cyan' },
        { name: 'Risk Management', level: 80, color: 'accent-emerald' },
        { name: 'Portfolio Strategy', level: 75, color: 'accent-rose' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: FiTool,
      skills: [
        { name: 'GitHub', level: 90, color: 'accent-blue' },
        { name: 'Figma', level: 75, color: 'accent-cyan' },
        { name: 'VS Code', level: 85, color: 'accent-emerald' },
        { name: 'Netlify', level: 70, color: 'accent-rose' },
      ],
    },
  ];

  const additionalSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'GitHub', icon: '📚' },
    { name: 'Figma', icon: '🎨' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Netlify', icon: '🚀' },
    { name: 'TradingView', icon: '📈' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'UI/UX', icon: '✨' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">
              Skills & Tools
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit spanning development, trading, and business technologies.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="glass p-6 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue mr-4">
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Additional Skills Grid */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-lg font-medium text-slate-300 mb-8">
              Additional Technologies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass p-4 rounded-lg text-center card-hover"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="text-xs font-medium text-slate-300">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
