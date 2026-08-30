import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export function Hero() {
  // ─── Resume path — swap this string when the actual resume PDF is ready ───────
  const RESUME_PATH = '/assets/bidita-gogoi-resume.pdf';
  // ─────────────────────────────────────────────────────────────────────────────

  const handleViewWork = (e) => {
    e.preventDefault();
    const section = document.querySelector('#projects');
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-grid-pattern overflow-hidden"
      style={{ minHeight: '95vh' }}
    >
      {/* ── Main two-column grid ── */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid items-center"
        style={{
          minHeight: '95vh',
          gridTemplateColumns: '45% 55%',
          paddingTop: '88px',   /* clear the fixed navbar */
          paddingBottom: '0px',
        }}
      >
        {/* ════════════════════════════════════════
            LEFT COLUMN — Introduction + CTA
        ════════════════════════════════════════ */}
        <div className="flex flex-col justify-center pr-8 lg:pr-16 hero-left-col py-10">

          {/* Handwritten greeting */}
          <p
            className="font-handwriting text-2xl text-[#141414]/65 mb-4 select-none"
            style={{ letterSpacing: '0.01em' }}
          >
            Hi, there! 👋
          </p>

          {/* Main serif heading */}
          <h1
            className="font-serif-editorial text-[#141414] leading-[1.08] mb-6 font-normal"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            Hi, I'm{' '}
            <br />
            <span className="editorial-blue-highlight">
              Bidita Gogoi.
            </span>
          </h1>

          {/* Body intro */}
          <p
            className="text-[#141414]/75 leading-relaxed mb-10"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', maxWidth: '420px' }}
          >
            A Computer Science and Engineering student who enjoys turning ideas into practical digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary — View Resume */}
            <a
              id="hero-resume-btn"
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#141414] text-white text-sm font-semibold rounded-full shadow-sm hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-md hover:scale-[1.03] active:scale-95 select-none"
            >
              View Resume
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            {/* Secondary — View Work */}
            <a
              id="hero-viewwork-btn"
              href="#projects"
              onClick={handleViewWork}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-[#141414]/40 text-[#141414] text-sm font-semibold rounded-full hover:border-[#141414] hover:bg-[#141414]/5 transition-all duration-300 hover:scale-[1.03] active:scale-95 select-none"
            >
              View Work
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Bottom editorial micro-tag */}
          <div className="mt-14 flex items-center gap-2 text-[#141414]/40 select-none">
            <span className="font-handwriting text-base">scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#1D4ED8] animate-bounce" />
          </div>
        </div>

        {/* ════════════════════════════════════════
            RIGHT COLUMN — Portrait
        ════════════════════════════════════════ */}
        <div className="relative flex justify-center items-end hero-right-col" style={{ alignSelf: 'stretch' }}>

          {/* Decorative dot + line — editorial accent */}
          <div
            className="absolute hidden lg:flex flex-col items-center gap-1 pointer-events-none select-none"
            style={{ right: '8px', top: '22%' }}
          >
            <div className="w-2 h-2 rounded-full bg-[#141414]" />
            <div className="w-px bg-[#141414]/25" style={{ height: '60px' }} />
          </div>

          {/* "always learning" editorial annotation */}
          <div
            className="absolute hidden lg:block pointer-events-none select-none"
            style={{ left: '-10px', top: '18%' }}
          >
            <span
              className="font-handwriting text-[#141414]/45"
              style={{ fontSize: '1.1rem', writingMode: 'vertical-rl', letterSpacing: '0.08em' }}
            >
              always learning
            </span>
          </div>

          {/* Portrait image — full photo, touching bottom line */}
          <div
            className="portrait-wrapper relative w-full flex justify-center items-end"
            style={{ height: '100%', paddingBottom: '0px' }}
          >
            <img
              src="/assets/bidita-portrait.png"
              alt="Bidita Gogoi — Computer Science Engineering Student"
              className="hero-portrait grayscale-portrait"
              style={{
                display: 'block',
                maxHeight: '85vh',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                marginBottom: '0px',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Mobile layout — stacked ── (overrides grid via media query in CSS) */}
    </section>
  );
}
