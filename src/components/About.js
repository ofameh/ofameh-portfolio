import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTrendingUp, FiCode, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FiTrendingUp,
      value: '1',
      label: 'Year Trading',
      color: 'accent-emerald',
    },
    {
      icon: FiCode,
      value: '10+',
      label: 'Projects Delivered',
      color: 'accent-blue',
    },
    {
      icon: FiUsers,
      value: '20+',
      label: 'Happy Clients',
      color: 'accent-cyan',
    },
    {
      icon: FiAward,
      value: '65%',
      label: 'Win Rate',
      color: 'accent-rose',
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

  const itemVariants = {
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
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mb-6"></div>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              I'm a passionate entrepreneur and frontend web developer with a strong foundation in business leadership and financial markets.
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              As the CEO of <a href="https://betafix.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-cyan transition-colors">BetaFix</a>, an artisan marketplace, I lead the vision of empowering creators by blending craftsmanship with technology. On the technical side, I specialize in building modern, responsive, and interactive web applications that deliver seamless user experiences.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My background in trading has strengthened my ability to make data-driven decisions and manage complexity — skills I carry into development and business strategy alike.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I believe in creating digital products that are visually engaging, intuitive to use, and built for real impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700">
                React
              </span>
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700">
                Frontend Development
              </span>
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700">
                Business Leadership
              </span>
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700">
                Financial Markets
              </span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center card-hover"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${stat.color}/10 text-${stat.color} mb-4`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-2xl font-semibold text-slate-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
