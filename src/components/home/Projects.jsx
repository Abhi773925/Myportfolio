import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";
// import weather from "../../assets/weather1.png";
import code from "../../../public/code.png"

const Projects = () => {
  const [hoverProject, setHoverProject] = useState(null);

  return (
    <>
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isHovered={hoverProject === project.id}
            onHover={() => setHoverProject(project.id)}
            onLeave={() => setHoverProject(null)}
          />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project, index, isHovered, onHover, onLeave }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="card card-hover overflow-hidden flex flex-col"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-48 bg-slate-200 dark:bg-slate-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600">
            <span className="text-sm">No image available</span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.featured && (
            <span className="bg-primary-500/90 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              Featured
            </span>
          )}
          <span className="bg-slate-900/70 text-white dark:bg-white/10 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
            <Calendar size={12} />
            {project.period}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !px-3 !py-1.5 text-sm"
            >
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-3 !py-1.5 text-sm"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          {project.detailLink && (
            <Link
              to={project.detailLink}
              className="btn btn-secondary !px-3 !py-1.5 text-sm ml-auto"
            >
              Details
              <ArrowRight size={16} className="ml-1" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

const projectsData = [
  {
    id: "prepmate",
    title: "PrepMate",
    description:
      "PrepMate simplifies exam preparation with a Mock Test Series, detailed Performance Analysis, integrated study materials, and a query resolution system to boost learning outcomes and exam success.",
    image: "/prepmate.png", // Update image accordingly
    tech: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful API",
    ],
    github: "https://github.com/Abhi773925",
    liveLink: "https://insightarena.netlify.app/",
    featured: true,
    period: "Sep 2024 - Dec 2024",
    detailLink: "/projects/prepmate",
  },
  {
    id: "cvstudio",
    title: "CVStudio",
    description:
      "CVStudio streamlines the resume creation process with an intuitive Resume Builder and ATS Tracker, offering ATS optimization and real-time feedback to enhance job application success.",
    image: "/cvstudio.png", // Update image accordingly
    tech: [
      "React",
      "Tailwind CSS",
      "LLM",
      "RESTful API",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Abhi773925",
    liveLink: "https://cvstudio.netlify.app/",
    featured: true,
    period: "Mar 2024 - May 2024",
    detailLink: "/projects/cvstudio",
  },
  {
    id: "zidio-manager",
    title: "Zidio Manager (Internship Project)",
    description:
      "Contributed to Zidio Manager during Web Development Internship, enhancing team collaboration with smart project tracking, role-based access control (Admin, Sub-Admin, Viewer), custom AI bot integration, and scalable workspace setups for startups and enterprises.",
    image: "/zidio.png", // Update image accordingly
    tech: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful API",
    ],
    github: "https://github.com/Abhi773925",
    liveLink: "https://zidio-manager.vercel.app/",
    featured: true,
    period: "Feb 2025 - Mar 2025",
    detailLink: "/projects/zidio-manager",
  },
  {
    id: "dsa-sheet-tracker",
    title: "DSA Sheet Tracker (Ongoing Project)",
    description:
      "A personal platform for tracking DSA progress efficiently across famous sheets like Striver's SDE Sheet, Love Babbar's DSA Sheet, and Leetcode Top 150. Features include categorized questions, daily targets, progress tracking, filtering by difficulty, and bookmarking unsolved problems.",
    image: code, // Update image accordingly
    tech: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Abhi773925", // Update if separate repo
    liveLink: "https://www.prepmate.site/", // Update when live
    featured: true,
    period: "Apr 2025 - Present",
    detailLink: "/projects/dsa-sheet-tracker",
  },
];
