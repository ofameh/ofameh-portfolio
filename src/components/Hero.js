import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TypewriterText = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex - 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    }
  }, [currentPhraseIndex, currentCharIndex, isDeleting, phrases]);

  return (
    <span className="text-slate-100">
      {phrases[currentPhraseIndex].substring(0, currentCharIndex)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-accent-blue"
      >
        |
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const phrases = ["Founder.", "Trader.", "Developer."];

  // Pre-calculate particle and raindrop data to prevent recalculation
  const particleData = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })), []
  );

  const raindropData = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 3,
    })), []
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Particle Background */}
        <div className="absolute inset-0 opacity-30">
          {particleData.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute w-1 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
              animate={{
                x: [0, particle.x],
                y: [0, particle.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            />
          ))}
        </div>

        {/* Raindrops */}
        <div className="absolute inset-0 overflow-hidden">
          {raindropData.map((raindrop) => (
            <motion.div
              key={`raindrop-${raindrop.id}`}
              className="absolute w-0.5 h-8 bg-gradient-to-b from-accent-cyan/60 to-transparent rounded-full"
              animate={{
                y: [-50, window.innerHeight + 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: raindrop.duration,
                repeat: Infinity,
                delay: raindrop.delay,
                ease: "linear"
              }}
              style={{
                left: `${raindrop.left}%`,
                top: `-50px`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-cyan/3"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-emerald/3 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300 text-lg sm:text-xl font-medium"
          >
            Hello, I'm Ofameh
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight"
          >
            <TypewriterText phrases={phrases} />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Building innovative solutions at the intersection of business, technology, and financial markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a
              href="#projects"
              className="btn-primary group"
            >
              View My Work
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="btn-secondary group"
            >
              Get In Touch
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
