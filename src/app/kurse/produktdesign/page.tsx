import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Palette, Users2, Target, Lightbulb, BookOpen, Briefcase, MapPin } from 'lucide-react';
import Button from '../../components/ui/Button';
import CourseHero from '../../components/CourseHero';

export const metadata = {
  title: 'Produktdesign Kurs - Syntax Institut | UI/UX Design Weiterbildung mit Bildungsgutschein',
  description: 'Werde Junior Product Designer in 4 Monaten. UI/UX Design, Figma, Framer, Projektmanagement. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, IHK-Abschluss.',
  keywords: 'Produktdesign, UI UX Design, Figma, Framer, Projektmanagement, Produktstrategie, Bildungsgutschein, IHK-Zertifikat',
};

export default function ProduktdesignPage() {
  // Career Path Integration
  const careerPathInfo = {
    title: 'Web Development Karrierepfad',
    position: 'Kurs 1 von 4',
    nextCourse: {
      id: 'web-grundlagen',
      title: 'Web-Grundlagen',
      duration: '3 Monate'
    },
    totalDuration: '12 Monate',
    pathway: [
      { title: 'Produktdesign', current: true, duration: '4 Mon.' },
      { title: 'Web-Grundlagen', current: false, duration: '3 Mon.' },
      { title: 'Frontend-Frameworks', current: false, duration: '2,5 Mon.' },
      { title: 'Web-Spezialisierung', current: false, duration: '2,5 Mon.' }
    ]
  };

  const learningModules = [
    {
      week: 'Wochen 1-4',
      title: 'Design Fundamentals',
      description: 'Grundlagen des UI/UX Design, Designprinzipien und Farbtheorie',
      skills: ['Design Grundlagen', 'Farbtheorie', 'Typografie', 'Layout Prinzipien', 'Accessibility', 'Design Systems'],
      icon: Palette
    },
    {
      week: 'Wochen 5-8',
      title: 'User Research & Strategy',
      description: 'User Research Methoden, Persona Entwicklung und Produktstrategie',
      skills: ['User Research', 'Persona Development', 'User Journey Mapping', 'Competitive Analysis', 'Market Research', 'Strategy Planning'],
      icon: Users2
    },
    {
      week: 'Wochen 9-12',
      title: 'Prototyping & Tools',
      description: 'Figma Mastery, Framer Grundlagen und interaktive Prototypen',
      skills: ['Figma Advanced', 'Framer Basics', 'Interactive Prototyping', 'Design Handoff', 'Component Libraries', 'Design Tokens'],
      icon: Target
    },
    {
      week: 'Wochen 13-16',
      title: 'Projektmanagement & Umsetzung',
      description: 'Agile Methoden, Projektmanagement und praktische Umsetzung',
      skills: ['Agile/Scrum', 'Design Sprints', 'Stakeholder Management', 'Projektplanung', 'Team Collaboration', 'Portfolio Entwicklung'],
      icon: Lightbulb
    }
  ];

  const careerPaths = [
    { title: 'Junior Product Designer', salary: '35.000 - 50.000€', companies: 'Startups, Agenturen, Tech-Unternehmen' },
    { title: 'UI/UX Designer', salary: '38.000 - 55.000€', companies: 'E-Commerce, SaaS, Digital Agencies' },
    { title: 'Design Researcher', salary: '40.000 - 58.000€', companies: 'Consulting, Enterprise, Research' },
    { title: 'Product Manager', salary: '45.000 - 65.000€', companies: 'Tech-Startups, Scale-ups (nach Erfahrung)' }
  ];

  const tools = [
    { name: 'Figma', level: 'Expert', color: 'bg-purple-100 text-purple-700', category: 'Design Tool' },
    { name: 'Framer', level: 'Advanced', color: 'bg-blue-100 text-blue-700', category: 'Prototyping' },
    { name: 'Adobe Creative Suite', level: 'Intermediate', color: 'bg-red-100 text-red-700', category: 'Design Suite' },
    { name: 'Miro/Mural', level: 'Advanced', color: 'bg-green-100 text-green-700', category: 'Collaboration' },
    { name: 'Notion', level: 'Intermediate', color: 'bg-gray-100 text-gray-700', category: 'Documentation' },
    { name: 'Principle', level: 'Intermediate', color: 'bg-orange-100 text-orange-700', category: 'Animation' }
  ];

  return (
    <main className="min-h-screen">
      <CourseHero
        title="Produktdesign"
        subtitle="Der perfekte Einstieg in die Web Development"
        duration="4 Monate"
        description="Werde Junior Product Designer in 4 Monaten. Von Design-Grundlagen über User Research bis hin zu professionellen Prototypen mit Figma und Framer."
        careerPathTitle="Web Development Karrierepfads"
        careerPathPosition="Kurs 1 von 4"
        certificate="Junior Product Designer (IHK)"
        technologies={['Figma', 'Framer', 'Adobe Creative Suite', 'Miro', 'Notion', 'Principle']}
        salaryRange="35.000 - 50.000€"
        courseSlug="produktdesign"
        careerPathSlug="web-development"
      />

      {/* Career Path Integration */}
      <section className="py-16 bg-gradient-to-br from-syntax-purple-50 to-syntax-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-syntax-primary-900 mb-3 font-clash-display">
                Teil des Web Development Karrierepfads
              </h2>
              <p className="text-lg text-modern-gray-600">
                Dieser Kurs ist <strong>Kurs 1 von 4</strong> im Web Development Karrierepfad, kann aber auch einzeln gebucht werden.
              </p>
            </div>

            {/* Career Path Progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-modern-gray-600">Karrierepfad-Fortschritt</span>
                <span className="text-sm text-syntax-purple-900 font-medium">{careerPathInfo.position}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {careerPathInfo.pathway.map((course, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    course.current 
                      ? 'bg-syntax-purple-100 border-syntax-purple-300 text-syntax-purple-900' 
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    <div className="text-center">
                      <div className="text-sm font-medium">{course.title}</div>
                      <div className="text-xs mt-1">{course.duration}</div>
                      {course.current && (
                        <div className="mt-2 inline-block px-2 py-1 bg-syntax-purple-200 text-syntax-purple-900 rounded-full text-xs font-medium">
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
                  Starte direkt mit Produktdesign. Perfekt wenn du erst mal testen möchtest oder bereits Vorerfahrung hast.
                </p>
                <Link href="/kontakt?kurs=produktdesign">
                  <Button variant="outline" fullWidth>
                    Produktdesign einzeln buchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-syntax-purple-50 to-syntax-purple-100 p-6 rounded-xl border border-syntax-purple-200">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-syntax-purple-900 mr-3" />
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
                Was du in 4 Monaten lernst
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                Werde Junior Product Designer in 4 Monaten. Von Design-Grundlagen über User Research 
                bis hin zu professionellen Prototypen mit Figma und Framer.
              </p>

              <div className="space-y-6">
                {learningModules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-syntax-purple-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-syntax-purple-900" />
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
                    <span className="font-medium text-syntax-primary-900">4 Monate</span>
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

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-syntax-yellow-50 to-syntax-yellow-100 rounded-xl p-6 border border-syntax-yellow-200">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Nach diesem Kurs</h3>
                <p className="text-syntax-primary-900 mb-4 text-sm">
                  Als nächstes: <strong>{careerPathInfo.nextCourse.title}</strong> für technische Umsetzung deiner Designs.
                </p>
                <Link href={`/kurse/${careerPathInfo.nextCourse.id}`}>
                  <Button variant="outline" fullWidth size="sm">
                    {careerPathInfo.nextCourse.title} ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Tools Preview */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Tools & Software</h3>
                <div className="space-y-3">
                  {tools.slice(0, 4).map((tool, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-syntax-primary-900 font-medium">{tool.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${tool.color}`}>
                        {tool.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              Mit Produktdesign-Kenntnissen eröffnen sich verschiedene Karrierewege.
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
                  <Briefcase className="w-8 h-8 text-syntax-purple-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-purple-600 via-syntax-purple-700 to-syntax-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine Design-Karriere
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Einzeln buchbar oder als Teil des Web Development Karrierepfads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=produktdesign">
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