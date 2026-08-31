import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/* ─── Decorative SVG elements ───────────────────────────────────────────── */
function TapeStrip({ className = '', color = '#e8dcc8', rotation = -5 }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        style={{
          width: '64px',
          height: '22px',
          background: `linear-gradient(135deg, ${color}cc, ${color}88)`,
          borderRadius: '2px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
          opacity: 0.85,
        }}
      />
    </div>
  );
}

function PushPin({ className = '', color = '#C0392B' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
        <circle cx="9" cy="8" r="7" fill={color} />
        <circle cx="9" cy="8" r="4" fill={`${color}dd`} />
        <ellipse cx="10" cy="6" rx="2" ry="1.5" fill="rgba(255,255,255,0.35)" />
        <line x1="9" y1="15" x2="9" y2="23" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ─── Individual pinboard card ──────────────────────────────────────────── */
function PinboardCard({ item, index, layout }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [60, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  /* Each card gets a unique paper color, rotation, decoration */
  const cardConfigs = [
    {
      bg: 'linear-gradient(145deg, #FDF8ED 0%, #F5EDDA 100%)',
      rotation: -2.5,
      shadowColor: 'rgba(0,0,0,0.25)',
      decoration: <TapeStrip className="-top-2 left-6" rotation={-8} color="#d4c9a8" />,
      accentColor: '#1D4ED8',
      tagBg: '#1D4ED8',
    },
    {
      bg: 'linear-gradient(145deg, #FFFFFF 0%, #F8F6F0 100%)',
      rotation: 1.8,
      shadowColor: 'rgba(0,0,0,0.2)',
      decoration: <PushPin className="-top-2 left-1/2 -translate-x-1/2" color="#C0392B" />,
      accentColor: '#B45309',
      tagBg: '#374151',
    },
    {
      bg: 'linear-gradient(145deg, #FFF9EC 0%, #F0E8D4 100%)',
      rotation: -1.2,
      shadowColor: 'rgba(0,0,0,0.22)',
      decoration: <TapeStrip className="-top-2 right-6" rotation={12} color="#c9bfa0" />,
      accentColor: '#059669',
      tagBg: '#059669',
    },
  ];

  const config = cardConfigs[index % cardConfigs.length];

  return (
    <div ref={ref}>
      <motion.div
        style={{
          y,
          opacity,
          rotate: layout.rotate ?? config.rotation,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative"
      >
        <motion.div
          animate={{
            rotate: hovered ? 0 : (layout.rotate ?? config.rotation),
            scale: hovered ? 1.04 : 1,
            y: hovered ? -8 : 0,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative"
          style={{
            width: layout.width ?? '340px',
            maxWidth: '100%',
          }}
        >
          {/* Paper card */}
          <div
            className="relative rounded-sm overflow-hidden"
            style={{
              background: config.bg,
              boxShadow: hovered
                ? `6px 10px 30px ${config.shadowColor}, 0 2px 8px rgba(0,0,0,0.12)`
                : `3px 5px 15px ${config.shadowColor}, 0 1px 4px rgba(0,0,0,0.08)`,
              transition: 'box-shadow 0.4s ease',
            }}
          >
            {/* Decoration (tape or pin) */}
            {config.decoration}

            {/* Card content */}
            <div className="px-7 pt-8 pb-6">
              {/* Tag line */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm text-white"
                  style={{
                    background: config.tagBg,
                    fontFamily: "'Courier New', Courier, monospace",
                    letterSpacing: '0.18em',
                  }}
                >
                  {item.badgeLabel || item.period}
                </span>
                <span className="text-[9px] text-[#9CA3AF] tracking-widest uppercase"
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                  · ENTRY 0{index + 1}
                </span>
              </div>

              {/* Degree title - typewriter style */}
              <h3
                className="font-bold leading-tight mb-3"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  color: '#1A1A1A',
                  textDecoration: 'underline',
                  textDecorationColor: config.accentColor,
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                }}
              >
                {item.degree}
              </h3>

              {/* Institution */}
              <p
                className="text-[13px] mb-1.5"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  color: config.accentColor,
                  fontWeight: 600,
                }}
              >
                {item.institution}
              </p>

              {/* Board (if exists) */}
              {item.board && (
                <p
                  className="text-[12px] mb-1.5"
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    color: '#6B7280',
                  }}
                >
                  {item.board}
                </p>
              )}

              {/* Period */}
              <p
                className="text-[12px] mb-4"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  color: '#6B7280',
                }}
              >
                {item.period}
              </p>

              {/* Grade badge */}
              <span
                className="inline-block text-[11px] font-bold px-3 py-1.5 rounded-sm"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  background: '#1A1A1A',
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                }}
              >
                {item.grade}
              </span>
            </div>

            {/* Paper texture bottom edge */}
            <div
              className="h-1"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.04) 50%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Scattered background paper scraps (decorative) ────────────────────── */
function BackgroundScraps() {
  const scraps = [
    { top: '8%', left: '2%', rotate: -18, w: 90, h: 65, bg: '#E8DCC8', opacity: 0.25 },
    { top: '22%', right: '3%', rotate: 10, w: 80, h: 55, bg: '#D6CDB5', opacity: 0.2 },
    { bottom: '15%', left: '5%', rotate: 22, w: 70, h: 50, bg: '#E2D5BF', opacity: 0.18 },
    { bottom: '8%', right: '8%', rotate: -12, w: 85, h: 60, bg: '#DDD2BA', opacity: 0.22 },
    { top: '55%', left: '1%', rotate: 35, w: 60, h: 45, bg: '#D8CCAD', opacity: 0.15 },
    { top: '40%', right: '1%', rotate: -25, w: 75, h: 50, bg: '#E5DAC4', opacity: 0.2 },
  ];

  return (
    <>
      {scraps.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-sm pointer-events-none hidden lg:block"
          style={{
            top: s.top, left: s.left, right: s.right, bottom: s.bottom,
            width: s.w, height: s.h,
            background: s.bg,
            opacity: s.opacity,
            transform: `rotate(${s.rotate}deg)`,
            boxShadow: '2px 3px 8px rgba(0,0,0,0.15)',
          }}
        />
      ))}
    </>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export function Education() {
  const { education } = portfolioData;

  /* Layout positions for the scattered pinboard effect */
  const layouts = [
    { rotate: -3, width: '360px' },
    { rotate: 2.2, width: '340px' },
    { rotate: -1.5, width: '350px' },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-[#141414]/10"
      style={{
        background: 'linear-gradient(180deg, #E8F0FE 0%, #D4E4FA 40%, #E8F0FE 100%)',
        paddingTop: 'clamp(80px, 10vw, 128px)',
        paddingBottom: 'clamp(80px, 10vw, 128px)',
      }}
    >
      {/* Subtle radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(29, 78, 216, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(29, 78, 216, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage: `
            linear-gradient(to right, rgba(29,78,216,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(29,78,216,0.2) 1px, transparent 1px)
          `,
        }}
      />

      {/* Decorative background scraps */}
      <BackgroundScraps />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-6 border-b border-[#1D4ED8]/15">
          <div>
            <span
              className="text-xs uppercase tracking-widest block mb-2"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                color: '#1D4ED8',
                letterSpacing: '0.2em',
              }}
            >
              04 / Academics
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl text-[#141414] font-normal">
              Education
            </h2>
          </div>
          <p className="font-handwriting text-2xl mt-4 md:mt-0" style={{ color: '#1D4ED8' }}>
            academic milestones ✦
          </p>
        </div>

        {/* Pinboard cards — scattered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-6 items-start justify-items-center">
          {education.map((item, index) => (
            <PinboardCard
              key={item.id}
              item={item}
              index={index}
              layout={layouts[index % layouts.length]}
            />
          ))}
        </div>

        {/* Bottom handwritten annotation */}
        <div className="mt-16 md:mt-20 text-center">
          <p
            className="font-handwriting text-xl md:text-2xl"
            style={{ color: 'rgba(29, 78, 216, 0.35)' }}
          >
            — pinned for reference —
          </p>
        </div>

      </div>
    </section>
  );
}
