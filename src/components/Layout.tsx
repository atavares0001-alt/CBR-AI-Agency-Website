import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Zap, BarChart3, MessageSquare, Code2, Globe } from "lucide-react";
import { Vortex } from "./ui/vortex";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">CBR AI</div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#technology" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">Log In</button>
          <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="overview" className="relative pt-40 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={300}
        baseHue={150}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="atmosphere absolute inset-0 -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="mb-8 flex justify-center">
            <div className="glass p-4 rounded-2xl relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
              <Cpu className="w-12 h-12 text-emerald-400 relative z-10" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[0.9]">
            Canberra AI Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic font-serif">for Small Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light">
            Practical AI automation to improve productivity. We build intelligent digital receptionists and automation systems that work around the clock.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="glass px-8 py-4 rounded-full flex items-center gap-2 group hover:bg-white/10 transition-all">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Talk to a Canberra AI Specialist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest">
              Based in Canberra, ACT
            </div>
          </div>
        </motion.div>
      </Vortex>
    </section>
  );
};

export const Industries = () => {
  const industries = [
    { title: "Trades & Construction", items: ["AI for Builders", "Quoting Automation", "Call Answering"] },
    { title: "Professional Services", items: ["AI for Accountants", "Law Firm Automation", "Document AI"] },
    { title: "Real Estate", items: ["Lead Generation", "Inspection Scheduling", "Tenant Enquiries"] },
    { title: "Health & Wellness", items: ["Clinic Receptionists", "Patient Follow-ups", "Smart Waitlists"] }
  ];

  return (
    <section id="industries" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
          AI Consulting <br />
          <span className="italic font-serif text-white/40">Across Every Industry</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[32px] flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-6">{ind.title}</h3>
              <ul className="space-y-3 mt-auto">
                {ind.items.map((item, j) => (
                  <li key={j} className="text-sm text-white/50 flex items-center gap-2">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
    <section id="technology" className="py-32 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Business Workflow <br />
            <span className="italic font-serif text-white/40">Automation Solutions</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
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
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Implementation <br />
            <span className="italic font-serif text-white/40">Process</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A practical, no-fluff approach to implementing AI automation for your Canberra business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-px bg-white/10 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center mb-6 font-mono text-emerald-400 font-bold">
                0{i + 1}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
            </div>
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h5 className="font-bold mb-4 text-sm uppercase tracking-widest text-white/30">Agency</h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="mailto:info@cbrai.com.au" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canberra, ACT</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-sm uppercase tracking-widest text-white/30">Legal</h5>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-bold mb-4 text-sm uppercase tracking-widest text-white/30">Newsletter</h5>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="glass px-4 py-2 rounded-full text-sm w-full focus:outline-none focus:border-emerald-500/50"
              />
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-white/20">
        <div>© 2026 CBR AI Agency — Canberra AI Services & AI Automation. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
