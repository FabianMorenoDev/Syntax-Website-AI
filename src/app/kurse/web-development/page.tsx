import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Code, Globe, Database, Smartphone } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata = {
  title: 'Web Development Kurs - Syntax Institut | Vollzeit Weiterbildung mit Bildungsgutschein',
  description: 'Werde Full-Stack Web Developer in 6 Monaten. HTML, CSS, JavaScript, React, Node.js. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, IHK-Abschluss.',
  keywords: 'Web Development, Frontend, Backend, React, Node.js, JavaScript, HTML, CSS, Bildungsgutschein, Weiterbildung, AZAV',
};

export default function WebDevelopmentPage() {
  const modules = [
    {
      week: 'Modul 1 (4 Monate)',
      title: 'Produktdesign',
      description: 'UI/UX Design, Designprinzipien, Figma & Framer, Projektmanagement, Produktstrategie',
      skills: ['UI/UX Design', 'Designprinzipien', 'Figma & Framer', 'Projektmanagement', 'Produktstrategie', 'User Research'],
      icon: Globe
    },
    {
      week: 'Modul 2 (3 Monate)',
      title: 'Web-Grundlagen',
      description: 'HTML & CSS, Bootstrap, JavaScript & TypeScript, Publishing',
      skills: ['HTML5 & CSS3', 'Bootstrap Framework', 'JavaScript ES6+', 'TypeScript', 'Responsive Design', 'Git & Publishing'],
      icon: Code
    },
    {
      week: 'Modul 3 (2,5 Monate)',
      title: 'Frontend-Frameworks',
      description: 'React, Next.js, Angular/Vue (Einblick), Tailwind CSS, Strapi, Deployment',
      skills: ['React.js', 'Next.js', 'Angular/Vue Einblick', 'Tailwind CSS', 'Strapi CMS', 'Deployment Strategien'],
      icon: Database
    },
    {
      week: 'Modul 4 (2,5 Monate)',
      title: 'Spezialisierung',
      description: 'Node.js, Express.js, Authentifizierung, Datenbanken, Performance & Automation',
      skills: ['Node.js & Express.js', 'Authentifizierung', 'Datenbank Design', 'Performance Optimization', 'Automation', 'Testing'],
      icon: Award
    }
  ];

  const careerPaths = [
    { title: 'Frontend Developer', salary: '35.000 - 55.000€', companies: 'Startups, Agenturen, Mittelstand' },
    { title: 'Backend Developer', salary: '40.000 - 65.000€', companies: 'Tech-Unternehmen, Fintech, E-Commerce' },
    { title: 'Full-Stack Developer', salary: '45.000 - 70.000€', companies: 'Alle Branchen, Remote möglich' },
    { title: 'JavaScript Developer', salary: '42.000 - 68.000€', companies: 'Software-Häuser, Consulting' }
  ];

  const technologies = [
    { name: 'HTML5', level: 'Expert', color: 'bg-orange-100 text-orange-700' },
    { name: 'CSS3', level: 'Expert', color: 'bg-blue-100 text-blue-700' },
    { name: 'JavaScript', level: 'Expert', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'React.js', level: 'Advanced', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Node.js', level: 'Advanced', color: 'bg-green-100 text-green-700' },
    { name: 'Express.js', level: 'Advanced', color: 'bg-gray-100 text-gray-700' },
    { name: 'MongoDB', level: 'Intermediate', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'SQL', level: 'Intermediate', color: 'bg-indigo-100 text-indigo-700' },
    { name: 'TypeScript', level: 'Intermediate', color: 'bg-blue-100 text-blue-700' },
    { name: 'Git', level: 'Advanced', color: 'bg-red-100 text-red-700' }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-purple-900 to-syntax-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-syntax-yellow-800 transition-colors">
                <Award className="w-4 h-4 mr-2" />
                Vollzeit • 12 Monate • IHK-Zertifikat
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display">
                Web Development
                <span className="block text-syntax-yellow-900">Weiterbildung</span>
              </h1>
              
              <p className="text-xl text-syntax-purple-100 leading-relaxed">
                Werde Full-Stack Web Developer in 12 Monaten. Von HTML/CSS bis zu modernen 
                Frameworks wie React und Node.js. 100% praxisorientiert mit echten Projekten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="xl">
                  Kostenlose Beratung buchen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl">
                  Infopaket herunterladen
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">48</div>
                  <div className="text-sm text-syntax-purple-100">Wochen Intensiv</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">100%</div>
                  <div className="text-sm text-syntax-purple-100">Förderung möglich</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">95%</div>
                  <div className="text-sm text-syntax-purple-100">Vermittlungsquote</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Web Development Code auf Monitor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-primary-900">45.000€</div>
                  <div className="text-sm text-gray-600">Ø Einstiegsgehalt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Dein Lernpfad zum Web Developer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In 12 Monaten vom Anfänger zum Full-Stack Developer. Modularer Aufbau mit direktem Praxisbezug.
            </p>
          </div>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{module.week}</div>
                        <h3 className="text-xl font-bold text-syntax-primary-900">{module.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <p className="text-gray-700">{module.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 gap-2">
                      {module.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Technologien & Tools
            </h2>
            <p className="text-xl text-gray-600">
              Lerne die gefragtesten Technologien der Web-Entwicklung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${tech.color}`}>
                  {tech.level}
                </div>
                <h3 className="font-semibold text-syntax-primary-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Karrieremöglichkeiten
            </h2>
            <p className="text-xl text-gray-600">
              Web Developer sind in allen Branchen gefragt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">{career.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{career.salary}</div>
                <p className="text-sm text-gray-600">{career.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  &ldquo;Nach 6 Monaten Web Development Weiterbildung habe ich meinen Traumjob als Frontend Developer gefunden. 
                  Die Kombination aus Theory und Praxis war perfekt!&rdquo;
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src="/images/company/julie_sales.jpg" 
                    alt="Anna Weber"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-syntax-primary-900">Anna Weber</div>
                    <div className="text-gray-600">Frontend Developer bei TechStartup Berlin</div>
                    <div className="text-sm text-gray-500">Vorher: Bürokauffrau</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Erfolgsgeschichte: Vom Quereinsteiger zum Developer
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Anna hat nach ihrer Ausbildung zur Bürokauffrau den Sprung in die IT gewagt. 
                Mit dem Bildungsgutschein konnte sie unsere Web Development Weiterbildung 
                kostenfrei absolvieren.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">6 Monate intensive Weiterbildung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Portfolio mit 5 echten Projekten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Festanstellung nach 2 Wochen Jobsuche</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">150% Gehaltssteigerung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                  Kursdetails
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-syntax-primary-900 mb-4">Unterrichtsformat</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Vollzeit: Montag bis Freitag, 9:00 - 16:30 Uhr</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Live-Unterricht mit erfahrenen Entwicklern</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Praktische Projekte ab dem ersten Tag</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Max. 16 Teilnehmer pro Kurs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-syntax-primary-900 mb-4">Prüfung & Zertifizierung</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        <span>IHK-Zertifikat &quot;Geprüfte/r Web Developer&quot;</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        <span>SYNTAX Portfolio-Zertifikat</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        <span>Teilnahmebescheinigungen für alle Module</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-4">
                  Kostenfrei mit Bildungsgutschein
                </h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-syntax-primary-900 line-through">14.500€</div>
                    <div className="text-2xl font-bold text-green-600">0€</div>
                    <div className="text-sm text-gray-600">mit Bildungsgutschein</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Kursgebühren:</span>
                      <span className="font-medium">übernommen</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prüfungsgebühren:</span>
                      <span className="font-medium">übernommen</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lernmaterialien:</span>
                      <span className="font-medium">übernommen</span>
                    </div>
                  </div>

                  <Button variant="accent" size="lg" fullWidth>
                    Kostenlose Beratung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    Wir unterstützen dich bei der Beantragung
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Nächste Starttermine</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">15. Januar 2024</span>
                    <span className="text-green-600 font-medium">Verfügbar</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">12. Februar 2024</span>
                    <span className="text-green-600 font-medium">Verfügbar</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">11. März 2024</span>
                    <span className="text-orange-600 font-medium">Wenige Plätze</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-syntax-primary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine Web Developer Karriere
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Sichere dir jetzt deinen Platz im nächsten Web Development Kurs. 
            100% gefördert mit Bildungsgutschein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              Kostenlose Beratung buchen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              Alle Kurse ansehen
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 