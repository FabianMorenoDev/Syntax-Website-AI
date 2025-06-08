import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Smartphone, Tablet, Globe } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata = {
  title: 'App Development Kurs - SYNTAX Institut | iOS & Android Entwicklung mit Bildungsgutschein',
  description: 'Werde Mobile App Developer in 6 Monaten. iOS, Android, React Native, Flutter. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, IHK-Abschluss.',
  keywords: 'App Development, iOS, Android, React Native, Flutter, Swift, Kotlin, Bildungsgutschein, Mobile Development, AZAV',
};

export default function AppDevelopmentPage() {
  const modules = [
    {
      week: 'Modul 1 (4 Monate)',
      title: 'UX/UI Design',
      description: 'App-Designprinzipien, User Flows, Wireframes & Prototyping in Figma, Design-Transfer in Xcode',
      skills: ['App-Designprinzipien', 'User Flows', 'Wireframes & Prototyping', 'Figma', 'Design-Transfer', 'Xcode Interface'],
      icon: Smartphone
    },
    {
      week: 'Modul 2 (3 Monate)',
      title: 'Programmiergrundlagen',
      description: 'Swift-Grundlagen, Xcode-Einführung, Logik & Syntax, Kontrollstrukturen, App-Grundgerüste',
      skills: ['Swift-Grundlagen', 'Xcode-Einführung', 'Logik & Syntax', 'Kontrollstrukturen', 'App-Grundgerüste', 'iOS Playground'],
      icon: Smartphone
    },
    {
      week: 'Modul 3 (2,5 Monate)',
      title: 'iOS App-Entwicklung',
      description: 'SwiftUI, Datenhandling, Navigation, Animationen, Core Features, SwiftData',
      skills: ['SwiftUI Framework', 'Datenhandling', 'Navigation', 'Animationen', 'Core Features', 'SwiftData'],
      icon: Tablet
    },
    {
      week: 'Modul 4 (2,5 Monate)',
      title: 'Android App-Entwicklung',
      description: 'Jetpack Compose, Kotlin, Architektur, Android Studio, Persistenz, Gerätefunktionen',
      skills: ['Jetpack Compose', 'Kotlin', 'Android Architektur', 'Android Studio', 'Persistenz', 'Gerätefunktionen'],
      icon: Award
    }
  ];

  const careerPaths = [
    { title: 'iOS Developer', salary: '42.000 - 68.000€', companies: 'Apple Ecosystem, Startups' },
    { title: 'Android Developer', salary: '40.000 - 65.000€', companies: 'Google, Enterprise Apps' },
    { title: 'Mobile App Developer', salary: '45.000 - 72.000€', companies: 'Alle Branchen, Remote' },
    { title: 'React Native Developer', salary: '48.000 - 75.000€', companies: 'Startups, Agenturen' }
  ];

  const technologies = [
    { name: 'Swift', level: 'Advanced', color: 'bg-orange-100 text-orange-700', platform: 'iOS' },
    { name: 'Kotlin', level: 'Advanced', color: 'bg-purple-100 text-purple-700', platform: 'Android' },
    { name: 'React Native', level: 'Advanced', color: 'bg-cyan-100 text-cyan-700', platform: 'Cross-Platform' },
    { name: 'Flutter', level: 'Intermediate', color: 'bg-blue-100 text-blue-700', platform: 'Cross-Platform' },
    { name: 'SwiftUI', level: 'Advanced', color: 'bg-orange-100 text-orange-700', platform: 'iOS' },
    { name: 'Jetpack Compose', level: 'Intermediate', color: 'bg-green-100 text-green-700', platform: 'Android' },
    { name: 'Firebase', level: 'Advanced', color: 'bg-yellow-100 text-yellow-700', platform: 'Backend' },
    { name: 'REST APIs', level: 'Advanced', color: 'bg-indigo-100 text-indigo-700', platform: 'Backend' }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-pink-900 to-syntax-pink-700 text-syntax-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Vollzeit • 12 Monate • IHK-Zertifikat
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display">
                App Development
                <span className="block text-syntax-yellow-900">Weiterbildung</span>
              </h1>
              
              <p className="text-xl text-pink-200 leading-relaxed">
                Entwickle professionelle Mobile Apps für iOS und Android. Von nativen Apps bis zu 
                Cross-Platform Lösungen mit React Native und Flutter.
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
                  <div className="text-sm text-syntax-pink-100">Wochen Intensiv</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">100%</div>
                  <div className="text-sm text-syntax-pink-100">Förderung möglich</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">5+</div>
                  <div className="text-sm text-syntax-pink-100">Portfolio Apps</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Mobile App Development auf Smartphone" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-900">48.000€</div>
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
              Dein Weg zum Mobile Developer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von den Grundlagen bis zur eigenen App im Store. Lerne iOS, Android und Cross-Platform Development.
            </p>
          </div>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-pink-600" />
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
              Mobile Technologien
            </h2>
            <p className="text-xl text-gray-600">
              Beherrsche die wichtigsten Frameworks für Mobile Development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${tech.color}`}>
                  {tech.level}
                </div>
                <h3 className="font-semibold text-syntax-primary-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Portfolio Apps
            </h2>
            <p className="text-xl text-gray-600">
              Entwickle echte Apps, die du im Bewerbungsgespräch vorzeigen kannst
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-syntax-primary-900 mb-3 text-center">Native iOS App</h3>
              <p className="text-gray-600 text-center">
                Entwickle eine vollständige iOS App mit SwiftUI und veröffentliche sie im App Store.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-syntax-primary-900 mb-3 text-center">Native Android App</h3>
              <p className="text-gray-600 text-center">
                Baue eine Android App mit Kotlin und Material Design für den Google Play Store.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-syntax-primary-900 mb-3 text-center">Cross-Platform App</h3>
              <p className="text-gray-600 text-center">
                Erstelle eine App mit React Native, die sowohl auf iOS als auch Android läuft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Karrieremöglichkeiten
            </h2>
            <p className="text-xl text-gray-600">
              Mobile Developer sind in allen Branchen hochgefragt
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900 to-purple-900 text-syntax-primary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Werde Mobile App Developer
          </h2>
          <p className="text-xl text-pink-200 mb-8">
            Entwickle professionelle Apps für iOS und Android. 
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