import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Header() {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = href === '#about' ? 0 : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#141414]/10 py-3 shadow-xs' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Name & Live Digital Clock */}
        <div className="flex items-center space-x-3">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-serif-editorial text-2xl font-bold tracking-tight text-[#141414] hover:opacity-75 transition-opacity"
          >
            {portfolioData.personal.name}
          </a>
          <div className="hidden sm:flex items-center text-xs font-mono text-[#6B7280] bg-[#EAE6DF] px-2.5 py-0.5 rounded-full border border-[#D5D0C6]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            <span>{time || '12:56:11'}</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#141414]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative py-1 hover:text-[#141414] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1D4ED8] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Rounded Pill Button "Wanna talk?" */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#141414] rounded-full overflow-hidden shadow-sm hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
          >
            <span>Wanna talk?</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center space-x-3">
          <div className="sm:hidden flex items-center text-xs font-mono text-[#6B7280] bg-[#EAE6DF] px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
            <span>{time}</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141414] focus:outline-none rounded-md hover:bg-[#EAE6DF] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#FAF8F5] z-40 px-6 py-8 flex flex-col justify-between border-t border-[#141414]/10 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif-editorial text-3xl text-[#141414] hover:text-[#1D4ED8] transition-colors flex items-center justify-between border-b border-[#141414]/5 pb-3"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#6B7280]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#141414]/10 flex flex-col space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3.5 font-semibold text-sm uppercase tracking-wider text-white bg-[#141414] rounded-full shadow-sm hover:bg-[#1D4ED8] transition-colors"
            >
              Wanna talk?
            </a>
            <p className="text-xs text-center text-[#6B7280] font-mono">
              Bidita Gogoi • Lovely Professional University
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
