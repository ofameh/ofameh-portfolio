import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredPost = {
    title: "Building Modern React Applications: Best Practices and Performance",
    excerpt: "A comprehensive guide to creating scalable, performant React applications with modern development practices and optimization techniques.",
    category: "Frontend",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
  };

  const recentPosts = [
    {
      title: "React Performance Optimization: Tips and Tricks",
      excerpt: "Advanced techniques for improving React application performance, from component optimization to bundle size reduction.",
      category: "Frontend",
      date: "March 10, 2024",
      readTime: "12 min read",
    },
    {
      title: "Leadership Lessons from Startup to Scale-up",
      excerpt: "Key insights and strategies for leading teams through rapid growth phases and maintaining company culture.",
      category: "Leadership",
      date: "March 5, 2024",
      readTime: "10 min read",
    },
    {
      title: "Modern CSS with Tailwind: Design System Best Practices",
      excerpt: "How to build scalable design systems using Tailwind CSS and create consistent, maintainable user interfaces.",
      category: "Frontend",
      date: "February 28, 2024",
      readTime: "15 min read",
    },
    {
      title: "Risk Management in Algorithmic Trading",
      excerpt: "Essential strategies for managing risk in automated trading systems and protecting capital.",
      category: "Trading",
      date: "February 20, 2024",
      readTime: "14 min read",
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
    <section id="blog" className="py-20 bg-slate-950">
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
              Blog & Insights
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sharing insights on technology, trading, and business leadership. 
              Stay updated with the latest trends and best practices.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="glass p-6 rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded-full border border-accent-blue/20">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs">
                      <FiCalendar className="mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-slate-400 text-xs">
                      <FiClock className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center text-accent-blue hover:text-accent-cyan transition-colors duration-200 text-sm font-medium"
                  >
                    Read Full Article
                    <FiArrowRight className="ml-2" size={16} />
                  </motion.button>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <div className="text-slate-400 text-sm">Featured Post</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Posts Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium text-slate-300 mb-8">
              Recent Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass p-6 rounded-xl card-hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-slate-100 mb-3 leading-tight">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-xs">
                      <FiClock className="mr-1" />
                      {post.readTime}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-accent-blue hover:text-accent-cyan transition-colors duration-200"
                    >
                      <FiArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              View All Articles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
