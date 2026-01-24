import React from 'react';
import { AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AuditCard = ({ title, company, impact, findings }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="border border-white/10 bg-white/5 p-8 rounded-2xl hover:border-emerald-500/40 transition-all group"
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition">{title}</h3>
        <p className="text-emerald-500/60 text-sm font-mono uppercase tracking-widest">{company}</p>
      </div>
      <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded border border-emerald-500/20 font-mono">
        {impact}
      </span>
    </div>
    <ul className="space-y-3 mb-8">
      {findings.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
          <AlertTriangle size={14} className="text-emerald-500 mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button className="flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white transition">
      VIEW_TECHNICAL_REPORT <ExternalLink size={12} />
    </button>
  </motion.div>
);

export default function AuditSection() {
  return (
    <section id="audits" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em]">/independent_audits_v1.0</h2>
        <div className="h-[1px] flex-grow bg-white/5"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <AuditCard 
          title="Regional Validation Discrepancy"
          company="Dedalus"
          impact="CRITICAL_UX_RISK"
          findings={[
            "Identified discrepancies in GDPR/Marketing consent rendering between Italian and Global sites.",
            "Documented high-impact defects where mandatory fields failed to trigger validation on Global branches.",
            "Provided actionable RCA to align frontend validation logic across regional production branches."
          ]}
        />
        <AuditCard 
          title="Checkout Flow Logic Integrity"
          company="Vino.com"
          impact="FINANCIAL_LOGIC_ERROR"
          findings={[
            "Detected logic discrepancy where 'Fidelity Points' were labeled as monetary 'Total Amount'.",
            "Performed DOM inspection to pinpoint errors in span labels next to cart summary IDs.",
            "Engineered technical solution to align frontend UI with underlying data structures."
          ]}
        />
      </div>
    </section>
  );
}