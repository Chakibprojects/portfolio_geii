import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                𝓒
              </span>
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
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
            À la frontière de la technologie et de la sécurité,
            <br />découvrez mon univers
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-400 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-gray-900"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-green-400 overflow-hidden">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">À Propos</h2>
              <p className="text-gray-300 mb-6">
                Les systèmes embarqués sont omniprésents dans notre quotidien : ils équipent plus de 98 % des dispositifs électroniques modernes, des smartphones aux appareils médicaux en passant par les véhicules. Leur importance ne cesse de croître avec l'évolution technologique et la demande pour des produits de plus en plus intelligents et connectés.
                <br /><br />
                C'est cette réalité qui m'a conduit à choisir un BUT GEII, spécialisé en électronique et systèmes embarqués. Cette formation me permet de développer des compétences en électronique, en informatique et en programmation, me dotant ainsi d'une expertise complète en hardware et software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PCB SmartLight</h3>
                <p className="text-gray-400">Développement d'un prototype de carte électronique avec dossier de fabrication...</p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Assistant Domotique</h3>
                <p className="text-gray-400">Création d'un assistant domotique alimenté par un ESP32...</p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Robot détecteur d'obstacles</h3>
                <p className="text-gray-400">Programmation et supervision d'un robot autonome...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="text-center space-y-4">
            <p className="text-gray-300">Contactez-moi pour discuter de vos projets</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:mallemchakib@gmail.com" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors">
                Email
              </a>
              <a href="https://www.linkedin.com/in/chakib-mallemm/" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;