import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Code, Terminal, Cpu, Smartphone, BookOpen, Briefcase, Target } from 'lucide-react';
import Button from '../../components/ui/Button';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Programmiergrundlagen Kurs - Syntax Institut | Swift Xcode Weiterbildung mit Bildungsgutschein',
  description: 'Lerne Swift und Programmiergrundlagen in 3 Monaten. Xcode, iOS Entwicklung Basics. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert.',
  keywords: 'Programmiergrundlagen, Swift, Xcode, iOS Entwicklung, Kontrollstrukturen, App Grundlagen, Bildungsgutschein',
};

export default function ProgrammiergrundlagenPage() {
  // Career Path Integration
  const careerPathInfo = {
    title: 'App Development Karrierepfad',
    position: 'Kurs 2 von 4',
    previousCourse: {
      id: 'ux-ui-design',
      title: 'UX/UI Design',
      duration: '4 Monate'
    },
    nextCourse: {
      id: 'ios-app-entwicklung',
      title: 'iOS App-Entwicklung',
      duration: '2,5 Monate'
    },
    totalDuration: '12 Monate',
    pathway: [
      { title: 'UX/UI Design', current: false, duration: '4 Mon.' },
      { title: 'Programmiergrundlagen', current: true, duration: '3 Mon.' },
      { title: 'iOS App-Entwicklung', current: false, duration: '2,5 Mon.' },
      { title: 'Android App-Entwicklung', current: false, duration: '2,5 Mon.' }
    ]
  };

  const learningModules = [
    {
      week: 'Wochen 1-3',
      title: 'Swift Fundamentals',
      description: 'Grundlagen der Swift-Programmiersprache und Syntax',
      skills: ['Swift Syntax', 'Variablen & Konstanten', 'Datentypen', 'Operatoren', 'String Handling', 'Optionals'],
      icon: Code
    },
    {
      week: 'Wochen 4-6',
      title: 'Kontrollstrukturen & Funktionen',
      description: 'Programmlogik mit Schleifen, Bedingungen und Funktionen',
      skills: ['If-Else Statements', 'For & While Loops', 'Switch Statements', 'Funktionen', 'Parameter & Return Values', 'Closures Basics'],
      icon: Terminal
    },
    {
      week: 'Wochen 7-9',
      title: 'Objektorientierung & Xcode',
      description: 'Klassen, Objekte und Einführung in die Xcode Entwicklungsumgebung',
      skills: ['Klassen & Objekte', 'Properties & Methods', 'Vererbung', 'Xcode Interface', 'Playground', 'Debugging Basics'],
      icon: Cpu
    },
    {
      week: 'Wochen 10-12',
      title: 'App-Grundgerüste',
      description: 'Erste einfache iOS Apps und App-Struktur verstehen',
      skills: ['iOS App Basics', 'View Controller', 'Interface Builder', 'Outlets & Actions', 'App Lifecycle', 'Simple UI Elements'],
      icon: Smartphone
    }
  ];

  const careerPaths = [
    { title: 'Junior iOS Developer', salary: '38.000 - 58.000€', companies: 'App-Agenturen, Startups, Tech-Unternehmen' },
    { title: 'Mobile Developer', salary: '40.000 - 62.000€', companies: 'E-Commerce, Fintech, Gaming' },
    { title: 'Swift Developer', salary: '42.000 - 65.000€', companies: 'Apple Ecosystem, Enterprise Apps' },
    { title: 'App Developer', salary: '45.000 - 68.000€', companies: 'Product Companies (mit Erfahrung)' }
  ];

  const technologies = [
    { name: 'Swift', level: 'Expert', color: 'bg-orange-100 text-orange-700' },
    { name: 'Xcode', level: 'Advanced', color: 'bg-blue-100 text-blue-700' },
    { name: 'iOS SDK', level: 'Intermediate', color: 'bg-gray-100 text-gray-700' },
    { name: 'Playground', level: 'Advanced', color: 'bg-green-100 text-green-700' },
    { name: 'Interface Builder', level: 'Intermediate', color: 'bg-purple-100 text-purple-700' },
    { name: 'Git', level: 'Intermediate', color: 'bg-red-100 text-red-700' }
  ];

  const projects = [
    {
      title: 'Calculator App',
      description: 'Einfacher Taschenrechner mit grundlegenden mathematischen Operationen',
      technologies: ['Swift', 'Xcode', 'Interface Builder']
    },
    {
      title: 'To-Do List',
      description: 'Task-Management App mit lokaler Datenspeicherung',
      technologies: ['Swift', 'Core Data', 'Table Views']
    },
    {
      title: 'Weather Display',
      description: 'Einfache Wetter-App mit fest programmierten Daten',
      technologies: ['Swift', 'UI Components', 'Data Handling']
    }
  ];

  const programmingConcepts = [
    {
      title: 'Variablen & Datentypen',
      description: 'Grundbausteine der Programmierung',
      examples: ['var name = "Swift"', 'let age = 25', 'var isTrue = false']
    },
    {
      title: 'Kontrollstrukturen',
      description: 'Programmfluss steuern',
      examples: ['if-else Bedingungen', 'for-in Schleifen', 'switch Statements']
    },
    {
      title: 'Funktionen',
      description: 'Wiederverwendbarer Code',
      examples: ['func calculate()', 'Parameter übergeben', 'Return Values']
    },
    {
      title: 'Objektorientierung',
      description: 'Strukturierter Code',
      examples: ['class Person', 'Properties & Methods', 'Vererbung']
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Programmiergrundlagen"
        subtitle="Swift & Xcode Basics – der technische Einstieg in die iOS App-Entwicklung"
        badge={{
          icon: Award,
          text: "Vollzeit • 3 Monate • iOS-Playground-App"
        }}
        backgroundImage="/images/stock/co-working-people-working-together.jpg"
      />

      {/* Career Path Integration */}
      <section className="py-16 bg-gradient-to-br from-syntax-orange-50 to-syntax-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-syntax-primary-900 mb-3 font-clash-display">
                Teil des App Development Karrierepfads
              </h2>
              <p className="text-lg text-modern-gray-600">
                Dieser Kurs ist <strong>Kurs 2 von 4</strong> im App Development Karrierepfad. Nach UX/UI Design lernst du die technische Umsetzung.
              </p>
            </div>

            {/* Career Path Progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-modern-gray-600">Karrierepfad-Fortschritt</span>
                <span className="text-sm text-syntax-orange-900 font-medium">{careerPathInfo.position}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {careerPathInfo.pathway.map((course, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    course.current 
                      ? 'bg-syntax-orange-100 border-syntax-orange-300 text-syntax-orange-900' 
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    <div className="text-center">
                      <div className="text-sm font-medium">{course.title}</div>
                      <div className="text-xs mt-1">{course.duration}</div>
                      {course.current && (
                        <div className="mt-2 inline-block px-2 py-1 bg-syntax-orange-200 text-syntax-orange-900 rounded-full text-xs font-medium">
                          Aktueller Kurs
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-syntax-yellow-50 to-syntax-yellow-100 p-6 rounded-xl border border-syntax-yellow-200">
                <div className="flex items-center mb-3">
                  <BookOpen className="w-6 h-6 text-syntax-yellow-900 mr-3" />
                  <h3 className="text-lg font-bold text-syntax-primary-900">Einzelkurs buchen</h3>
                </div>
                <p className="text-syntax-primary-900 mb-4 text-sm">
                  Perfekt für Quereinsteiger in die Programmierung. Keine Vorkenntnisse erforderlich.
                </p>
                <Link href="/kontakt?kurs=programmiergrundlagen">
                  <Button variant="outline" fullWidth>
                    Programmiergrundlagen einzeln buchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-syntax-orange-50 to-syntax-orange-100 p-6 rounded-xl border border-syntax-orange-200">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-syntax-orange-900 mr-3" />
                  <h3 className="text-lg font-bold text-syntax-primary-900">Kompletter Karrierepfad</h3>
                </div>
                <p className="text-syntax-primary-900 mb-4 text-sm">
                  Buche den kompletten App Development Pfad und werde Mobile Developer in 12 Monaten.
                </p>
                <Link href="/karrierepfade/app-development">
                  <Button variant="primary" fullWidth>
                    App Development Karrierepfad
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Concepts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Programmier-Konzepte einfach erklärt
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Von einfachen Variablen bis zu komplexen Objekten – lerne Programmierung Schritt für Schritt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-3">{concept.title}</h3>
                <p className="text-modern-gray-600 mb-4 text-sm">{concept.description}</p>
                <div className="space-y-2">
                  {concept.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-gray-100 rounded px-3 py-2 text-xs font-mono text-gray-800">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurs Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Was du in 3 Monaten lernst
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                Von der ersten Zeile Code bis zur funktionsfähigen iOS App. 
                Du lernst Swift und die Grundlagen der iOS-Entwicklung ohne Vorkenntnisse.
              </p>

              <div className="space-y-6">
                {learningModules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-syntax-orange-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-syntax-orange-900" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-syntax-primary-900">{module.title}</h3>
                          <span className="text-sm text-modern-gray-500">{module.week}</span>
                        </div>
                        <p className="text-modern-gray-600 mb-4">{module.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {module.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />
                              <span className="text-sm text-modern-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Kurs Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-4">Kurs-Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Dauer</span>
                    <span className="font-medium text-syntax-primary-900">3 Monate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Format</span>
                    <span className="font-medium text-syntax-primary-900">Vollzeit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Abschluss</span>
                    <span className="font-medium text-syntax-primary-900">iOS-Playground-App</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Förderung</span>
                    <span className="font-medium text-syntax-green-900">100% möglich</span>
                  </div>
                </div>
              </div>

              {/* Previous & Next Steps */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-syntax-pink-50 to-syntax-pink-100 rounded-xl p-6 border border-syntax-pink-200">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Vorheriger Kurs</h3>
                  <p className="text-syntax-primary-900 mb-3 text-sm">
                    <strong>{careerPathInfo.previousCourse.title}</strong> für App-Design Grundlagen
                  </p>
                  <Link href={`/kurse/${careerPathInfo.previousCourse.id}`}>
                    <Button variant="outline" fullWidth size="sm">
                      {careerPathInfo.previousCourse.title} ansehen
                    </Button>
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-syntax-blue-50 to-syntax-blue-100 rounded-xl p-6 border border-syntax-blue-200">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Nächster Kurs</h3>
                  <p className="text-syntax-primary-900 mb-3 text-sm">
                    <strong>{careerPathInfo.nextCourse.title}</strong> für echte iOS Apps
                  </p>
                  <Link href={`/kurse/${careerPathInfo.nextCourse.id}`}>
                    <Button variant="outline" fullWidth size="sm">
                      {careerPathInfo.nextCourse.title} ansehen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Technologies Preview */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Technologien</h3>
                <div className="space-y-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-syntax-primary-900 font-medium">{tech.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine ersten Apps
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Baue einfache aber funktionsfähige iOS Apps und lege den Grundstein für deine Developer-Karriere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-3">{project.title}</h3>
                <p className="text-modern-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-syntax-orange-100 text-syntax-orange-900 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Berufsperspektiven
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Mit soliden Programmier-Grundlagen legst du das Fundament für eine erfolgreiche Developer-Karriere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-syntax-primary-900 mb-2">{career.title}</h3>
                    <div className="text-2xl font-bold text-syntax-green-900 mb-2">{career.salary}</div>
                    <p className="text-sm text-modern-gray-600">{career.companies}</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-syntax-orange-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-orange-600 via-syntax-orange-700 to-syntax-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine Programmier-Karriere
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Swift lernen ohne Vorkenntnisse in nur 3 Monaten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=programmiergrundlagen">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/bildungsgutschein">
              <Button variant="outline" size="xl">
                Bildungsgutschein beantragen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 