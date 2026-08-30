import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Award, Compass, FileCheck, Layers, ArrowUpRight } from 'lucide-react';

export function Experience() {
  const { activities, certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">05 / Activities & Credentials</span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Experience & Beyond Academics
            </h2>
          </div>
          <p className="font-handwriting text-2xl text-[#6B7280] mt-4 md:mt-0">
            leadership, workshops & certifications ✦
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Experience & Activities Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#141414]/15">
              <span className="w-2.5 h-2.5 bg-[#1D4ED8] rounded-full"></span>
              <h3 className="font-mono text-sm tracking-wider uppercase text-[#141414] font-semibold">
                STUDENT ACTIVITIES & WORKSHOPS
              </h3>
            </div>

            <div className="space-y-6 relative pl-6 border-l border-[#141414]/15">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="group relative bg-[#F4F1EA]/80 hover:bg-white p-6 rounded-sm border border-[#141414]/10 hover:border-[#1D4ED8] transition-all duration-300 shadow-2xs"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#1D4ED8] border-2 border-[#FAF8F5]"></div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#1D4ED8] bg-[#1D4ED8]/10 px-2.5 py-0.5 rounded-full">
                      {act.category}
                    </span>
                    <span className="text-xs font-mono text-[#6B7280]">
                      {act.date}
                    </span>
                  </div>

                  <h4 className="font-serif-editorial text-2xl text-[#141414] mb-1 group-hover:text-[#1D4ED8] transition-colors">
                    {act.title}
                  </h4>

                  <p className="text-xs font-mono text-[#6B7280] mb-3">
                    {act.organization}
                  </p>

                  <p className="text-xs md:text-sm text-[#141414]/80 leading-relaxed font-sans">
                    {act.description}
                  </p>

                  {/* Clickable Certificate Badge if associated */}
                  {act.hasCertificate && (
                    <div className="mt-4 pt-3 border-t border-[#141414]/10">
                      <button
                        onClick={() => setSelectedCert(act)}
                        className="inline-flex items-center space-x-2 text-xs font-mono text-[#1D4ED8] hover:underline font-semibold"
                      >
                        <FileCheck size={14} />
                        <span>View Associated Certificate Preview</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3 pb-3 border-b border-[#141414]/15">
              <span className="w-2.5 h-2.5 bg-[#141414] rounded-full"></span>
              <h3 className="font-mono text-sm tracking-wider uppercase text-[#141414] font-semibold">
                CERTIFICATIONS
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group bg-[#F4F1EA]/80 hover:bg-white p-6 rounded-sm border border-[#141414]/10 hover:border-[#141414] transition-all duration-300 shadow-2xs cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#6B7280]">{cert.issuer}</span>
                    <span className="text-xs font-mono text-[#1D4ED8]">{cert.date}</span>
                  </div>

                  <h4 className="font-serif-editorial text-2xl text-[#141414] mb-2 group-hover:text-[#1D4ED8] transition-colors flex items-center justify-between">
                    <span>{cert.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h4>

                  <p className="text-xs text-[#141414]/70 font-sans leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#141414]/5 flex items-center justify-between text-xs font-mono text-[#1D4ED8]">
                    <span>Click to view certificate</span>
                    <Award size={14} />
                  </div>
                </div>
              ))}
            </div>

            {/* Note box */}
            <div className="p-6 bg-[#F4F1EA] border border-[#141414]/10 rounded-sm">
              <p className="font-handwriting text-xl text-[#6B7280] text-center">
                "Continuous learning through hands-on technical challenges."
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Modal Lightbox */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
