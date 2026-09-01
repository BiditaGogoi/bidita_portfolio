import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Database, CheckCircle2 } from 'lucide-react';

// Custom Tech Icon Badges
function TechBadgeIcon({ id, size = 'small' }) {
  const isLarge = size === 'large';
  const iconSizeClass = isLarge ? 'w-14 h-14 text-xl' : 'w-7 h-7 text-xs';

  switch (id) {
    case 'javascript':
      return (
        <div className={`${iconSizeClass} bg-[#F7DF1E] text-black font-extrabold flex items-center justify-center rounded-md select-none shadow-sm`}>
          JS
        </div>
      );
    case 'html':
      return (
        <div className={`${iconSizeClass} bg-[#E34F26] text-white font-extrabold flex items-center justify-center rounded-md select-none shadow-sm`}>
          <span className={isLarge ? 'text-2xl font-black' : 'text-xs font-black'}>5</span>
        </div>
      );
    case 'css':
      return (
        <div className={`${iconSizeClass} bg-[#1572B6] text-white font-extrabold flex items-center justify-center rounded-md select-none shadow-sm`}>
          <span className={isLarge ? 'text-2xl font-black' : 'text-xs font-black'}>3</span>
        </div>
      );
    case 'python':
      return (
        <div className={`${iconSizeClass} bg-[#1E293B] border border-blue-400/30 flex items-center justify-center rounded-md select-none shadow-sm relative overflow-hidden`}>
          <svg className={isLarge ? 'w-8 h-8' : 'w-4 h-4'} viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 6 4.3 6 4.3L6.01 6.6H12.1V7.75H3.6S2 7.57 2 12c0 4.43 1.39 4.3 1.39 4.3h2.62v-2.42s-.08-2.62 2.62-2.62h4.48s2.51.04 2.51-2.47V4.38S16.03 2 12 2zm-1.87 1.57c.52 0 .94.42.94.94s-.42.94-.94.94-.94-.42-.94-.94.42-.94.94-.94z" fill="#38BDF8"/>
            <path d="M12 22c5.52 0 6-2.3 6-2.3l-.01-2.3H11.9v-1.15h8.5s1.6.17 1.6-4.26c0-4.43-1.39-4.3-1.39-4.3h-2.62v2.42s.08 2.62-2.62 2.62H10.9s-2.51-.04-2.51 2.47v4.41S7.97 22 12 22zm1.87-1.57c-.52 0-.94-.42-.94-.94s.42-.94.94-.94.94.42.94.94-.42.94-.94.94z" fill="#FACC15"/>
          </svg>
        </div>
      );
    case 'cpp':
      return (
        <div className={`${iconSizeClass} bg-[#00599C] text-white font-extrabold flex items-center justify-center rounded-md select-none shadow-sm`}>
          <span className={isLarge ? 'text-lg font-bold' : 'text-[10px] font-bold'}>C++</span>
        </div>
      );
    case 'c':
      return (
        <div className={`${iconSizeClass} bg-[#004482] text-white font-extrabold flex items-center justify-center rounded-md select-none shadow-sm`}>
          <span className={isLarge ? 'text-2xl font-bold' : 'text-xs font-bold'}>C</span>
        </div>
      );
    case 'dbms':
      return (
        <div className={`${iconSizeClass} bg-[#334155] border border-sky-400/40 text-sky-400 flex items-center justify-center rounded-md select-none shadow-sm`}>
          <Database className={isLarge ? 'w-7 h-7' : 'w-4 h-4'} />
        </div>
      );
    default:
      return (
        <div className={`${iconSizeClass} bg-[#18181B] text-[#1D4ED8] border border-blue-500/20 flex items-center justify-center rounded-md select-none shadow-sm`}>
          <Sparkles className={isLarge ? 'w-7 h-7' : 'w-4 h-4'} />
        </div>
      );
  }
}

// Single Tech Item with Floating Card on Hover (for technical skills)
function TechSkillItem({ skill }) {
  return (
    <div className="group relative">
      {/* Interactive Trigger Button */}
      <div className="flex items-center space-x-3 px-4 py-2.5 rounded-lg border bg-[#F4F1EA]/80 border-[#141414]/12 text-[#141414] hover:border-[#141414]/40 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer select-none">
        <TechBadgeIcon id={skill.id} size="small" />
        <span className="text-sm md:text-base font-medium tracking-wide">
          {skill.name}
        </span>
      </div>

      {/* Floating Hover Card matching reference image */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none w-64 md:w-72 opacity-0 translate-y-3 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-250 ease-out">
        <div className="bg-[#16161A] border border-white/20 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl text-center relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent" />

          {/* Large Icon Badge */}
          <div className="flex justify-center mb-3">
            <TechBadgeIcon id={skill.id} size="large" />
          </div>

          {/* Title & Category */}
          <h4 className="text-white font-extrabold text-base md:text-lg tracking-wider uppercase">
            {skill.name}
          </h4>
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] mt-0.5">
            {skill.category}
          </p>

          {/* Capability Description */}
          <p className="text-xs text-white/75 mt-3 font-sans leading-relaxed border-t border-white/10 pt-2.5">
            {skill.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const { technical = [], soft = [] } = portfolioData.skills;

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#FAF8F5] bg-grid-pattern text-[#141414] relative border-t border-[#141414]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with "Skills" title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">
              02 / EXPERTISE
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#141414] font-normal tracking-tight">
              Skills
            </h2>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <span className="font-handwriting text-2xl text-[#6B7280] select-none">
              hover technical skills to explore details ✦
            </span>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          
          {/* CATEGORY 01: TECHNICAL SKILLS (Unified) */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#1D4ED8] uppercase">
                01
              </span>
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#141414]/80 uppercase">
                TECHNICAL SKILLS
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              {technical.map((skill) => (
                <TechSkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* CATEGORY 02: SOFT SKILLS (Headings only) */}
          <div className="space-y-5 pt-4 border-t border-[#141414]/10">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#1D4ED8] uppercase">
                02
              </span>
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#141414]/80 uppercase">
                SOFT SKILLS
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {soft.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-[#F4F1EA]/80 px-5 py-4 rounded-lg border border-[#141414]/12 flex items-center justify-between shadow-sm hover:border-[#141414]/30 hover:bg-white hover:shadow transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-[#1D4ED8] font-semibold">0{index + 1}</span>
                    <h4 className="font-serif-editorial text-lg md:text-xl text-[#141414] font-medium tracking-tight">
                      {skill.name}
                    </h4>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
