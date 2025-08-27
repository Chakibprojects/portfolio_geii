@@ .. @@
       <div className="relative z-10 flex items-center justify-center h-full bg-gradient-to-b from-transparent to-[#0a0a0a]/90">
         <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-400 animate-pulse blur-xl opacity-50"></div>
              <div className="relative text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 border-4 border-gradient-to-r from-blue-500 to-green-400 rounded-full w-32 h-32 flex items-center justify-center backdrop-blur-sm bg-black/20">
                𝓒
              </div>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400"
          >
            À la frontière de la technologie et de la sécurité,
            <br />découvrez mon univers
          </motion.h1>
                 <div className="p-6">
                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                   <p className="text-gray-400 line-clamp-2">{project.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm text-blue-400 font-medium">Auto-évaluation:</span>
                    <div className="flex items-center gap-1">
                      {project.description.match(/Auto-évaluation\s*:\s*(\d+)\s*%/) && (
                        <>
                          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-300"
                              style={{ width: `${project.description.match(/Auto-évaluation\s*:\s*(\d+)\s*%/)?.[1] || 0}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-green-400 font-bold">
                            {project.description.match(/Auto-évaluation\s*:\s*(\d+)\s*%/)?.[1]}%
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                 </div>
              </motion.div>