import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

export default function KompetenzkursePage() {
  const courses = [
    // Web Development Kurse
    {
      id: 'produktdesign',
      title: 'Produktdesign',
      subtitle: 'UI/UX Design & Produktstrategie',
      duration: '4 Monate',
      category: 'Web Development',
      level: 'Beginner',
      description: 'UI/UX Design, Designprinzipien, Figma & Framer, Projektmanagement, Produktstrategie',
      technologies: ['Figma', 'Framer', 'UI/UX Design', 'Projektmanagement', 'Produktstrategie', 'User Research'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      certificate: 'Junior Product Designer (IHK)',
      color: 'purple',
      icon: '💼'
    },
    {
      id: 'web-grundlagen',
      title: 'Web-Grundlagen',
      subtitle: 'HTML, CSS & JavaScript',
      duration: '3 Monate',
      category: 'Web Development',
      level: 'Beginner',
      description: 'HTML & CSS, Bootstrap, JavaScript & TypeScript, Publishing',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'Git'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      certificate: 'Interaktive Website',
      color: 'purple',
      icon: '🌐'
    },
    {
      id: 'frontend-frameworks',
      title: 'Frontend-Frameworks',
      subtitle: 'React & moderne Frameworks',
      duration: '2,5 Monate',
      category: 'Web Development',
      level: 'Intermediate',
      description: 'React, Next.js, Angular/Vue (Einblick), Tailwind CSS, Strapi, Deployment',
      technologies: ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'Strapi'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      certificate: 'Junior Web Developer (IHK) (nach Web-Grundlagen)',
      color: 'purple',
      icon: '💻'
    },
    {
      id: 'web-spezialisierung',
      title: 'Web-Spezialisierung',
      subtitle: 'Backend & Full-Stack',
      duration: '2,5 Monate',
      category: 'Web Development',
      level: 'Advanced',
      description: 'Node.js, Express.js, Authentifizierung, Datenbanken, Performance & Automation',
      technologies: ['Node.js', 'Express.js', 'Datenbanken', 'Authentication', 'Performance', 'Automation'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      certificate: 'Web Development Specialist (IHK)',
      color: 'purple',
      icon: '🧠'
    },
    // App Development Kurse
    {
      id: 'ux-ui-design',
      title: 'UX/UI Design',
      subtitle: 'App-Design & Prototyping',
      duration: '4 Monate',
      category: 'App Development',
      level: 'Beginner',
      description: 'App-Designprinzipien, User Flows, Wireframes & Prototyping in Figma, Design-Transfer in Xcode',
      technologies: ['Figma', 'Prototyping', 'User Flows', 'Wireframes', 'Xcode', 'Design Transfer'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      certificate: 'Design-Prototyp',
      color: 'pink',
      icon: '🎨'
    },
    {
      id: 'programmiergrundlagen',
      title: 'Programmiergrundlagen',
      subtitle: 'Swift & Xcode Basics',
      duration: '3 Monate',
      category: 'App Development',
      level: 'Beginner',
      description: 'Swift-Grundlagen, Xcode-Einführung, Logik & Syntax, Kontrollstrukturen, App-Grundgerüste',
      technologies: ['Swift', 'Xcode', 'iOS Entwicklung', 'Kontrollstrukturen', 'App Grundlagen', 'Playground'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      certificate: 'iOS-Playground-App',
      color: 'pink',
      icon: '👨‍💻'
    },
    {
      id: 'ios-app-entwicklung',
      title: 'iOS App-Entwicklung',
      subtitle: 'SwiftUI & iOS Apps',
      duration: '2,5 Monate',
      category: 'App Development',
      level: 'Intermediate',
      description: 'SwiftUI, Datenhandling, Navigation, Animationen, Core Features, SwiftData',
      technologies: ['SwiftUI', 'SwiftData', 'Navigation', 'Animationen', 'Core Features', 'iOS SDK'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      certificate: 'App Developer iOS (IHK)',
      color: 'pink',
      icon: '🍏'
    },
    {
      id: 'android-app-entwicklung',
      title: 'Android App-Entwicklung',
      subtitle: 'Kotlin & Android Apps',
      duration: '2,5 Monate',
      category: 'App Development',
      level: 'Intermediate',
      description: 'Jetpack Compose, Kotlin, Architektur, Android Studio, Persistenz, Gerätefunktionen',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Android Architektur', 'Persistenz', 'Material Design'],
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      certificate: 'App Developer Android (IHK)',
      color: 'pink',
      icon: '🤖'
    },
    // Linux & Cloud Kurse
    {
      id: 'it-grundlagen',
      title: 'IT-Grundlagen & Betriebssysteme',
      subtitle: 'IT-Netzwerke & Linux Basics',
      duration: '3 Monate',
      category: 'Linux & Cloud',
      level: 'Beginner',
      description: 'IT-Netzwerke, Linux-Grundlagen, IT-Sicherheit, Datenschutz, digitale Werkzeuge',
      technologies: ['Linux', 'IT-Netzwerke', 'IT-Sicherheit', 'Datenschutz', 'Digitale Werkzeuge', 'Grundlagen'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2134&q=80',
      certificate: 'IT-Basiskompetenz',
      color: 'blue',
      icon: '💡'
    },
    {
      id: 'linux-python-cloud',
      title: 'Linux, Python & Cloud Basics',
      subtitle: 'Shell, Python & Container',
      duration: '3 Monate',
      category: 'Linux & Cloud',
      level: 'Intermediate',
      description: 'Shell, Python-Programmierung, Einführung AWS/Azure, Container (Docker)',
      technologies: ['Linux Shell', 'Python', 'AWS', 'Azure', 'Docker', 'Container'],
      image: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2134&q=80',
      certificate: 'Linux Essentials Vorbereitung',
      color: 'blue',
      icon: '🐧'
    },
    {
      id: 'webtechnologien-admin',
      title: 'Webtechnologien & Admin-Wissen',
      subtitle: 'Webserver & Deployment',
      duration: '3 Monate',
      category: 'Linux & Cloud',
      level: 'Intermediate',
      description: 'HTML/CSS, GitHub, Webserver, Deployment, Monitoring, Fehleranalyse',
      technologies: ['HTML/CSS', 'GitHub', 'Webserver', 'Deployment', 'Monitoring', 'Troubleshooting'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
      certificate: 'Technische Umsetzungskompetenz',
      color: 'blue',
      icon: '🌐'
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud',
      subtitle: 'CI/CD & Infrastructure',
      duration: '3 Monate',
      category: 'Linux & Cloud',
      level: 'Advanced',
      description: 'CI/CD mit Jenkins, Automatisierung mit Ansible, Terraform, Cloud Deployment',
      technologies: ['Jenkins', 'Ansible', 'Terraform', 'CI/CD', 'Cloud Deployment', 'Infrastructure as Code'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      certificate: 'Cloud IT Administrator (IHK)',
      color: 'blue',
      icon: '☁️'
    }
  ];

  const categories = ['Alle', 'Web Development', 'App Development', 'Linux & Cloud'];
  const levels = ['Alle', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-purple-900 to-syntax-primary-700 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            12 modulare IT-Kompetenzkurse
          </div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash-display text-syntax-primary-900">
              IT-Kompetenzkurse für deine Zukunft
            </h1>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto mb-8">
            Modulare IT-Weiterbildung mit 12 einzeln buchbaren Kompetenzkursen. 100% gefördert durch den Bildungsgutschein 
            und mit anerkanntem IHK-Zertifikat. Flexibel kombinierbar nach deinen Zielen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
                          <Link href="/karrierepfade">
                <Button variant="outline" size="xl">
                  Empfohlene Karrierepfade ansehen
                </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="text-2xl">{course.icon}</span>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        course.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        course.color === 'pink' ? 'bg-pink-100 text-pink-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {course.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-syntax-primary-900 mb-1 font-clash-display">
                      {course.title}
                    </h3>
                    <p className="text-syntax-primary-900 text-opacity-90 text-sm">{course.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="flex items-center justify-between py-3 border-y border-gray-100">
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{course.duration}</div>
                      <div className="text-xs text-gray-500">Vollzeit</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">IHK</div>
                      <div className="text-xs text-gray-500">Zertifikat</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">Max. 16</div>
                      <div className="text-xs text-gray-500">Teilnehmer</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologien</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {course.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{course.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certificate */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center text-xs text-purple-600">
                      <Award className="w-3 h-3 mr-1" />
                      <span className="font-medium">Abschluss:</span>
                    </div>
                    <p className="text-xs text-gray-700 mt-1">{course.certificate}</p>
                  </div>

                  <div className="pt-2">
                    <Link href={`/kurse/${course.id}`}>
                      <Button variant="primary" fullWidth size="lg">
                        Kurs Details ansehen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths CTA */}
      <section className="py-20 bg-syntax-yellow-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
            Oder wähle einen empfohlenen Karrierepfad
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unsere Karrierepfade zeigen dir optimierte Kompetenzkurs-Sequenzen für verschiedene IT-Karrierewege. 
            Perfekt für strukturiertes Lernen vom Anfänger zum Experten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/karrierepfade">
              <Button variant="accent" size="xl">
                Karrierepfade entdecken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="outline" size="xl">
                Individuelle Beratung
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 