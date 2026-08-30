import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { bio, university } = portfolioData.personal;

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#141414]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">01 / Background</span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              About me
            </h2>
          </div>
          <p className="font-handwriting text-2xl text-[#6B7280] mt-4 md:mt-0">
            student • developer • curious mind
          </p>
        </div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Key Highlight Box */}
          <div className="lg:col-span-5 bg-[#F4F1EA] p-8 md:p-10 rounded-sm border border-[#141414]/10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-grid-dense opacity-30 pointer-events-none"></div>
            
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">
              Current Status
            </span>
            
            <h3 className="font-serif-editorial text-3xl text-[#141414] leading-snug">
              Computer Science & Engineering Student
            </h3>
            
            <div className="space-y-2 font-mono text-sm text-[#141414]/80">
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#1D4ED8]"></span>
                <span>Lovely Professional University</span>
              </p>
              <p className="text-xs text-[#6B7280] pl-4">
                B.Tech CSE (August 2026 – Present)
              </p>
            </div>

            <div className="pt-4 border-t border-[#141414]/10">
              <p className="font-handwriting text-xl text-[#1D4ED8]">
                "Always eager to turn complex logic into simple, intuitive applications."
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#141414]/85 leading-relaxed font-sans font-normal">
            {bio.map((paragraph, index) => (
              <p key={index} className="relative pl-4 border-l-2 border-[#1D4ED8]/30 hover:border-[#1D4ED8] transition-colors">
                {paragraph}
              </p>
            ))}

            {/* Values Grid */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[#141414]/80 border-t border-[#141414]/10 mt-8">
              <div>
                <span className="text-[#6B7280] block mb-1">01. FOCUS</span>
                <span className="font-medium text-sm">Data Structures & C++</span>
              </div>
              <div>
                <span className="text-[#6B7280] block mb-1">02. INTEREST</span>
                <span className="font-medium text-sm">IoT & Web Systems</span>
              </div>
              <div>
                <span className="text-[#6B7280] block mb-1">03. ETHOS</span>
                <span className="font-medium text-sm">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
