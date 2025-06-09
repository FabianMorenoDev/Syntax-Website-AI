import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Palette, Smartphone, Layers, Eye, BookOpen, Briefcase, Target } from 'lucide-react';
import Button from '../../components/ui/Button';
import CourseHero from '../../components/CourseHero';

export const metadata = {
  title: 'UX/UI Design Kurs - Syntax Institut | App Design Weiterbildung mit Bildungsgutschein',
  description: 'Werde App Designer in 4 Monaten. UX/UI Design, Figma, Prototyping, User Flows. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert.',
  keywords: 'UX UI Design, App Design, Figma, Prototyping, User Flows, Mobile Design, Bildungsgutschein',
};

export default function UXUIDesignPage() {
  // Career Path Integration
  const careerPathInfo = {
    title: 'App Development Karrierepfad',
    position: 'Kurs 1 von 4',
    nextCourse: {
      id: 'programmiergrundlagen',
      title: 'Programmiergrundlagen',
      duration: '3 Monate'
    },
    totalDuration: '12 Monate',
    pathway: [
      { title: 'UX/UI Design', current: true, duration: '4 Mon.' },
      { title: 'Programmiergrundlagen', current: false, duration: '3 Mon.' },
      { title: 'iOS App-Entwicklung', current: false, duration: '2,5 Mon.' },
      { title: 'Android App-Entwicklung', current: false, duration: '2,5 Mon.' }
    ]
  };

  const learningModules = [
    {
      week: 'Wochen 1-4',
      title: 'Mobile Design Principles',
      description: 'Grundlagen des App-Designs und mobile User Experience',
      skills: ['Mobile Design Patterns', 'iOS & Android Guidelines', 'Touch Interaction', 'Accessibility', 'Color Theory', 'Typography for Mobile'],
      icon: Smartphone
    },
    {
      week: 'Wochen 5-8',
      title: 'User Research & Flows',
      description: 'User Research Methoden und User Flow Entwicklung für Apps',
      skills: ['User Research Methods', 'Personas for Apps', 'User Journey Mapping', 'Information Architecture', 'Card Sorting', 'Usability Testing'],
      icon: Eye
    },
    {
      week: 'Wochen 9-12',
      title: 'Wireframing & Prototyping',
      description: 'Von ersten Skizzen zu interaktiven Prototypen',
      skills: ['Mobile Wireframing', 'Figma Advanced', 'Interactive Prototyping', 'Micro-interactions', 'Animation Principles', 'Gesture Design'],
      icon: Layers
    },
    {
      week: 'Wochen 13-16',
      title: 'Design Systems & Handoff',
      description: 'Skalierbare Design Systems und Developer Handoff',
      skills: ['Design Systems', 'Component Libraries', 'Design Tokens', 'Developer Handoff', 'Xcode Integration', 'Design Documentation'],
      icon: Palette
    }
  ];

  const careerPaths = [
    { title: 'UX/UI Designer (Mobile)', salary: '38.000 - 58.000€', companies: 'App-Agenturen, Startups, Tech-Unternehmen' },
    { title: 'Product Designer', salary: '42.000 - 65.000€', companies: 'Product Companies, SaaS, Fintech' },
    { title: 'Mobile Design Specialist', salary: '45.000 - 68.000€', companies: 'E-Commerce, Gaming, Social Media' },
    { title: 'Design System Designer', salary: '48.000 - 72.000€', companies: 'Enterprise, Design Teams (nach Erfahrung)' }
  ];

  const designTools = [
    { name: 'Figma', level: 'Expert', color: 'bg-purple-100 text-purple-700' },
    { name: 'Sketch', level: 'Advanced', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Adobe XD', level: 'Intermediate', color: 'bg-pink-100 text-pink-700' },
    { name: 'Principle', level: 'Advanced', color: 'bg-blue-100 text-blue-700' },
    { name: 'InVision', level: 'Intermediate', color: 'bg-red-100 text-red-700' },
    { name: 'Miro', level: 'Advanced', color: 'bg-green-100 text-green-700' }
  ];

  const appProjects = [
    {
      title: 'Fitness Tracking App',
      description: 'Vollständiges UX/UI Design für eine Fitness-App mit Workout-Tracking',
      features: ['User Onboarding', 'Dashboard Design', 'Workout Flows', 'Progress Charts']
    },
    {
      title: 'E-Learning Platform',
      description: 'Mobile-first Design für eine Lern-App mit Video-Content',
      features: ['Course Navigation', 'Video Player UI', 'Progress Tracking', 'Social Features']
    },
    {
      title: 'Financial App',
      description: 'Banking-App Design mit Fokus auf Sicherheit und Usability',
      features: ['Secure Login', 'Transaction Views', 'Budget Management', 'Data Visualization']
    }
  ];

  const designProcessSteps = [
    { step: '1', title: 'Research', description: 'User Interviews, Competitive Analysis' },
    { step: '2', title: 'Define', description: 'Personas, User Stories, Requirements' },
    { step: '3', title: 'Ideate', description: 'Sketching, Brainstorming, Concept Development' },
    { step: '4', title: 'Design', description: 'Wireframes, Visual Design, Prototyping' },
    { step: '5', title: 'Test', description: 'Usability Testing, Iteration, Refinement' }
  ];

  return (
    <main className="min-h-screen">
      <CourseHero
        title="UX/UI Design"
        subtitle="App-Design & Mobile User Experience"
        duration="4 Monate"
        description="Von den ersten Skizzen bis zum finalen interaktiven Prototyp. Du lernst alle Aspekte des modernen App-Designs und UX-Prozesses."
        careerPathTitle="App Development Karrierepfads"
        careerPathPosition="Kurs 1 von 4"
        certificate="UX/UI Design Portfolio"
        technologies={['Figma', 'Sketch', 'Adobe XD', 'Principle', 'Zeplin', 'InVision']}
        salaryRange="35.000 - 55.000€"
        courseSlug="ux-ui-design"
        careerPathSlug="app-development"
      />

      {/* Career Path Integration */}
      <section className="py-16 bg-gradient-to-br from-syntax-pink-50 to-syntax-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-syntax-primary-900 mb-3 font-clash-display">
                Teil des App Development Karrierepfads
              </h2>
              <p className="text-lg text-modern-gray-600">
                Dieser Kurs ist <strong>Kurs 1 von 4</strong> im App Development Karrierepfad. Der perfekte kreative Einstieg in die Mobile-Welt.
              </p>
            </div>

            {/* Career Path Progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-modern-gray-600">Karrierepfad-Fortschritt</span>
                <span className="text-sm text-syntax-pink-900 font-medium">{careerPathInfo.position}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {careerPathInfo.pathway.map((course, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    course.current 
                      ? 'bg-syntax-pink-100 border-syntax-pink-300 text-syntax-pink-900' 
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}>
                    <div className="text-center">
                      <div className="text-sm font-medium">{course.title}</div>
                      <div className="text-xs mt-1">{course.duration}</div>
                      {course.current && (
                        <div className="mt-2 inline-block px-2 py-1 bg-syntax-pink-200 text-syntax-pink-900 rounded-full text-xs font-medium">
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
                  Perfekt für Kreative, die in die App-Welt einsteigen möchten. Ohne Vorkenntnisse möglich.
                </p>
                <Link href="/kontakt?kurs=ux-ui-design">
                  <Button variant="outline" fullWidth>
                    UX/UI Design einzeln buchen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-syntax-pink-50 to-syntax-pink-100 p-6 rounded-xl border border-syntax-pink-200">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-syntax-pink-900 mr-3" />
                  <h3 className="text-lg font-bold text-syntax-primary-900">Kompletter Karrierepfad</h3>
                </div>
                <p className="text-syntax-primary-900 mb-4 text-sm">
                  Buche den kompletten App Development Pfad und werde Mobile Developer in 12 Monaten.
                </p>
                <Link href="/karrierepfade/app-development">
                  <Button variant="primary" fullWidth>
                    App Development Karrierepfad
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Der UX Design Process
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Lerne den professionellen Design-Prozess von der ersten Idee bis zum finalen Prototyp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {designProcessSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200 text-center">
                  <div className="w-12 h-12 bg-syntax-pink-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-modern-gray-600">{step.description}</p>
                </div>
                {index < designProcessSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-syntax-pink-900" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurs Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Was du in 4 Monaten lernst
              </h2>
              <p className="text-xl text-modern-gray-600 leading-relaxed mb-8">
                Von den ersten Skizzen bis zum finalen interaktiven Prototyp. 
                Du lernst alle Aspekte des modernen App-Designs und UX-Prozesses.
              </p>

              <div className="space-y-6">
                {learningModules.map((module, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-syntax-pink-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-syntax-pink-900" />
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
                    <span className="font-medium text-syntax-primary-900">Design-Prototyp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-gray-600">Förderung</span>
                    <span className="font-medium text-syntax-green-900">100% möglich</span>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-syntax-green-50 to-syntax-green-100 rounded-xl p-6 border border-syntax-green-200">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Nach diesem Kurs</h3>
                <p className="text-syntax-primary-900 mb-4 text-sm">
                  Als nächstes: <strong>{careerPathInfo.nextCourse.title}</strong> für die technische Umsetzung deiner Designs.
                </p>
                <Link href={`/kurse/${careerPathInfo.nextCourse.id}`}>
                  <Button variant="outline" fullWidth size="sm">
                    {careerPathInfo.nextCourse.title} ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Design Tools Preview */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">Design Tools</h3>
                <div className="space-y-3">
                  {designTools.slice(0, 4).map((tool, index) => (
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

      {/* App Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Design-Projekte
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Erstelle vollständige App-Designs für verschiedene Branchen und baue ein professionelles Portfolio auf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-modern-gray-200">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-3">{project.title}</h3>
                <p className="text-modern-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />
                      <span className="text-sm text-modern-gray-700">{feature}</span>
                    </div>
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
              Als UX/UI Designer für Apps eröffnen sich vielfältige Karrierewege in der digitalen Welt.
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
                  <Briefcase className="w-8 h-8 text-syntax-pink-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-pink-600 via-syntax-pink-700 to-syntax-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine Design-Karriere
          </h2>
          <p className="text-xl mb-8 opacity-90">
            100% gefördert mit Bildungsgutschein. Der kreative Einstieg in die App-Entwicklung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=ux-ui-design">
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