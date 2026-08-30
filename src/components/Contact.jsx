import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';

export function Contact() {
  const { email, linkedin, github, location } = portfolioData.contact;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!senderEmail || !message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setMessage('');
      setSenderName('');
      setSenderEmail('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-grid-pattern relative border-t border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Editorial Contact Header */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] block mb-2">06 / Contact</span>
              <h2 className="font-serif-editorial text-5xl md:text-7xl text-[#141414] font-normal leading-none mb-6">
                Let's connect.
              </h2>
              <p className="text-lg md:text-2xl text-[#141414]/80 font-sans leading-relaxed">
                Have an idea, opportunity, or just want to talk?
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="bg-[#F4F1EA] p-6 rounded-sm border border-[#141414]/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">Direct Email</span>
              <div className="flex items-center justify-between bg-white p-3.5 rounded-sm border border-[#141414]/10">
                <span className="font-mono text-sm md:text-base text-[#141414] truncate mr-2 font-medium">
                  {email}
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#141414] text-white text-xs font-mono rounded-full hover:bg-[#1D4ED8] transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280] block">Professional Profiles</span>
              <div className="flex flex-wrap gap-4">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 px-5 py-3 bg-white border border-[#141414]/10 rounded-sm hover:border-[#1D4ED8] transition-all"
                >
                  <svg className="w-4 h-4 fill-[#1D4ED8]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span className="font-mono text-xs text-[#141414] group-hover:text-[#1D4ED8]">LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 px-5 py-3 bg-white border border-[#141414]/10 rounded-sm hover:border-[#141414] transition-all"
                >
                  <svg className="w-4 h-4 fill-[#141414]" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  <span className="font-mono text-xs text-[#141414]">GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-6 bg-[#F4F1EA] p-8 md:p-10 rounded-sm border border-[#141414]/10 shadow-xs relative">
            
            <h3 className="font-serif-editorial text-3xl text-[#141414] mb-6">
              Send a direct note
            </h3>

            {formSubmitted ? (
              <div className="p-8 bg-white border border-emerald-500/30 rounded-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="font-serif-editorial text-2xl text-[#141414]">Message Sent!</h4>
                <p className="text-xs font-mono text-[#6B7280]">
                  Thank you for reaching out, Bidita will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 bg-white border border-[#141414]/10 rounded-sm focus:outline-none focus:border-[#1D4ED8] text-sm text-[#141414]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 bg-white border border-[#141414]/10 rounded-sm focus:outline-none focus:border-[#1D4ED8] text-sm text-[#141414]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, idea, or role opportunity..."
                    className="w-full px-4 py-3 bg-white border border-[#141414]/10 rounded-sm focus:outline-none focus:border-[#1D4ED8] text-sm text-[#141414] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#141414] text-white text-xs font-mono uppercase tracking-widest rounded-full hover:bg-[#1D4ED8] transition-all duration-300 flex items-center justify-center space-x-2 group shadow-sm"
                >
                  <span>Get in touch</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <span className="font-handwriting text-lg text-[#6B7280]">
                "Looking forward to hearing from you!"
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
