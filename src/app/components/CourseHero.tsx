import Link from 'next/link';
import { ArrowRight, Award, Clock, Users, Target, CheckCircle, BookOpen, Briefcase } from 'lucide-react';
import Button from './ui/Button';

interface CourseHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  careerPathTitle: string;
  careerPathPosition: string;
  certificate: string;
  technologies: string[];
  salaryRange?: string;
  courseSlug: string;
  careerPathSlug: string;
}

export default function CourseHero({
  title,
  subtitle,
  duration,
  description,
  careerPathTitle,
  careerPathPosition,
  certificate,
  technologies,
  salaryRange,
  courseSlug,
  careerPathSlug
}: CourseHeroProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-syntax-blue-100 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4 mr-2" />
              Einzelkurs • {duration} • {certificate}
            </div>
            
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-syntax-primary-900 mb-4">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-syntax-blue-900 font-medium">
                {subtitle}
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg text-modern-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Career Path Context */}
            <div className="bg-syntax-purple-50 p-6 rounded-2xl border border-syntax-purple-200">
              <div className="flex items-start space-x-4">
                <div className="bg-syntax-purple-200 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-syntax-purple-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-syntax-primary-900 mb-2">
                    Teil des {careerPathTitle}
                  </h3>
                  <p className="text-syntax-primary-900 mb-3">
                    Dieser Kurs ist <strong>{careerPathPosition}</strong> und kann einzeln gebucht oder 
                    als Teil des kompletten Karrierepfads absolviert werden.
                  </p>
                  <Link href={`/karrierepfade/${careerPathSlug}`}>
                    <span className="inline-flex items-center text-syntax-purple-900 font-medium hover:text-syntax-purple-700 transition-colors">
                      Kompletten Karrierepfad ansehen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/kontakt?kurs=${courseSlug}`}>
                <Button variant="primary" size="xl">
                  Kostenlose Beratung buchen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/bildungsgutschein">
                <Button variant="outline" size="xl">
                  Bildungsgutschein beantragen
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="space-y-6">
            {/* Course Facts */}
            <div className="bg-white border border-modern-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">
                Kurs-Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-modern-gray-600">Dauer</span>
                  <span className="font-medium text-syntax-primary-900">{duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-modern-gray-600">Format</span>
                  <span className="font-medium text-syntax-primary-900">Vollzeit</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-modern-gray-600">Abschluss</span>
                  <span className="font-medium text-syntax-primary-900">{certificate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-modern-gray-600">Förderung</span>
                  <span className="font-medium text-syntax-green-900">100% möglich</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-modern-gray-600">Teilnehmer</span>
                  <span className="font-medium text-syntax-primary-900">Max. 16</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-syntax-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-4">
                Technologien & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 6).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white text-syntax-primary-900 rounded-full text-sm font-medium border border-syntax-blue-200"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 6 && (
                  <span className="px-3 py-1 bg-syntax-blue-200 text-syntax-blue-900 rounded-full text-sm font-medium">
                    +{technologies.length - 6} weitere
                  </span>
                )}
              </div>
            </div>

            {/* Career Prospects */}
            {salaryRange && (
              <div className="bg-syntax-green-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-syntax-green-900 mr-3" />
                  <h3 className="text-lg font-bold text-syntax-primary-900">
                    Gehaltsaussichten
                  </h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-syntax-green-900 mb-2">
                    {salaryRange}
                  </div>
                  <p className="text-sm text-syntax-primary-900">
                    Einstiegsgehalt nach Abschluss
                  </p>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-modern-gray-200 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-syntax-primary-900">100%</div>
                <div className="text-xs text-modern-gray-600">Förderung möglich</div>
              </div>
              <div className="bg-white border border-modern-gray-200 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-syntax-primary-900">800+</div>
                <div className="text-xs text-modern-gray-600">Absolventen</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-syntax-yellow-50 p-6 rounded-2xl border border-syntax-yellow-200">
              <h3 className="text-lg font-bold text-syntax-primary-900 mb-3">
                Fragen zum Kurs?
              </h3>
              <p className="text-sm text-syntax-primary-900 mb-4">
                Lass dich kostenlos beraten und finde heraus, ob dieser Kurs der richtige für dich ist.
              </p>
              <Link href="/kontakt">
                <Button variant="outline" fullWidth size="sm">
                  Kostenlose Beratung
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 