import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Target, BookOpen, Briefcase, TrendingUp, MapPin, Globe, Code, Database, Brain } from 'lucide-react';
import Button from '../../components/ui/Button';
import CareerPathHero from '../../components/CareerPathHero';

export default function WebDevelopmentCareerPath() {
  const careerPath = {
    title: 'Web Development',
    subtitle: 'Frontend & Backend Entwicklung',
    duration: '12 Monate',
    description: 'Einstieg in moderne Webentwicklung mit Frontend- und Backend-Kompetenzen. Aufbau vom Design bis zur vollständigen Web-Anwendung.',
    targetJobs: [
      'Frontend Developer',
      'Backend Developer', 
      'Full-Stack Developer',
      'JavaScript Developer',
      'Web Application Developer'
    ],
    salaryRange: '35.000 - 70.000€',
    courses: [
      {
        id: 'produktdesign',
        number: 1,
        title: 'Produktdesign',
        duration: '4 Monate',
        description: 'UI/UX Design, Designprinzipien, Figma & Framer, Projektmanagement, Produktstrategie',
        skills: ['UI/UX Design', 'Designprinzipien', 'Figma & Framer', 'Projektmanagement', 'Produktstrategie', 'User Research'],
        certificate: 'Junior Product Designer (IHK)',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        color: 'purple',
        goal: 'Grundlagen des modernen Webdesigns und Nutzererfahrung'
      },
      {
        id: 'web-grundlagen',
        number: 2,
        title: 'Web-Grundlagen',
        duration: '3 Monate',
        description: 'HTML & CSS, Bootstrap, JavaScript & TypeScript, Publishing',
        skills: ['HTML5 & CSS3', 'Bootstrap Framework', 'JavaScript ES6+', 'TypeScript', 'Responsive Design', 'Git & Publishing'],
        certificate: 'Interaktive Website',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        color: 'blue',
        goal: 'Technische Umsetzung deiner Designs in funktionsfähige Websites'
      },
      {
        id: 'frontend-frameworks',
        number: 3,
        title: 'Frontend-Frameworks',
        duration: '2,5 Monate',
        description: 'React, Next.js, Angular/Vue (Einblick), Tailwind CSS, Strapi, Deployment',
        skills: ['React.js', 'Next.js', 'Angular/Vue Einblick', 'Tailwind CSS', 'Strapi CMS', 'Deployment Strategien'],
        certificate: 'Junior Web Developer (IHK)',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        color: 'green',
        goal: 'Moderne Frontend-Entwicklung mit professionellen Frameworks'
      },
      {
        id: 'web-spezialisierung',
        number: 4,
        title: 'Web-Spezialisierung',
        duration: '2,5 Monate',
        description: 'Node.js, Express.js, Authentifizierung, Datenbanken, Performance & Automation',
        skills: ['Node.js & Express.js', 'Authentifizierung', 'Datenbank Design', 'Performance Optimization', 'Automation', 'Testing'],
        certificate: 'Web Development Specialist (IHK)',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        color: 'purple',
        goal: 'Backend-Entwicklung und vollständige Web-Anwendungen'
      }
    ]
  };

  const jobOutcomes = [
    {
      title: 'Frontend Developer',
      salary: '35.000 - 55.000€',
      companies: 'Startups, Agenturen, Mittelstand',
      description: 'Entwicklung benutzerfreundlicher Web-Interfaces',
      courses: ['Produktdesign', 'Web-Grundlagen', 'Frontend-Frameworks']
    },
    {
      title: 'Backend Developer',
      salary: '40.000 - 65.000€',
      companies: 'Tech-Unternehmen, Fintech, E-Commerce',
      description: 'Server-seitige Anwendungslogik und APIs',
      courses: ['Web-Grundlagen', 'Frontend-Frameworks', 'Web-Spezialisierung']
    },
    {
      title: 'Full-Stack Developer',
      salary: '45.000 - 70.000€',
      companies: 'Alle Branchen, Remote möglich',
      description: 'Komplette Web-Anwendungen von Frontend bis Backend',
      courses: ['Produktdesign', 'Web-Grundlagen', 'Frontend-Frameworks', 'Web-Spezialisierung']
    },
    {
      title: 'JavaScript Developer',
      salary: '42.000 - 68.000€',
      companies: 'Software-Häuser, Consulting',
      description: 'Spezialisierung auf JavaScript-basierte Lösungen',
      courses: ['Web-Grundlagen', 'Frontend-Frameworks', 'Web-Spezialisierung']
    }
  ];

  return (
    <main className="min-h-screen">
      <CareerPathHero
        title="Web Development"
        subtitle="Vom Design zur vollständigen Web-Anwendung"
        duration="12 Monate"
        modules={4}
        targetJobs={careerPath.targetJobs}
        description={careerPath.description}
        courseCount={4}
        certificates={['Product Designer (IHK)', 'Web Developer (IHK)', 'Junior Web Developer (IHK)', 'Web Development Specialist (IHK)']}
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />

      {/* Kurse Übersicht */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-syntax-primary-900 mb-3 lg:mb-4 font-clash-display">
              4 Kurse, 1 Karriereziel
            </h2>
            <p className="text-lg lg:text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Jeder Kurs baut auf dem vorherigen auf und bringt dich deinem Ziel als Web Developer näher.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {careerPath.courses.map((course, index) => (
              <div key={course.id} className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-4">
                    {/* Course Image & Number */}
                    <div className="relative h-48 lg:h-auto overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-3xl lg:text-4xl font-bold mb-2 font-clash-display">
                            {course.number}
                          </div>
                          <div className="text-sm font-medium">Kurs</div>
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="lg:col-span-3 p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 lg:mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-syntax-primary-900 mb-2 font-clash-display">
                            {course.title}
                          </h3>
                          <p className="text-base lg:text-lg text-syntax-purple-900 font-medium mb-3">
                            {course.goal}
                          </p>
                          <p className="text-modern-gray-600 mb-4 text-sm lg:text-base">{course.description}</p>
                        </div>
                        <div className="text-left lg:text-right lg:ml-6 flex-shrink-0">
                          <div className="text-xs lg:text-sm text-modern-gray-500">Dauer</div>
                          <div className="font-bold text-syntax-primary-900 text-sm lg:text-base">{course.duration}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                        <div>
                          <h4 className="font-bold text-syntax-primary-900 mb-3 text-sm lg:text-base">Was du lernst</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {course.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-start">
                                <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-syntax-green-900 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-xs lg:text-sm text-modern-gray-700 leading-relaxed">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="bg-syntax-yellow-50 p-4 rounded-xl border border-syntax-yellow-200">
                            <div className="flex items-center mb-2">
                              <Award className="w-4 h-4 lg:w-5 lg:h-5 text-syntax-yellow-900 mr-2" />
                              <span className="font-bold text-syntax-primary-900 text-xs lg:text-sm">Abschluss</span>
                            </div>
                            <p className="text-syntax-primary-900 font-medium text-sm lg:text-base">{course.certificate}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                        <Link href={`/kurse/${course.id}`}>
                          <Button variant="primary" size="md" className="w-full sm:w-auto">
                            Kurs Details ansehen
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Link href={`/kontakt?kurs=${course.id}`}>
                          <Button variant="outline" size="md" className="w-full sm:w-auto">
                            Einzelberatung buchen
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Arrow */}
                {index < careerPath.courses.length - 1 && (
                  <div className="flex justify-center my-4 lg:my-6">
                    <div className="bg-white rounded-full p-2 lg:p-3 shadow-lg border-2 border-syntax-purple-200">
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-syntax-purple-900" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Outcomes */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-syntax-primary-900 mb-3 lg:mb-4 font-clash-display">
              Deine konkreten Berufschancen
            </h2>
            <p className="text-lg lg:text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Je nach Interessenschwerpunkt kannst du bereits nach verschiedenen Kursen einsteigen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {jobOutcomes.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-modern-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-syntax-primary-900 mb-2">{job.title}</h3>
                    <p className="text-modern-gray-600 mb-3 text-sm lg:text-base">{job.description}</p>
                    <div className="text-xl lg:text-2xl font-bold text-syntax-green-900 mb-2">{job.salary}</div>
                    <p className="text-xs lg:text-sm text-modern-gray-500">{job.companies}</p>
                  </div>
                  <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-syntax-purple-900 ml-4 flex-shrink-0" />
                </div>
                
                <div className="border-t border-modern-gray-200 pt-4">
                  <h4 className="font-bold text-syntax-primary-900 mb-3 text-xs lg:text-sm">Empfohlene Kurse</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.courses.map((courseName, courseIndex) => (
                      <span key={courseIndex} className="px-2 lg:px-3 py-1 bg-syntax-purple-100 text-syntax-purple-900 rounded-full text-xs font-medium">
                        {courseName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-syntax-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 font-clash-display">
            Starte deinen Web Development Karrierepfad
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Flexibel kombinierbar. Einzelkurse oder kompletter Pfad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?karrierepfad=web-development">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
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