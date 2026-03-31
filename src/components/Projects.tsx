import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Bhagwad Geeta Chatbot',
    description: 'A spiritual AI chatbot inspired by the Bhagavad Gita, providing meaningful guidance, real-time responses, and insightful answers to life’s questions.',
    image: 'https://github.com/Harsh1118/Bhagwad-Geeta-Chat-Bot/blob/main/81k974mPmwL.jpg',
    tags: ['JavaScript', 'HTML', 'CSS', 'Google Documentation'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: 'https://github.com/Harsh1118/Bhagwad-Geeta-Chat-Bot',
    featured: true,
  },
  {
    id: 2,
    title: 'Chat-Gpt Clone',
    description: 'An AI-powered conversational platform with real-time responses, intelligent interactions, and a user-friendly interface.',
    image: 'https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2024/11/Generative-AI-edited.webp',
    tags: ['ReactTS', 'TypeScript', 'TSX'],
    category: 'Website',
    liveUrl: '#',
    githubUrl: 'https://github.com/Harsh1118/Chat-Gpt_clone/tree/main/my-app',
    featured: true,
  },
  {
    id: 3,
    title: 'Bike Price Prediction Model',
    description: 'An AI-powered model that predicts bike prices based on key factors like brand, mileage, condition, and usage data.',
    image: 'data:image/jpeg;base64,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',
    tags: ['Python', 'Machine Learning', 'Streamlit'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: 'https://github.com/Harsh1118/Bike-Price-Prediction-Model',
    featured: true,
  },
  {
    id: 4,
    title: 'Inventory Management System',
    description: 'An inventory management system designed to track stock, manage products, and monitor inventory levels with a clean and efficient interface.',
    image: 'https://bizom.com/wp-content/uploads/2023/04/Unlocking-the-Benefits-of-Inventory-Management-Software-blog-banner-image.jpg',
    tags: ['C++','OOPs'],
    category: 'Terminal',
    liveUrl: '#',
    githubUrl: 'https://github.com/Harsh1118/OOPS/blob/main/Inventory_management_system.cpp',
    featured: true,
  }
];

const categories = ['Full Stack', 'Website', 'AI/ML', 'Terminal'];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 md:py-32 relative bg-[rgb(var(--muted))]/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-500 font-medium">My Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h2>
          <p className="text-[rgb(var(--muted-foreground))] mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with care and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'glass hover:bg-[rgb(var(--muted))]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative rounded-2xl overflow-hidden glass ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] text-xs font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[rgb(var(--muted-foreground))] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-[rgb(var(--muted))] text-[rgb(var(--muted-foreground))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Harsh1118"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-semibold hover:bg-[rgb(var(--muted))] transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
