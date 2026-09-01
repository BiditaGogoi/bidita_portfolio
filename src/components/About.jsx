import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Individual word component with automatic sequential illumination
function AutoRevealWord({ word, index, isInView, isHighlight }) {
  return (
    <span className="relative inline-block mr-[0.3em] my-[0.06em]">
      <motion.span
        initial={{ opacity: 0.18, y: 3 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0.18, y: 3 }
        }
        transition={{
          duration: 0.4,
          delay: 0.15 + index * 0.026,
          ease: [0.25, 1, 0.5, 1],
        }}
        className={`inline-block transition-colors duration-200 ${
          isHighlight ? 'text-[#FB923C] font-medium' : 'text-white'
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function About() {
  const { bio } = portfolioData.personal;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });

  const supportingDetails = [
    { number: '01', label: 'FOCUS', value: 'Data Structures & C++' },
    { number: '02', label: 'INTEREST', value: 'IoT & Web Systems' },
    { number: '03', label: 'ETHOS', value: 'Continuous Learning' },
  ];

  const highlightTerms = [
    'Computer',
    'Science',
    'Engineering',
    'practical',
    'solutions.',
    'C,',
    'C++,',
    'Python,',
    'DBMS',
    'continuously',
    'learning,',
    'building'
  ];

  // Pre-calculate cumulative word indices for continuous sequence
  let globalWordCounter = 0;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#0B1E48] text-white border-t border-blue-950/60 min-h-screen flex flex-col justify-start pt-20 pb-12 md:pt-24 md:pb-14 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.065) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.065) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
      }}
    >
      {/* Editorial Top Accent Edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#38BDF8]">
                01 / ABOUT
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight">
              About me
            </h2>
          </div>
          <p className="font-handwriting text-lg md:text-xl text-white/60 mt-2 md:mt-0 select-none">
            student • developer • curious mind
          </p>
        </div>

        {/* Editorial Layout: Left Status Panel + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Current Status Panel (Unified Dark Blue Card) */}
          <div className="lg:col-span-5 bg-[#0E2558]/80 backdrop-blur-md p-6 md:p-7 rounded-sm border border-white/12 space-y-4 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-grid-dense opacity-20 pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-semibold">
                Current Status
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
            
            <h3 className="font-serif-editorial text-xl md:text-2xl text-white leading-snug font-normal">
              Computer Science & Engineering Student
            </h3>
            
            <div className="space-y-2 font-mono text-xs md:text-sm text-white/85">
              <p className="flex items-center space-x-2 font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" />
                <span>Lovely Professional University</span>
              </p>
              <p className="text-xs text-white/55 pl-4">
                B.Tech CSE &nbsp;•&nbsp; August 2026 – Present
              </p>
            </div>

            <div className="pt-3.5 border-t border-white/10">
              <p className="font-handwriting text-base md:text-lg text-[#38BDF8] leading-relaxed">
                "Always eager to turn complex logic into simple, intuitive applications."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Automatic Word-by-Word Text Illumination + Supporting Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Narrative Content with Auto Sequential Reveal */}
            <div className="select-none space-y-3.5">
              {bio.map((paragraph, pIdx) => {
                const words = paragraph.split(' ');

                return (
                  <p
                    key={pIdx}
                    className="font-serif-editorial text-lg sm:text-xl md:text-[1.38rem] leading-[1.4] tracking-normal"
                  >
                    {words.map((word, wIdx) => {
                      const currentGlobalIndex = globalWordCounter++;
                      const isHighlight = highlightTerms.includes(word);

                      return (
                        <AutoRevealWord
                          key={wIdx}
                          word={word}
                          index={currentGlobalIndex}
                          isInView={isInView}
                          isHighlight={isHighlight}
                        />
                      );
                    })}
                  </p>
                );
              })}
            </div>

            {/* Supporting Details (Subtle editorial items) */}
            <div className="pt-5 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono text-xs text-white/80">
                {supportingDetails.map((detail) => (
                  <div key={detail.number} className="space-y-1">
                    <span className="text-white/50 block text-[10px] tracking-wider">
                      {detail.number}. {detail.label}
                    </span>
                    <span className="font-medium text-xs sm:text-sm text-white block">
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
