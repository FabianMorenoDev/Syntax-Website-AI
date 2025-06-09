import Link from 'next/link';
import { ArrowRight, Clock, Users, Award, Target, TrendingUp, MapPin } from 'lucide-react';
import Button from './ui/Button';

interface CareerPathHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  modules: number;
  description: string;
  targetJobs: string[];
  stats: {
    graduates: string;
    employmentRate: string;
    avgSalary: string;
  };
}

export default function CareerPathHero({
  title,
  subtitle,
  duration,
  modules,
  description,
  targetJobs,
  stats
}: CareerPathHeroProps) {
  return (
    <section className="bg-white py-16 border-b border-modern-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Career Path Badge */}
            <div className="inline-flex items-center bg-syntax-yellow-100 text-syntax-yellow-900 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="w-4 h-4 mr-2" />
              Vollständiger Karrierepfad • {modules} Kurse
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-syntax-primary-900">
              {title}
              <span className="block text-syntax-purple-900">{subtitle}</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-modern-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Target Jobs */}
            <div>
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-3">Deine Berufsziele:</h3>
              <div className="flex flex-wrap gap-2">
                {targetJobs.map((job, index) => (
                  <span key={index} className="bg-syntax-green-100 text-syntax-green-900 px-3 py-1 rounded-full text-sm font-medium">
                    {job}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/kontakt?karrierepfad=${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button variant="accent" size="xl">
                  Kostenlose Beratung buchen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/kurse">
                <Button variant="outline" size="xl">
                  Einzelkurse ansehen
                </Button>
              </Link>
            </div>
          </div>

          {/* Career Path Info Card */}
          <div className="bg-syntax-primary-50 rounded-2xl p-8 border border-syntax-primary-200">
            <h3 className="text-2xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
              Karrierepfad-Facts
            </h3>
            
            <div className="space-y-6">
              {/* Path Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-syntax-primary-200">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-syntax-purple-900 mr-2" />
                    <span className="text-sm font-medium text-modern-gray-600">Gesamtdauer</span>
                  </div>
                  <div className="text-lg font-bold text-syntax-primary-900">{duration}</div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-syntax-primary-200">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-syntax-purple-900 mr-2" />
                    <span className="text-sm font-medium text-modern-gray-600">Module</span>
                  </div>
                  <div className="text-lg font-bold text-syntax-primary-900">{modules} Kurse</div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-yellow-900">{stats.graduates}</div>
                  <div className="text-sm text-modern-gray-600">Absolventen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-yellow-900">{stats.employmentRate}</div>
                  <div className="text-sm text-modern-gray-600">Vermittlung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-yellow-900">{stats.avgSalary}</div>
                  <div className="text-sm text-modern-gray-600">Ø Gehalt</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center text-syntax-primary-900">
                  <Users className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">Kleine Klassen (max. 16 Teilnehmer)</span>
                </div>
                <div className="flex items-center text-syntax-primary-900">
                  <TrendingUp className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">Kontinuierlicher Kompetenzaufbau</span>
                </div>
                <div className="flex items-center text-syntax-primary-900">
                  <MapPin className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">Berlin-Mitte & bundesweit</span>
                </div>
                <div className="flex items-center text-syntax-primary-900">
                  <Award className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">Mehrere IHK-Zertifikate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 