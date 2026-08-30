import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Cpu } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">03 / Portfolio</span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Selected Works
            </h2>
          </div>
          <p className="font-handwriting text-2xl text-[#6B7280] mt-4 md:mt-0">
            editorial project showcases ✦
          </p>
        </div>

        {/* Editorial Project Blocks */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-20 border-b border-[#141414]/10 last:border-b-0 last:pb-0"
            >
              
              {/* Project Image Block (Grayscale by default, hover to full color) */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative overflow-hidden rounded-sm border border-[#141414]/15 bg-[#F4F1EA] cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-to-color group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Number Overlay */}
                  <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 text-xs font-mono text-[#141414] border border-[#141414]/10 rounded-xs">
                    PROJECT {project.id}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#141414] text-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Project Content Info Block */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <div className="flex items-center space-x-3 text-xs font-mono text-[#6B7280]">
                  <span className="text-[#1D4ED8] font-bold">0{index + 1}</span>
                  <span>/</span>
                  <span>{project.role}</span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="font-serif-editorial text-3xl md:text-4xl text-[#141414] leading-tight cursor-pointer hover:text-[#1D4ED8] transition-colors"
                >
                  {project.title}
                </h3>

                <p className="text-base text-[#141414]/80 leading-relaxed font-sans font-normal">
                  {project.shortDesc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 4).map((techItem) => (
                    <span
                      key={techItem}
                      className="text-xs font-mono text-[#141414]/80 bg-[#EAE6DF] px-2.5 py-1 rounded-sm border border-[#141414]/10"
                    >
                      {techItem}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs font-mono text-[#6B7280] px-2 py-1">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Trigger Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#141414] font-semibold hover:text-[#1D4ED8] group/btn"
                  >
                    <span className="border-b border-[#141414] group-hover/btn:border-[#1D4ED8] pb-0.5 transition-colors">
                      View Project Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 text-[#1D4ED8]" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

