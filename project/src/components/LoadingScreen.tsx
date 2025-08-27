import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="relative">
        <motion.div 
          animate={{ 
            rotate: 360,
            borderColor: ['#3B82F6', '#10B981', '#3B82F6'],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <span className="font-mono text-sm text-green-400">Loading...</span>
            <div className="mt-2 space-y-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1.5
                  }}
                  className="h-0.5 bg-green-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;