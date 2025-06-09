import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: {
    icon?: React.ComponentType<any>;
    text: string;
  };
  backgroundImage?: string;
  className?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  badge, 
  backgroundImage = '/images/stock/co-working-people-working-together.jpg',
  className = '' 
}: PageHeroProps) {
  return (
    <section className={`relative bg-white overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-syntax-primary-900/85 via-syntax-primary-900/75 to-syntax-primary-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            {badge && (
              <div className="inline-flex items-center bg-syntax-yellow-900 text-syntax-primary-900 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-syntax-yellow-800 transition-colors">
                {badge.icon && <badge.icon className="w-4 h-4 mr-2" />}
                {badge.text}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-clash-display text-white mb-6">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      

    </section>
  );
} 