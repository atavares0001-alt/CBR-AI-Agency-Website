import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, ShieldCheck, Zap, PhoneCall } from "lucide-react";

// ==========================================
// OPTION 1: OUTCOME-DRIVEN GRID
// ==========================================
export const Option1_OutcomeGrid = () => {
  const industries = [
    {
      title: "Trades & Construction",
      items: [
        { text: "Win More Bids", desc: "Automated instant quoting to beat competitors." },
        { text: "Never Miss Leads", desc: "AI answers calls 24/7 while you're on site." },
        { text: "Cut Admin Overhead", desc: "Automate invoicing and material ordering." }
      ]
    },
    {
      title: "Professional Services",
      items: [
        { text: "Increase Billables", desc: "AI handles the low-value repetitive admin work." },
        { text: "Perfect Documentation", desc: "Automated meeting notes and data entry." },
        { text: "Scale Capacity", desc: "Take on 3x more clients without hiring staff." }
      ]
    },
    {
      title: "Real Estate",
      items: [
        { text: "Zero Lead Leakage", desc: "Instant responses to weekend enquiries." },
        { text: "Automate Leasing", desc: "AI schedules inspections and qualifies tenants." },
        { text: "Market Dominance", desc: "Data-driven property and market analysis." }
      ]
    },
    {
      title: "Health & Wellness",
      items: [
        { text: "Eliminate No-Shows", desc: "Smart automated SMS follow-ups and waitlists." },
        { text: "Virtual Receptionist", desc: "Handle bookings without pulling staff from patients." },
        { text: "Seamless Intake", desc: "Patient forms instantly synced to your CRM." }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#050505] border-y border-emerald-500/20">
      <div className="absolute top-0 right-0 p-4 bg-emerald-500 text-black font-bold uppercase tracking-widest text-sm z-50">
        Option 1: Outcome-Driven Grid
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 relative z-10 text-center">
          What Will Your Business <span className="italic font-serif text-emerald-400">Gain?</span>
        </h2>
        <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
          We don't just build chatbots. We build systems that directly increase revenue, reclaim your time, and eliminate operational bottlenecks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-3xl border border-white/5 shadow-xl hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all bg-gradient-to-b from-white/5 to-transparent h-full group"
            >
              <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-emerald-400 transition-colors">{ind.title}</h3>
              <ul className="space-y-6">
                {ind.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white tracking-wide">{item.text}</h4>
                      <p className="text-sm text-white/50 leading-snug mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#contact" className="group flex items-center gap-3 bg-emerald-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Calculate Your ROI Potential
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// OPTION 2: PAIN VS SOLUTION SPLIT
// ==========================================
export const Option2_PainVsSolution = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden border-y border-white/10">
      <div className="absolute top-0 right-0 p-4 bg-white text-black font-bold uppercase tracking-widest text-sm z-50">
        Option 2: Pain vs Solution
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center">
          Stop Trading Time for <span className="italic font-serif text-emerald-400">Money.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* THE OLD WAY */}
          <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-500/5 transition-colors duration-500 point-events-none" />
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-white/50 relative z-10 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-red-500/50 block"></span>
              The Old Way
            </h3>

            <ul className="space-y-8 relative z-10">
              {[
                "Drowning in mundane data entry and admin tasks.",
                "Missing calls from hot leads while busy on job sites.",
                "Manually drafting quotes at 10 PM instead of resting.",
                "Paying high hourly wages for low-level, repetitive work."
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-white/60 text-lg">
                  <div className="w-2 h-2 rounded-full bg-red-500/50 mt-2.5 flex-shrink-0" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* THE NEW WAY */}
          <div className="glass p-10 md:p-14 rounded-[3rem] border border-emerald-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full point-events-none" />
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white relative z-10 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-emerald-500 block shadow-[0_0_15px_rgba(16,185,129,1)]"></span>
              The AI Advantage
            </h3>

            <ul className="space-y-8 relative z-10">
              {[
                { title: "Zero Admin Overhead", text: "Systems automatically route data and sync CRMs." },
                { title: "24/7 Availability", text: "Voice agents answer calls and qualify leads instantly." },
                { title: "Instant quoting", text: "Proposals drafted entirely by AI while you sleep." },
                { title: "Massive Margin Growth", text: "Do 5x the volume of work without hiring more staff." }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start text-white text-lg">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0" />
                  <div>
                    <strong className="block text-emerald-400 mb-1">{item.title}</strong>
                    <p className="text-white/70">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#contact" className="group inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Automate Your Business Today
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// OPTION 3: INTERACTIVE INDUSTRY CAROUSEL
// ==========================================
export const Option3_InteractiveTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "construction",
      label: "Construction & Trades",
      icon: Zap,
      headline: "Beat competitors to the quote.",
      content: "In trades, speed wins. We build AI systems that answer client enquires instantly, schedule site visits, and automatically draft quotes based on standard matrices so you can win the job before the other guy calls back.",
      metric: "Save 15+ hours per week on drafting quotes."
    },
    {
      id: "realestate",
      label: "Real Estate",
      icon: TrendingUp,
      headline: "Zero lead leakage. 24/7 responsiveness.",
      content: "Real estate agents lose thousands when they can't answer the phone. Our conversational AI agents qualify buyers, answer common property questions, and book open homes at 2AM on a Sunday.",
      metric: "Increase lead conversion rates by 40%."
    },
    {
      id: "professional",
      label: "Professional Services",
      icon: ShieldCheck,
      headline: "Scale without the headcount.",
      content: "Lawyers, accountants, and consultants are bogged down by compliance and document generation. We deploy secure, private AI models that can draft contracts, summarize meetings, and organize ledgers instantly.",
      metric: "Double your billable capacity."
    },
    {
      id: "health",
      label: "Clinics & Wellness",
      icon: PhoneCall,
      headline: "Focus on patients, not the phone.",
      content: "Don't pull your clinical staff away to answer basic questions. Our AI receptionists handle triage, manage waitlists organically, and sync perfectly with your existing medical booking software.",
      metric: "Reduce appointment no-shows by 85%."
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-white/5 border-b border-emerald-500/20">
      <div className="absolute top-0 right-0 p-4 bg-neutral-800 text-white font-bold uppercase tracking-widest text-sm z-50">
        Option 3: Interactive Tabs
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transform Your <span className="italic font-serif text-emerald-400">Industry</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select your industry to see exactly how CBR AI Agency can drastically improve your specific operational workflow.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base border transition-all duration-300 ${activeTab === idx
                  ? "bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-black/50 text-white/50 border-white/10 hover:border-emerald-500/50 hover:text-white"
                }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="glass border border-white/10 rounded-[2.5rem] p-8 md:p-16 min-h-[400px] flex items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
            >
              <div>
                {(() => {
                  const ActiveIcon = industries[activeTab].icon;
                  return <ActiveIcon className="w-16 h-16 text-emerald-400 mb-8" />;
                })()}
                <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {industries[activeTab].headline}
                </h3>
                <p className="text-xl text-white/70 leading-relaxed mb-10">
                  {industries[activeTab].content}
                </p>
                <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-xl font-bold text-lg">
                  {industries[activeTab].metric}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end items-center">
                <a href="#contact" className="group flex flex-col items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-900 border border-emerald-500/50 shadow-[0_0_60px_rgba(16,185,129,0.2)] hover:shadow-[0_0_80px_rgba(16,185,129,0.4)] hover:scale-105 transition-all text-center p-8">
                  <span className="text-2xl font-bold text-white mb-2">Automate<br />Your Agency</span>
                  <ArrowRight className="w-8 h-8 text-emerald-300 mt-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// OPTION 4: THE BLENDED ULTIMATE OPTION (TABS + PAIN/SOLUTION)
// ==========================================
export const Option4_Blended = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "construction",
      label: "Construction & Trades",
      icon: Zap,
      headline: "Stop losing jobs because you missed the call.",
      pains: [
        "Missing calls from hot leads while busy on job sites.",
        "Manually drafting quotes at 10 PM instead of resting.",
        "Playing phone tag to schedule basic site visits."
      ],
      solutions: [
        "Voice AI answers calls and qualifies leads 24/7.",
        "Instant quoting proposals drafted automatically.",
        "Zero admin overhead. Focus entirely on the work."
      ]
    },
    {
      id: "realestate",
      label: "Real Estate",
      icon: TrendingUp,
      headline: "Zero lead leakage. 24/7 responsiveness.",
      pains: [
        "Losing high-value leads to competitors on weekends.",
        "Spending hours answering the same property questions.",
        "Manual back-and-forth trying to schedule inspections."
      ],
      solutions: [
        "Instant responses to weekend enquiries and buyers.",
        "Conversational AI answers deep property questions.",
        "Automated AI screening and inspection booking."
      ]
    },
    {
      id: "professional",
      label: "Professional Services",
      icon: ShieldCheck,
      headline: "Scale your billables without the headcount.",
      pains: [
        "Drowning in mundane data entry and admin tasks.",
        "Paying high hourly wages for low-level, repetitive work.",
        "Spending all day on compliance and document drafting."
      ],
      solutions: [
        "Secure AI models draft contracts and summarize meetings.",
        "Massive margin growth with zero added headcount.",
        "Automated client onboarding and CRM synchronization."
      ]
    },
    {
      id: "health",
      label: "Health & Wellness",
      icon: PhoneCall,
      headline: "Focus entirely on patient care.",
      pains: [
        "Pulling clinical staff away to answer basic questions.",
        "Losing revenue to rampant appointment no-shows.",
        "Tedious manual patient intake and data processing."
      ],
      solutions: [
        "AI triages questions and syncs with medical software.",
        "Automated smart SMS waitlist management.",
        "Reduce no-shows by 85% with intelligent follow-ups."
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6">
            Transform Your <span className="italic font-serif text-emerald-400">Industry.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select your industry to see exactly how our systems eliminate your specific bottlenecks and scale your revenue.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base border transition-all duration-300 ${activeTab === idx
                  ? "bg-emerald-500 text-black border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-black/50 text-white/50 border-white/10 hover:border-emerald-500/50 hover:text-white"
                }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col pt-4"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  {industries[activeTab].headline}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* THE OLD WAY */}
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-500/5 transition-colors duration-500 point-events-none" />
                  <h4 className="text-xl md:text-2xl font-bold mb-8 text-white/50 relative z-10 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-red-500/50 block"></span>
                    The Old Way
                  </h4>

                  <ul className="space-y-6 relative z-10">
                    {industries[activeTab].pains.map((text, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60 text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 flex-shrink-0" />
                        <p>{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* THE NEW WAY */}
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-emerald-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                  <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full point-events-none" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-8 text-white relative z-10 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-emerald-500 block shadow-[0_0_15px_rgba(16,185,129,1)]"></span>
                    The AI Advantage
                  </h4>

                  <ul className="space-y-6 relative z-10">
                    {industries[activeTab].solutions.map((text, i) => (
                      <li key={i} className="flex gap-4 items-start text-white text-lg">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                        <p className="font-medium">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 flex justify-center">
                <a href="#contact" className="group inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Automate Your Workflow
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
