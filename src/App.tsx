import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, X } from 'lucide-react';

// Types
interface Project {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}

// Projects data
const projects: Project[] = [
  {
    title: "PCB SmartLight",
    description: `Développement d'un prototype de carte électronique avec dossier de fabrication, intégrant une analyse fonctionnelle et technique. 
Le projet inclut le pilotage automatique et manuel, permettant le contrôle de l'éclairage en fonction de la luminosité ambiante ou via une télécommande infrarouge, 
avec ajustement de l'intensité et de la couleur pour les LEDs RGB. 


- Auto-évaluation : 50 %`,
    thumbnail: "https://raw.githubusercontent.com/NexusAILab/cdn2/main/media/cee1b55fe4ee4982812f09c1de7ae1d6.png",
    images: [
      "https://raw.githubusercontent.com/NexusAILab/cdn2/main/media/cee1b55fe4ee4982812f09c1de7ae1d6.png"
    ]
  },
  {
    title: "Assistant Domotique",
    description: `Création d'un assistant domotique alimenté par un ESP32, intégrant divers capteurs (température, gaz, lumière), un écran tactile, un lecteur RFID et un relais. Le système est programmé à l'aide de l'IDE Arduino, permettant la visualisation des données des capteurs et le contrôle du relais depuis l'écran tactile ainsi que via une interface web développée en HTML, CSS et JavaScript. Un programme de test et une procédure détaillée ont également été élaborés pour assurer la maintenance et le bon fonctionnement du système. En parallèle, vérification et mise en service d'un système domotique sur une maquette dédiée, incluant des contrôles hors tension et des tests sous tension pour garantir la sécurité et l'efficacité du système. 

    
    - Auto-évaluation : 85 %`,
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
    ]
  }
];

// Loading Screen Component
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

// Navbar Component
const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
              𝓒
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                À Propos
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projets
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Expérience
              </a>
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
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
        onClick={(e) => e.stopPropagation()}
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
            
            <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
            
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
};

// Main App Component
function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full bg-gradient-to-b from-transparent to-[#0a0a0a]/90">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400"
            >
              À la frontière de la technologie et de la sécurité,
              <br />découvrez mon univers
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-400 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-[#0a0a0a]"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-green-400 overflow-hidden">
                <div className="w-full h-full bg-gray-800"></div>
              </div>
            </motion.div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">À Propos</h2>
              <p className="text-gray-300 mb-6">
                Les systèmes embarqués sont omniprésents dans notre quotidien : ils équipent plus de 98 % des dispositifs électroniques modernes, des smartphones aux appareils médicaux en passant par les véhicules. Leur importance ne cesse de croître avec l'évolution technologique et la demande pour des produits de plus en plus intelligents et connectés.
                <br /><br />
                C'est cette réalité qui m'a conduit à choisir un BUT GEII, spécialisé en électronique et systèmes embarqués. Cette formation me permet de développer des compétences en électronique, en informatique et en programmation, me dotant ainsi d'une expertise complète en hardware et software.
                <br /><br />
                Pendant ce cursus, j'ai eu l'opportunité de travailler sur divers projets, tant en équipe qu'en individuel. 
                Par exemple, j'ai conçu un assistant domotique contrôlable à distance via un site web, et j'ai programmé un robot autonome en C avec une interface homme-machine (IHM) en C#.
                <br /><br />
                Si vous êtes un acteur dans les domaines de l'éléctronique et/ou de l'informatique à la recherche d'un stagiaire en 3ème année de BUT GEII, n'hésitez pas à me contacter.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/chakib-mallemm/" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:mallemchakib@gmail.com" 
                   className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full bg-gray-500/10 hover:bg-gray-500/20 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Expérience Professionnelle</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-emerald-500">
              {[
                {
                  title: "Stage - Technicien électronique ",
                  company: "CTV Électronique, Toulon",
                  period: "2024",
                  description: "Maintenance curative de divers systèmes électroniques en équipe"
                },
                {
                  title: "Stage de découverte - Employé de rayon",
                  company: "Casino, La Valette-du-Var",
                  period: "2018",
                  description: "Mise en rayon"
                }
              ].map((exp, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-10 mt-2">
                    <div className="bg-emerald-500 w-4 h-4 rounded-full" />
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-emerald-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="#" className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors">
                <Download className="w-5 h-5" />
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Formation</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-blue-500">
              {[
                {
                  title: "B.U.T Génie Électrique et Informatique Industrielle",
                  school: "Université de Toulon",
                  period: "2022 - ",
                  description: "Spécialisation en Électronique et Systèmes Embarqués"
                },
                {
                  title: "Baccalauréat général, mention Bien",
                  school: "Lycée Techniques Rouvière, Toulon",
                  period: "2022",
                  description: "Spécialités Mathématiques et Physique-Chimie, option euro-anglais"
                }
              ].map((edu, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-10 mt-2">
                    <div className="bg-blue-500 w-4 h-4 rounded-full" />
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                    <p className="text-blue-400 mb-2">{edu.school}</p>
                    <p className="text-gray-400 mb-4">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;