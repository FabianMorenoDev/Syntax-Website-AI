import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, MapPin, Phone } from 'lucide-react';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-syntax-primary-900 via-syntax-purple-900 to-syntax-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                100% kostenlos mit Bildungsgutschein
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-clash-display">
                Deine IT-Karriere
                <span className="block text-syntax-yellow-900">startet hier</span>
              </h1>
              <p className="text-xl text-syntax-primary-100 leading-relaxed">
                Modulare IT-Weiterbildungen mit direktem Praxisbezug. Web Development, App Development und 
                Linux & Cloud Engineering. AZAV-zertifiziert, mit IHK-Zertifikat und 100% Förderung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button variant="cta" size="xl">
                    Kostenlose Beratung buchen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/kurse">
                  <Button variant="outline" size="xl">
                    Kurse entdecken
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                  <span>AZAV-zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                  <span>IHK-Zertifikat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-syntax-green-900" />
                  <span>100% Förderung</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/stock/co-working-people-working-together.jpg" 
                  alt="IT-Weiterbildung bei SYNTAX" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="flex -space-x-2">
                    <img src="/images/company/felix_ceo.webp" alt="Felix CEO" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/images/company/basti_sales.png" alt="Basti" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/images/company/dusko_sales.jpg" alt="Dusko" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div>
                    <div className="flex text-syntax-yellow-900">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs lg:text-sm text-gray-600">1000+ erfolgreiche Absolventen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-syntax-primary-900">1000+</div>
              <div className="text-sm text-gray-600">Erfolgreiche Absolventen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-syntax-primary-900">95%</div>
              <div className="text-sm text-gray-600">Vermittlungsquote</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-syntax-primary-900">100%</div>
              <div className="text-sm text-gray-600">Kostenübernahme</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-syntax-primary-900">4.8★</div>
              <div className="text-sm text-gray-600">Bewertung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Unsere Weiterbildungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modulare IT-Weiterbildungen mit direktem Praxisbezug. 
              Wähle deinen Weg in die digitale Zukunft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Web Development Code auf Monitor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                  <p className="text-white text-opacity-90 text-sm">Frontend & Backend Entwicklung</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />HTML, CSS, JavaScript</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />React, Node.js</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Datenbanken & APIs</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />12 Monate
                  </div>
                  <Link href="/kurse/web-development">
                    <Button variant="primary">Details</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Mobile App Development auf Smartphone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">App Development</h3>
                  <p className="text-white text-opacity-90 text-sm">iOS & Android Apps</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />SwiftUI & Kotlin</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Jetpack Compose</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />App Store Deployment</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />12 Monate
                  </div>
                  <Link href="/kurse/app-development">
                    <Button variant="primary">Details</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Linux & Cloud */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80" 
                  alt="Server und Cloud Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">Linux & Cloud Engineering</h3>
                  <p className="text-white text-opacity-90 text-sm">Infrastructure & DevOps</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />Linux Administration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />AWS, Docker, Kubernetes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-syntax-green-900 mr-2" />CI/CD Pipelines</li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />12 Monate
                  </div>
                  <Link href="/kurse/linux-cloud">
                    <Button variant="primary">Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bildungsgutschein Section */}
      <section className="py-20 bg-syntax-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/stock/menschen-die-spass-ihrer-pause-haben.jpg" 
                alt="Bildungsgutschein Beratung" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 font-clash-display">
                100% kostenlos mit Bildungsgutschein
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Deine Weiterbildung wird vollständig von der Agentur für Arbeit oder dem Jobcenter finanziert. 
                Wir unterstützen dich bei der Beantragung und Abwicklung.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-syntax-green-900 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-syntax-primary-900">Vollständige Kostenübernahme</h4>
                    <p className="text-gray-600">Kursgebühren, Materialien und Prüfungskosten</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-syntax-green-900 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-syntax-primary-900">Persönliche Beratung</h4>
                    <p className="text-gray-600">Wir helfen dir bei der Beantragung</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-syntax-green-900 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-syntax-primary-900">AZAV-Zertifizierung</h4>
                    <p className="text-gray-600">Staatlich anerkannte Bildungseinrichtung</p>
                  </div>
                </div>
              </div>
              <Link href="/bildungsgutschein">
                <Button variant="cta" size="lg">
                  Mehr zum Bildungsgutschein
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Erfolgsgeschichten
            </h2>
            <p className="text-xl text-gray-600">
              Unsere Absolventen haben erfolgreich den Einstieg in die IT-Branche geschafft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex text-syntax-yellow-900 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;Nach dem Web Development Kurs bin ich jetzt Frontend Developer bei einem Startup. 
                Die Betreuung war hervorragend!&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-syntax-purple-700 to-syntax-purple-900 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-syntax-primary-900">Anna M.</div>
                  <div className="text-sm text-gray-500">Frontend Developer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex text-syntax-yellow-900 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;Als Quereinsteiger war ich unsicher. Das Team hat mich super begleitet. 
                Jetzt arbeite ich als DevOps Engineer.&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-syntax-blue-700 to-syntax-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-syntax-primary-900">Michael K.</div>
                  <div className="text-sm text-gray-500">DevOps Engineer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex text-syntax-yellow-900 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;Die App Development Weiterbildung hat meine Karriere komplett verändert. 
                Praxisnah und zukunftsorientiert.&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-syntax-pink-700 to-syntax-pink-900 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-syntax-primary-900">Sarah L.</div>
                  <div className="text-sm text-gray-500">Mobile Developer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/erfolgsgeschichten">
              <Button variant="outline" size="lg">
                Alle Erfolgsgeschichten ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-syntax-primary-900 to-syntax-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-clash-display">
            Bereit für deine IT-Karriere?
          </h2>
          <p className="text-xl text-syntax-purple-300 mb-8">
            Lass dich kostenlos beraten und finde die passende Weiterbildung für deine Ziele.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button variant="cta" size="xl">
                Kostenlose Beratung buchen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+4930754378530">
              <Button variant="outline" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                +49 30 754378530
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-syntax-purple-300">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Berlin • Hamburg • München</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Mo-Fr: 9:00-18:00</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 