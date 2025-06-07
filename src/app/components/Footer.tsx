import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const courseLinks = [
    { href: '/kurse/web-development', label: 'Web Development' },
    { href: '/kurse/app-development', label: 'App Development' },
    { href: '/kurse/linux-cloud', label: 'Linux & Cloud Engineering' },
  ];

  const companyLinks = [
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/erfolgsgeschichten', label: 'Erfolgsgeschichten' },
    { href: '/bildungsgutschein', label: 'Bildungsgutschein' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const legalLinks = [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/agb', label: 'AGB' },
  ];

  return (
    <footer className="bg-syntax-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/images/icons/syntax_monogramm_white.png" 
              alt="Syntax Institut" 
              className="h-8 w-auto"
            />
            <p className="text-syntax-primary-100 text-sm leading-relaxed">
              Professionelle IT-Weiterbildungen mit Bildungsgutschein. 
              100% kostenlos und AZAV-zertifiziert.
            </p>
            <div className="flex space-x-2">
              <img 
                src="/images/icons/azav-logo-white.png" 
                alt="AZAV Zertifiziert" 
                className="h-12 w-auto"
              />
              <img 
                src="/images/icons/Bundesagentur_für_Arbeit_logo.svg" 
                alt="Bundesagentur für Arbeit" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Kurse</h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-syntax-primary-100 hover:text-syntax-yellow-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Unternehmen</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-syntax-primary-100 hover:text-syntax-yellow-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-syntax-yellow-900" />
                <div>
                  <p className="text-syntax-primary-100 text-sm">+49 30 75437830</p>
                  <p className="text-syntax-primary-300 text-xs">Kostenlose Hotline</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-syntax-yellow-900" />
                <div>
                  <p className="text-syntax-primary-100 text-sm">hallo@syntax-institut.de</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-syntax-yellow-900" />
                <div>
                  <p className="text-syntax-primary-100 text-sm">Berlin • Hamburg • München</p>
                  <p className="text-syntax-primary-300 text-xs">Online & vor Ort</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-syntax-yellow-900" />
                <div>
                  <p className="text-syntax-primary-100 text-sm">Mo-Fr: 9:00-18:00</p>
                  <p className="text-syntax-primary-300 text-xs">Beratungszeiten</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-syntax-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-syntax-primary-300 hover:text-syntax-yellow-900 text-xs transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-syntax-primary-300 text-xs">
              © 2024 SYNTAX Institut. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 