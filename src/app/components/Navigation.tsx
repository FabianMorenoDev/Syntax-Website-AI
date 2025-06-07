'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/kurse', label: 'Kurse', hasDropdown: true },
    { href: '/bildungsgutschein', label: 'Bildungsgutschein' },
    { href: '/erfolgsgeschichten', label: 'Erfolgsgeschichten' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const courseItems = [
    { href: '/kurse/web-development', label: 'Web Development' },
    { href: '/kurse/app-development', label: 'App Development' },
    { href: '/kurse/linux-cloud', label: 'Linux & Cloud Engineering' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
              <div className="bg-syntax-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+49 30 75437830</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>hallo@syntax-institut.de</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-syntax-yellow-900">100% Kostenlos mit Bildungsgutschein</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/icons/syntax_monogramm_dark_RGB.png" 
              alt="Syntax Institut" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-syntax-purple-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {courseItems.map((course) => (
                        <Link
                          key={course.href}
                          href={course.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-syntax-purple-900"
                        >
                          {course.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="bg-syntax-purple-900 hover:bg-syntax-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Beratung buchen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-syntax-purple-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-syntax-purple-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-6 space-y-1">
                    {courseItems.map((course) => (
                      <Link
                        key={course.href}
                        href={course.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-syntax-purple-900 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {course.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t">
              <Link
                href="/kontakt"
                className="block mx-3 px-6 py-2 bg-syntax-purple-900 hover:bg-syntax-purple-700 text-white text-center rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beratung buchen
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 