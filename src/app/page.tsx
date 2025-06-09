import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, Star, Puzzle } from 'lucide-react';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-syntax-blue-50 text-syntax-primary-900 py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[500px]">
            <div className="space-y-5 lg:space-y-7 order-2 lg:order-1">
                              <Link href="/bildungsgutschein">
                  <div className="inline-flex items-center bg-syntax-blue-50 backdrop-blur-sm border border-syntax-primary-300 text-syntax-primary-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-syntax-blue-100 hover:border-syntax-primary-200 transition-all duration-300 cursor-pointer mb-7">
                    <Award className="w-3 h-3 mr-1.5 text-syntax-purple-600" />
                    100% kostenlos mit Bildungsgutschein
                  </div>
                </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-clash-display">
                Deine IT-Karriere
                <span className="block text-syntax-purple-900">startet hier</span>
              </h1>
              <p className="text-xl text-modern-gray-600 leading-relaxed">
                Modulare IT-Weiterbildungen mit direktem Praxisbezug. Web Development, App Development und 
                Linux & Cloud Engineering. AZAV-zertifiziert, mit IHK-Zertifikat und 100% Förderung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button variant="primary" size="xl">
                    Kostenlose Beratung buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/kurse">
                  <Button variant="secondary" size="xl">
                    Kurse entdecken
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                  <span className="text-modern-gray-700">AZAV-zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                  <span className="text-modern-gray-700">inklusive IHK-Zertifikat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                  <span className="text-modern-gray-700">100% Online</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img 
                  src="/images/stock/co-working-people-working-together.jpg" 
                  alt="IT-Weiterbildung bei SYNTAX" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face&auto=format&q=80" alt="Erfolgreicher Absolvent" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80" alt="Erfolgreiche Absolventin" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face&auto=format&q=80" alt="Erfolgreicher Absolvent" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div>
                    <div className="flex text-syntax-yellow-900">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs lg:text-sm text-modern-gray-600">800+ erfolgreiche Absolventen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 lg:py-12 bg-syntax-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center group">
              <div className="text-3xl font-bold text-syntax-primary-900 group-hover:text-syntax-green-900 transition-colors">800+</div>
              <div className="text-sm text-modern-gray-600">Erfolgreiche Absolventen</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-syntax-primary-900 group-hover:text-syntax-green-900 transition-colors">95%</div>
              <div className="text-sm text-modern-gray-600">Vermittlungsquote</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-syntax-primary-900 group-hover:text-syntax-green-900 transition-colors">100%</div>
              <div className="text-sm text-modern-gray-600">Kostenübernahme</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-syntax-primary-900 group-hover:text-syntax-green-900 transition-colors">4.8★</div>
              <div className="text-sm text-modern-gray-600">Bewertung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Unsere Karrierepfade
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Empfohlene Kurse für deine IT-Karriere. Du kannst dir auch einen eigenen Karriereweg zusammenstellen – 
              maximal flexibel für deinen individuellen Lernweg.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-modern-gray-200">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Web Development Code auf Monitor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-syntax-primary-900/80 to-syntax-primary-900/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                  <p className="text-white/90 text-sm">Frontend & Backend Entwicklung</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-modern-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />HTML, CSS, JavaScript</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />React, Node.js</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Datenbanken & APIs</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-modern-gray-200">
                  <div className="text-sm text-modern-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />12 Monate
                  </div>
                  <Link href="/karrierepfade">
                    <Button variant="primary">Karrierepfad ansehen</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-modern-gray-200">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Mobile App Development auf Smartphone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-syntax-primary-900/80 to-syntax-primary-900/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">App Development</h3>
                  <p className="text-white/90 text-sm">iOS & Android Apps</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-modern-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />SwiftUI & Kotlin</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Jetpack Compose</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />App Store Deployment</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-modern-gray-200">
                  <div className="text-sm text-modern-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />12 Monate
                  </div>
                  <Link href="/karrierepfade">
                    <Button variant="primary">Karrierepfad ansehen</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Linux & Cloud */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-modern-gray-200">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80" 
                  alt="Server und Cloud Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-syntax-primary-900/80 to-syntax-primary-900/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Linux & Cloud Engineering</h3>
                  <p className="text-white/90 text-sm">Infrastructure & DevOps</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-modern-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Linux Administration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />AWS, Docker, Kubernetes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />CI/CD Pipelines</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-modern-gray-200">
                  <div className="text-sm text-modern-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />12 Monate
                  </div>
                  <Link href="/karrierepfade">
                    <Button variant="primary">Karrierepfad ansehen</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Individual Career Path */}
            <div className="bg-gradient-to-br from-modern-gray-50 to-modern-gray-100 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-dashed border-syntax-primary-300">
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-syntax-primary-100 to-syntax-primary-200 flex items-center justify-center">
                <div className="text-center text-syntax-primary-900">
                  <Puzzle className="w-16 h-16 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">Individueller Karrierepfad</h3>
                  <p className="text-sm opacity-90">Maßgeschneidert für dich</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-modern-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Persönliche Bedarfsanalyse</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Flexible Kurs-Kombination</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Individuelle Zeitplanung</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-modern-gray-200">
                  <div className="text-sm text-modern-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />3-18 Monate
                  </div>
                  <Link href="/karrierepfad-konfigurator">
                    <Button variant="primary">Jetzt zusammenstellen</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Bildungsgutschein Section */}
      <section className="py-16 lg:py-20 bg-syntax-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/stock/menschen-die-spass-ihrer-pause-haben.jpg" 
                alt="Bildungsgutschein Beratung" 
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 font-clash-display">
                100% kostenlos mit Bildungsgutschein
              </h2>
              <p className="text-lg text-modern-gray-600">
                Alle unsere Kurse sind AZAV-zertifiziert und werden zu 100% von der Agentur für Arbeit gefördert. 
                Wir beraten dich gerne bei der Beantragung deines Bildungsgutscheins.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-syntax-primary-900">Vollständige Kostenübernahme</h4>
                  <p className="text-sm text-modern-gray-600 mt-2">Keine versteckten Kosten</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-syntax-primary-900">Persönliche Beratung</h4>
                  <p className="text-sm text-modern-gray-600 mt-2">Individueller Karriereplan</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-syntax-primary-900">AZAV-Zertifizierung</h4>
                  <p className="text-sm text-modern-gray-600 mt-2">Staatlich anerkannt</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bildungsgutschein">
                  <Button variant="accent" size="lg">
                    Mehr zum Bildungsgutschein
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg">
                    Kostenlose Beratung
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Erfolgsgeschichten unserer Absolventen
            </h2>
            <p className="text-xl text-modern-gray-600 max-w-3xl mx-auto">
              Über 800 Menschen haben bereits ihre IT-Karriere bei uns gestartet. 
              Lies ihre Geschichten und lass dich inspirieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-modern-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-syntax-purple-700 to-syntax-purple-900 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-syntax-primary-900">Anna M.</div>
                  <div className="text-sm text-modern-gray-500">Web Developerin</div>
                </div>
              </div>
                            <p className="text-modern-gray-600 italic">
                &ldquo;Dank der praxisnahen Ausbildung bei SYNTAX habe ich meinen Traumjob als Frontend-Entwicklerin gefunden. 
                Die Unterstützung war fantastisch!&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-modern-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-syntax-blue-700 to-syntax-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-syntax-primary-900">Michael K.</div>
                  <div className="text-sm text-modern-gray-500">Cloud Engineer</div>
                </div>
              </div>
              <p className="text-modern-gray-600 italic">
                &ldquo;Der Karrierepfad Linux & Cloud hat mir den Einstieg in die IT ermöglicht. 
                Heute arbeite ich als Cloud Engineer bei einem Tech-Startup.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-modern-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-syntax-pink-700 to-syntax-pink-900 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-syntax-primary-900">Sarah L.</div>
                  <div className="text-sm text-modern-gray-500">iOS Entwicklerin</div>
                </div>
              </div>
              <p className="text-modern-gray-600 italic">
                &ldquo;Als Quereinsteigerin war ich unsicher, aber das Team bei SYNTAX hat mir den Weg geebnet. 
                Jetzt entwickle ich Apps für Millionen von Nutzern.&rdquo;
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/erfolgsgeschichten">
              <Button variant="outline" size="lg">
                Alle Erfolgsgeschichten ansehen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-syntax-yellow-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            100% Förderung möglich
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display text-syntax-primary-900">
            Starte jetzt deine IT-Karriere
          </h2>
          <p className="text-xl text-modern-gray-600 mb-8 max-w-2xl mx-auto">
            Lass dich kostenlos beraten und finde heraus, welcher Karrierepfad zu dir passt. 
            100% gefördert durch den Bildungsgutschein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button variant="accent" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+4930754378530">
              <Button variant="secondary" size="xl">
                Sofort anrufen: +49 30 754378530
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-modern-gray-500">
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
    </main>
  );
} 