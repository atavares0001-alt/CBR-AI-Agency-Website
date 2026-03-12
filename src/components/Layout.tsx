import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Zap, BarChart3, MessageSquare, Code2, Globe } from "lucide-react";
import { Vortex } from "./ui/vortex";
import { Option4_Blended } from "./ConsultingOptions";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-12 py-4 rounded-full flex items-center gap-10">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="CBR AI Logo" className="h-8 w-auto" />
          <div className="hidden sm:block text-xl font-bold tracking-tighter">CBR AI Agency</div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-white/60">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#technology" className="hover:text-white transition-colors">Services</a>
          <a href="#industries" className="hover:text-white transition-colors">Consulting</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-base font-bold hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="overview" className="relative pt-16 pb-8 flex flex-col items-center justify-center overflow-hidden min-h-[60vh]">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={200}
        baseHue={150}
        baseSpeed={0.5}
        rangeSpeed={2.5}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="atmosphere absolute inset-0 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[0.9]"
            style={{ textShadow: "0 0 60px rgba(52,211,153,0.35)" }}
          >
            Canberra AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic font-serif" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Agency</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light">
            Practical AI automation to improve productivity. We build intelligent digital receptionists and automation systems that work around the clock.
          </p>
        </motion.div>
      </Vortex>
    </section>
  );
};

export const Industries = () => {
  return (
    <div id="industries" className="flex flex-col w-full relative">
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
    { icon: Cpu, title: "Data Analytics", desc: "Turn business data into actionable growth insights." }
  ];

  return (
    <section id="technology" className="py-32 pb-48 px-6 bg-[#030303]">
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
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
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
    { title: "Discovery Call", desc: "We identify automation opportunities where AI can save you the most time and money." },
    { title: "Custom Strategy", desc: "A tailored plan built around your specific workflows and business goals." },
    { title: "Build & Deploy", desc: "We integrate AI with your existing tools with minimal disruption to your operations." },
    { title: "Optimise & Support", desc: "Ongoing monitoring and support to ensure your AI systems get smarter over time." }
  ];

  return (
    <section id="process" className="py-20 px-6 relative overflow-hidden bg-white/5">
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
              <h4 className="text-2xl font-bold mb-4 text-white text-center lg:text-left">{step.title}</h4>
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
    <footer id="resources" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <div className="text-2xl font-bold tracking-tighter mb-4">CBR AI</div>
          <p className="text-sm text-white/40">
            Practical AI automation and business AI solutions for Canberra small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h5 className="font-bold mb-4 text-sm uppercase tracking-widest text-white/30">Agency</h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="mailto:info@cbrai.com.au" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canberra, ACT</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 gap-4">
        <div>© 2026 CBR AI Agency — Canberra AI Services & AI Automation. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" aria-label="Visit our LinkedIn page">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
