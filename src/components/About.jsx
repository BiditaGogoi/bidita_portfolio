import React from 'react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { bio } = portfolioData.personal;

  const supportingDetails = [
    { number: '01', label: 'FOCUS', value: 'Data Structures & C++' },
    { number: '02', label: 'INTEREST', value: 'IoT & Web Systems' },
    { number: '03', label: 'ETHOS', value: 'Continuous Learning' },
  ];

  return (
    <section
      id="about"
      className="relative z-20 bg-[#FAF8F5] border-t border-[#141414]/15 shadow-[0_-25px_60px_rgba(20,20,20,0.07)] min-h-screen flex flex-col justify-center py-20 md:py-28"
    >
      {/* Editorial Top Accent Edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1D4ED8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1D4ED8]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8]">
                01 / ABOUT
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#141414] font-normal tracking-tight">
              About me
            </h2>
          </div>
          <p className="font-handwriting text-xl md:text-2xl text-[#6B7280] mt-3 md:mt-0 select-none">
            student • developer • curious mind
          </p>
        </div>

        {/* Editorial Layout: Left Status Panel + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT SIDE: Current Status / LPU CSE Student Information Panel */}
          <div className="lg:col-span-5 bg-[#F4F1EA] p-7 md:p-9 rounded-sm border border-[#141414]/12 space-y-6 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-28 h-28 bg-grid-dense opacity-30 pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-[#141414]/10 pb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B7280] font-semibold">
                Current Status
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
            
            <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#141414] leading-snug font-normal">
              Computer Science & Engineering Student
            </h3>
            
            <div className="space-y-2.5 font-mono text-xs md:text-sm text-[#141414]/85">
              <p className="flex items-center space-x-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                <span>Lovely Professional University</span>
              </p>
              <p className="text-xs text-[#6B7280] pl-4">
                B.Tech CSE &nbsp;•&nbsp; August 2026 – Present
              </p>
            </div>

            <div className="pt-5 border-t border-[#141414]/10">
              <p className="font-handwriting text-lg md:text-xl text-[#1D4ED8] leading-relaxed">
                "Always eager to turn complex logic into simple, intuitive applications."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Main Narrative + Supporting Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base md:text-lg text-[#141414]/85 leading-relaxed font-sans font-normal">
              {bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="relative pl-4 border-l-2 border-[#1D4ED8]/25 hover:border-[#1D4ED8] transition-colors duration-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Supporting Details (Subtle editorial items) */}
            <div className="pt-8 border-t border-[#141414]/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#141414]/80">
                {supportingDetails.map((detail) => (
                  <div key={detail.number} className="space-y-1">
                    <span className="text-[#6B7280] block text-[11px] tracking-wider">
                      {detail.number}. {detail.label}
                    </span>
                    <span className="font-medium text-sm text-[#141414] block">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
