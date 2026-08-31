import React from 'react';
import { X, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#141414]/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF8F5] text-[#141414] w-full max-w-2xl rounded-sm border border-[#141414]/20 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#F4F1EA] px-6 py-4 border-b border-[#141414]/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-[#1D4ED8]" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#141414]">
              Certificate Preview
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#141414]/70 hover:text-[#141414] hover:bg-[#EAE6DF] rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Certificate Visual Presentation */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {certificate.image ? (
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-[#141414]/15 shadow-lg bg-white">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto object-contain max-h-[55vh] mx-auto block"
                />
              </div>

              <div className="bg-[#F4F1EA] p-4 rounded-sm border border-[#141414]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6B7280]">
                <div>
                  <span className="text-[#141414] font-semibold">{certificate.issuer || certificate.organization}</span>
                  <span className="mx-2">·</span>
                  <span>{certificate.date}</span>
                </div>
                {certificate.verifyId && (
                  <span className="bg-white px-2.5 py-1 border border-[#141414]/10 rounded text-[#141414] font-medium">
                    Ref: {certificate.verifyId}
                  </span>
                )}
                <span className="text-emerald-600 font-semibold flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-[#FAF8F5] border-4 border-[#141414]/10 p-8 md:p-12 text-center relative shadow-inner space-y-6 bg-grid-dense">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/30 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-[#1D4ED8]" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6B7280]">Official Certificate of Achievement</span>
                <h3 className="font-serif-editorial text-3xl md:text-4xl text-[#141414] font-bold pt-2">
                  {certificate.title}
                </h3>
              </div>

              <div className="text-sm font-sans text-[#141414]/80">
                This acknowledges that <span className="font-semibold text-[#141414] font-serif-editorial text-lg">Bidita Gogoi</span> has successfully completed the program issued by{' '}
                <span className="font-semibold text-[#1D4ED8]">{certificate.issuer || certificate.organization}</span>.
              </div>

              <div className="pt-4 border-t border-[#141414]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6B7280]">
                <span>Issued: {certificate.date}</span>
                {certificate.verifyId && (
                  <span className="bg-white px-2 py-0.5 border border-[#141414]/10 rounded text-[#141414]">
                    Ref: {certificate.verifyId}
                  </span>
                )}
                <span className="text-emerald-600 font-semibold flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Entry</span>
                </span>
              </div>
            </div>
          )}

          <p className="text-xs text-[#6B7280] font-sans text-center">
            {certificate.description || "Official participation certificate record associated with student activity."}
          </p>
        </div>

        {/* Footer */}
        <div className="bg-[#F4F1EA] px-6 py-4 border-t border-[#141414]/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#141414] text-white text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#1D4ED8] transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
