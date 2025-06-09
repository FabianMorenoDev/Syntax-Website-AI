import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Target, BookOpen, Briefcase, TrendingUp, MapPin, Globe, Code, Database, Brain } from 'lucide-react';
import Button from '../../components/ui/Button';
import PageHero from '../../components/PageHero';

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
        icon: Globe,
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
        icon: Code,
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
        icon: Database,
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
        icon: Brain,
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
      <PageHero
        title="Web Development Karrierepfad"
        subtitle="Vom Design zur vollständigen Web-Anwendung – 4 Kurse, 12 Monate, IHK-Zertifikate"
        badge={{
          icon: Target,
          text: "Kompletter Karrierepfad"
        }}
        backgroundImage="/images/stock/colleagues-discussing-new-ideas-business-meeting.jpg"
      />

      {/* Karrierepfad Übersicht */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Dein Weg zum Web Developer
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                {careerPath.description} In 4 aufeinander aufbauenden Kursen entwickelst du alle Fähigkeiten, 
                die moderne Unternehmen von Web Developern erwarten.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Clock className="w-8 h-8 text-syntax-purple-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Gesamtdauer</h3>
                  <p className="text-modern-gray-600">{careerPath.duration}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Award className="w-8 h-8 text-syntax-purple-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Zertifikate</h3>
                  <p className="text-modern-gray-600">4 IHK-Zertifikate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <TrendingUp className="w-8 h-8 text-syntax-purple-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Gehaltsspanne</h3>
                  <p className="text-modern-gray-600">{careerPath.salaryRange}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Briefcase className="w-8 h-8 text-syntax-purple-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Jobaussichten</h3>
                  <p className="text-modern-gray-600">Sehr hoch</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-syntax-purple-50 to-syntax-purple-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Ziel-Berufsfelder
              </h3>
              <div className="space-y-3">
                {careerPath.targetJobs.map((job, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-syntax-green-900 mr-3" />
                    <span className="text-syntax-primary-900 font-medium">{job}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-syntax-purple-200">
                <Link href="/kontakt?karrierepfad=web-development">
                  <Button variant="accent" fullWidth size="lg">
                    Kostenlose Beratung buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Kurs Progression */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              4 Kurse, 1 Karriereziel
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Jeder Kurs baut auf dem vorherigen auf und bringt dich deinem Ziel als Web Developer näher.
            </p>
          </div>

          <div className="space-y-8">
            {careerPath.courses.map((course, index) => (
              <div key={course.id} className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Course Number & Icon */}
                    <div className={`${
                      course.color === 'purple' ? 'bg-gradient-to-br from-purple-600 to-purple-700' :
                      course.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                      course.color === 'green' ? 'bg-gradient-to-br from-green-600 to-green-700' :
                      'bg-gradient-to-br from-purple-600 to-purple-700'
                    } text-white p-8 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2 font-clash-display">
                          {course.number}
                        </div>
                        <course.icon className="w-12 h-12 mx-auto" />
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="lg:col-span-3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-syntax-primary-900 mb-2 font-clash-display">
                            {course.title}
                          </h3>
                          <p className="text-lg text-syntax-purple-900 font-medium mb-3">
                            {course.goal}
                          </p>
                          <p className="text-modern-gray-600 mb-4">{course.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-modern-gray-500">Dauer</div>
                          <div className="font-bold text-syntax-primary-900">{course.duration}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-syntax-primary-900 mb-3">Was du lernst</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {course.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2 flex-shrink-0" />
                                <span className="text-sm text-modern-gray-700">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="bg-gradient-to-br from-syntax-yellow-50 to-syntax-yellow-100 p-4 rounded-xl">
                            <div className="flex items-center mb-2">
                              <Award className="w-5 h-5 text-syntax-yellow-900 mr-2" />
                              <span className="font-bold text-syntax-primary-900 text-sm">Abschluss</span>
                            </div>
                            <p className="text-syntax-primary-900 font-medium">{course.certificate}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link href={`/kurse/${course.id}`}>
                          <Button variant="primary">
                            Kurs Details ansehen
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Link href={`/kontakt?kurs=${course.id}`}>
                          <Button variant="outline">
                            Einzelberatung buchen
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Arrow */}
                {index < careerPath.courses.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="bg-white rounded-full p-3 shadow-lg border-2 border-syntax-purple-200">
                      <ArrowRight className="w-6 h-6 text-syntax-purple-900" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine konkreten Berufschancen
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Je nach Interessenschwerpunkt kannst du bereits nach verschiedenen Kursen einsteigen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOutcomes.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-modern-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-syntax-primary-900 mb-2">{job.title}</h3>
                    <p className="text-modern-gray-600 mb-3">{job.description}</p>
                    <div className="text-2xl font-bold text-syntax-green-900 mb-2">{job.salary}</div>
                    <p className="text-sm text-modern-gray-500">{job.companies}</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-syntax-purple-900" />
                </div>
                
                <div className="border-t border-modern-gray-200 pt-4">
                  <h4 className="font-bold text-syntax-primary-900 mb-3 text-sm">Empfohlene Kurse</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.courses.map((courseName, courseIndex) => (
                      <span key={courseIndex} className="px-3 py-1 bg-syntax-purple-100 text-syntax-purple-900 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-br from-syntax-primary-900 via-syntax-purple-900 to-syntax-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deinen Web Development Karrierepfad
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Flexibel kombinierbar. Einzelkurse oder kompletter Pfad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?karrierepfad=web-development">
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