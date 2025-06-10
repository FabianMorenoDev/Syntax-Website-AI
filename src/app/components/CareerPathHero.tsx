import Link from 'next/link';
import { ArrowRight, Award, Clock, Users, Target } from 'lucide-react';
import Button from './ui/Button';

interface CareerPathHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  modules: number;
  targetJobs: string[];
  description: string;
  courseCount: number;
  certificates: string[];
  backgroundImage?: string;
}

export default function CareerPathHero({
  title,
  subtitle,
  duration,
  modules,
  description,
  courseCount,
  backgroundImage
}: CareerPathHeroProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-syntax-yellow-100 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="w-4 h-4 mr-2" />
              Kompletter Karrierepfad • {duration} • {courseCount} Kurse
            </div>
            
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-syntax-primary-900 mb-4">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-syntax-purple-900 font-medium">
                {subtitle}
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg text-modern-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-syntax-purple-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-syntax-purple-900 mr-2" />
                  <span className="font-bold text-syntax-primary-900">Dauer</span>
                </div>
                <p className="text-syntax-primary-900">{duration} Vollzeit</p>
              </div>
              
              <div className="bg-syntax-green-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-syntax-green-900 mr-2" />
                  <span className="font-bold text-syntax-primary-900">Abschluss</span>
                </div>
                <p className="text-syntax-primary-900">IHK-Zertifikat</p>
              </div>
              
              <div className="bg-syntax-yellow-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-syntax-yellow-900 mr-2" />
                  <span className="font-bold text-syntax-primary-900">Förderung</span>
                </div>
                <p className="text-syntax-primary-900">100% möglich</p>
              </div>
              
              <div className="bg-syntax-blue-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-syntax-blue-900 mr-2" />
                  <span className="font-bold text-syntax-primary-900">Module</span>
                </div>
                <p className="text-syntax-primary-900">{modules} Kurse</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
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

          {/* Right Column - Visual */}
          <div className="space-y-6">
            {/* Hero Image */}
            {backgroundImage && (
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={backgroundImage} 
                  alt={`${title} - Karrierepfad Illustration`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 