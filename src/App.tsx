import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['start', 'components', 'assembly', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-slate-700 hover:text-primary transition-colors capitalize"
                >
                  {section === 'start' ? 'About' : section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              {['start', 'components', 'assembly', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-slate-700 hover:text-primary transition-colors capitalize py-2"
                >
                  {section === 'start' ? 'About' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="start" className="pt-24 pb-16">
        <div className="section-container">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/avatar.jpg"
              alt="Profile photo of Andrea Rampin"
              className="w-32 h-32 rounded-full shadow-lg border-4 border-white"
            />
          </div>

          {/* Main Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-primary to-emerald-600 bg-clip-text text-transparent">
              DIY Sous Vide Machine
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 italic max-w-4xl mx-auto leading-relaxed">
              "It's going to revolutionize home cooking in ways that the microwave didn't even
              dream of doing"
            </p>
            <p className="text-slate-500 mt-2">— Heston Blumenthal</p>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-slate-900">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/huY_v1hRdYE"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Sous Vide?</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Sous-vide is a method of cooking in which food is sealed in airtight plastic bags
                then placed in a water bath or in a temperature-controlled steam environment for
                longer than normal cooking times (usually 1 to 6 hours, up to 48 or more in some
                select cases) at an accurately regulated temperature much lower than normally used
                for cooking, typically around 55 to 60 °C (131 to 140 °F) for meat and higher for
                vegetables.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                The intent is to cook the item evenly, ensuring that the inside is properly cooked
                without overcooking the outside, and retain moisture.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Sous-vide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 text-primary hover:text-emerald-600 font-medium transition-colors"
              >
                Learn more on Wikipedia →
              </a>
              <img
                src="/images/chart-fish.jpg"
                alt="Sous vide temperature and time chart for cooking fish"
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section id="components" className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">What You Need</h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            All the required components and tools can be easily found online or at the closest
            hardware store. In Melbourne (Australia), Bunnings and Myer are selling everything you
            need except for the Temperature Controller.
          </p>

          {/* Component Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What you will need</h3>
            <ul className="space-y-3 text-slate-700">
              <li>
                🔥 <strong>Water Boiler</strong> (1200W heating element)
              </li>
              <li>
                💧 <strong>Water Pump</strong> (low voltage, submersible)
              </li>
              <li>
                🌡️ <strong>Temperature Controller</strong> (Inkbird ITC-1000 or similar)
              </li>
              <li>
                🔧 <strong>Sealant</strong> (Temperature and water resistant)
              </li>
              <li>
                📦 <strong>Container</strong> (Esky / Food-grade, 26L+)
              </li>
              <li>
                🛠️ <strong>General Tools:</strong> drill, electrical tape, screws, cable ties, power cable with plug
              </li>
            </ul>
          </div>

          {/* Component Photos */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setLightboxImage('/images/__20161009_00002.jpg')}
              >
                <img
                  src="/images/__20161009_00002_small.jpg"
                  alt="Water boiler, circulation pump, and temperature controller components"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setLightboxImage('/images/__20161009_00004.jpg')}
              >
                <img
                  src="/images/__20161009_00004_small.jpg"
                  alt="Esky cooler container for water bath"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setLightboxImage('/images/__20161009_00005.jpg')}
              >
                <img
                  src="/images/__20161009_00005_small.jpg"
                  alt="General tools: drill, cables, electrical supplies"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setLightboxImage('/images/__20161009_00006.jpg')}
              >
                <img
                  src="/images/__20161009_00006_small.jpg"
                  alt="Additional electrical components and tools"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assembly Section */}
      <section id="assembly" className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">How to Assemble It</h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            I have added the layout that I have used for connecting the Temperature Controller and
            the other components: Pump, Heater and Sensor. The circuit is really simple and it can
            be easily reproduced but, if you have any issues, please do not hesitate to contact me.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Wiring Diagram</h3>
              <div className="bg-slate-100 rounded-lg p-4">
                <img
                  src="/images/circuit.png"
                  alt="Wiring diagram showing connections between temperature controller, heating element, pump, and power supply"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-slate-600 mt-4">
                Connect the heating element and pump through the temperature controller following
                the circuit diagram above.
              </p>
            </div>

            {/* Assembly Steps */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  step: '1',
                  title: 'Gather Components',
                  desc: 'Collect temperature controller, heating element, pump, container, and electrical components',
                },
                {
                  step: '2',
                  title: 'Wire Temperature Controller',
                  desc: 'Connect heating element and pump through temperature controller following circuit diagram',
                },
                {
                  step: '3',
                  title: 'Install in Container',
                  desc: 'Mount components in food-safe container with proper sealing',
                },
                {
                  step: '4',
                  title: 'Test and Calibrate',
                  desc: 'Test temperature accuracy and water circulation before use',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Machine Photos */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Final Assembly</h3>
              <p className="text-slate-600 mb-6">
                Here are some pictures that illustrate the final machine with all the cabling.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00002.jpg')}
                >
                  <img
                    src="/images/20161019_00002_small.jpg"
                    alt="Completed sous vide machine with all components installed"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00007.jpg')}
                >
                  <img
                    src="/images/20161019_00007_small.jpg"
                    alt="Top view of assembled sous vide controller and wiring"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00008.jpg')}
                >
                  <img
                    src="/images/20161019_00008_small.jpg"
                    alt="Close-up of temperature controller display and controls"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00009.jpg')}
                >
                  <img
                    src="/images/20161019_00009_small.jpg"
                    alt="Heating element and pump installation in container"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00010.jpg')}
                >
                  <img
                    src="/images/20161019_00010_small.jpg"
                    alt="Internal wiring and cable management"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00011.jpg')}
                >
                  <img
                    src="/images/20161019_00011_small.jpg"
                    alt="Side view showing temperature probe placement"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow max-w-md cursor-pointer"
                  onClick={() => setLightboxImage('/images/20161019_00001.jpg')}
                >
                  <img
                    src="/images/20161019_00001_small.jpg"
                    alt="Complete sous vide machine ready for operation"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact Me</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              If you want to have more details regarding this project or you just want to get in
              touch with me please do not hesitate to send me an email at{' '}
              <strong className="text-primary">andrea.rampin [at] gmail.com</strong>.
            </p>

            <div className="flex justify-center">
              <div
                className="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="vertical"
                data-theme="light"
                data-vanity="andrea-rampin"
              >
                <a
                  className="LI-simple-link"
                  href="https://au.linkedin.com/in/andrea-rampin?trk=profile-badge"
                >
                  Andrea Rampin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
