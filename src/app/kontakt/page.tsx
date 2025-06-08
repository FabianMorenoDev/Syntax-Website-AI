import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            100% kostenlos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash-display text-syntax-primary-900">
            Kostenlose Beratung buchen
          </h1>
          <p className="text-xl text-modern-gray-600 mb-8 max-w-2xl mx-auto">
            Lass dich unverbindlich beraten und finde die passende IT-Weiterbildung für deine Ziele. 
            Wir helfen dir auch bei der Beantragung des Bildungsgutscheins.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-modern-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-syntax-green-900" />
              <span>100% kostenlos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-syntax-green-900" />
              <span>Unverbindlich</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-syntax-green-900" />
              <span>Persönlich</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Beratungstermin vereinbaren
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="max.mustermann@email.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interessensbereich
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Bitte wählen</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Linux & Cloud Engineering</option>
                    <option>Noch unsicher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bevorzugte Kontaktzeit
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Bitte wählen</option>
                    <option>Vormittags (9-12 Uhr)</option>
                    <option>Nachmittags (12-16 Uhr)</option>
                    <option>Abends (16-18 Uhr)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Haben Sie spezielle Fragen oder Wünsche?"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label className="text-sm text-gray-600">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <a href="/datenschutz" className="text-purple-600 hover:underline">
                      Datenschutzerklärung
                    </a>{' '}
                    zu. *
                  </label>
                </div>

                <Button variant="accent" size="lg" fullWidth>
                  Kostenlose Beratung anfordern
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder | Wir melden uns innerhalb von 24 Stunden bei dir
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                  Kontaktinformationen
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">+49 30 754378530</p>
                      <p className="text-sm text-gray-500">Kostenlose Hotline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">E-Mail</h4>
                      <p className="text-gray-600">hallo@syntax-institut.de</p>
                      <p className="text-sm text-gray-500">Antwort innerhalb 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Standorte</h4>
                      <p className="text-gray-600">Berlin • Hamburg • München</p>
                      <p className="text-sm text-gray-500">Online & vor Ort</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Beratungszeiten</h4>
                      <p className="text-gray-600">Montag - Freitag</p>
                      <p className="text-gray-600">9:00 - 18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-semibold text-syntax-primary-900 mb-3">
                  Bildungsgutschein Unterstützung
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  Wir unterstützen dich kostenlos bei der Beantragung deines Bildungsgutscheins 
                  bei der Agentur für Arbeit oder dem Jobcenter.
                </p>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>100% Kostenübernahme möglich</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-syntax-primary-900 mb-3">
                  Zertifizierungen
                </h4>
                <div className="flex space-x-4">
                  <img 
                    src="/images/brand/azav-cert-1.png" 
                    alt="AZAV Zertifiziert" 
                    className="h-16 w-auto"
                  />
                  <img 
                    src="/images/brand/azav-cert-2.png" 
                    alt="IHK Zertifikat" 
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 