import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Bot, Cpu, Zap, BarChart3, MessageSquare, Code2, Globe, Users, Send, Menu, X } from "lucide-react";
import { Vortex } from "./ui/vortex";
import { Option4_Blended } from "./ConsultingOptions";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#technology", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#pricing", label: "Packages" },
  { href: "#faq", label: "FAQ" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact Us" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => { if (mq.matches) setMobileOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-6">
        <div className="glass px-4 md:px-12 py-2.5 md:py-4 rounded-full flex items-center gap-4 md:gap-10">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white/70 hover:text-white transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-white/60">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>

          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-sm md:text-base font-bold hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] whitespace-nowrap">
            Get Started
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-semibold text-white/80 hover:text-emerald-400 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Hero = () => {
  return (
    <section id="overview" className="relative flex flex-col items-center justify-center overflow-hidden h-svh scroll-mt-32">
      <Vortex
        backgroundColor="#000000"
        rangeY={800}
        particleCount={200}
        baseHue={150}
        baseSpeed={0.5}
        rangeSpeed={2.5}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="atmosphere absolute inset-0 -z-10" />

        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-8xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] md:leading-[0.9]"
            style={{ textShadow: "0 0 60px rgba(52,211,153,0.35)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              Canberra AI
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block italic font-serif text-emerald-400"
            >
              Agency
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light"
          >
            Practical AI automation to improve productivity. We build intelligent digital receptionists and automation systems that work around the clock.
          </motion.p>
        </div>
      </Vortex>
    </section>
  );
};

export const Industries = () => {
  return (
    <div id="industries" className="flex flex-col w-full relative scroll-mt-32">
      <Option4_Blended />
    </div>
  );
};

export const Services = () => {
  const services = [
    { icon: MessageSquare, title: "AI Receptionist", desc: "Answers calls and responds to enquiries instantly, 24/7." },
    { icon: Zap, title: "Scheduling Automation", desc: "Integrated booking that eliminates back-and-forth emails." },
    { icon: BarChart3, title: "Lead Qualification", desc: "Qualifies and scores leads so you only talk to the best ones." },
    { icon: Bot, title: "Chatbot Solutions", desc: "Immediate answers for website visitors, day or night." },
    { icon: Code2, title: "Workflow Automation", desc: "Automate quoting, onboarding, and invoicing processes." },
    { icon: Cpu, title: "Data Analytics", desc: "Turn business data into actionable growth insights." },
    { icon: Users, title: "CRM Integration", desc: "Seamlessly integrate AI with your CRM to automate data entry, lead tracking, and follow-ups." },
    { icon: Globe, title: "AI-Powered Websites", desc: "Modern, high-performance websites with built-in AI capabilities, virtual receptionists, and smart scheduling." },
    { icon: Send, title: "Email Automation", desc: "Smart email sequences and AI-driven responses that nurture leads and handle enquiries automatically." }
  ];

  return (
    <section id="technology" className="py-32 px-6 bg-[#030303] scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Business Workflow <br />
            <span className="italic font-serif text-emerald-400">Automation Services</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We build practical systems that work. No jargon, no hype—just affordable AI automation tailored to how your business actually operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex gap-6 p-4">
              <div className="flex-shrink-0 w-14 h-14 glass rounded-2xl flex items-center justify-center">
                <s.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Process = () => {
  const steps = [
    { title: "Discovery Process", desc: "We identify automation opportunities where AI can save you the most time and money." },
    { title: "Custom Strategy", desc: "A tailored plan built around your specific workflows and business goals." },
    { title: "Build & Deploy", desc: "We integrate AI with your existing tools with minimal disruption to your operations." },
    { title: "Optimise & Support", desc: "Ongoing monitoring and support to ensure your AI systems get smarter over time." }
  ];

  return (
    <section id="process" className="py-20 px-6 relative overflow-hidden bg-[#030303] scroll-mt-32">
      {/* Decorative prominent background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full point-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Implementation <br />
            <span className="italic font-serif text-emerald-400">Process</span>
          </h2>
          <p className="text-white/70 max-w-xl text-lg mx-auto">
            A practical, no-fluff approach to implementing AI automation for your Canberra business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Prominent Connector Line */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={i}
              className="relative glass p-8 rounded-3xl border border-emerald-500/20 shadow-2xl hover:shadow-emerald-500/10 transition-shadow bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="w-14 h-14 bg-[#050505] border-2 border-emerald-500 rounded-2xl flex items-center justify-center mb-8 font-mono text-emerald-400 text-xl font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] mx-auto lg:mx-0 relative z-10">
                0{i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center lg:text-left">{step.title}</h3>
              <p className="text-white/60 leading-relaxed text-center lg:text-left">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer id="resources" className="py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="text-3xl font-bold tracking-tighter">CBR AI Agency</div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/50 uppercase tracking-widest">
            <li><a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a></li>
            <li><a href="#technology" className="hover:text-emerald-400 transition-colors">Services</a></li>
            <li><a href="#industries" className="hover:text-emerald-400 transition-colors">Industries</a></li>
            <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Packages</a></li>
            <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            <li><a href="#process" className="hover:text-emerald-400 transition-colors">Process</a></li>
            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col items-center text-xs text-white/20">
        <div>© 2026 CBR AI Agency — Canberra AI Services & AI Automation. All rights reserved.</div>
      </div>
    </footer>
  );
};
