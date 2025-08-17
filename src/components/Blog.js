import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiClock, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Blog = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
      title: "The Future of Frontend Development: Trends to Watch in 2024",
      excerpt: "Exploring emerging technologies and methodologies that are shaping the future of web development and user experience design.",
      category: "Technology",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    },
    {
      title: "Optimizing React Performance: A Deep Dive into Memoization",
      excerpt: "Advanced techniques for improving React application performance through strategic use of memoization and optimization patterns.",
      category: "Performance",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    },
    {
      title: "Designing for Accessibility: Building Inclusive Web Experiences",
      excerpt: "Best practices for creating web applications that are accessible to users with diverse abilities and needs.",
      category: "Accessibility",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    },
    {
      title: "State Management in React: From Context to Redux and Beyond",
      excerpt: "A comprehensive comparison of state management solutions for React applications, from simple context to complex state machines.",
      category: "React",
      date: "February 20, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    }
  ];

  const allPosts = [featuredPost, ...recentPosts];

  const nextBlog = () => {
    setCurrentBlogIndex((prev) => 
      prev === allPosts.length - 1 ? 0 : prev + 1
    );
  };

  const prevBlog = () => {
    setCurrentBlogIndex((prev) => 
      prev === 0 ? allPosts.length - 1 : prev - 1
    );
  };

  const currentBlog = allPosts[currentBlogIndex];

  return (
    <section id="blog" ref={ref} className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">
            Latest Insights
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Thoughts on frontend development, technology trends, and building better digital experiences.
          </p>
        </motion.div>

        {/* Featured Post - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block mb-12"
        >
          <div className="glass rounded-xl overflow-hidden card-hover">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-xs rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FiCalendar size={14} />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FiClock size={14} />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <button className="flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors">
                  Read More
                  <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -4,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
              className="glass rounded-xl overflow-hidden card-hover"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-600">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <FiClock size={12} />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs">{post.date}</span>
                  <button className="flex items-center gap-1 text-accent-blue hover:text-accent-cyan transition-colors text-sm">
                    Read
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentBlog?.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-xl overflow-hidden card-hover"
          >
            <img
              src={currentBlog?.image}
              alt={currentBlog?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-600">
                  {currentBlog?.category}
                </span>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <FiClock size={12} />
                  {currentBlog?.readTime}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {currentBlog?.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {currentBlog?.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">{currentBlog?.date}</span>
                <button className="flex items-center gap-1 text-accent-blue hover:text-accent-cyan transition-colors text-sm">
                  Read
                  <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevBlog}
              className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-300 hover:text-accent-blue transition-colors border border-slate-700"
            >
              <FiArrowLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {allPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBlogIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentBlogIndex 
                      ? 'bg-accent-blue' 
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextBlog}
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

export default Blog;
