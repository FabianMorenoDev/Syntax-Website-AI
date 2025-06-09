import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Code, Globe, Terminal, Database, BookOpen, Briefcase, Target } from 'lucide-react';
import Button from '../../components/ui/Button';
import CourseHero from '../../components/CourseHero';

export const metadata = {
  title: 'Web-Grundlagen Kurs - Syntax Institut | HTML CSS JavaScript Weiterbildung mit Bildungsgutschein',
  description: 'Lerne HTML, CSS, JavaScript & TypeScript in 3 Monaten. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, praxisorientiert.',
  keywords: 'Web Grundlagen, HTML, CSS, JavaScript, TypeScript, Bootstrap, Git, Bildungsgutschein',
};

export default function WebGrundlagenPage() {
  // Career Path Integration
  const careerPathInfo = {
    title: 'Web Development Karrierepfad',
    position: 'Kurs 2 von 4',
    previousCourse: {
      id: 'produktdesign',
      title: 'Produktdesign',
      duration: '4 Monate'
    },
    nextCourse: {
      id: 'frontend-frameworks',
      title: 'Frontend-Frameworks',
      duration: '2,5 Monate'
    },
    totalDuration: '12 Monate',
    pathway: [
      { title: 'Produktdesign', current: false, duration: '4 Mon.' },
      { title: 'Web-Grundlagen', current: true, duration: '3 Mon.' },
      { title: 'Frontend-Frameworks', current: false, duration: '2,5 Mon.' },
      { title: 'Web-Spezialisierung', current: false, duration: '2,5 Mon.' }
    ]
  };

  const learningModules = [
    {
      week: 'Wochen 1-4',
      title: 'HTML & CSS Fundamentals',
      description: 'Aufbau moderner Webseiten mit semantischem HTML und CSS',
      skills: ['HTML5 Semantik', 'CSS Grid & Flexbox', 'Responsive Design', 'CSS Animations', 'Accessibility Basics', 'Cross-Browser Compatibility'],
      icon: Globe
    },
    {
      week: 'Wochen 5-8',
      title: 'Bootstrap & Frameworks',
      description: 'Schnelle UI-Entwicklung mit Bootstrap und CSS-Frameworks',
      skills: ['Bootstrap Components', 'Grid System', 'Utility Classes', 'Custom Themes', 'Component Customization', 'Mobile First Approach'],
      icon: Code
    },
    {
      week: 'Wochen 9-10',
      title: 'JavaScript Grundlagen',
      description: 'Interaktivität und Dynamik mit modernem JavaScript',
      skills: ['JavaScript ES6+', 'DOM Manipulation', 'Event Handling', 'Async/Await', 'API Requests', 'Local Storage'],
      icon: Terminal
    },
    {
      week: 'Wochen 11-12',
      title: 'TypeScript & Publishing',
      description: 'Type-Safe Development und Web-Publishing',
      skills: ['TypeScript Basics', 'Type Annotations', 'Git & GitHub', 'Deployment', 'Domain Setup', 'Performance Optimization'],
      icon: Database
    }
  ];

  const careerPaths = [
    { title: 'Frontend Developer', salary: '35.000 - 55.000€', companies: 'Startups, Agenturen, Mittelstand' },
    { title: 'Web Developer', salary: '38.000 - 58.000€', companies: 'Alle Branchen, Remote möglich' },
    { title: 'UI Developer', salary: '40.000 - 60.000€', companies: 'E-Commerce, SaaS Unternehmen' },
    { title: 'Junior Full-Stack Developer', salary: '42.000 - 62.000€', companies: 'Tech-Startups (mit Weiterbildung)' }
  ];

  const technologies = [
    { name: 'HTML5', level: 'Expert', color: 'bg-orange-100 text-orange-700' },
    { name: 'CSS3', level: 'Expert', color: 'bg-blue-100 text-blue-700' },
    { name: 'JavaScript ES6+', level: 'Advanced', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'TypeScript', level: 'Intermediate', color: 'bg-blue-100 text-blue-700' },
    { name: 'Bootstrap', level: 'Advanced', color: 'bg-purple-100 text-purple-700' },
    { name: 'Git & GitHub', level: 'Intermediate', color: 'bg-gray-100 text-gray-700' }
  ];

  const projects = [
    {
      title: 'Responsive Portfolio Website',
      description: 'Vollständig responsive Website mit modernem CSS Grid und Flexbox',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Bootstrap Dashboard',
      description: 'Admin-Dashboard mit Bootstrap Components und interaktiven Charts',
      technologies: ['Bootstrap', 'JavaScript', 'Chart.js']
    },
    {
      title: 'TypeScript Web App',
      description: 'Interaktive Single-Page-Application mit TypeScript',
      technologies: ['TypeScript', 'HTML5', 'CSS3']
    }
  ];

  return (
    <main className="min-h-screen">
      <CourseHero
        title="Web-Grundlagen"
        subtitle="HTML, CSS, JavaScript & TypeScript"
        duration="3 Monate"
        description="Von den ersten HTML-Tags bis zur vollständigen responsive Website. Du lernst alle technischen Grundlagen für moderne Webentwicklung."
        careerPathTitle="Web Development Karrierepfads"
        careerPathPosition="Kurs 2 von 4"
        certificate="Interaktive Website"
        technologies={['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Git']}
        salaryRange="35.000 - 55.000€"
        courseSlug="web-grundlagen"
        careerPathSlug="web-development"
      />

      {/* Career Path Integration */}
      <section className="py-16 bg-gradient-to-br from-syntax-blue-50 to-syntax-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-syntax-primary-900 mb-3 font-clash-display">
                Teil des Web Development Karrierepfads
              </h2>
              <p className="text-lg text-modern-gray-600">
                Dieser Kurs ist <strong>Kurs 2 von 4</strong> im Web Development Karrierepfad. Perfekt nach Produktdesign oder als Einstieg für Technik-Interessierte.
              </p>
            </div>

            {/* Career Path Progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-modern-gray-600">Karrierepfad-Fortschritt</span>
                <span className="text-sm text-syntax-blue-900 font-medium">{careerPathInfo.position}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {careerPathInfo.pathway.map((course, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    course.current 
                      ? 'bg-syntax-blue-100 border-syntax-blue-300 text-syntax-blue-900' 
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    <div className="text-center">
                      <div className="text-sm font-medium">{course.title}</div>
                      <div className="text-xs mt-1">{course.duration}</div>
                      {course.current && (
                        <div className="mt-2 inline-block px-2 py-1 bg-syntax-blue-200 text-syntax-blue-900 rounded-full text-xs font-medium">
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
                  Starte direkt mit den Web-Grundlagen. Ideal für Quereinsteiger oder nach einem Design-Kurs.
                </p>
                <Link href="/kontakt?kurs=web-grundlagen">
                  <Button variant="outline" fullWidth>
                    Web-Grundlagen einzeln buchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-syntax-blue-50 to-syntax-blue-100 p-6 rounded-xl border border-syntax-blue-200">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-syntax-blue-900 mr-3" />
                  <h3 className="text-lg font-bold text-syntax-primary-900">Kompletter Karrierepfad</h3>
                </div>
                <p className="text-syntax-primary-900 mb-4 text-sm">
                  Buche den kompletten Web Development Pfad und werde Full-Stack Developer in 12 Monaten.
                </p>
                <Link href="/karrierepfade/web-development">
                  <Button variant="primary" fullWidth>
                    Web Development Karrierepfad
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurs Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Was du in 3 Monaten lernst
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                Von den ersten HTML-Tags bis zur vollständigen responsive Website. 
                Du lernst alle technischen Grundlagen für moderne Webentwicklung.
              </p>

              <div className="space-y-6">
                {learningModules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-syntax-blue-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-syntax-blue-900" />
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
                    <span className="font-medium text-syntax-primary-900">Interaktive Website</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Förderung</span>
                    <span className="font-medium text-syntax-green-900">100% möglich</span>
                  </div>
                </div>
              </div>

              {/* Previous & Next Steps */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-syntax-purple-50 to-syntax-purple-100 rounded-xl p-6 border border-syntax-purple-200">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Vorheriger Kurs</h3>
                  <p className="text-syntax-primary-900 mb-3 text-sm">
                    <strong>{careerPathInfo.previousCourse.title}</strong> für Design-Grundlagen (optional)
                  </p>
                  <Link href={`/kurse/${careerPathInfo.previousCourse.id}`}>
                    <Button variant="outline" fullWidth size="sm">
                      {careerPathInfo.previousCourse.title} ansehen
                    </Button>
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-syntax-green-50 to-syntax-green-100 rounded-xl p-6 border border-syntax-green-200">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Nächster Kurs</h3>
                  <p className="text-syntax-primary-900 mb-3 text-sm">
                    <strong>{careerPathInfo.nextCourse.title}</strong> für moderne Frameworks
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Praxisprojekte
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Baue echte Websites und Web-Anwendungen, die du später in deinem Portfolio präsentieren kannst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-3">{project.title}</h3>
                <p className="text-modern-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-syntax-blue-100 text-syntax-blue-900 rounded-full text-xs font-medium">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Berufsperspektiven
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Mit soliden Web-Grundlagen kannst du bereits erste Jobs antreten oder weiterführende Kurse belegen.
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
                  <Briefcase className="w-8 h-8 text-syntax-blue-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-blue-600 via-syntax-blue-700 to-syntax-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine Web-Entwicklung
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Die technische Basis für alle Web-Projekte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=web-grundlagen">
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