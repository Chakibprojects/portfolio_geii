import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-300">{project.description}</p>
            
            {project.images[1] && (
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={project.images[1]} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal; 