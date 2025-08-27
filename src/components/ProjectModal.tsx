import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  details: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="aspect-video bg-gray-800 overflow-hidden rounded-t-lg">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-6">{project.details}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Code source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Voir la démo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;