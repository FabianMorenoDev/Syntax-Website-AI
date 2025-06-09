import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Target, BookOpen, Briefcase, TrendingUp, MapPin, Smartphone, Palette, Code, Apple } from 'lucide-react';
import Button from '../../components/ui/Button';
import CareerPathHero from '../../components/CareerPathHero';

export default function AppDevelopmentCareerPath() {
  const careerPath = {
    title: 'App Development',
    subtitle: 'iOS & Android Apps',
    duration: '12 Monate',
    description: 'Entwicklung nativer iOS- und Android-Apps – von Design bis App Store. Vom ersten Design-Prototyp bis zur veröffentlichten App.',
    targetJobs: [
      'iOS Developer',
      'Android Developer', 
      'Mobile App Developer',
      'React Native Developer',
      'Mobile UI/UX Designer'
    ],
    salaryRange: '40.000 - 75.000€',
    courses: [
      {
        id: 'ux-ui-design',
        number: 1,
        title: 'UX/UI Design',
        duration: '4 Monate',
        description: 'App-Designprinzipien, User Flows, Wireframes & Prototyping in Figma, Design-Transfer in Xcode',
        skills: ['App-Designprinzipien', 'User Flows', 'Wireframes & Prototyping', 'Figma', 'Design-Transfer', 'Xcode Interface'],
        certificate: 'Design-Prototyp',
        icon: Palette,
        color: 'pink',
        goal: 'Design-Grundlagen für benutzerfreundliche mobile Apps'
      },
      {
        id: 'programmiergrundlagen',
        number: 2,
        title: 'Programmiergrundlagen',
        duration: '3 Monate',
        description: 'Swift-Grundlagen, Xcode-Einführung, Logik & Syntax, Kontrollstrukturen, App-Grundgerüste',
        skills: ['Swift-Grundlagen', 'Xcode-Einführung', 'Logik & Syntax', 'Kontrollstrukturen', 'App-Grundgerüste', 'iOS Playground'],
        certificate: 'iOS-Playground-App',
        icon: Code,
        color: 'blue',
        goal: 'Programmier-Logik und erste funktionsfähige App-Prototypen'
      },
      {
        id: 'ios-app-entwicklung',
        number: 3,
        title: 'iOS App-Entwicklung',
        duration: '2,5 Monate',
        description: 'SwiftUI, Datenhandling, Navigation, Animationen, Core Features, SwiftData',
        skills: ['SwiftUI Framework', 'Datenhandling', 'Navigation', 'Animationen', 'Core Features', 'SwiftData'],
        certificate: 'App Developer iOS (IHK)',
        icon: Apple,
        color: 'gray',
        goal: 'Professionelle iOS Apps für den App Store'
      },
      {
        id: 'android-app-entwicklung',
        number: 4,
        title: 'Android App-Entwicklung',
        duration: '2,5 Monate',
        description: 'Jetpack Compose, Kotlin, Architektur, Android Studio, Persistenz, Gerätefunktionen',
        skills: ['Jetpack Compose', 'Kotlin', 'Android Architektur', 'Android Studio', 'Persistenz', 'Gerätefunktionen'],
        certificate: 'App Developer Android (IHK)',
        icon: Smartphone,
        color: 'green',
        goal: 'Cross-Platform Expertise für iOS und Android'
      }
    ]
  };

  const jobOutcomes = [
    {
      title: 'iOS Developer',
      salary: '42.000 - 68.000€',
      companies: 'Apple Ecosystem, Startups',
      description: 'Spezialisierung auf iOS App-Entwicklung mit Swift',
      courses: ['UX/UI Design', 'Programmiergrundlagen', 'iOS App-Entwicklung']
    },
    {
      title: 'Android Developer',
      salary: '40.000 - 65.000€',
      companies: 'Google, Enterprise Apps',
      description: 'Android Apps mit Kotlin und Jetpack Compose',
      courses: ['UX/UI Design', 'Programmiergrundlagen', 'Android App-Entwicklung']
    },
    {
      title: 'Mobile App Developer',
      salary: '45.000 - 72.000€',
      companies: 'Alle Branchen, Remote',
      description: 'Cross-Platform App-Entwicklung für beide Systeme',
      courses: ['UX/UI Design', 'Programmiergrundlagen', 'iOS App-Entwicklung', 'Android App-Entwicklung']
    },
    {
      title: 'React Native Developer',
      salary: '48.000 - 75.000€',
      companies: 'Startups, Agenturen',
      description: 'Cross-Platform Apps mit JavaScript/React Native',
      courses: ['UX/UI Design', 'Programmiergrundlagen', 'iOS App-Entwicklung']
    }
  ];

  const appStoreStats = [
    { number: '2,2M+', label: 'iOS Apps im App Store' },
    { number: '3,5M+', label: 'Android Apps im Play Store' },
    { number: '85%', label: 'Deutsche nutzen Smartphone täglich' },
    { number: '€50k+', label: 'Durchschnittsgehalt Mobile Developer' }
  ];

  return (
    <main className="min-h-screen">
      <CareerPathHero
        title="App Development"
        subtitle="Von der App-Idee zum App Store"
        duration="12 Monate"
        modules={4}
        targetJobs={careerPath.targetJobs}
        description={careerPath.description}
        courseCount={4}
        certificates={['UX/UI Design Portfolio', 'iOS Playground App', 'App Developer iOS (IHK)', 'App Developer Android (IHK)']}
        backgroundImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Mobile Market Stats */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Mobile-First ist die Zukunft
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Apps sind überall – und qualifizierte Mobile Developer sind gefragter denn je.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appStoreStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-syntax-purple-900 mb-2 font-clash-display">
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
                Dein Weg zum Mobile App Developer
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                {careerPath.description} Du lernst Design, Programmierung und die Besonderheiten 
                beider wichtigsten mobilen Plattformen – iOS und Android.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Clock className="w-8 h-8 text-syntax-pink-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Gesamtdauer</h3>
                  <p className="text-modern-gray-600">{careerPath.duration}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Award className="w-8 h-8 text-syntax-pink-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Zertifikate</h3>
                  <p className="text-modern-gray-600">2 IHK-Zertifikate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <TrendingUp className="w-8 h-8 text-syntax-pink-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Gehaltsspanne</h3>
                  <p className="text-modern-gray-600">{careerPath.salaryRange}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-modern-gray-200">
                  <Briefcase className="w-8 h-8 text-syntax-pink-900 mb-3" />
                  <h3 className="font-bold text-syntax-primary-900 mb-2">Plattformen</h3>
                  <p className="text-modern-gray-600">iOS & Android</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-syntax-pink-50 to-syntax-pink-100 p-8 rounded-2xl">
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
              
              <div className="mt-8 pt-6 border-t border-syntax-pink-200">
                <Link href="/kontakt?karrierepfad=app-development">
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
              Von der App-Idee zum App Store
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Jeder Kurs baut systematisch aufeinander auf – vom ersten Design bis zur fertigen App.
            </p>
          </div>

          <div className="space-y-8">
            {careerPath.courses.map((course, index) => (
              <div key={course.id} className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                    {/* Course Number & Icon */}
                    <div className={`${
                      course.color === 'pink' ? 'bg-gradient-to-br from-pink-600 to-pink-700' :
                      course.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                      course.color === 'gray' ? 'bg-gradient-to-br from-gray-600 to-gray-700' :
                      'bg-gradient-to-br from-green-600 to-green-700'
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
                          <p className="text-lg text-syntax-pink-900 font-medium mb-3">
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
                    <div className="bg-white rounded-full p-3 shadow-lg border-2 border-syntax-pink-200">
                      <ArrowRight className="w-6 h-6 text-syntax-pink-900" />
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
              Je nach Spezialisierung kannst du verschiedene Richtungen einschlagen.
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
                  <Smartphone className="w-8 h-8 text-syntax-pink-900" />
                </div>
                
                <div className="border-t border-modern-gray-200 pt-4">
                  <h4 className="font-bold text-syntax-primary-900 mb-3 text-sm">Empfohlene Kurse</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.courses.map((courseName, courseIndex) => (
                      <span key={courseIndex} className="px-3 py-1 bg-syntax-pink-100 text-syntax-pink-900 rounded-full text-xs font-medium">
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
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deinen App Development Karrierepfad
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Von der ersten App-Idee bis zum App Store.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?karrierepfad=app-development">
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