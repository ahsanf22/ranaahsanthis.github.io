import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Terminal, Cpu, Award, MapPin, 
  Database, Layout, GitBranch, Mail, Linkedin, 
  Phone, MessageCircle, Globe2, Download 
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-mono selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Precision Blueprint Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <nav className="p-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center">
        <span className="text-emerald-500 font-bold tracking-tighter text-sm md:text-base underline decoration-emerald-500/20 underline-offset-4">AHSAN_KHAN_SQA_LAB</span>
        <div className="flex gap-4 md:gap-6 opacity-40 text-[10px] md:text-xs">
          <a href="mailto:ranaahsan.this@gmail.com" className="hover:text-emerald-400 transition">/mail</a>
          <a href="https://linkedin.com/in/ranaahsanthis" className="hover:text-emerald-400 transition">/linkedIn</a>
          <a href="https://wa.me/393930142834" className="hover:text-emerald-400 transition">/whatsapp</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* HERO SECTION */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] mb-8 uppercase tracking-tighter">
            <ShieldCheck size={14} /> <span>ISTQB® CERTIFIED LEAD ENGINEER</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none italic uppercase">
            Quality <br /> <span className="text-emerald-500">Architect.</span>
          </h1>
          
          <p className="max-w-2xl text-lg text-white/50 leading-relaxed mb-8">
            Currently pursuing an MSc in Software Science at the University of Florence. 
            Bridging 3.5+ years of SQA Leadership in Pakistan to high-precision European digital ecosystems.
          </p>

          {/* CONTACT & LANGUAGE BAR */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-24 opacity-60 text-xs">
            <div className="flex items-center gap-2 text-emerald-500"><MapPin size={14}/> <span className="text-white">Florence, Italy</span></div>
            <div className="flex items-center gap-2"><Phone size={14} className="text-emerald-500"/> +39 393 014 2834</div>
            <div className="flex items-center gap-2"><Globe2 size={14} className="text-emerald-500"/> English (B2) | Urdu (Native) | Italian (A1)</div>
          </div>
        </motion.div>

        {/* METRICS SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <MetricCard label="Manual Regression Reduction" value="-40%" />
          <MetricCard label="Requirements Traceability" value="100%" />
          <MetricCard label="Mobile Crash-Free Rate" value="99%" />
        </div>

        {/* PROJECTS SECTION */}
        <section className="mb-24">
          <h2 className="text-sm font-mono text-emerald-500 mb-12 uppercase tracking-[0.3em]">/independent_audits_v1.0</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Vino.com Automation (POC)" 
              tech="Playwright | C#.NET"
              desc="Discovered logic discrepancy where 'Fidelity Points' were incorrectly labeled as monetary 'Total Amount' in cart summary. Built C# automation suite to validate DOM integrity."
            />
            <ProjectCard 
              title="Dedalus Validation Audit" 
              tech="RCA | Cross-Regional"
              desc="Identified high-impact regional validation defects where mandatory fields failed to trigger on Global branches compared to Italian production."
            />
            <ProjectCard 
              title="Treedom UX Audit" 
              tech="BrowserStack | UX Advocacy"
              desc="Detected 'False Positive' registration defects. Visualized how frontend success feedback conflicted with backend logic rejection."
            />
             <ProjectCard 
              title="SilentKey Project" 
              tech="Software Science Architect"
              desc="Architecting a digital legacy app as a personal MSc research project, focusing on secure DOM management and data persistence."
            />
          </div>
        </section>

        {/* PROFESSIONAL LOG */}
        <section className="mb-24">
          <h2 className="text-sm font-mono text-emerald-500 mb-12 uppercase tracking-[0.3em]">/professional_log</h2>
          <div className="space-y-12">
            <ExperienceItem 
              company="Nasfia Pvt Ltd"
              role="SQA Engineer (Technical Lead)"
              date="03/2023 — 10/2025"
              location="Karachi, PK"
              details={[
                "Led team of 2 junior engineers, standardizing ISTQB-compliant bug reporting.",
                "Directed SQA strategy for full-scale Azure Cloud migrations.",
                "Managed defect lifecycle and requirements traceability via MS DevOps ALM.",
                "Reduced manual regression testing time by 40% using C#.NET frameworks."
              ]}
            />
            <ExperienceItem 
              company="QBS Co"
              role="SQA Engineer / Coordinator"
              date="01/2022 — 02/2023"
              location="Karachi, PK"
              details={[
                "Authored 100+ comprehensive test plans and resolved critical blockers 15% ahead of schedule.",
                "Optimized mobile app reliability across hybrid platforms using Browserstack."
              ]}
            />
          </div>
        </section>

        {/* TECH STACK MATRIX */}
        <section className="mb-24">
          <h2 className="text-sm font-mono text-emerald-500 mb-12 uppercase tracking-[0.3em]">/technical_stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBox icon={Terminal} title="Automation" skills={["Playwright", "C# .NET", "Katalon", "JavaScript"]} />
            <SkillBox icon={Database} title="Data & API" skills={["SQL Server", "Postman", "API Testing", "SSMS"]} />
            <SkillBox icon={Layout} title="Platforms" skills={["iOS/Android", "Browserstack", "Azure Cloud"]} />
            <SkillBox icon={GitBranch} title="Process" skills={["MS DevOps", "Agile", "RCA", "Traceability"]} />
          </div>
        </section>

        {/* EDUCATION & CERTIFICATES */}
        <section className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-sm font-mono text-emerald-500 mb-8 uppercase tracking-[0.3em]">/credentials_vault</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-emerald-500/20 p-6 rounded-2xl flex items-start gap-4 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <Award className="text-emerald-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white text-sm">ISTQB® Foundation Level</h4>
                  <p className="text-[10px] text-white/40 font-mono mt-1">ID: PSTB-2025-02 // VALIDATED</p>
                </div>
              </div>
              <div className="bg-white/5 border border-emerald-500/20 p-6 rounded-2xl flex items-start gap-4">
                <GitBranch className="text-emerald-500 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-white text-xs tracking-widest uppercase">Agile Testing Certification</h4>
                  <p className="text-[9px] text-white/40 font-mono mt-1">LinkedIn Learning // Professional Development</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-mono text-emerald-500 mb-8 uppercase tracking-[0.3em]">/academic_history</h2>
            <div className="space-y-6">
              <EducationItem degree="MSc Software Science & Technology" school="University of Florence" date="2025 — Present" />
              <EducationItem degree="BS Software Engineering" school="Indus University Karachi" date="2018 — 2022" />
            </div>
          </div>
        </section>

        {/* FOOTER & DOWNLOAD */}
        <footer className="pt-20 border-t border-white/5 text-center">
          <a 
            href="/Ahsan_Khan_Resume.pdf" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-xs rounded-full hover:bg-emerald-500 transition mb-12 uppercase tracking-tighter"
          >
            <Download size={16} /> Download Resume
          </a>
          <div className="flex justify-center gap-10 mb-12">
   {/* Email Icon */}
   <a href="mailto:ranaahsan.this@gmail.com" className="text-white/40 hover:text-emerald-500 transition">
      <Mail size={24}/>
   </a>

   {/* LinkedIn Icon */}
   <a href="https://linkedin.com/in/ranaahsanthis" className="text-white/40 hover:text-emerald-500 transition">
      <Linkedin size={24}/>
   </a>

   {/* WhatsApp Icon - Now matching the others */}
   <a href="https://wa.me/393930142834" className="text-white/40 hover:text-emerald-500 transition">
      <MessageCircle size={24}/>
   </a>
</div>
          <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.4em]">Ready for technical deployment // 2026</p>
        </footer>
      </main>
    </div>
  );
}

/* SUB-COMPONENTS */
function MetricCard({ label, value }) {
  return (
    <div className="p-6 border border-white/5 bg-white/5 rounded-2xl group hover:border-emerald-500/30 transition">
      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-bold group-hover:text-emerald-500 transition">{label}</p>
      <p className="text-3xl font-black text-emerald-500">{value}</p>
    </div>
  );
}

function ExperienceItem({ company, role, date, location, details }) {
  return (
    <div className="border-l border-emerald-500/30 pl-8 relative">
      <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_8px_#10b981]"></div>
      <p className="text-[10px] font-mono text-white/30 mb-1">{date} // {location}</p>
      <h3 className="text-lg font-bold text-white leading-tight">{role}</h3>
      <p className="text-emerald-500/60 text-xs font-mono mb-4">{company}</p>
      <ul className="space-y-2">
        {details.map((d, i) => (
          <li key={i} className="text-sm text-white/50 leading-relaxed max-w-3xl flex gap-2 italic">
            <span className="text-emerald-500 font-bold">{" >> "}</span> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, tech, desc }) {
  return (
    <div className="p-6 border border-white/5 bg-[#0d0d0d] rounded-2xl hover:border-emerald-500/40 transition group">
      <h4 className="text-white font-bold mb-1 group-hover:text-emerald-400 transition">{title}</h4>
      <p className="text-[10px] text-emerald-500/60 font-mono mb-4 uppercase tracking-tighter">{tech}</p>
      <p className="text-xs text-white/40 leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function SkillBox({ icon: Icon, title, skills }) {
  return (
    <div className="p-4 border border-white/5 bg-white/5 rounded-xl group hover:bg-emerald-500/5 transition">
      <div className="flex items-center gap-2 mb-4 text-emerald-500">
        <Icon size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">{title}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => <span key={s} className="text-[9px] px-2 py-0.5 bg-black border border-white/10 text-white/40 rounded font-mono">{s}</span>)}
      </div>
    </div>
  );
}

function EducationItem({ degree, school, date }) {
  return (
    <div className="border-l border-white/10 pl-4 hover:border-emerald-500/40 transition">
      <h4 className="text-white font-bold text-sm leading-tight">{degree}</h4>
      <p className="text-xs text-white/40 font-mono mt-1">{school} // {date}</p>
    </div>
  );
}