import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiPlay } from 'react-icons/fi';

// Polar Bear Mascot Component
const PolarBearMascot = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
        opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "linear"
      }}
      className="absolute top-20 left-0 pointer-events-none z-10"
    >
      {/* Polar Bear Body */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="relative"
      >
        {/* Bear Body - Standing Position */}
        <div className="w-14 h-16 bg-white rounded-full shadow-lg relative">
          {/* Bear Head */}
          <div className="w-12 h-12 bg-white rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 shadow-lg">
            {/* Ears */}
            <div className="w-4 h-4 bg-white rounded-full absolute -top-1 -left-1 shadow-sm"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute -top-1 -right-1 shadow-sm"></div>
            
            {/* Eyes */}
            <div className="w-2.5 h-2.5 bg-slate-800 rounded-full absolute top-3 left-2.5"></div>
            <div className="w-2.5 h-2.5 bg-slate-800 rounded-full absolute top-3 right-2.5"></div>
            
            {/* Nose */}
            <div className="w-1.5 h-1.5 bg-slate-800 rounded-full absolute top-5 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Mouth */}
            <div className="w-3 h-1 bg-slate-800 rounded-full absolute top-6 left-1/2 transform -translate-x-1/2"></div>
          </div>
          
          {/* Arms - Standing Position */}
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="w-4 h-8 bg-white rounded-full absolute top-2 -left-1 shadow-sm"
          ></motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 0, 10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
            className="w-4 h-8 bg-white rounded-full absolute top-2 -right-1 shadow-sm"
          ></motion.div>
          
          {/* Legs - Standing Position */}
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-4 h-10 bg-white rounded-full absolute bottom-0 left-2 shadow-sm"
          ></motion.div>
          <motion.div
            animate={{ rotate: [0, -5, 0, 5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
            className="w-4 h-10 bg-white rounded-full absolute bottom-0 right-2 shadow-sm"
          ></motion.div>
        </div>
        
        {/* Snow Trail */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity }}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const TypewriterText = ({ phrases, className }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, currentCharIndex + 1));
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
        setDisplayText(currentPhrase.slice(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    }
  }, [currentPhraseIndex, currentCharIndex, isDeleting, phrases]);

  return (
    <div className={className}>
      <span className="text-slate-100">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="text-accent-blue ml-1"
      >
        |
      </motion.span>
    </div>
  );
};

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 15,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  const phrases = [
    "Founder.",
    "Trader.",
    "Developer."
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Polar Bear Mascot */}
      <PolarBearMascot />
      
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-conic from-accent-cyan/3 via-transparent to-accent-emerald/3"></div>
      </div>

      {/* Minimal particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <h2 className="text-lg font-medium text-slate-400 tracking-wider uppercase">
              Hello, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-100 mt-2">
              Ofameh
            </h1>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="min-h-[4rem] flex items-center justify-center"
          >
            <TypewriterText 
              phrases={phrases} 
              className="text-2xl sm:text-3xl lg:text-4xl font-medium"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            CEO of BetaFix, passionate trader, and innovative web developer. 
            Transforming ideas into digital reality with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="btn-primary"
            >
              <FiPlay className="inline mr-2" size={16} />
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Contact
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              <FiArrowDown size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-16 h-16 border border-slate-700/30 rounded-full opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-12 h-12 border border-slate-600/20 rounded-full opacity-20"
      />
    </section>
  );
};

export default Hero;
