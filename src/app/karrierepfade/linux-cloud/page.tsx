import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Target, BookOpen, Briefcase, TrendingUp, MapPin, Server, Cloud, Settings, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';
import PageHero from '../../components/PageHero';

export default function LinuxCloudCareerPath() {
  const careerPath = {
    title: 'Linux & Cloud Engineering',
    subtitle: 'Infrastructure & DevOps',
    duration: '12 Monate',
    description: 'Einstieg in Systemadministration, DevOps-Prozesse & Cloud-Infrastrukturen. Von IT-Grundlagen bis zur vollständigen Cloud-Architektur.',
    targetJobs: [
      'DevOps Engineer',
      'Cloud Engineer', 
      'Linux Administrator',
      'Infrastructure Engineer',
      'Site Reliability Engineer'
    ],
    salaryRange: '42.000 - 78.000€',
    courses: [
      {
        id: 'it-grundlagen',
        number: 1,
        title: 'IT-Grundlagen',
        duration: '3 Monate',
        description: 'IT-Netzwerke, Linux-Grundlagen, IT-Sicherheit, Datenschutz, digitale Werkzeuge',
        skills: ['IT-Netzwerke', 'Linux-Grundlagen', 'IT-Sicherheit', 'Datenschutz', 'Digitale Werkzeuge', 'IT-Basiskompetenz'],
        certificate: 'IT-Basiskompetenz',
        icon: Server,
        color: 'blue',
        goal: 'Solide IT-Grundlagen und erste Linux-Erfahrungen'
      },
      {
        id: 'linux-python-cloud',
        number: 2,
        title: 'Linux, Python & Cloud Basics',
        duration: '3 Monate',
        description: 'Shell, Python-Programmierung, Einführung AWS/Azure, Container (Docker)',
        skills: ['Shell Scripting', 'Python-Programmierung', 'AWS/Azure Einführung', 'Container (Docker)', 'Linux Essentials', 'Cloud Basics'],
        certificate: 'Linux Essentials Vorbereitung',
        icon: Cloud,
        color: 'green',
        goal: 'Linux-Administration und erste Cloud-Services'
      },
      {
        id: 'webtechnologien-admin',
        number: 3,
        title: 'Webtechnologien & Admin-Wissen',
        duration: '3 Monate',
        description: 'HTML/CSS, GitHub, Webserver, Deployment, Monitoring, Fehleranalyse',
        skills: ['HTML/CSS', 'GitHub', 'Webserver', 'Deployment', 'Monitoring', 'Fehleranalyse'],
        certificate: 'Technische Umsetzungskompetenz',
        icon: Settings,
        color: 'purple',
        goal: 'Web-Infrastruktur und professionelles Deployment'
      },
      {
        id: 'devops-cloud',
        number: 4,
        title: 'DevOps & Cloud',
        duration: '3 Monate',
        description: 'CI/CD mit Jenkins, Automatisierung mit Ansible, Terraform, Cloud Deployment',
        skills: ['CI/CD mit Jenkins', 'Ansible Automatisierung', 'Terraform', 'Cloud Deployment', 'DevOps Praktiken', 'IHK-Zertifizierung'],
        certificate: 'Cloud IT Administrator (IHK)',
        icon: Zap,
        color: 'orange',
        goal: 'Enterprise-DevOps und skalierbare Cloud-Architekturen'
      }
    ]
  };

  const jobOutcomes = [
    {
      title: 'DevOps Engineer',
      salary: '50.000 - 75.000€',
      companies: 'Tech-Unternehmen, Fintech',
      description: 'Automatisierung von Entwicklungs- und Deployment-Prozessen',
      courses: ['Linux, Python & Cloud', 'Webtechnologien & Admin', 'DevOps & Cloud']
    },
    {
      title: 'Cloud Engineer',
      salary: '48.000 - 72.000€',
      companies: 'Alle Branchen, Remote',
      description: 'Design und Management von Cloud-Infrastrukturen',
      courses: ['IT-Grundlagen', 'Linux, Python & Cloud', 'DevOps & Cloud']
    },
    {
      title: 'Linux Administrator',
      salary: '42.000 - 65.000€',
      companies: 'IT-Services, Enterprise',
      description: 'Administration und Wartung von Linux-Servern',
      courses: ['IT-Grundlagen', 'Linux, Python & Cloud', 'Webtechnologien & Admin']
    },
    {
      title: 'Infrastructure Engineer',
      salary: '52.000 - 78.000€',
      companies: 'Startups, Großunternehmen',
      description: 'Aufbau und Optimierung kompletter IT-Infrastrukturen',
      courses: ['IT-Grundlagen', 'Linux, Python & Cloud', 'Webtechnologien & Admin', 'DevOps & Cloud']
    }
  ];

  const industryStats = [
    { number: '94%', label: 'Unternehmen nutzen Cloud-Services' },
    { number: '€65k', label: 'Durchschnittsgehalt DevOps Engineer' },
    { number: '30%', label: 'Wachstum bei Cloud-Jobs jährlich' },
    { number: '75%', label: 'Server laufen auf Linux' }
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Linux & Cloud Engineering Karrierepfad"
        subtitle="Von IT-Grundlagen zur Cloud-Infrastruktur – 4 Kurse, DevOps-fokussiert, IHK-Zertifikat"
        badge={{
          icon: Target,
          text: "Infrastructure & DevOps"
        }}
        backgroundImage="/images/stock/colleagues-discussing-new-ideas-business-meeting.jpg"
      />

      {/* Industry Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Cloud & DevOps bestimmen die IT-Zukunft
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Die Digitalisierung macht Linux und Cloud-Kompetenzen zu den gefragtesten IT-Skills.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-syntax-blue-900 mb-2 font-clash-display">
                  {stat.number}
                </div>
                <p className="text-sm text-modern-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Karrierepfad Übersicht */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Dein Weg zum Cloud Engineer
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                {careerPath.description} Du entwickelst systematisch die Kompetenzen, 
                die in der modernen IT-Infrastruktur und DevOps-Welt gefragt sind.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Clock className="w-8 h-8 text-syntax-blue-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Gesamtdauer</h3>
                  <p className="text-modern-gray-600">{careerPath.duration}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Award className="w-8 h-8 text-syntax-blue-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Zertifikate</h3>
                  <p className="text-modern-gray-600">IHK-Zertifikat</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <TrendingUp className="w-8 h-8 text-syntax-blue-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Gehaltsspanne</h3>
                  <p className="text-modern-gray-600">{careerPath.salaryRange}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Briefcase className="w-8 h-8 text-syntax-blue-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Fokus</h3>
                  <p className="text-modern-gray-600">DevOps & Cloud</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-syntax-blue-50 to-syntax-blue-100 p-8 rounded-2xl">
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
              
              <div className="mt-8 pt-6 border-t border-syntax-blue-200">
                <Link href="/kontakt?karrierepfad=linux-cloud">
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
              Vom IT-Einsteiger zum Cloud-Experten
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Jeder Kurs baut systematisch aufeinander auf – von den Grundlagen bis zur Enterprise-Infrastruktur.
            </p>
          </div>

          <div className="space-y-8">
            {careerPath.courses.map((course, index) => (
              <div key={course.id} className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Course Number & Icon */}
                    <div className={`${
                      course.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                      course.color === 'green' ? 'bg-gradient-to-br from-green-600 to-green-700' :
                      course.color === 'purple' ? 'bg-gradient-to-br from-purple-600 to-purple-700' :
                      'bg-gradient-to-br from-orange-600 to-orange-700'
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
                          <p className="text-lg text-syntax-blue-900 font-medium mb-3">
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
                          <div className="grid grid-cols-1 gap-2">
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
                    <div className="bg-white rounded-full p-3 shadow-lg border-2 border-syntax-blue-200">
                      <ArrowRight className="w-6 h-6 text-syntax-blue-900" />
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
              Je nach Interesse kannst du dich auf verschiedene Bereiche der IT-Infrastruktur spezialisieren.
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
                  <Cloud className="w-8 h-8 text-syntax-blue-900" />
                </div>
                
                <div className="border-t border-modern-gray-200 pt-4">
                  <h4 className="font-bold text-syntax-primary-900 mb-3 text-sm">Empfohlene Kurse</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.courses.map((courseName, courseIndex) => (
                      <span key={courseIndex} className="px-3 py-1 bg-syntax-blue-100 text-syntax-blue-900 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deinen Linux & Cloud Karrierepfad
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Von den IT-Grundlagen zur Enterprise-Cloud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?karrierepfad=linux-cloud">
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