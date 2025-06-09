import { Star, ArrowRight, Award, Briefcase, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHero from '../components/PageHero';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Anna Weber',
      age: 28,
      previousJob: 'Bürokauffrau',
      currentJob: 'Frontend Developer',
      company: 'Tech Startup Berlin',
      course: 'Web Development',
      duration: '6 Monate',
      salary: '+150% Gehaltssprung',
      image: '/images/team/julie.jpg',
      quote: 'Nach 6 Monaten intensiver Weiterbildung habe ich meinen Traumjob als Frontend Developer gefunden. Die Betreuung war hervorragend und die praktischen Projekte haben mich perfekt auf den Arbeitsalltag vorbereitet.',
      highlights: ['React & JavaScript Expertise', 'Erste App im App Store', 'Team Lead nach 1 Jahr']
    },
    {
      name: 'Michael Schmidt',
      age: 35,
      previousJob: 'Arbeitslos',
      currentJob: 'DevOps Engineer',
      company: 'Fintech Unternehmen',
      course: 'Linux & Cloud Engineering',
      duration: '6 Monate',
      salary: '4.200€ Einstiegsgehalt',
      image: '/images/team/dusko.jpg',
      quote: 'Als Quereinsteiger war ich sehr unsicher. Das SYNTAX Team hat mir von Anfang an Vertrauen gegeben und mich gezielt gefördert. Heute bin ich verantwortlich für die gesamte Cloud-Infrastruktur.',
      highlights: ['AWS Certified', 'Kubernetes Administrator', 'Agile Methodiken']
    },
    {
      name: 'Sarah Fischer',
      age: 31,
      previousJob: 'Erzieherin',
      currentJob: 'Mobile App Developer',
      company: 'Digital Agency Hamburg',
      course: 'App Development',
      duration: '6 Monate',
      salary: 'Vollzeit nach Praktikum',
      image: '/images/team/sema.jpg',
      quote: 'Nach der Elternzeit wollte ich beruflich neu durchstarten. Die App Development Weiterbildung hat mir genau das gegeben, was ich brauchte - neue Perspektiven und moderne Skills.',
      highlights: ['iOS & Android Apps', 'React Native Spezialistin', 'Freelancing nebenbei']
    },
    {
      name: 'Tom Mueller',
      age: 24,
      previousJob: 'Student (Abbruch)',
      currentJob: 'Full Stack Developer',
      company: 'E-Commerce Startup',
      course: 'Web Development',
      duration: '6 Monate',
      salary: '3.800€ Einstiegsgehalt',
      image: '/images/team/basti.jpg',
      quote: 'Nach dem Studienabbruch war SYNTAX meine Rettung. In 6 Monaten habe ich mehr gelernt als in 2 Jahren Studium. Der Praxisbezug und die persönliche Betreuung haben den Unterschied gemacht.',
      highlights: ['Full Stack Entwicklung', 'Scrum Master Zertifikat', 'Startup Mitgründung geplant']
    }
  ];

  const stats = [
    { number: '95%', label: 'Vermittlungsquote', description: 'unserer Absolventen finden binnen 6 Monaten einen Job' },
    { number: '4.200€', label: 'Durchschnittsgehalt', description: 'Einstiegsgehalt unserer Absolventen' },
    { number: '89%', label: 'Weiterempfehlung', description: 'würden uns weiterempfehlen' },
    { number: '800+', label: 'Erfolgreiche Absolventen', description: 'haben ihre IT-Karriere bei uns gestartet' }
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Erfolgsgeschichten"
        subtitle="Erfahre, wie unsere Absolventen ihre Karriere in der IT erfolgreich gestartet haben. Von Quereinsteigern zu gefragten Fachkräften."
        badge={{
          icon: Award,
          text: "800+ erfolgreiche Karrierewechsel"
        }}
        backgroundImage="/images/stock/menschen-die-spass-ihrer-pause-haben.jpg"
      />

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Ihre Erfolgsgeschichten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Echte Menschen, echte Karriereveränderungen. Lass dich von unseren Absolventen inspirieren.
            </p>
          </div>

          <div className="space-y-16">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex text-syntax-yellow-900 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-syntax-primary-900 text-lg">
                          {story.name}
                        </h3>
                        <p className="text-gray-600">{story.age} Jahre</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Vorher</h4>
                        <p className="text-gray-600 text-sm">{story.previousJob}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Heute</h4>
                        <p className="text-gray-600 text-sm">{story.currentJob}</p>
                        <p className="text-gray-500 text-xs">{story.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{story.course}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{story.salary}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {story.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src="/images/stock/professional-development.jpg" 
                    alt="Erfolgreiche IT-Karriere"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Visualization */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Dein Weg zum IT-Profi
            </h2>
            <p className="text-xl text-gray-600">
              In nur 6 Monaten vom Quereinsteiger zum gefragten IT-Experten
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ausgangssituation</h3>
                <p className="text-sm text-gray-600">Quereinsteiger<br/>Arbeitslos<br/>Berufswechsel</p>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-600 hidden md:block" />

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">6 Monate Weiterbildung</h3>
                <p className="text-sm text-gray-600">Intensive Ausbildung<br/>Praxisprojekte<br/>Zertifizierung</p>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-600 hidden md:block" />

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">IT-Karriere</h3>
                <p className="text-sm text-gray-600">Festanstellung<br/>Überdurchschnittliches Gehalt<br/>Zukunftssicherheit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-syntax-primary-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            800+ erfolgreiche Karrierewechsel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display text-syntax-primary-900">
            Erfolgsgeschichten
          </h2>
          <p className="text-xl text-modern-gray-600 mb-8 max-w-2xl mx-auto">
            Erfahre, wie unsere Absolventen ihre Karriere in der IT erfolgreich gestartet haben. Von 
            Quereinsteigern zu gefragten Fachkräften.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              Kostenlose Beratung buchen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="xl">
              Alle Kurse ansehen
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 