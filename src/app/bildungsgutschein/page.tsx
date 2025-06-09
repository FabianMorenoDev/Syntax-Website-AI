import { CheckCircle, ArrowRight, Award, Clock, Users, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';

export default function BildungsgutscheinPage() {
  const steps = [
    {
      number: 1,
      title: 'Beratungstermin vereinbaren',
      description: 'Vereinbare einen kostenlosen Beratungstermin mit uns und wir besprechen deine Ziele.'
    },
    {
      number: 2,
      title: 'Bildungsgutschein beantragen',
      description: 'Wir unterstützen dich bei der Beantragung bei der Agentur für Arbeit oder dem Jobcenter.'
    },
    {
      number: 3,
      title: 'Kurs auswählen',
      description: 'Gemeinsam finden wir die passende Weiterbildung für deine beruflichen Ziele.'
    },
    {
      number: 4,
      title: 'Weiterbildung starten',
      description: 'Starte deine IT-Karriere mit 100% Kostenübernahme durch den Bildungsgutschein.'
    }
  ];

  const requirements = [
    'Arbeitslos oder arbeitssuchend gemeldet',
    'Von Arbeitslosigkeit bedroht',
    'Berufsrückkehr nach Elternzeit',
    'Beschäftigt mit Qualifizierungsbedarf',
    'Ohne Berufsabschluss'
  ];

  const coverage = [
    'Vollständige Lehrgangskosten',
    'Prüfungsgebühren',
    'Lernmaterialien',
    'Zertifizierungskosten',
    'Fahrtkosten (bei Präsenzunterricht)',
    'Unterbringungskosten (bei auswärtiger Unterkunft)'
  ];

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-purple-900 to-syntax-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            100% Förderung möglich
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash-display">
            Bildungsgutschein
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Deine IT-Weiterbildung wird vollständig finanziert. Wir zeigen dir, 
            wie du den Bildungsgutschein beantragst und optimal nutzt.
          </p>
          <Button variant="accent" size="xl">
            Kostenlose Beratung buchen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* What is Bildungsgutschein */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Was ist ein Bildungsgutschein?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Der Bildungsgutschein ist ein Förderinstrument der Bundesagentur für Arbeit, 
                mit dem Weiterbildungen zu 100% finanziert werden. Er ermöglicht es dir, 
                eine qualifizierte IT-Ausbildung zu absolvieren, ohne selbst dafür zu zahlen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-syntax-green-900 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-syntax-primary-900">Vollständige Kostenübernahme</h4>
                    <p className="text-gray-600">Alle Kurskosten werden direkt abgerechnet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-syntax-green-900 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-syntax-primary-900">Freie Anbieterwahl</h4>
                    <p className="text-gray-600">Du entscheidest, wo du deine Weiterbildung machst</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-syntax-green-900 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-syntax-primary-900">Anerkannte Zertifikate</h4>
                    <p className="text-gray-600">IHK-Zertifikate mit hoher Arbeitsmarktrelevanz</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/stock/colleagues-discussing-new-ideas-business-meeting.jpg" 
                alt="Bildungsgutschein Weiterbildung" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Voraussetzungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ein Bildungsgutschein kann in verschiedenen Situationen beantragt werden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-syntax-primary-900 mb-6">
                Wer kann einen Bildungsgutschein erhalten?
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-syntax-primary-900 mb-6">
                Was wird übernommen?
              </h3>
              <ul className="space-y-3">
                {coverage.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-syntax-purple-900" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              So bekommst du deinen Bildungsgutschein
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir begleiten dich durch den gesamten Prozess - von der Beratung bis zum Kursstart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-syntax-purple-900 text-syntax-primary-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 transform translate-x-8 w-full h-0.5 bg-syntax-purple-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-syntax-primary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-syntax-yellow-50 to-syntax-yellow-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-12 text-center font-clash-display">
            Häufige Fragen
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-syntax-primary-900 mb-3">
                Wie lange ist ein Bildungsgutschein gültig?
              </h4>
              <p className="text-gray-700">
                Ein Bildungsgutschein ist in der Regel 3 Monate gültig. In dieser Zeit musst du 
                eine passende Weiterbildung beginnen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-syntax-primary-900 mb-3">
                Kann ich während der Weiterbildung Arbeitslosengeld erhalten?
              </h4>
              <p className="text-gray-700">
                Ja, während einer geförderten Weiterbildung läuft dein Arbeitslosengeld-Anspruch 
                normal weiter. Bei einer beruflichen Weiterbildung erhältst du sogar einen Bonus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-syntax-primary-900 mb-3">
                Muss ich den Bildungsgutschein zurückzahlen?
              </h4>
              <p className="text-gray-700">
                Nein, ein Bildungsgutschein ist ein Zuschuss, der nicht zurückgezahlt werden muss - 
                auch nicht bei erfolgreichem Abschluss der Weiterbildung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-syntax-primary-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            100% Förderung möglich
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display text-syntax-primary-900">
            Bildungsgutschein
          </h2>
          <p className="text-xl text-modern-gray-600 mb-8 max-w-2xl mx-auto">
            Deine IT-Weiterbildung wird vollständig finanziert. Wir zeigen dir, 
            wie du den Bildungsgutschein beantragst und optimal nutzt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              Kostenlose Beratung buchen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="secondary" size="xl">
              Kurse ansehen
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 