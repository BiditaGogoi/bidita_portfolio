import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Award, FileCheck, ArrowRight, ArrowUpRight, Sparkles, Clock, Cloud, ShieldCheck } from 'lucide-react';

export function Experience() {
  const { activities, certificates, certifications } = portfolioData;
  const certList = certificates || certifications || [];
  const [selectedCert, setSelectedCert] = useState(null);

  // Sky blue gradient glassmorphism palettes and icons matching the theme
  const cardThemes = [
    {
      gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(235, 243, 255, 0.85) 50%, rgba(214, 230, 254, 0.75) 100%)',
      accentGlow: 'rgba(29, 78, 216, 0.15)',
      icon: <Sparkles className="w-4 h-4 text-[#1D4ED8]" />,
      dateShort: 'FEB 2026',
      issuerShort: 'IBM (Coursera)',
    },
    {
      gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(232, 242, 253, 0.85) 50%, rgba(207, 228, 254, 0.75) 100%)',
      accentGlow: 'rgba(29, 78, 216, 0.15)',
      icon: <Clock className="w-4 h-4 text-[#1D4ED8]" />,
      dateShort: 'OCT 2025',
      issuerShort: 'Tech Veda',
    },
    {
      gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(226, 238, 252, 0.85) 50%, rgba(199, 224, 252, 0.75) 100%)',
      accentGlow: 'rgba(29, 78, 216, 0.15)',
      icon: <Cloud className="w-4 h-4 text-[#1D4ED8]" />,
      dateShort: 'NOV 2025',
      issuerShort: 'AWS Cloud Clubs',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#141414]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">05 / Activities & Credentials</span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Experience & Beyond Academics
            </h2>
          </div>
          <p className="font-handwriting text-2xl text-[#6B7280] mt-4 md:mt-0">
            leadership, workshops & certificates ✦
          </p>
        </div>

        {/* Activities & Workshops — First */}
        <div className="space-y-8 mb-20">
          <div className="flex items-center space-x-3 pb-3 border-b border-[#141414]/15">
            <span className="w-2.5 h-2.5 bg-[#1D4ED8] rounded-full"></span>
            <h3 className="font-mono text-sm tracking-wider uppercase text-[#141414] font-semibold">
              STUDENT ACTIVITIES & WORKSHOPS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {activities.map((act) => (
              <div
                key={act.id}
                className="group relative bg-[#F4F1EA]/80 hover:bg-white p-6 rounded-sm border border-[#141414]/10 hover:border-[#1D4ED8] transition-all duration-300 shadow-2xs"
              >
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

        {/* Certificates — Sky Blue Glassmorphic Cards */}
        <div className="space-y-8 relative">
          
          {/* Ambient luminous glow behind glass cards */}
          <div className="absolute -inset-x-10 -inset-y-10 bg-radial from-[#1D4ED8]/8 via-[#60A5FA]/5 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="flex items-center space-x-3 pb-3 border-b border-[#141414]/15">
            <span className="w-2.5 h-2.5 bg-[#1D4ED8] rounded-full"></span>
            <h3 className="font-mono text-sm tracking-wider uppercase text-[#141414] font-semibold">
              CERTIFICATES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {certList.map((cert, index) => {
              const theme = cardThemes[index % cardThemes.length];

              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    background: theme.gradient,
                  }}
                  className="group rounded-3xl p-6 md:p-7 backdrop-blur-xl border border-white/90 ring-1 ring-[#1D4ED8]/15 shadow-[0_10px_30px_-5px_rgba(29,78,216,0.10),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-5px_rgba(29,78,216,0.22),0_8px_18px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:ring-[#1D4ED8]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    
                    {/* Top Stamp: Glass Icon Badge + Date & Issuer */}
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md border border-[#1D4ED8]/25 flex items-center justify-center shadow-xs flex-shrink-0">
                        {theme.icon}
                      </div>
                      <div className="leading-tight">
                        <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1D4ED8]">
                          {theme.dateShort || cert.date}
                        </p>
                        <p className="text-[12px] font-sans font-semibold text-[#141414]">
                          {theme.issuerShort || cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Certificate Title */}
                    <h4 className="font-sans font-bold text-xl md:text-[22px] text-[#141414] group-hover:text-[#1D4ED8] transition-colors leading-snug min-h-[56px] flex items-center">
                      {cert.title}
                    </h4>

                    {/* Embedded Certificate Preview Image Frame */}
                    <div className="rounded-2xl overflow-hidden border border-white/95 bg-white/90 shadow-sm p-1.5 backdrop-blur-xs">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F8FAFC] flex items-center justify-center">
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="p-4 text-center">
                            <ShieldCheck className="w-8 h-8 text-[#1D4ED8] mx-auto mb-1" />
                            <span className="text-[11px] font-mono text-[#6B7280]">Official Credential</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Divider & Bottom Action CTA */}
                  <div className="pt-5 mt-5 border-t border-[#1D4ED8]/15 flex items-center justify-between">
                    <span className="font-sans font-bold text-sm text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform flex items-center gap-1.5">
                      <span>Verify Credential</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-[#1D4ED8] bg-[#1D4ED8]/10 px-2.5 py-0.5 rounded-full uppercase">
                      {cert.type ? cert.type.replace('Certificate of ', '') : 'Verified'}
                    </span>
                  </div>

                </div>
              );
            })}
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
