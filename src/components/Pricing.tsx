import { motion } from "motion/react";
import { Check, Box, Zap, Building2 } from "lucide-react";

// Using the site's main emerald color (#34d399 / emerald-400)
// The glow effect will utilize rgba variations of this hex code: 52, 211, 153

const tiers = [
  {
    name: "Foundation",
    subtitle: "Essential baseline",
    price: "$390",
    billing: "/mo",
    description: "Essential AI tools to establish your immediate productivity baseline.",
    features: [
      "AI Business Assessment",
      "AI receptionist",
      "Basic Website",
      "Team Training",
      "Documentation",
    ],
    icon: Box,
    recommended: false,
    ctaText: "Choose Foundation",
  },
  {
    name: "Acceleration",
    subtitle: "Most popular choice",
    price: "$790",
    billing: "/mo",
    description: "Accelerate growth globally with advanced marketing and CRM.",
    features: [
      "AI Business Assessment",
      "AI receptionist",
      "Website",
      "Chatbot Solution",
      "Team Training",
      "Documentation",
      "Lead Capture",
      "Email Automation",
      "CRM Integration",
    ],
    icon: Zap,
    recommended: true,
    ctaText: "Choose Acceleration",
  },
  {
    name: "Transformation",
    subtitle: "For market leaders",
    price: "Custom",
    billing: "",
    description: "Total operational overhaul with autonomous agents and deep analytics.",
    features: [
      "AI Business Assessment",
      "AI receptionist",
      "Website",
      "Chatbot Solution",
      "Team Training",
      "Documentation",
      "Lead Capture",
      "Email Automation",
      "CRM Integration",
      "Automated workflows",
      "Autonomous AI Agents",
      "Data & Business Analytics",
    ],
    icon: Building2,
    recommended: false,
    ctaText: "Choose Transformation",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-[#030303] text-white scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Intelligent Automation <br />
            <span className="italic font-serif text-emerald-400">Packages</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Choose the level of AI integration that fits your business needs. From essential foundations to total transformation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 0 50px rgba(52,211,153,0.15), inset 0 0 20px rgba(52,211,153,0.05)",
                borderColor: "rgba(52,211,153,0.4)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`group relative flex-1 rounded-[2.5rem] bg-[#0f0f12] p-10 md:p-12 font-sans border flex flex-col transition-colors duration-500 ${tier.recommended
                ? "border-emerald-500/30 shadow-[0_0_50px_rgba(52,211,153,0.08)]"
                : "border-white/5"
                }`}
            >
              {/* Background Interactive Radial Glow mapped to Hover state globally via Framer but enhanced through CSS group-hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-700 pointer-events-none" />

              {/* RECOMMENDED BADGE */}
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-black text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full z-10 shadow-[0_0_20px_rgba(52,211,153,0.4)] whitespace-nowrap">
                  RECOMMENDED
                </div>
              )}

              {/* CARD HEADER */}
              <div className="mb-10 text-left relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${tier.recommended
                    ? "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-colors duration-300"
                    : "bg-white/5 text-white/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors duration-300"
                    }`}>
                    <tier.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl font-bold group-hover:text-emerald-400 transition-colors duration-300">{tier.name}</h3>
                </div>
                <p className="text-white/40 text-sm mb-12 h-5 pl-14">{tier.subtitle}</p>

                <div className="flex items-start">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight">{tier.price}</span>
                  {tier.billing && (
                    <span className="text-white/40 text-lg font-semibold mt-6 ml-2">{tier.billing}</span>
                  )}
                </div>
              </div>

              {/* FEATURES LIST */}
              <ul className="space-y-6 flex-grow mb-16 relative z-10">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80 transition-colors group-hover:text-white">
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 transition-colors duration-300 ${tier.recommended
                        ? "bg-emerald-400 text-black shadow-[0_0_10px_rgba(52,211,153,0.4)]"
                        : "bg-white/5 border border-white/10 text-white/40 group-hover:border-emerald-500/50 group-hover:text-emerald-400"
                        }`}
                    >
                      <Check className="w-3.5 h-3.5 font-bold" strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <button
                className={`relative z-10 w-full py-5 rounded-2xl font-bold transition-all duration-300 active:scale-95 text-lg ${tier.recommended
                  ? "bg-emerald-400 text-black hover:bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.25)] hover:shadow-[0_0_40px_rgba(52,211,153,0.4)]"
                  : "bg-white/5 text-white hover:bg-emerald-500/20 hover:text-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]"
                  }`}
              >
                {tier.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
