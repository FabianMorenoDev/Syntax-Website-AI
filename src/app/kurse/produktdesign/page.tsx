import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Palette, Users2, Target, Lightbulb } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata = {
  title: 'Produktdesign Kurs - Syntax Institut | UI/UX Design Weiterbildung mit Bildungsgutschein',
  description: 'Werde Junior Product Designer in 4 Monaten. UI/UX Design, Figma, Framer, Projektmanagement. 100% gefördert mit Bildungsgutschein. AZAV-zertifiziert, IHK-Abschluss.',
  keywords: 'Produktdesign, UI UX Design, Figma, Framer, Projektmanagement, Produktstrategie, Bildungsgutschein, IHK-Zertifikat',
};

export default function ProduktdesignPage() {
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

  const nextCourses = [
    {
      id: 'web-grundlagen',
      title: 'Web-Grundlagen',
      duration: '3 Monate',
      description: 'HTML & CSS, Bootstrap, JavaScript & TypeScript',
      category: 'Web Development'
    },
    {
      id: 'ux-ui-design',
      title: 'UX/UI Design (App)',
      duration: '4 Monate',
      description: 'App-Design & Prototyping speziell für Mobile Apps',
      category: 'App Development'
    }
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-syntax-yellow-800 transition-colors">
                <Award className="w-4 h-4 mr-2" />
                Vollzeit • 4 Monate • IHK-Zertifikat
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-syntax-primary-900">
                Produktdesign
                <span className="block text-syntax-yellow-900">Weiterbildung</span>
              </h1>
              
              <p className="text-xl text-modern-gray-600 leading-relaxed">
                Werde Junior Product Designer in 4 Monaten. Von Design-Grundlagen über User Research 
                bis hin zu professionellen Prototypen mit Figma und Framer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt?kurs=produktdesign">
                  <Button variant="accent" size="xl">
                    Kostenlose Beratung buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/karrierepfade">
                  <Button variant="outline" size="xl">
                    Kompletten Karrierepfad ansehen
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">16</div>
                  <div className="text-sm text-modern-gray-600">Wochen Intensiv</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">100%</div>
                  <div className="text-sm text-modern-gray-600">Förderung möglich</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-syntax-yellow-900">Portfolio</div>
                  <div className="text-sm text-modern-gray-600">3 Projekte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Produktdesign und UI/UX Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-primary-900">42.000€</div>
                  <div className="text-sm text-gray-600">Ø Einstiegsgehalt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Dein Weg zum Product Designer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In 4 Monaten lernst du alle Aspekte des modernen Produktdesigns. Von der Ideenfindung bis zum fertigen Design.
            </p>
          </div>

          <div className="space-y-8">
            {learningModules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-purple-600" />
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Design Tools & Software
            </h2>
            <p className="text-xl text-gray-600">
              Beherrsche die wichtigsten Tools für modernes Produktdesign
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-syntax-primary-900">{tool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${tool.color}`}>
                    {tool.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Deine Karrieremöglichkeiten
            </h2>
            <p className="text-xl text-gray-600">
              Als Product Designer stehen dir viele Türen offen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-2">{career.title}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">{career.salary}</p>
                <p className="text-gray-600">{career.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-syntax-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Nach diesem Kurs
            </h2>
            <p className="text-xl text-gray-600">
              Optimal kombinierbar mit diesen Kursen für deinen individuellen Lernpfad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nextCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-syntax-primary-900">{course.title}</h3>
                  <span className="text-sm text-purple-600 font-medium">{course.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link href={`/kurse/${course.id}`}>
                  <Button variant="outline" size="sm">
                    Kurs Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/karrierepfade">
              <Button variant="primary" size="lg">
                Alle Lernpfade ansehen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-syntax-primary-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Starte deine Design-Karriere
          </h2>
          <p className="text-xl text-syntax-purple-300 mb-8">
            Lass dich kostenlos beraten und erfahre, wie du Product Designer werden kannst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt?kurs=produktdesign">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+4930754378530">
              <Button variant="outline" size="xl">
                Sofort anrufen: +49 30 754378530
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 