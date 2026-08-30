import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Users, Sparkles, Code2, Cpu, Database, Compass, CheckCircle2 } from 'lucide-react';

export function Skills() {
  const { technical, soft } = portfolioData.skills;
  const [activeSkill, setActiveSkill] = useState(null);

  const getTechIcon = (name) => {
    switch (name) {
      case 'Python': return <Terminal className="w-5 h-5 text-[#1D4ED8]" />;
      case 'C': return <Code2 className="w-5 h-5 text-[#1D4ED8]" />;
      case 'C++': return <Cpu className="w-5 h-5 text-[#1D4ED8]" />;
      case 'DBMS': return <Database className="w-5 h-5 text-[#1D4ED8]" />;
      default: return <Sparkles className="w-5 h-5 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-grid-pattern relative border-t border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">02 / Expertise</span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Skills
            </h2>
          </div>
          <p className="font-handwriting text-2xl text-[#6B7280] mt-4 md:mt-0">
            hover to explore details ✦
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Category 1: PROGRAMMING & TECHNICAL SKILLS */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#141414]/15">
              <span className="w-2.5 h-2.5 bg-[#1D4ED8] rounded-full"></span>
              <h3 className="font-mono text-sm tracking-wider uppercase text-[#141414] font-semibold">
                PROGRAMMING & TECHNICAL SKILLS
              </h3>
            </div>

            <div className="space-y-4">
              {technical.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className="group relative bg-[#F4F1EA]/80 hover:bg-[#FAF8F5] p-6 rounded-sm border border-[#141414]/10 hover:border-[#1D4ED8] transition-all duration-300 shadow-2xs cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2.5 bg-white rounded-sm border border-[#141414]/10 group-hover:border-[#1D4ED8]/40 transition-colors">
                        {getTechIcon(skill.name)}
                      </div>
                      <div>
                        <h4 className="font-serif-editorial text-2xl md:text-3xl text-[#141414] group-hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all">
                          {skill.name}
                        </h4>
                        <span className="text-xs font-mono text-[#6B7280]">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-3 py-1 bg-white border border-[#141414]/10 rounded-full group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  {/* Micro Description */}
                  <p className="mt-3 text-xs md:text-sm text-[#141414]/70 font-sans border-t border-[#141414]/5 pt-3 group-hover:text-[#141414] transition-colors">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: SOFT SKILLS */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#141414]/15">
              <span className="w-2.5 h-2.5 bg-[#141414] rounded-full"></span>
              <h3 className="font-mono text-sm tracking-wider uppercase text-[#141414] font-semibold">
                SOFT SKILLS & ETHOS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {soft.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-[#F4F1EA]/80 hover:bg-white p-6 rounded-sm border border-[#141414]/10 hover:border-[#141414] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#6B7280]">0{index + 1}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h4 className="font-serif-editorial text-2xl text-[#141414] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {skill.name}
                    </h4>

                    <p className="text-xs md:text-sm text-[#141414]/75 leading-relaxed font-sans">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Note */}
            <div className="p-6 bg-[#FAF8F5] border border-dashed border-[#141414]/20 rounded-sm">
              <p className="font-handwriting text-xl text-[#141414]/80 text-center">
                "Technical logic meets detail-oriented team execution."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
