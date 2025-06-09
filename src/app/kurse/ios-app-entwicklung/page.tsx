import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Smartphone, Code, Zap, Apple } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata = {
  title: 'iOS App-Entwicklung Kurs - Syntax Institut | SwiftUI Weiterbildung mit Bildungsgutschein',
  description: 'Werde iOS App Developer in 2,5 Monaten. SwiftUI, SwiftData, iOS SDK. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, IHK-Abschluss.',
  keywords: 'iOS App Entwicklung, SwiftUI, SwiftData, iOS SDK, Swift, Xcode, App Store, Bildungsgutschein, IHK-Zertifikat',
};

export default function iOSAppEntwicklungPage() {
  const learningModules = [
    {
      week: 'Wochen 1-3',
      title: 'SwiftUI Fundamentals',
      description: 'Einführung in SwiftUI, Views, Layouts und Navigation',
      skills: ['SwiftUI Basics', 'Views & Modifiers', 'Layout System', 'Navigation Stack', 'State Management', 'Data Binding'],
      icon: Apple
    },
    {
      week: 'Wochen 4-6',
      title: 'iOS Features & APIs',
      description: 'Core iOS Features, Frameworks und Apple APIs',
      skills: ['Core Data', 'UserDefaults', 'Notifications', 'Location Services', 'Camera & Photos', 'Health Kit'],
      icon: Smartphone
    },
    {
      week: 'Wochen 7-8',
      title: 'Advanced Development',
      description: 'Fortgeschrittene Konzepte und Performance Optimierung',
      skills: ['MVVM Architecture', 'Combine Framework', 'SwiftData', 'Networking', 'Testing', 'Debugging'],
      icon: Code
    },
    {
      week: 'Wochen 9-10',
      title: 'App Store & Deployment',
      description: 'App Store Vorbereitung und Veröffentlichung',
      skills: ['App Store Guidelines', 'Code Signing', 'TestFlight', 'App Review Process', 'Analytics', 'Monetization'],
      icon: Zap
    }
  ];

  const careerPaths = [
    { title: 'iOS Developer', salary: '45.000 - 65.000€', companies: 'Tech-Startups, App-Agenturen, Enterprise' },
    { title: 'Mobile App Developer', salary: '42.000 - 62.000€', companies: 'E-Commerce, Fintech, Health Tech' },
    { title: 'Senior iOS Engineer', salary: '55.000 - 80.000€', companies: 'Scale-ups, Tech-Konzerne (nach Erfahrung)' },
    { title: 'Technical Lead Mobile', salary: '65.000 - 90.000€', companies: 'Enterprise, Consulting (nach Erfahrung)' }
  ];

  const tools = [
    { name: 'Xcode', level: 'Expert', color: 'bg-blue-100 text-blue-700', category: 'IDE' },
    { name: 'SwiftUI', level: 'Expert', color: 'bg-orange-100 text-orange-700', category: 'Framework' },
    { name: 'SwiftData', level: 'Advanced', color: 'bg-purple-100 text-purple-700', category: 'Data Management' },
    { name: 'Instruments', level: 'Intermediate', color: 'bg-green-100 text-green-700', category: 'Profiling' },
    { name: 'TestFlight', level: 'Advanced', color: 'bg-red-100 text-red-700', category: 'Testing' },
    { name: 'Git & GitHub', level: 'Advanced', color: 'bg-gray-100 text-gray-700', category: 'Version Control' }
  ];

  const projectExamples = [
    {
      title: 'To-Do App mit Core Data',
      description: 'Vollständige Task-Management App mit lokaler Datenpersistierung',
      features: ['CRUD Operations', 'SwiftData Integration', 'Custom Views', 'Dark Mode Support']
    },
    {
      title: 'Weather App mit API',
      description: 'Wetter-App mit REST API Integration und Standort-Services',
      features: ['Network Requests', 'JSON Parsing', 'Location Services', 'Custom Animations']
    },
    {
      title: 'Social Media Timeline',
      description: 'Instagram-ähnliche Timeline mit Bild-Upload Funktionalität',
      features: ['Image Picker', 'Custom UI Components', 'Scroll Performance', 'User Authentication']
    }
  ];

  const nextCourses = [
    {
      id: 'android-app-entwicklung',
      title: 'Android App-Entwicklung',
      duration: '2,5 Monate',
      description: 'Jetpack Compose, Kotlin, Android Studio',
      category: 'App Development'
    },
    {
      id: 'web-grundlagen',
      title: 'Web-Grundlagen',
      duration: '3 Monate',
      description: 'HTML & CSS, JavaScript für Cross-Platform Understanding',
      category: 'Web Development'
    }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-syntax-yellow-800 transition-colors">
                <Award className="w-4 h-4 mr-2" />
                Vollzeit • 2,5 Monate • IHK-Zertifikat
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-syntax-primary-900">
                iOS App-Entwicklung
                <span className="block text-syntax-yellow-900">mit SwiftUI</span>
              </h1>
              
              <p className="text-xl text-modern-gray-600 leading-relaxed">
                Entwickle professionelle iOS Apps mit modernem SwiftUI. Von den Grundlagen bis zur 
                App Store Veröffentlichung – in nur 2,5 Monaten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt?kurs=ios-app-entwicklung">
                  <Button variant="accent" size="xl">
                    Kostenlose Beratung buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/karrierepfade">
                  <Button variant="outline" size="xl">
                    App Development Karrierepfad
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-syntax-primary-900">10</div>
                  <div className="text-sm text-gray-600">Wochen Intensiv</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-primary-900">3</div>
                  <div className="text-sm text-gray-600">Praxis-Apps</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-primary-900">App Store</div>
                  <div className="text-sm text-gray-600">Ready</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="iOS App Entwicklung mit SwiftUI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-primary-900">55.000€</div>
                  <div className="text-sm text-gray-600">Ø iOS Developer Gehalt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Dein Weg zum iOS Developer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In 2,5 Monaten von SwiftUI-Grundlagen zu App Store-reifen iOS Apps. 
              Kompakt, praxisnah und direkt umsetzbar.
            </p>
          </div>

          <div className="space-y-8">
            {learningModules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-pink-600" />
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

      {/* Practice Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Praxis-Projekte
            </h2>
            <p className="text-xl text-gray-600">
              Drei vollständige iOS Apps für dein Portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectExamples.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              iOS Development Stack
            </h2>
            <p className="text-xl text-gray-600">
              Beherrsche die wichtigsten Tools für iOS App-Entwicklung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-syntax-primary-900">{tool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${tool.color}`}>
                    {tool.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Karrieremöglichkeiten
            </h2>
            <p className="text-xl text-gray-600">
              iOS Developer sind sehr gefragt auf dem Arbeitsmarkt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-2">{career.title}</h3>
                <p className="text-2xl font-bold text-pink-600 mb-2">{career.salary}</p>
                <p className="text-gray-600">{career.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-syntax-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Nach diesem Kurs
            </h2>
            <p className="text-xl text-gray-600">
              Erweitere deine Fähigkeiten mit diesen aufbauenden Kursen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nextCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-syntax-primary-900">{course.title}</h3>
                  <span className="text-sm text-pink-600 font-medium">{course.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link href={`/kurse/${course.id}`}>
                  <Button variant="outline" size="sm">
                    Kurs Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/karrierepfade">
              <Button variant="primary" size="lg">
                App Development Karrierepfad ansehen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-syntax-primary-900 mb-6 text-center font-clash-display">
              Voraussetzungen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-syntax-primary-900 mb-3">Empfohlen:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Abschluss &quot;Programmiergrundlagen&quot;</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Grundkenntnisse Swift</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Eigener Mac (Xcode erforderlich)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-syntax-primary-900 mb-3">Alternativ:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Andere Programmiererfahrung</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Tech-Affinität & Lernbereitschaft</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Intensiver Crash-Kurs möglich</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-syntax-primary-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Werde iOS App Developer
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Lass dich kostenlos beraten und starte deine Karriere als iOS Developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=ios-app-entwicklung">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+4930754378530">
              <Button variant="outline" size="xl">
                Sofort anrufen: +49 30 754378530
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 