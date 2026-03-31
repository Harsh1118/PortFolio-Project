import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import photo from "../assets/New_Resume_Photo.jpeg"

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'DSA', level: 80 },
  { name: 'JavaScript', level: 95 },
  { name: 'FrontEnd', level: 75 },
];

const experiences = [
  {
    year: 'March 2026 - Present',
    title: 'Software Intern',
    company: 'Krumos.',
    description: `Developed modern and responsive web applications using React and TypeScript.
Focused on clean code, reusable components, and optimizing performance for a smooth user experience.`,
  }
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 font-medium">Get to know me</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                  <img
                    src={ photo }
                    alt="Harsh Dubey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    5+
                  </div>
                  <div>
                    <p className="font-semibold">Years</p>
                    <p className="text-sm text-[rgb(var(--muted-foreground))]">Experience</p>
                  </div>
                </div>
              </motion.div> */}
{/* 
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    50+
                  </div>
                  <div>
                    <p className="font-semibold">Projects</p>
                    <p className="text-sm text-[rgb(var(--muted-foreground))]">Completed</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A dedicated developer focused on building meaningful and high-quality digital experiences
            </h3>

            <p className="text-[rgb(var(--muted-foreground))] mb-6 leading-relaxed">
              I'm a creative developer passionate about building modern, functional, and user-focused digital experiences.
              I enjoy creating scalable web applications using the latest technologies, with a strong focus on clean code and seamless performance.
            </p>

            <p className="text-[rgb(var(--muted-foreground))] mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, improving my skills, and working on personal projects.
              I enjoy learning, building, and continuously growing as a developer.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">My Skills</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  animate={isInView ? { opacity: 1, width: '100%' } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-[rgb(var(--muted-foreground))]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[rgb(var(--muted))] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Experience</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-2xl p-6 inline-block">
                      <span className="text-indigo-500 text-sm font-medium">{exp.year}</span>
                      <h4 className="text-xl font-bold mt-1">{exp.title}</h4>
                      <p className="text-purple-500 font-medium">{exp.company}</p>
                      <p className="text-[rgb(var(--muted-foreground))] mt-2 text-sm max-w-xs">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative hidden md:block">
                    <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
