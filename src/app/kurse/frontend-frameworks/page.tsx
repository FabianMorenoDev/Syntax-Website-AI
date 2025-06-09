import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Code, Zap, Layers, Database, BookOpen, Briefcase, Target } from 'lucide-react';
import Button from '../../components/ui/Button';
import CourseHero from '../../components/CourseHero';

export const metadata = {
  title: 'Frontend-Frameworks Kurs - Syntax Institut | React Next.js Angular Weiterbildung mit Bildungsgutschein',
  description: 'Lerne React, Next.js, Angular/Vue in 2,5 Monaten. Moderne Frontend-Entwicklung. 100% gefördert mit Bildungsgutschein. IHK-Zertifikat.',
  keywords: 'React, Next.js, Angular, Vue.js, Frontend Frameworks, Tailwind CSS, Strapi, Bildungsgutschein, IHK-Zertifikat',
};

export default function FrontendFrameworksPage() {
  // Career Path Integration
  const careerPathInfo = {
    title: 'Web Development Karrierepfad',
    position: 'Kurs 3 von 4',
    previousCourse: {
      id: 'web-grundlagen',
      title: 'Web-Grundlagen',
      duration: '3 Monate'
    },
    nextCourse: {
      id: 'web-spezialisierung',
      title: 'Web-Spezialisierung',
      duration: '2,5 Monate'
    },
    totalDuration: '12 Monate',
    pathway: [
      { title: 'Produktdesign', current: false, duration: '4 Mon.' },
      { title: 'Web-Grundlagen', current: false, duration: '3 Mon.' },
      { title: 'Frontend-Frameworks', current: true, duration: '2,5 Mon.' },
      { title: 'Web-Spezialisierung', current: false, duration: '2,5 Mon.' }
    ]
  };

  const learningModules = [
    {
      week: 'Wochen 1-3',
      title: 'React Fundamentals',
      description: 'Moderne React-Entwicklung mit Hooks und funktionalen Komponenten',
      skills: ['React Components', 'JSX Syntax', 'Hooks (useState, useEffect)', 'Props & State', 'Event Handling', 'Conditional Rendering'],
      icon: Code
    },
    {
      week: 'Wochen 4-6',
      title: 'Next.js & Routing',
      description: 'Full-Stack React mit Next.js und modernem Routing',
      skills: ['Next.js App Router', 'Server Components', 'Static Generation', 'API Routes', 'Dynamic Routing', 'Image Optimization'],
      icon: Zap
    },
    {
      week: 'Wochen 7-8',
      title: 'State Management & APIs',
      description: 'Komplexe Anwendungen mit State Management und API-Integration',
      skills: ['Context API', 'Custom Hooks', 'Fetch & Axios', 'Error Handling', 'Loading States', 'Data Caching'],
      icon: Database
    },
    {
      week: 'Wochen 9-10',
      title: 'Styling & Deployment',
      description: 'Professionelles Styling mit Tailwind CSS und Production Deployment',
      skills: ['Tailwind CSS', 'Responsive Design', 'Component Libraries', 'Vercel Deployment', 'Performance Optimization', 'SEO Basics'],
      icon: Layers
    }
  ];

  const careerPaths = [
    { title: 'React Developer', salary: '42.000 - 65.000€', companies: 'Startups, Tech-Unternehmen, Agenturen' },
    { title: 'Frontend Developer', salary: '40.000 - 62.000€', companies: 'Alle Branchen, Remote möglich' },
    { title: 'Next.js Developer', salary: '45.000 - 68.000€', companies: 'E-Commerce, SaaS, Consulting' },
    { title: 'Full-Stack Developer', salary: '48.000 - 72.000€', companies: 'Tech-Startups (mit Backend-Kenntnissen)' }
  ];

  const technologies = [
    { name: 'React.js', level: 'Expert', color: 'bg-blue-100 text-blue-700' },
    { name: 'Next.js', level: 'Advanced', color: 'bg-black text-white' },
    { name: 'TypeScript', level: 'Advanced', color: 'bg-blue-100 text-blue-700' },
    { name: 'Tailwind CSS', level: 'Expert', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Angular/Vue', level: 'Intermediate', color: 'bg-green-100 text-green-700' },
    { name: 'Strapi CMS', level: 'Intermediate', color: 'bg-purple-100 text-purple-700' }
  ];

  const projects = [
    {
      title: 'E-Commerce Shop',
      description: 'Vollständiger Online-Shop mit React, Next.js und Stripe Integration',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe']
    },
    {
      title: 'Blog-System',
      description: 'Content Management System mit Strapi Backend und React Frontend',
      technologies: ['React', 'Strapi', 'Next.js', 'Markdown']
    },
    {
      title: 'Dashboard Application',
      description: 'Interaktives Admin-Dashboard mit Charts und Real-time Updates',
      technologies: ['React', 'Context API', 'Chart.js', 'Socket.io']
    }
  ];

  const frameworkComparison = [
    {
      name: 'React',
      focus: 'Component-basiert',
      strengths: ['Große Community', 'Flexibel', 'Job-Markt'],
      useCases: 'SPAs, E-Commerce, Dashboards'
    },
    {
      name: 'Angular',
      focus: 'Full Framework',
      strengths: ['TypeScript Native', 'Enterprise', 'Vollständig'],
      useCases: 'Enterprise Apps, Complex Systems'
    },
    {
      name: 'Vue.js',
      focus: 'Progressiv',
      strengths: ['Einfach zu lernen', 'Leichtgewichtig', 'Flexibel'],
      useCases: 'Kleine bis mittlere Apps'
    }
  ];

  return (
    <main className="min-h-screen">
      <CourseHero
        title="Frontend-Frameworks"
        subtitle="React, Next.js & moderne Frontend-Entwicklung"
        duration="2,5 Monate"
        description="Von React-Grundlagen zu komplexen Next.js Anwendungen. Du lernst die gefragtesten Frontend-Frameworks und baust echte Web-Anwendungen."
        careerPathTitle="Web Development Karrierepfads"
        careerPathPosition="Kurs 3 von 4"
        certificate="Junior Web Developer (IHK)"
        technologies={['React.js', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'Strapi']}
        salaryRange="42.000 - 65.000€"
        courseSlug="frontend-frameworks"
        careerPathSlug="web-development"
      />

      {/* Career Path Integration */}
      <section className="py-16 bg-gradient-to-br from-syntax-green-50 to-syntax-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-syntax-primary-900 mb-3 font-clash-display">
                Teil des Web Development Karrierepfads
              </h2>
              <p className="text-lg text-modern-gray-600">
                Dieser Kurs ist <strong>Kurs 3 von 4</strong> im Web Development Karrierepfad. Nach Web-Grundlagen lernst du moderne Frameworks.
              </p>
            </div>

            {/* Career Path Progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-modern-gray-600">Karrierepfad-Fortschritt</span>
                <span className="text-sm text-syntax-green-900 font-medium">{careerPathInfo.position}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {careerPathInfo.pathway.map((course, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    course.current 
                      ? 'bg-syntax-green-100 border-syntax-green-300 text-syntax-green-900' 
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    <div className="text-center">
                      <div className="text-sm font-medium">{course.title}</div>
                      <div className="text-xs mt-1">{course.duration}</div>
                      {course.current && (
                        <div className="mt-2 inline-block px-2 py-1 bg-syntax-green-200 text-syntax-green-900 rounded-full text-xs font-medium">
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
                  Perfekt wenn du bereits HTML, CSS & JavaScript kennst. Steige direkt in moderne Frameworks ein.
                </p>
                <Link href="/kontakt?kurs=frontend-frameworks">
                  <Button variant="outline" fullWidth>
                    Frontend-Frameworks einzeln buchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-syntax-green-50 to-syntax-green-100 p-6 rounded-xl border border-syntax-green-200">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-syntax-green-900 mr-3" />
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
                Was du in 2,5 Monaten lernst
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                Von React-Grundlagen zu komplexen Next.js Anwendungen. Du lernst die gefragtesten 
                Frontend-Frameworks und baust echte Web-Anwendungen.
              </p>

              <div className="space-y-6">
                {learningModules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-syntax-green-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-syntax-green-900" />
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
                    <span className="font-medium text-syntax-primary-900">2,5 Monate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Format</span>
                    <span className="font-medium text-syntax-primary-900">Vollzeit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Abschluss</span>
                    <span className="font-medium text-syntax-primary-900">IHK-Zertifikat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Förderung</span>
                    <span className="font-medium text-syntax-green-900">100% möglich</span>
                  </div>
                </div>
              </div>

              {/* Previous & Next Steps */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-syntax-blue-50 to-syntax-blue-100 rounded-xl p-6 border border-syntax-blue-200">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Vorheriger Kurs</h3>
                  <p className="text-syntax-primary-900 mb-3 text-sm">
                    <strong>{careerPathInfo.previousCourse.title}</strong> für HTML, CSS & JavaScript Basics
                  </p>
                  <Link href={`/kurse/${careerPathInfo.previousCourse.id}`}>
                    <Button variant="outline" fullWidth size="sm">
                      {careerPathInfo.previousCourse.title} ansehen
                    </Button>
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-syntax-purple-50 to-syntax-purple-100 rounded-xl p-6 border border-syntax-purple-200">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">Nächster Kurs</h3>
                  <p className="text-syntax-primary-900 mb-3 text-sm">
                    <strong>{careerPathInfo.nextCourse.title}</strong> für Backend & Full-Stack
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
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Frameworks & Tools</h3>
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

      {/* Framework Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Framework-Vergleich
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Lerne die Unterschiede zwischen React, Angular und Vue.js und wann welches Framework am besten geeignet ist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworkComparison.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-3">{framework.name}</h3>
                <div className="mb-4">
                  <span className="text-sm font-medium text-syntax-green-900 bg-syntax-green-100 px-2 py-1 rounded-full">
                    {framework.focus}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-syntax-primary-900 mb-2 text-sm">Stärken:</h4>
                  <ul className="space-y-1">
                    {framework.strengths.map((strength, strengthIndex) => (
                      <li key={strengthIndex} className="text-sm text-modern-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-syntax-green-900 mr-2" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-syntax-primary-900 mb-2 text-sm">Typische Anwendungen:</h4>
                  <p className="text-sm text-modern-gray-600">{framework.useCases}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Praxisprojekte
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Baue echte Anwendungen mit React und Next.js, die du später in deinem Portfolio präsentieren kannst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-3">{project.title}</h3>
                <p className="text-modern-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-syntax-green-100 text-syntax-green-900 rounded-full text-xs font-medium">
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
              Mit modernen Frontend-Frameworks stehen dir viele spannende Karrierewege offen.
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
                  <Briefcase className="w-8 h-8 text-syntax-green-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-green-600 via-syntax-green-700 to-syntax-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte mit modernen Frontend-Frameworks
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. React, Next.js und mehr in nur 2,5 Monaten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=frontend-frameworks">
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