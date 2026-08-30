import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] py-12 border-t border-[#141414]/10 text-xs font-mono text-[#6B7280]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-3">
          <span className="font-serif-editorial text-lg font-bold text-[#141414]">
            {portfolioData.personal.name}
          </span>
          <span>© {currentYear} • All rights reserved</span>
        </div>

        <div className="flex items-center space-x-6 text-[#141414]/70">
          <a href="#home" className="hover:text-[#1D4ED8] transition-colors">Back to top ↑</a>
          <span>•</span>
          <span>Lovely Professional University</span>
        </div>

      </div>
    </footer>
  );
}
