import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Zap, PhoneCall, TrendingUp } from "lucide-react";

// ==========================================
// CONSULTING: INTERACTIVE TABS + PAIN/SOLUTION
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
        { label: "Missed Leads", desc: "Missing calls from potential clients while on job sites" },
        { label: "Late-Night Admin", desc: "Manually drafting quotes at night instead of resting" },
        { label: "Scheduling Chaos", desc: "Playing phone tag to schedule basic site visits" }
      ],
      solutions: [
        { label: "Always-On AI", desc: "Voice AI answers calls and qualifies leads 24/7" },
        { label: "Instant Quotes", desc: "Quoting proposals drafted automatically in minutes" },
        { label: "Zero Admin", desc: "Focus entirely on the work, not the paperwork" }
      ]
    },
    {
      id: "realestate",
      label: "Real Estate",
      icon: TrendingUp,
      headline: "Zero lead leakage. 24/7 responsiveness.",
      pains: [
        { label: "Weekend Leakage", desc: "Losing high-value leads to competitors on weekends" },
        { label: "Repetitive Enquiries", desc: "Spending hours answering the same property questions" },
        { label: "Booking Friction", desc: "Manual back-and-forth trying to schedule inspections" }
      ],
      solutions: [
        { label: "Instant Response", desc: "Instant responses to weekend enquiries and buyers" },
        { label: "AI Property Expert", desc: "Utilise AI to answer property questions" },
        { label: "Auto Scheduling", desc: "Automated scheduling & inspection booking" }
      ]
    },
    {
      id: "professional",
      label: "Professional Services",
      icon: ShieldCheck,
      headline: "Scale your billables without the headcount.",
      pains: [
        { label: "Talent Drain", desc: "Talented staff buried in data entry and documentation" },
        { label: "Costly Repetition", desc: "Paying senior wages for low-level, repetitive tasks" },
        { label: "Information Overload", desc: "Hours wasted on compliance searching through emails and files" }
      ],
      solutions: [
        { label: "AI Drafting", desc: "AI automates the grunt work; you focus on high-value strategy" },
        { label: "Scale Without Hiring", desc: "Double your output without adding a single headcount" },
        { label: "Agentic Workflows", desc: "Automated processes and workflows through Agentic Agents" }
      ]
    },
    {
      id: "health",
      label: "Health & Beauty",
      icon: PhoneCall,
      headline: "Focus entirely on patient care.",
      pains: [
        { label: "Front Desk Chaos", desc: "Clinicians forced to pause care to answer phones" },
        { label: "Ghost Bookings", desc: "Revenue lost to unconfirmed appointment no-shows" },
        { label: "Paper Trails", desc: "Slow, manual intake forms and data processing" }
      ],
      solutions: [
        { label: "Digital Triage", desc: "AI answers FAQs and syncs directly with your software" },
        { label: "Waitlist Recovery", desc: "Smart SMS fills cancellations automatically" },
        { label: "Zero No-Shows", desc: "Intelligent follow-ups slash missed sessions by 85%" }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transform Your <span className="italic font-serif text-emerald-400">Industry.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select your industry to see exactly how our systems eliminate your specific bottlenecks and scale your revenue.
          </p>
        </div>

        {/* Industry Tabs */}
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
        <div className="relative min-h-[500px]">
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
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-rose-500/20 relative overflow-hidden group hover:border-rose-500/50 hover:shadow-[0_0_80px_rgba(244,63,94,0.2)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent transition-colors duration-500 pointer-events-none" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-8 text-rose-400/80 relative z-10 flex items-center justify-center gap-4">
                    <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.3)]" />
                    The Old Way
                    <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.3)]" />
                  </h4>

                  <ul className="space-y-6 relative z-10">
                    {industries[activeTab].pains.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60 text-lg">
                        <XCircle className="w-6 h-6 text-rose-500/70 flex-shrink-0 mt-0.5" />
                        <p>
                          {typeof item === "string" ? item : (
                            <><span className="font-bold text-rose-400/90">{item.label}:</span> {item.desc}</>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* THE AI ADVANTAGE */}
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-emerald-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.05)] hover:shadow-[0_0_120px_rgba(16,185,129,0.35)] hover:border-emerald-400/70 transition-all duration-500">
                  <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-8 text-white relative z-10 flex items-center justify-center gap-4">
                    <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                    The AI Advantage
                    <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  </h4>

                  <ul className="space-y-6 relative z-10">
                    {industries[activeTab].solutions.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white text-lg">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                        <p className="font-medium">
                          {typeof item === "string" ? item : (
                            <><span className="font-bold text-emerald-400">{item.label}:</span> {item.desc}</>
                          )}
                        </p>
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
