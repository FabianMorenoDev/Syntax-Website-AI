import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Server, Cloud, Shield, Settings } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata = {
  title: 'Linux & Cloud Engineering Kurs - Syntax Institut | DevOps Weiterbildung mit Bildungsgutschein',
  description: 'Werde DevOps Engineer in 6 Monaten. Linux, AWS, Docker, Kubernetes. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, IHK-Abschluss.',
  keywords: 'Linux, Cloud Engineering, DevOps, AWS, Docker, Kubernetes, Infrastructure, Bildungsgutschein, Weiterbildung, AZAV',
};

export default function LinuxCloudPage() {
  const modules = [
    {
      week: 'Modul 1 (3 Monate)',
      title: 'Grundlagen IT & Betriebssysteme',
      description: 'IT-Netzwerke, Linux-Grundlagen, IT-Sicherheit, Datenschutz, digitale Werkzeuge',
      skills: ['IT-Netzwerke', 'Linux-Grundlagen', 'IT-Sicherheit', 'Datenschutz', 'Digitale Werkzeuge', 'IT-Basiskompetenz'],
      icon: Server
    },
    {
      week: 'Modul 2 (3 Monate)',
      title: 'Linux, Python & Cloud Basics',
      description: 'Shell, Python-Programmierung, Einführung AWS/Azure, Container (Docker)',
      skills: ['Shell Scripting', 'Python-Programmierung', 'AWS/Azure Einführung', 'Container (Docker)', 'Linux Essentials', 'Cloud Basics'],
      icon: Cloud
    },
    {
      week: 'Modul 3 (3 Monate)',
      title: 'Webtechnologien & Admin-Wissen',
      description: 'HTML/CSS, GitHub, Webserver, Deployment, Monitoring, Fehleranalyse',
      skills: ['HTML/CSS', 'GitHub', 'Webserver', 'Deployment', 'Monitoring', 'Fehleranalyse'],
      icon: Settings
    },
    {
      week: 'Modul 4 (3 Monate)',
      title: 'DevOps & Cloud',
      description: 'CI/CD mit Jenkins, Automatisierung mit Ansible, Terraform, Cloud Deployment',
      skills: ['CI/CD mit Jenkins', 'Ansible Automatisierung', 'Terraform', 'Cloud Deployment', 'DevOps Praktiken', 'IHK-Zertifizierung'],
      icon: Award
    }
  ];

  const careerPaths = [
    { title: 'DevOps Engineer', salary: '50.000 - 75.000€', companies: 'Tech-Unternehmen, Fintech' },
    { title: 'Cloud Engineer', salary: '48.000 - 72.000€', companies: 'Alle Branchen, Remote' },
    { title: 'Linux Administrator', salary: '42.000 - 65.000€', companies: 'IT-Services, Enterprise' },
    { title: 'Infrastructure Engineer', salary: '52.000 - 78.000€', companies: 'Startups, Großunternehmen' }
  ];

  const technologies = [
    { name: 'Linux', level: 'Expert', color: 'bg-orange-100 text-orange-700', category: 'Operating System' },
    { name: 'AWS', level: 'Advanced', color: 'bg-yellow-100 text-yellow-700', category: 'Cloud Platform' },
    { name: 'Docker', level: 'Advanced', color: 'bg-blue-100 text-blue-700', category: 'Containerization' },
    { name: 'Kubernetes', level: 'Advanced', color: 'bg-purple-100 text-purple-700', category: 'Orchestration' },
    { name: 'Terraform', level: 'Intermediate', color: 'bg-green-100 text-green-700', category: 'IaC' },
    { name: 'Ansible', level: 'Intermediate', color: 'bg-red-100 text-red-700', category: 'Automation' },
    { name: 'Jenkins', level: 'Advanced', color: 'bg-indigo-100 text-indigo-700', category: 'CI/CD' },
    { name: 'Monitoring', level: 'Advanced', color: 'bg-pink-100 text-pink-700', category: 'Operations' }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services', level: 'Associate' },
    { name: 'Certified Kubernetes Administrator', provider: 'Cloud Native Computing Foundation', level: 'Professional' },
    { name: 'Linux Professional Institute', provider: 'LPI', level: 'LPIC-1' }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-blue-900 to-syntax-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Vollzeit • 12 Monate • IHK-Zertifikat
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display">
                Linux & Cloud
                <span className="block text-syntax-yellow-900">Engineering</span>
              </h1>
              
              <p className="text-xl text-purple-100 leading-relaxed">
                Werde DevOps Engineer und Infrastructure Specialist. Lerne Linux, AWS, Docker, 
                Kubernetes und moderne Cloud-Technologien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="xl">
                  Kostenlose Beratung buchen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl">
                  Infopaket herunterladen
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">48</div>
                  <div className="text-sm text-syntax-blue-100">Wochen Intensiv</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">100%</div>
                  <div className="text-sm text-syntax-blue-100">Förderung möglich</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">97%</div>
                  <div className="text-sm text-syntax-blue-100">Vermittlungsquote</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80" 
                  alt="Server und Cloud Infrastructure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">52.000€</div>
                  <div className="text-sm text-gray-600">Ø Einstiegsgehalt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Dein Weg zum DevOps Engineer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von Linux Grundlagen bis zu modernen Cloud-Technologien. Infrastructure as Code und DevOps Praktiken.
            </p>
          </div>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-blue-600" />
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Cloud & DevOps Technologien
            </h2>
            <p className="text-xl text-gray-600">
              Beherrsche die wichtigsten Tools für moderne Infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${tech.color}`}>
                  {tech.level}
                </div>
                <h3 className="font-semibold text-syntax-primary-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Branchenzertifizierungen
            </h2>
            <p className="text-xl text-gray-600">
              Bereite dich auf anerkannte Industry-Zertifizierungen vor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-2 text-center">{cert.name}</h3>
                <p className="text-gray-600 text-center mb-2">{cert.provider}</p>
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {cert.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Demand */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Hohe Nachfrage nach DevOps Experten
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Die Digitalisierung und Cloud-Migration schaffen enormen Bedarf an qualifizierten 
                DevOps Engineers und Cloud Spezialisten.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Über 50.000 offene DevOps Stellen in Deutschland</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">90% der Unternehmen nutzen Cloud-Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Überdurchschnittliche Gehaltsentwicklung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Hohe Remote-Work Möglichkeiten</span>
                </div>
              </div>
            </div>
                         <div>
               <img 
                 src="/images/stock/colleagues-discussing-new-ideas-business-meeting.jpg" 
                 alt="Data Center Infrastructure" 
                 className="rounded-lg shadow-lg"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Karrieremöglichkeiten
            </h2>
            <p className="text-xl text-gray-600">
              DevOps Engineers sind in allen Branchen sehr gefragt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">{career.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{career.salary}</div>
                <p className="text-sm text-gray-600">{career.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  &ldquo;Als Quereinsteiger war ich unsicher, ob ich das schaffe. Das SYNTAX Team hat mich 
                  von Anfang an unterstützt. Heute bin ich DevOps Engineer bei einem Fintech-Unternehmen.&rdquo;
                </blockquote>
                                 <div className="flex items-center space-x-4">
                   <img 
                     src="/images/company/dusko_sales.jpg" 
                     alt="Michael Schmidt"
                     className="w-16 h-16 rounded-full object-cover"
                   />
                  <div>
                    <div className="font-bold text-syntax-primary-900">Michael Schmidt</div>
                    <div className="text-gray-600">DevOps Engineer bei Fintech Startup</div>
                    <div className="text-sm text-gray-500">Vorher: Arbeitslos</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Vom Quereinsteiger zum DevOps Engineer
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Michael war arbeitslos und wollte sich für die Zukunft qualifizieren. 
                Mit dem Bildungsgutschein konnte er unsere Linux & Cloud Engineering 
                Weiterbildung kostenfrei absolvieren.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">AWS Solutions Architect Zertifizierung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Kubernetes Administrator Zertifikat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Job nach 3 Wochen gefunden</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Einstiegsgehalt 55.000€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-syntax-primary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine DevOps Karriere
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Werde zum gefragten Infrastructure Spezialisten. 
            100% gefördert mit Bildungsgutschein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              Kostenlose Beratung buchen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              Alle Kurse ansehen
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 