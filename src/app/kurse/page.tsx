import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react';
import Button from '../components/ui/Button';

export default function CoursesPage() {
  const courses = [
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'Frontend & Backend Entwicklung',
      duration: '6 Monate',
      modules: '8 Module',
      participants: 'Max. 16 Teilnehmer',
      description: 'Lerne moderne Webentwicklung von Grund auf. Von HTML/CSS über JavaScript bis hin zu React und Node.js.',
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Datenbanken', 'APIs'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      color: 'purple'
    },
    {
      id: 'app-development',
      title: 'App Development',
      subtitle: 'iOS & Android Apps',
      duration: '6 Monate',
      modules: '8 Module',
      participants: 'Max. 16 Teilnehmer',
      description: 'Entwickle native und cross-platform Mobile Apps für iOS und Android mit modernen Frameworks.',
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'App Store', 'Play Store'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      color: 'pink'
    },
    {
      id: 'linux-cloud',
      title: 'Linux & Cloud Engineering',
      subtitle: 'Infrastructure & DevOps',
      duration: '6 Monate',
      modules: '8 Module',
      participants: 'Max. 16 Teilnehmer',
      description: 'Werde zum Infrastruktur-Experten mit Linux, Cloud-Technologien und DevOps-Praktiken.',
      technologies: ['Linux', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80',
      color: 'blue'
    }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 to-syntax-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4 mr-2" />
            AZAV-zertifizierte Weiterbildungen
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash-display">
            IT-Weiterbildungen für deine Zukunft
          </h1>
          <p className="text-xl text-syntax-purple-100 max-w-3xl mx-auto mb-8">
            Modulare Weiterbildungen mit direktem Praxisbezug. 100% gefördert durch den Bildungsgutschein 
            und mit anerkanntem IHK-Zertifikat.
          </p>
          <Button variant="cta" size="xl">
            Kostenlose Beratung buchen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-2xl font-bold text-white mb-2 font-clash-display">
                      {course.title}
                    </h2>
                    <p className="text-white text-opacity-90">{course.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{course.duration}</div>
                      <div className="text-xs text-gray-500">Vollzeit</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{course.modules}</div>
                      <div className="text-xs text-gray-500">Lernmodule</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">Max. 16</div>
                      <div className="text-xs text-gray-500">Teilnehmer</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologien</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
            Noch unsicher? Lass dich beraten!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unsere Bildungsberater helfen dir bei der Auswahl der passenden Weiterbildung 
            und unterstützen dich bei der Beantragung des Bildungsgutscheins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Kostenlose Beratung buchen
            </Button>
            <Button variant="outline" size="xl">
              Bildungsgutschein Info
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 