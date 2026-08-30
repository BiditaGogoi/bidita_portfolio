import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 md:py-32 bg-grid-pattern relative border-t border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">04 / Academics</span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Education
            </h2>
          </div>
          <p className="font-handwriting text-2xl text-[#6B7280] mt-4 md:mt-0">
            academic milestones ✦
          </p>
        </div>

        {/* Clean Timeline / Editorial Layout */}
        <div className="space-y-8 max-w-5xl">
          {education.map((item, index) => (
            <div
              key={item.id}
              className="group bg-[#F4F1EA]/80 hover:bg-[#FAF8F5] p-8 rounded-sm border border-[#141414]/10 hover:border-[#1D4ED8] transition-all duration-300 relative shadow-2xs"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left Period & Badge Column */}
                <div className="md:col-span-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#1D4ED8] bg-white px-3 py-1 inline-block border border-[#141414]/10 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="pt-2">
                    <span className="inline-block text-xs font-mono font-semibold px-3 py-1 bg-[#141414] text-white rounded-full">
                      {item.grade}
                    </span>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="md:col-span-8 space-y-2">
                  <span className="text-xs font-mono text-[#6B7280]">
                    ENTRY 0{index + 1}
                  </span>

                  <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#141414] group-hover:text-[#1D4ED8] transition-colors">
                    {item.degree}
                  </h3>

                  <h4 className="text-sm font-semibold text-[#141414]/80 font-sans">
                    {item.field} • <span className="text-[#1D4ED8] font-normal">{item.institution}</span>
                  </h4>

                  <p className="text-xs md:text-sm text-[#141414]/70 pt-2 font-sans leading-relaxed">
                    {item.details}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
