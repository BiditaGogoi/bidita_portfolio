import React from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#09090B]/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#0F0F12] text-[#F4F4F5] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-white/15 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#0F0F12]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between z-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#60A5FA] bg-[#60A5FA]/10 border border-[#60A5FA]/20 px-2.5 py-1 rounded-xs tracking-wider">
              {project.number || `0${project.id} /`}
            </span>
            <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
              {project.category || project.role}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-10 space-y-8">
          
          {/* Main Title & Image */}
          <div>
            <h3 className="font-serif-editorial text-3xl md:text-5xl font-light text-white mb-4 tracking-tight leading-tight">
              {project.title}
            </h3>
            
            <div className="rounded-sm overflow-hidden border border-white/10 aspect-[16/9] mb-6 bg-black/40 relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent opacity-40"></div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#60A5FA]">Project Overview</h4>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-sans font-light">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* Role & System Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.myRole && (
              <div className="p-5 bg-white/[0.03] border border-white/10 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-wider text-white/50 block mb-1">My Role</span>
                <p className="text-sm text-white/90 font-sans leading-relaxed">
                  {project.myRole}
                </p>
              </div>
            )}
            {project.outcome && (
              <div className="p-5 bg-white/[0.03] border border-white/10 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-wider text-[#60A5FA] block mb-1">Outcome</span>
                <p className="text-sm text-white/90 font-sans leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Tech & Hardware Involved */}
          <div className="space-y-4 bg-white/[0.02] p-6 rounded-sm border border-white/10">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#60A5FA] flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-[#60A5FA]" />
              <span>Technologies & Core Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-white/5 text-white/90 text-xs font-mono px-3 py-1.5 rounded-sm border border-white/10 shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Engineering Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Key Engineering Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 bg-white/[0.02] border border-white/10 rounded-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/80">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-black/30 px-6 py-4 border-t border-white/10 flex items-center justify-between">
          <span className="font-handwriting text-xl text-white/50">Bidita Gogoi • Project Documentation</span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-[#09090B] font-medium text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#60A5FA] hover:text-white transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}
