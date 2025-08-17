import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Ofameh's strategic vision and technical expertise transformed our business. His ability to bridge technology and business needs is exceptional.",
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
    },
    {
      quote: "Working with Ofameh on our trading platform was a game-changer. His market knowledge combined with development skills delivered outstanding results.",
      name: "Michael Chen",
      role: "Head of Trading, FinanceHub",
      rating: 5,
    },
    {
      quote: "The web application Ofameh built for us exceeded all expectations. Clean code, modern design, and exceptional performance.",
      name: "Emily Rodriguez",
      role: "Product Manager, StartupXYZ",
      rating: 5,
    },
  ];

  const companies = [
    "TechCorp", "FinanceHub", "StartupXYZ", "InnovateLab", "DataFlow", "CloudTech"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section id="testimonials" className="py-20 bg-slate-950">
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
              Recognition & Trust
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Trusted by industry leaders and startups alike. Here's what clients say about working together.
            </p>
          </motion.div>

          {/* Testimonials Slider */}
          <motion.div variants={itemVariants} className="relative mb-16">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="glass p-8 rounded-xl text-center"
                >
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} className="text-accent-amber fill-current" size={20} />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="text-slate-100 font-medium">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-slate-100 transition-colors duration-200"
                >
                  <FiChevronLeft size={20} />
                </motion.button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentTestimonial
                          ? 'bg-accent-blue w-6'
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-slate-100 transition-colors duration-200"
                >
                  <FiChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Company Logos */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-lg font-medium text-slate-300 mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-slate-400 font-medium text-sm">
                    {company}
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

export default Testimonials;
