'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCareerPath, setSelectedCareerPath] = useState(-1);

  // Mapping der Kurse zu Karrierepfaden
  const careerPathCourses = [
    {
      title: 'Web Development',
      courses: [
        { icon: '💼', name: 'Produktdesign', href: '/kurse/produktdesign', duration: '4 Mon.', description: 'UI/UX Design, Figma & Projektmanagement' },
        { icon: '🌐', name: 'Web-Grundlagen', href: '/kurse/web-grundlagen', duration: '3 Mon.', description: 'HTML, CSS, JavaScript & TypeScript' },
        { icon: '💻', name: 'Frontend-Frameworks', href: '/kurse/frontend-frameworks', duration: '2.5 Mon.', description: 'React, Next.js & moderne Frontend-Entwicklung' },
        { icon: '🧠', name: 'Web-Spezialisierung', href: '/kurse/web-spezialisierung', duration: '2.5 Mon.', description: 'Backend, APIs & Full-Stack Development' }
      ]
    },
    {
      title: 'App Development',
      courses: [
        { icon: '🎨', name: 'UX/UI Design', href: '/kurse/ux-ui-design', duration: '4 Mon.', description: 'Mobile App Design & User Experience' },
        { icon: '👨‍💻', name: 'Programmiergrundlagen', href: '/kurse/programmiergrundlagen', duration: '3 Mon.', description: 'Swift & iOS Development Basics' },
        { icon: '🍏', name: 'iOS App-Entwicklung', href: '/kurse/ios-app-entwicklung', duration: '2.5 Mon.', description: 'Native iOS Apps mit SwiftUI' },
        { icon: '🤖', name: 'Android App-Entwicklung', href: '/kurse/android-app-entwicklung', duration: '2.5 Mon.', description: 'Native Android Apps mit Kotlin' }
      ]
    },
    {
      title: 'Linux & Cloud Engineering',
      courses: [
        { icon: '💡', name: 'IT-Grundlagen', href: '/kurse/it-grundlagen', duration: '3 Mon.', description: 'Netzwerke, Linux & IT-Sicherheit' },
        { icon: '🐧', name: 'Linux, Python & Cloud', href: '/kurse/linux-python-cloud', duration: '3 Mon.', description: 'Shell, Python & Cloud Basics' },
        { icon: '🌐', name: 'Webtechnologien & Admin', href: '/kurse/webtechnologien-admin', duration: '3 Mon.', description: 'Webserver, Deployment & Monitoring' },
        { icon: '☁️', name: 'DevOps & Cloud', href: '/kurse/devops-cloud', duration: '3 Mon.', description: 'CI/CD, Automatisierung & Cloud Deployment' }
      ]
    },
    {
      title: 'Eigenen Karrierepfad zusammenstellen',
      isCustom: true,
      bulletPoints: [
        'Wähle aus allen verfügbaren Kursen',
        'Plane deine individuelle Laufbahn',
        'Flexible Zeitplanung möglich',
        'Persönliche Beratung inklusive'
      ]
    }
  ];

  const mainNavItems = [
    { href: '/', label: 'Home', hasDropdown: false },
    { href: '/kurse', label: 'Kurse', hasDropdown: true },
    { href: '/bildungsgutschein', label: 'Bildungsgutschein', hasDropdown: false },
    { href: '/erfolgsgeschichten', label: 'Erfolgsgeschichten', hasDropdown: false },
    { href: '/ueber-uns', label: 'Über uns', hasDropdown: false },
  ];

  const careerPaths = [
    { href: '/karrierepfade/web-development', icon: '🤖', title: 'Web Development', subtitle: 'Produktdesign → Web Grundlagen → Frontend → Backend', emoji: '🤖' },
    { href: '/karrierepfade/app-development', icon: '📱', title: 'App Development', subtitle: 'UX/UI → Programmierung → iOS → Android', emoji: '📱' },
    { href: '/karrierepfade/linux-cloud', icon: '☁️', title: 'Linux & Cloud Engineering', subtitle: 'IT Grundlagen → Development → Linux → Cloud', emoji: '☁️' },
    { href: '/karrierepfad-konfigurator', icon: '🧩', title: 'Eigenen Karrierepfad zusammenstellen', subtitle: 'Deine individuelle Kombination', emoji: '🧩', isCustom: true },
  ];

  const courseCategories = {
    'Web Development': [
      { href: '/kurse/produktdesign', label: 'Produktdesign', duration: '4 Mon.', icon: '💼' },
      { href: '/kurse/web-grundlagen', label: 'Web-Grundlagen', duration: '3 Mon.', icon: '🌐' },
      { href: '/kurse/frontend-frameworks', label: 'Frontend-Frameworks', duration: '2.5 Mon.', icon: '💻' },
      { href: '/kurse/web-spezialisierung', label: 'Web-Spezialisierung', duration: '2.5 Mon.', icon: '🧠' },
    ],
    'App Development': [
      { href: '/kurse/ux-ui-design', label: 'UX/UI Design', duration: '4 Mon.', icon: '🎨' },
      { href: '/kurse/programmiergrundlagen', label: 'Programmiergrundlagen', duration: '3 Mon.', icon: '👨‍💻' },
      { href: '/kurse/ios-app-entwicklung', label: 'iOS App-Entwicklung', duration: '2.5 Mon.', icon: '🍏' },
      { href: '/kurse/android-app-entwicklung', label: 'Android App-Entwicklung', duration: '2.5 Mon.', icon: '🤖' },
    ],
    'Linux & Cloud': [
      { href: '/kurse/it-grundlagen', label: 'IT-Grundlagen', duration: '3 Mon.', icon: '💡' },
      { href: '/kurse/linux-python-cloud', label: 'Linux, Python & Cloud', duration: '3 Mon.', icon: '🐧' },
      { href: '/kurse/webtechnologien-admin', label: 'Webtechnologien & Admin', duration: '3 Mon.', icon: '🌐' },
      { href: '/kurse/devops-cloud', label: 'DevOps & Cloud', duration: '3 Mon.', icon: '☁️' },
    ]
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-syntax-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+49 30 754378530</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@syntax-institut.de</span>
              </div>
            </div>
            <div className="hidden md:block text-xs">
              100% kostenlos mit Bildungsgutschein
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/images/icons/syntax_monogramm_dark_RGB.png" 
              alt="Syntax Institut" 
              className="h-8 w-auto"
            />
            <div className="font-clash-display font-bold text-xl text-syntax-primary-900">
              Syntax Institut
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    item.hasDropdown 
                      ? 'text-modern-gray-700 hover:text-syntax-primary-900 group-hover:text-syntax-primary-900 group-hover:bg-syntax-primary-100'
                      : 'text-modern-gray-700 hover:text-syntax-primary-900'
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div 
                    className="fixed left-0 right-0 top-[96px] w-full bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t border-modern-gray-200 z-50"
                    onMouseLeave={() => setSelectedCareerPath(-1)}
                  >
                    {/* Content Section */}
                    <div className="grid grid-cols-2 min-h-[320px] max-w-7xl mx-auto">
                                              {/* Left Column - Career Paths */}
                        <div className="bg-white px-4 py-3">
                        <div className="mb-3">
                          <h3 className="text-base font-bold text-syntax-primary-900 mb-1">Wähle deinen Karrierepfad</h3>
                        </div>
                        
                        <div className="space-y-1.5">
                          {careerPaths.map((path, index) => (
                            <Link
                              key={path.title}
                              href={path.href}
                              className="block p-3 rounded-lg transition-all duration-200 border border-transparent hover:bg-syntax-purple-50 hover:border-syntax-purple-100 hover:shadow-sm"
                              onMouseEnter={() => setSelectedCareerPath(index)}
                            >
                              <div className="flex items-start space-x-2.5">
                                <div className="text-xl">{path.emoji}</div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-sm text-syntax-primary-900 hover:text-syntax-purple-900 transition-colors">
                                    {path.title}
                                  </h4>
                                  <div className="flex items-center mt-1.5 text-xs">
                                    {path.isCustom ? (
                                      <span className="px-2 py-0.5 bg-syntax-purple-200 text-syntax-purple-900 rounded-full text-xs font-medium">
                                        Individuell
                                      </span>
                                    ) : (
                                      <span className="px-2 py-0.5 bg-syntax-green-100 text-syntax-green-800 rounded-full text-xs font-medium">
                                        IHK-Zertifikat
                                      </span>
                                    )}
                                    <span className="ml-2 text-xs text-modern-gray-500">
                                      {path.isCustom ? 'Flexible Dauer' : '12 Mon. • 4 Kurse'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Button für alle Einzelkurse */}
                        <div 
                          className="mt-4 pt-3 border-t border-modern-gray-200"
                          onMouseEnter={() => setSelectedCareerPath(-1)}
                        >
                          <Link 
                            href="/kurse"
                            className="block w-full py-2.5 px-3 text-center rounded-lg font-medium transition-all duration-200 text-sm bg-modern-gray-100 hover:bg-modern-gray-200 text-modern-gray-800 hover:text-syntax-primary-900"
                          >
                            📚 Alle Einzelkurse anzeigen
                          </Link>
                        </div>
                      </div>

                      {/* Right Column - Course Details */}
                      <div className="bg-white px-4 py-3 border-l border-modern-gray-200">
                        {selectedCareerPath >= 0 ? (
                          <>
                            <div className="mb-3">
                              <h3 className="text-base font-bold text-syntax-primary-900">
                                {careerPathCourses[selectedCareerPath].title}
                              </h3>
                            </div>

                            {careerPathCourses[selectedCareerPath].isCustom ? (
                              <div className="space-y-3">
                                <ul className="space-y-3">
                                  {careerPathCourses[selectedCareerPath].bulletPoints?.map((point, index) => {
                                    const icons = ['🎯', '📋', '⏰', '🚀'];
                                    return (
                                      <li key={index} className="flex items-start space-x-3">
                                        <span className="text-lg mt-0.5 flex-shrink-0">{icons[index]}</span>
                                        <span className="text-sm text-modern-gray-700 leading-relaxed">{point}</span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                {careerPathCourses[selectedCareerPath].courses?.map((course, index) => (
                                  <Link key={index} href={course.href} className="block p-2.5 rounded-lg border transition-all duration-200 bg-syntax-blue-50 hover:bg-syntax-blue-100 border-syntax-blue-100 hover:border-syntax-blue-200">
                                    <div className="flex items-center justify-between mb-1">
                                      <div className="flex items-center">
                                        <span className="text-base mr-2">{course.icon}</span>
                                        <span className="font-medium text-syntax-primary-900 text-sm">{course.name}</span>
                                      </div>
                                      <span className="text-xs text-modern-gray-500">{course.duration}</span>
                                    </div>
                                    <p className="text-xs text-modern-gray-600">{course.description}</p>
                                  </Link>
                                ))}
                              </div>
                            )}

                            <div className="mt-4 pt-3 border-t border-modern-gray-200">
                              <Link 
                                href={careerPaths[selectedCareerPath].href}
                                className="block w-full py-2.5 px-3 text-center rounded-lg font-medium transition-all duration-200 text-sm bg-syntax-purple-100 hover:bg-syntax-purple-200 text-syntax-purple-900"
                              >
                                {careerPaths[selectedCareerPath].isCustom 
                                  ? 'Konfigurator starten' 
                                  : 'Kompletten Karrierepfad ansehen'}
                              </Link>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center h-full min-h-[250px]">
                            <div className="text-center">
                              <p className="text-modern-gray-500 text-sm">
                                Bewege die Maus über einen Karrierepfad,<br />
                                um die Details zu sehen
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="bg-syntax-yellow-900 hover:bg-syntax-yellow-800 text-syntax-primary-900 px-6 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              Beratung buchen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-modern-gray-700 hover:text-syntax-primary-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-modern-gray-200">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-modern-gray-700 hover:text-syntax-primary-900 hover:bg-modern-gray-50 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-6 space-y-3">
                    {/* Career Paths */}
                    <div>
                      <div className="text-syntax-purple-900 font-semibold text-sm border-b border-modern-gray-200 pb-2 mb-2">
                        Vollständige Karrierepfade
                      </div>
                      <div className="space-y-1">
                        {careerPaths.map((path) => (
                          <Link
                            key={path.title}
                            href={path.href}
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-modern-gray-600 hover:text-syntax-purple-900 hover:bg-modern-gray-50 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>{path.emoji}</span>
                            <div>
                              <div className="font-medium">{path.title}</div>
                              <div className="text-xs text-modern-gray-400">{path.subtitle}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Single Courses */}
                    <div>
                      <div className="text-syntax-purple-900 font-semibold text-sm border-b border-modern-gray-200 pb-2 mb-2">
                        Einzelkurse
                      </div>
                      <div className="space-y-2">
                        {Object.entries(courseCategories).map(([category, courses]) => (
                          <div key={category}>
                            <div className="text-xs font-semibold text-modern-gray-500 mb-1 px-3">
                              {category}
                            </div>
                            {courses.map((course) => (
                              <Link
                                key={course.href}
                                href={course.href}
                                className="block px-3 py-1.5 text-sm text-modern-gray-600 hover:text-syntax-purple-900 hover:bg-modern-gray-50 rounded transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <span className="mr-2">{course.icon}</span>
                                    <span>{course.label}</span>
                                  </div>
                                  <span className="text-xs text-modern-gray-400">{course.duration}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-modern-gray-200">
              <Link
                href="/kontakt"
                className="block mx-3 px-6 py-2 bg-syntax-yellow-900 hover:bg-syntax-yellow-800 text-syntax-primary-900 text-center rounded-xl font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Beratung buchen
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 