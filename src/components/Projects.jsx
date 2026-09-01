import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

/* ─── Headline renderer: last word gets blue accent ─────────────────────── */
function HeadlineWithAccent({ lines, highlightWord }) {
  return (
    <h3 className="font-serif-editorial font-bold leading-[1.08] tracking-tight"
        style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)' }}>
      {lines.map((line, i) => {
        const isLastLine = i === lines.length - 1;
        if (isLastLine) {
          // Replace the highlightWord in the last line with a blue span
          const before = line.replace(highlightWord, '').trimEnd();
          return (
            <span key={i} className="block">
              {before && <>{before} </>}
              <span className="text-[#1D4ED8]">{highlightWord}</span>
            </span>
          );
        }
        return <span key={i} className="block">{line}</span>;
      })}
    </h3>
  );
}

/* ─── Per-project scroll-zoom card ──────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    restDelta: 0.001,
  });

  const scale   = useTransform(smoothProgress, [0, 1], [0.84, 1.0]);
  const opacity = useTransform(smoothProgress, [0, 0.35], [0.55, 1]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        onClick={() => onOpen(project)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className="relative rounded-2xl overflow-hidden border border-[#141414]/10"
        style={{
          scale,
          opacity,
          transformOrigin: 'center center',
          cursor: 'none',
          backgroundImage: `
            linear-gradient(rgba(20,20,20,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,20,20,0.055) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          backgroundColor: '#FAFAF8',
        }}
      >
        {/* Custom "View" cursor */}
        <motion.div
          className="pointer-events-none absolute z-50 flex items-center justify-center
                     w-16 h-16 rounded-full bg-[#141414] text-white text-[11px]
                     font-mono font-bold uppercase tracking-widest shadow-lg"
          animate={{
            x: mousePos.x - 32,
            y: mousePos.y - 32,
            scale: hovered ? 1 : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
        >
          View
        </motion.div>
        {/* ── Two-column grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">

          {/* ── LEFT: editorial content ─────────────────────────────── */}
          <div className="flex flex-col justify-between px-10 py-10 md:px-14 md:py-12
                          min-h-[480px] lg:min-h-[520px]">

            {/* Top cluster */}
            <div className="space-y-6">
              {/* Category tag */}
              <p className="text-[11px] font-mono text-[#9CA3AF] tracking-widest">
                {project.tag}
              </p>

              {/* Giant headline with blue highlight */}
              <HeadlineWithAccent
                lines={project.headline}
                highlightWord={project.highlightWord}
              />

              {/* Short description */}
              <p className="text-[15px] text-[#374151] font-sans leading-relaxed max-w-sm">
                {project.shortDesc}
              </p>
            </div>



            {/* Bottom cluster */}
            <div className="space-y-1.5 mt-auto">
              {/* Blue accent line */}
              <p className="font-handwriting text-lg text-[#1D4ED8] leading-snug">
                {project.accentLine}
              </p>
              {/* Subline */}
              <p className="text-[12px] font-mono text-[#9CA3AF] tracking-wide">
                {project.accentSubline}
              </p>

              {/* Full title at very bottom */}
              <p className="text-[13px] font-serif-editorial text-[#141414] font-medium
                             pt-4 mt-2 border-t border-[#141414]/10">
                {project.title}
              </p>
            </div>
          </div>

          {/* ── RIGHT: colored image panel ───────────────────────────── */}
          <div
            className="relative flex items-center justify-center p-10 md:p-12"
            style={{ backgroundColor: project.panelColor }}
          >
            {/* Handwriting annotation top-right */}
            <div className="absolute top-6 right-6 z-10 pointer-events-none text-right">
              <p className="font-handwriting text-[15px] text-[#374151] leading-snug">
                {project.annotation}
              </p>
            </div>

            {/* Project image — centered, straight, rounded, shadow */}
            <motion.div
              className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/50"
              animate={{ y: hovered ? -6 : 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#141414]/10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#141414]/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">
              03 / Portfolio
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Selected Works
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
