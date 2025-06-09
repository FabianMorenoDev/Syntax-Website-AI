'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Award, Target, BookOpen, Puzzle, Plus, Minus, X } from 'lucide-react';
import Button from '../components/ui/Button';

export default function KarrierepfadKonfiguratorPage() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<'selection' | 'summary'>('selection');

  const availableCourses = [
    {
      id: 'produktdesign',
      title: 'Produktdesign',
      category: 'Design & Konzeption',
      duration: '4 Monate',
      description: 'UI/UX Design, Designprinzipien, Figma & Framer, Projektmanagement, Produktstrategie',
      certificate: 'Junior Product Designer (IHK)',
      icon: '💼',
      color: 'purple',
      prerequisites: [],
      recommendedAfter: []
    },
    {
      id: 'ux-ui-design',
      title: 'UX/UI Design',
      category: 'Design & Konzeption',
      duration: '4 Monate',
      description: 'App-Designprinzipien, User Flows, Wireframes & Prototyping in Figma, Design-Transfer',
      certificate: 'Design-Prototyp',
      icon: '🎨',
      color: 'pink',
      prerequisites: [],
      recommendedAfter: []
    },
    {
      id: 'web-grundlagen',
      title: 'Web-Grundlagen',
      category: 'Entwicklung',
      duration: '3 Monate',
      description: 'HTML & CSS, Bootstrap, JavaScript & TypeScript, Publishing',
      certificate: 'Interaktive Website',
      icon: '🌐',
      color: 'blue',
      prerequisites: [],
      recommendedAfter: ['produktdesign']
    },
    {
      id: 'programmiergrundlagen',
      title: 'Programmiergrundlagen',
      category: 'Entwicklung',
      duration: '3 Monate',
      description: 'Swift-Grundlagen, Xcode-Einführung, Logik & Syntax, Kontrollstrukturen',
      certificate: 'iOS-Playground-App',
      icon: '👨‍💻',
      color: 'green',
      prerequisites: ['ux-ui-design'],
      recommendedAfter: []
    },
    {
      id: 'frontend-frameworks',
      title: 'Frontend-Frameworks',
      category: 'Entwicklung',
      duration: '2,5 Monate',
      description: 'React, Next.js, Angular/Vue (Einblick), Tailwind CSS, Strapi, Deployment',
      certificate: 'Junior Web Developer (IHK)',
      icon: '💻',
      color: 'purple',
      prerequisites: ['web-grundlagen'],
      recommendedAfter: []
    },
    {
      id: 'ios-app-entwicklung',
      title: 'iOS App-Entwicklung',
      category: 'Entwicklung',
      duration: '2,5 Monate',
      description: 'SwiftUI, Datenhandling, Navigation, Animationen, Core Features, SwiftData',
      certificate: 'App Developer iOS (IHK)',
      icon: '🍏',
      color: 'blue',
      prerequisites: ['programmiergrundlagen'],
      recommendedAfter: []
    },
    {
      id: 'android-app-entwicklung',
      title: 'Android App-Entwicklung',
      category: 'Entwicklung',
      duration: '2,5 Monate',
      description: 'Jetpack Compose, Kotlin, Architektur, Android Studio, Persistenz, Gerätefunktionen',
      certificate: 'App Developer Android (IHK)',
      icon: '🤖',
      color: 'green',
      prerequisites: ['programmiergrundlagen'],
      recommendedAfter: []
    },
    {
      id: 'web-spezialisierung',
      title: 'Web-Spezialisierung',
      category: 'Entwicklung',
      duration: '2,5 Monate',
      description: 'Node.js, Express.js, Authentifizierung, Datenbanken, Performance & Automation',
      certificate: 'Web Development Specialist (IHK)',
      icon: '🧠',
      color: 'purple',
      prerequisites: ['frontend-frameworks'],
      recommendedAfter: []
    },
    {
      id: 'it-grundlagen',
      title: 'IT-Grundlagen',
      category: 'Business & IT',
      duration: '3 Monate',
      description: 'IT-Netzwerke, Linux-Grundlagen, IT-Sicherheit, Datenschutz, digitale Werkzeuge',
      certificate: 'IT-Basiskompetenz',
      icon: '💡',
      color: 'blue',
      prerequisites: [],
      recommendedAfter: []
    },
    {
      id: 'linux-python-cloud',
      title: 'Linux, Python & Cloud',
      category: 'Business & IT',
      duration: '3 Monate',
      description: 'Shell, Python-Programmierung, Einführung AWS/Azure, Container (Docker)',
      certificate: 'Linux Essentials Vorbereitung',
      icon: '🐧',
      color: 'green',
      prerequisites: ['it-grundlagen'],
      recommendedAfter: []
    },
    {
      id: 'webtechnologien-admin',
      title: 'Webtechnologien & Admin',
      category: 'Business & IT',
      duration: '3 Monate',
      description: 'HTML/CSS, GitHub, Webserver, Deployment, Monitoring, Fehleranalyse',
      certificate: 'Technische Umsetzungskompetenz',
      icon: '🌐',
      color: 'blue',
      prerequisites: ['linux-python-cloud'],
      recommendedAfter: []
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud',
      category: 'Business & IT',
      duration: '3 Monate',
      description: 'CI/CD mit Jenkins, Automatisierung mit Ansible, Terraform, Cloud Deployment',
      certificate: 'Cloud IT Administrator (IHK)',
      icon: '☁️',
      color: 'green',
      prerequisites: ['webtechnologien-admin'],
      recommendedAfter: []
    }
  ];

  const categories = ['Alle', 'Design & Konzeption', 'Entwicklung', 'Business & IT'];
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredCourses = activeCategory === 'Alle' 
    ? availableCourses 
    : availableCourses.filter(course => course.category === activeCategory);

  const toggleCourse = (courseId: string) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const removeCourse = (courseId: string) => {
    setSelectedCourses(prev => prev.filter(id => id !== courseId));
  };

  const getSelectedCoursesData = () => {
    return availableCourses.filter(course => selectedCourses.includes(course.id));
  };

  const getTotalDuration = () => {
    const selectedData = getSelectedCoursesData();
    const totalMonths = selectedData.reduce((sum, course) => {
      const months = parseFloat(course.duration.replace(/[^\d.,]/g, '').replace(',', '.'));
      return sum + months;
    }, 0);
    return totalMonths.toFixed(1);
  };

  const getCourseColor = (color: string) => {
    const colorMap = {
      purple: 'border-syntax-purple-300 bg-syntax-purple-50',
      pink: 'border-syntax-pink-300 bg-syntax-pink-50',
      blue: 'border-syntax-blue-300 bg-syntax-blue-50',
      green: 'border-syntax-green-300 bg-syntax-green-50'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-modern-gray-300 bg-modern-gray-50';
  };

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-purple-900 to-syntax-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Puzzle className="w-4 h-4 mr-2" />
            Individueller Karrierepfad
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash-display">
            Stelle deinen Karrierepfad zusammen
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Wähle aus 12+ Kompetenzkursen und erstelle deinen maßgeschneiderten IT-Karriereweg. 
            Jeder Kurs ist einzeln förderfähig mit dem Bildungsgutschein.
          </p>
        </div>
      </section>

      {currentStep === 'selection' && (
        <>
          {/* Course Selection */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-syntax-primary-900 text-white'
                        : 'bg-white border border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => {
                  const isSelected = selectedCourses.includes(course.id);
                  
                  return (
                    <div
                      key={course.id}
                      className={`relative rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? `${getCourseColor(course.color)} border-current transform scale-[1.02] shadow-lg`
                          : 'bg-white border-modern-gray-200 hover:border-syntax-primary-300 hover:shadow-md'
                      }`}
                      onClick={() => toggleCourse(course.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{course.icon}</div>
                        {isSelected && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeCourse(course.id);
                            }}
                            className="p-1 rounded-full bg-white shadow-md hover:bg-red-50 transition-colors"
                          >
                            <X className="w-4 h-4 text-red-500" />
                          </button>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-syntax-primary-900">{course.title}</h3>
                          <span className="text-sm text-modern-gray-500">{course.duration}</span>
                        </div>
                        <p className="text-sm text-modern-gray-600 mb-2">
                          {course.category}
                        </p>
                        <p className="text-sm text-modern-gray-700 leading-relaxed mb-3">
                          {course.description}
                        </p>
                        <div className="flex items-center text-xs text-syntax-purple-700">
                          <Award className="w-3 h-3 mr-1" />
                          <span>{course.certificate}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center pt-3 border-t border-current border-opacity-20">
                        {isSelected ? (
                          <div className="flex items-center text-sm font-medium text-syntax-primary-900">
                            <CheckCircle className="w-4 h-4 mr-2 text-syntax-green-900" />
                            Ausgewählt
                          </div>
                        ) : (
                          <div className="flex items-center text-sm text-modern-gray-600">
                            <Plus className="w-4 h-4 mr-2" />
                            Hinzufügen
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Selected Courses Summary */}
          {selectedCourses.length > 0 && (
            <section className="py-8 bg-modern-gray-50 sticky bottom-0 border-t border-modern-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div>
                      <h3 className="font-semibold text-syntax-primary-900">
                        {selectedCourses.length} Kurs{selectedCourses.length !== 1 ? 'e' : ''} ausgewählt
                      </h3>
                      <p className="text-sm text-modern-gray-600">
                        Gesamtdauer: {getTotalDuration()} Monate
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getSelectedCoursesData().slice(0, 3).map(course => (
                        <span key={course.id} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-syntax-primary-900 border border-syntax-primary-200">
                          {course.title}
                        </span>
                      ))}
                      {selectedCourses.length > 3 && (
                        <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-modern-gray-600 border border-modern-gray-300">
                          +{selectedCourses.length - 3} weitere
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => setCurrentStep('summary')}
                  >
                    Karrierepfad erstellen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {currentStep === 'summary' && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
                Dein individueller Karrierepfad
              </h2>
              <p className="text-xl text-modern-gray-600">
                {selectedCourses.length} Kompetenzkurse • {getTotalDuration()} Monate Gesamtdauer
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {getSelectedCoursesData().map((course, index) => (
                <div key={course.id} className="bg-white rounded-xl p-6 shadow-lg border border-modern-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-syntax-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-syntax-primary-900">{course.title}</h3>
                        <span className="text-modern-gray-500">{course.duration}</span>
                      </div>
                      <p className="text-modern-gray-600 mb-3">{course.description}</p>
                      <div className="flex items-center text-syntax-purple-700">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{course.certificate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-syntax-yellow-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-syntax-primary-900 mb-4">
                Bereit für deine IT-Karriere?
              </h3>
              <p className="text-modern-gray-700 mb-6">
                Lass dich kostenlos beraten und erfahre, wie du deinen individuellen Karrierepfad 
                mit dem Bildungsgutschein 100% gefördert umsetzen kannst.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button variant="accent" size="xl">
                    Kostenlose Beratung buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={() => setCurrentStep('selection')}
                >
                  Karrierepfad anpassen
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}