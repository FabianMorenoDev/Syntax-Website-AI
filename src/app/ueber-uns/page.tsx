import { Users, Award, Target, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHero from '../components/PageHero';

export default function AboutUsPage() {
  const team = [
    {
      name: 'Felix',
      role: 'CEO & Gründer',
      image: '/images/company/felix_ceo.webp',
      description: 'Visionär und Bildungsexperte mit über 10 Jahren Erfahrung in der IT-Branche.'
    },
    {
      name: 'Basti',
      role: 'Lead Developer',
      image: '/images/company/basti_sales.png',
      description: 'Full-Stack Experte und leidenschaftlicher Mentor für angehende Entwickler.'
    },
    {
      name: 'Dusko',
      role: 'Cloud Architect',
      image: '/images/company/dusko_sales.jpg',
      description: 'Spezialist für Cloud-Technologien und DevOps mit AWS-Zertifizierungen.'
    },
    {
      name: 'Julie',
      role: 'UX/UI Design Lead',
      image: '/images/company/julie_sales.jpg',
      description: 'Kreative Design-Expertin mit Fokus auf moderne Web- und App-Entwicklung.'
    },
    {
      name: 'Sema',
      role: 'Bildungsberaterin',
      image: '/images/company/sema_sales.png',
      description: 'Expertin für Bildungsförderung und persönliche Karriereberatung.'
    },
    {
      name: 'Sousan',
      role: 'Sales & Marketing',
      image: '/images/company/sousan_sales.jpeg',
      description: 'Kommunikationsprofi mit Leidenschaft für digitale Bildungslösungen.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Persönliche Betreuung',
      description: 'Kleine Klassen, individuelle Förderung und persönliche Mentoren für jeden Teilnehmer.'
    },
    {
      icon: Target,
      title: 'Praxisorientierung',
      description: 'Echte Projekte, moderne Technologien und direkter Bezug zum Arbeitsmarkt.'
    },
    {
      icon: Award,
      title: 'Qualität & Zertifizierung',
      description: 'AZAV-zertifiziert mit anerkannten IHK-Abschlüssen und höchsten Qualitätsstandards.'
    },
    {
      icon: Heart,
      title: 'Leidenschaft für Bildung',
      description: 'Unser Team brennt für IT-Bildung und den Erfolg unserer Teilnehmer.'
    }
  ];

  const milestones = [
    { year: '2021', event: 'Gründung von Syntax Institut', description: 'Start im September mit modularen IT-Weiterbildungen' },
    { year: '2022', event: 'AZAV-Zertifizierung', description: 'Offizielle Anerkennung als Bildungsträger' },
    { year: '2023', event: 'IHK-Partnerschaft', description: 'Anerkannte Zertifizierungen für alle Lernpfade' },
    { year: '2024', event: '800+ Erfolgsgeschichten', description: 'Marktführer in modularer IT-Weiterbildung' }
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Über das Syntax Institut"
        subtitle="Pioniere in der IT-Weiterbildung mit über 800 erfolgreichen Karrierewechslern"
        badge={{
          icon: Users,
          text: "Über 800 erfolgreiche Absolventen"
        }}
        backgroundImage="https://www.syntax-institut.de/wp-content/uploads/2025/01/berlin-eventfotografSyntax1-scaled.jpg"
      />

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
              Das Syntax Institut wurde im September 2021 in Berlin gegründet. Unser Ziel: Wir wollen den Zugang zu hochwertiger IT-Bildung demokratisieren und Menschen erfolgreich in ihre neue digitale Karriere begleiten.
              <br /><br />
              Unsere Kurse finden online statt und richten sich an alle, die sich beruflich weiterentwickeln möchten.
              <br /><br />
              Im Rahmen unserer aktiven Arbeitsmarktpolitik legen wir großen Wert auf eine sorgfältige Umsetzung unserer Angebote. Unser Ziel ist es, die Teilnehmenden nachhaltig bei der Verbesserung ihrer Beschäftigungschancen zu unterstützen und ihnen so den Weg in eine langfristige Integration in den Arbeitsmarkt zu ebnen.
              </p>
            </div>
            <div>
              <img 
                src="https://www.syntax-institut.de/wp-content/uploads/2023/02/team09-scaled.jpg" 
                alt="Syntax Institut" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Was uns antreibt und unsere Arbeit jeden Tag prägt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-syntax-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Unser Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahrene IT-Profis mit Leidenschaft für Bildung und deinen Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-syntax-primary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-4 font-clash-display">
              Unsere Geschichte
            </h2>
            <p className="text-xl text-gray-600">
              Von der Vision zur führenden IT-Bildungseinrichtung
            </p>
          </div>

          <div className="relative">
                          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-syntax-purple-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-syntax-primary-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-syntax-primary-900 mb-8 font-clash-display">
            Zertifizierungen & Partner
          </h2>
          <div className="flex justify-center items-center space-x-12">
            <img 
              src="/images/icons/azav-logo-navy.png" 
              alt="AZAV Zertifiziert" 
              className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <img 
              src="/images/icons/Bundesagentur_für_Arbeit_logo.svg" 
              alt="Bundesagentur für Arbeit" 
              className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Als AZAV-zertifizierter Bildungsträger und IHK-Partner garantieren wir höchste 
            Qualitätsstandards und anerkannte Abschlüsse.
          </p>
        </div>
      </section>

      
    </main>
  );
} 