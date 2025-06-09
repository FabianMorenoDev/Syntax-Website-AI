import Link from 'next/link';
import { ArrowRight, Clock, Users, Award, BookOpen, Target } from 'lucide-react';
import Button from './ui/Button';

interface CourseHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  certificate: string;
  careerPath: {
    name: string;
    position: string;
    href: string;
  };
  stats: {
    weeks: string;
    funding: string;
    projects: string;
  };
}

export default function CourseHero({
  title,
  subtitle,
  duration,
  certificate,
  careerPath,
  stats
}: CourseHeroProps) {
  return (
    <section className="bg-white py-16 border-b border-modern-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Career Path Badge */}
            <div className="inline-flex items-center bg-syntax-purple-100 text-syntax-purple-900 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="w-4 h-4 mr-2" />
              {careerPath.position} • {careerPath.name}
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-syntax-primary-900">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-modern-gray-600 leading-relaxed">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/kontakt?kurs=${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button variant="accent" size="xl">
                  Kostenlose Beratung buchen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href={careerPath.href}>
                <Button variant="outline" size="xl">
                  Kompletten Karrierepfad ansehen
                </Button>
              </Link>
            </div>
          </div>

          {/* Course Info Card */}
          <div className="bg-syntax-primary-50 rounded-2xl p-8 border border-syntax-primary-200">
            <h3 className="text-2xl font-bold text-syntax-primary-900 mb-6 font-clash-display">
              Kurs-Highlights
            </h3>
            
            <div className="space-y-6">
              {/* Course Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-syntax-primary-200">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-syntax-purple-900 mr-2" />
                    <span className="text-sm font-medium text-modern-gray-600">Dauer</span>
                  </div>
                  <div className="text-lg font-bold text-syntax-primary-900">{duration}</div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-syntax-primary-200">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-syntax-purple-900 mr-2" />
                    <span className="text-sm font-medium text-modern-gray-600">Abschluss</span>
                  </div>
                  <div className="text-lg font-bold text-syntax-primary-900">{certificate}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-yellow-900">{stats.weeks}</div>
                  <div className="text-sm text-modern-gray-600">Wochen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-yellow-900">{stats.funding}</div>
                  <div className="text-sm text-modern-gray-600">Förderung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-syntax-yellow-900">{stats.projects}</div>
                  <div className="text-sm text-modern-gray-600">Projekte</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center text-syntax-primary-900">
                  <Users className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">Max. 16 Teilnehmer pro Kurs</span>
                </div>
                <div className="flex items-center text-syntax-primary-900">
                  <BookOpen className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">Live-Unterricht mit erfahrenen Dozenten</span>
                </div>
                <div className="flex items-center text-syntax-primary-900">
                  <Award className="w-5 h-5 text-syntax-green-900 mr-3" />
                  <span className="text-sm">AZAV-zertifiziert & IHK-anerkannt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 