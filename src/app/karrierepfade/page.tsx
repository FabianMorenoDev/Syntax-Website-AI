import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Target, BookOpen, Puzzle } from 'lucide-react';
import Button from '../components/ui/Button';

export const metadata = {
  title: 'IT-Karrierepfade - Syntax Institut | Empfohlene Kurssequenzen',
  description: 'Entdecke unsere empfohlenen IT-Karrierepfade. Modulare Weiterbildung in Web Development, App Development und Linux & Cloud Engineering.',
  keywords: 'Karrierepfade, IT-Weiterbildung, Web Development, App Development, Linux Cloud, modulare Kompetenzkurse, Bildungsgutschein',
};

export default function KarrierepfadePage() {
  const careerPaths = [
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'Frontend & Backend Entwicklung',
      duration: '12 Monate',
      modules: 4,
      description: 'Einstieg in moderne Webentwicklung mit Frontend- und Backend-Kompetenzen. Abschluss mit mehreren IHK-Zertifikaten.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      color: 'purple',
      courses: [
        {
          id: 'produktdesign',
          title: 'Produktdesign',
          duration: '4 Monate',
          description: 'UI/UX Design, Designprinzipien, Figma & Framer, Projektmanagement, Produktstrategie',
          certificate: 'Junior Product Designer (IHK)',
          icon: '💼'
        },
        {
          id: 'web-grundlagen',
          title: 'Web-Grundlagen',
          duration: '3 Monate',
          description: 'HTML & CSS, Bootstrap, JavaScript & TypeScript, Publishing',
          certificate: 'Interaktive Website',
          icon: '🌐'
        },
        {
          id: 'frontend-frameworks',
          title: 'Frontend-Frameworks',
          duration: '2,5 Monate',
          description: 'React, Next.js, Angular/Vue (Einblick), Tailwind CSS, Strapi, Deployment',
          certificate: 'Junior Web Developer (IHK) (nach Modul 2+3)',
          icon: '💻'
        },
        {
          id: 'web-spezialisierung',
          title: 'Spezialisierung',
          duration: '2,5 Monate',
          description: 'Node.js, Express.js, Authentifizierung, Datenbanken, Performance & Automation',
          certificate: 'Web Development Specialist (IHK)',
          icon: '🧠'
        }
      ]
    },
    {
      id: 'app-development',
      title: 'App Development',
      subtitle: 'iOS & Android Apps',
      duration: '12 Monate',
      modules: 4,
      description: 'Entwicklung nativer iOS- und Android-Apps – von Design bis App Store. Abschluss mit zwei IHK-Zertifikaten möglich.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      color: 'pink',
      courses: [
        {
          id: 'ux-ui-design',
          title: 'UX/UI Design',
          duration: '4 Monate',
          description: 'App-Designprinzipien, User Flows, Wireframes & Prototyping in Figma, Design-Transfer in Xcode',
          certificate: 'Design-Prototyp',
          icon: '🎨'
        },
        {
          id: 'programmiergrundlagen',
          title: 'Programmiergrundlagen',
          duration: '3 Monate',
          description: 'Swift-Grundlagen, Xcode-Einführung, Logik & Syntax, Kontrollstrukturen, App-Grundgerüste',
          certificate: 'iOS-Playground-App',
          icon: '👨‍💻'
        },
        {
          id: 'ios-app-entwicklung',
          title: 'iOS App-Entwicklung',
          duration: '2,5 Monate',
          description: 'SwiftUI, Datenhandling, Navigation, Animationen, Core Features, SwiftData',
          certificate: 'App Developer iOS (IHK)',
          icon: '🍏'
        },
        {
          id: 'android-app-entwicklung',
          title: 'Android App-Entwicklung',
          duration: '2,5 Monate',
          description: 'Jetpack Compose, Kotlin, Architektur, Android Studio, Persistenz, Gerätefunktionen',
          certificate: 'App Developer Android (IHK)',
          icon: '🤖'
        }
      ]
    },
    {
      id: 'linux-cloud',
      title: 'Linux & Cloud Engineering',
      subtitle: 'Infrastructure & DevOps',
      duration: '12 Monate',
      modules: 4,
      description: 'Einstieg in Systemadministration, DevOps-Prozesse & Cloud-Infrastrukturen. Praxisnah, ideal auch für technisch orientierte Quereinsteiger:innen.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80',
      color: 'blue',
      courses: [
        {
          id: 'it-grundlagen',
          title: 'Grundlagen IT & Betriebssysteme',
          duration: '3 Monate',
          description: 'IT-Netzwerke, Linux-Grundlagen, IT-Sicherheit, Datenschutz, digitale Werkzeuge',
          certificate: 'IT-Basiskompetenz',
          icon: '💡'
        },
        {
          id: 'linux-python-cloud',
          title: 'Linux, Python & Cloud Basics',
          duration: '3 Monate',
          description: 'Shell, Python-Programmierung, Einführung AWS/Azure, Container (Docker)',
          certificate: 'Linux Essentials Vorbereitung',
          icon: '🐧'
        },
        {
          id: 'webtechnologien-admin',
          title: 'Webtechnologien & Admin-Wissen',
          duration: '3 Monate',
          description: 'HTML/CSS, GitHub, Webserver, Deployment, Monitoring, Fehleranalyse',
          certificate: 'Technische Umsetzungskompetenz',
          icon: '🌐'
        },
        {
          id: 'devops-cloud',
          title: 'DevOps & Cloud',
          duration: '3 Monate',
          description: 'CI/CD mit Jenkins, Automatisierung mit Ansible, Terraform, Cloud Deployment',
          certificate: 'Cloud IT Administrator (IHK)',
          icon: '☁️'
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Target className="w-4 h-4 mr-2" />
            Modulare IT-Weiterbildung
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash-display text-syntax-primary-900">
            IT-Karrierepfade
          </h1>
          <p className="text-xl text-modern-gray-600 mb-8">
            Empfohlene Kompetenzkurs-Sequenzen für deine IT-Karriere. Flexibel kombinierbar, 
            einzeln buchbar und 100% gefördert.
          </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kurse">
                <Button variant="accent" size="xl">
                  Alle Kompetenzkurse ansehen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="outline" size="xl">
                  Kostenlose Beratung
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Einzeln buchbar</h3>
              <p className="text-gray-600 text-sm">Jeder Kompetenzkurs ist separat förderfähig und buchbar</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Flexibel kombinierbar</h3>
              <p className="text-gray-600 text-sm">Erstelle deinen individuellen Karriereweg</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">IHK-Zertifikate</h3>
              <p className="text-gray-600 text-sm">Anerkannte Abschlüsse für den Arbeitsmarkt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Empfohlene Karrierepfade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimierte Kompetenzkurs-Sequenzen für verschiedene IT-Karrierewege. Flexibel anpassbar nach deinen Zielen.
            </p>
          </div>

          <div className="space-y-16">
            {careerPaths.map((path, pathIndex) => (
              <div key={path.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Path Header */}
                <div className={`bg-gradient-to-r ${
                  path.color === 'purple' ? 'from-purple-600 to-purple-800' :
                  path.color === 'pink' ? 'from-pink-600 to-pink-800' :
                  'from-blue-600 to-blue-800'
                } text-syntax-primary-900 p-8`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 font-clash-display">
                        {path.title}
                      </h3>
                      <p className="text-lg opacity-90 mb-4">{path.subtitle}</p>
                      <p className="opacity-90 leading-relaxed mb-4">{path.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{path.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{path.modules} Kompetenzkurse</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span>IHK-Zertifikate</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <img 
                        src={path.image} 
                        alt={path.title}
                        className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Courses in Path */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {path.courses.map((course, courseIndex) => (
                      <div key={course.id} className="relative">
                        <Link href={`/kurse/${course.id}`}>
                          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 cursor-pointer">
                            <div className="flex items-start space-x-4">
                              <div className="text-3xl">{course.icon}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-bold text-syntax-primary-900">{course.title}</h4>
                                  <span className="text-sm text-gray-500">{course.duration}</span>
                                </div>
                                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                                  {course.description}
                                </p>
                                <div className="flex items-center text-xs text-purple-600">
                                  <Award className="w-3 h-3 mr-1" />
                                  <span>{course.certificate}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        
                        {/* Connection Arrow */}
                        {courseIndex < path.courses.length - 1 && (
                          <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-gray-400">
                            <ArrowRight className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Link href={`/kontakt?lernpfad=${path.id}`}>
                      <Button variant="primary" size="lg">
                        {path.title} Beratung buchen
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Career Path Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-purple-25 to-syntax-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-modern-gray-50 to-modern-gray-100 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-syntax-primary-300">
            <div className="bg-gradient-to-br from-syntax-primary-100 to-syntax-primary-200 p-8 text-center">
              <div className="inline-block">
                <Puzzle className="w-16 h-16 mx-auto mb-4 text-syntax-primary-900 hover:rotate-12 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
                Individueller Karrierepfad
              </h2>
              <p className="text-xl text-syntax-primary-900 opacity-90 max-w-2xl mx-auto">
                Erstelle deinen maßgeschneiderten IT-Karriereweg basierend auf deinen Zielen, 
                Vorerfahrungen und zeitlichen Möglichkeiten.
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Target className="w-8 h-8 text-syntax-purple-900 mx-auto mb-3" />
                  <h4 className="font-semibold text-syntax-primary-900 mb-2">Persönliche Bedarfsanalyse</h4>
                  <p className="text-sm text-modern-gray-600">Wir analysieren deine Ziele und Vorerfahrungen</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <BookOpen className="w-8 h-8 text-syntax-purple-900 mx-auto mb-3" />
                  <h4 className="font-semibold text-syntax-primary-900 mb-2">Flexible Kurs-Kombination</h4>
                  <p className="text-sm text-modern-gray-600">Aus 12+ Kompetenzkursen deinen Pfad zusammenstellen</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Clock className="w-8 h-8 text-syntax-purple-900 mx-auto mb-3" />
                  <h4 className="font-semibold text-syntax-primary-900 mb-2">Individuelle Zeitplanung</h4>
                  <p className="text-sm text-modern-gray-600">Von 6-18 Monaten, je nach deinen Möglichkeiten</p>
                </div>
              </div>

              <div className="bg-syntax-yellow-25 rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-syntax-primary-900 mb-4">Beispiele für individuelle Karrierepfade:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-syntax-green-900" />
                      <span>Produktdesign → Frontend-Frameworks → Web-Spezialisierung</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-syntax-green-900" />
                      <span>IT-Grundlagen → Linux & Cloud → DevOps</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-syntax-green-900" />
                      <span>UX/UI Design → iOS App-Entwicklung</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-syntax-green-900" />
                      <span>Web-Grundlagen → Linux & Cloud → DevOps</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/karrierepfad-konfigurator">
                  <Button variant="accent" size="xl">
                    Jetzt zusammenstellen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm text-modern-gray-500 mt-4">
                  100% kostenlos • Unverbindliche Beratung • Individuelle Zeitplanung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-syntax-yellow-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
            Starte deinen individuellen IT-Karrierepfad
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unsere Bildungsberater helfen dir bei der Auswahl der passenden Kompetenzkurse und 
            unterstützen dich bei der Beantragung des Bildungsgutscheins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
              </Button>
            </Link>
                          <Link href="/kurse">
                <Button variant="outline" size="xl">
                  Alle Kompetenzkurse durchstöbern
                </Button>
              </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 