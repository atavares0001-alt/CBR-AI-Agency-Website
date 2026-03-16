import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What does CBR AI Agency do for businesses?",
    answer:
      "We help businesses across Canberra and the ACT save time and grow faster by building practical AI automation systems tailored to how your business actually works. That includes AI receptionists that answer calls around the clock, chatbots for your website, automated scheduling, lead qualification, CRM integrations, and workflow automation for things like quoting and invoicing. Everything we build is designed to reduce the manual work that slows you down - so you can focus on what you do best while your AI handles the rest.",
  },
  {
    question: "How does an AI receptionist work for my business?",
    answer:
      "Think of it as a highly capable virtual team member that never takes a break. Our AI receptionist answers phone calls and website enquiries instantly - 24 hours a day, 7 days a week, including weekends and public holidays. It greets callers professionally, answers common questions about your services, qualifies whether they're a genuine lead, books appointments directly into your calendar, and routes urgent matters straight to you. For tradies on the tools or agents at inspections, it means you'll never lose a job because you couldn't pick up the phone.",
  },
  {
    question: "What industries does CBR AI Agency serve in Canberra?",
    answer:
      "We work closely with all key industries across Canberra including construction and trades, real estate, professional services (like law firms, accountants, and consultants), and health and beauty businesses. Every industry has different pain points - tradies need help with after-hours calls and quoting, real estate agents deal with repetitive property enquiries, professionals want to reduce admin overhead, and salons struggle with no-shows and booking chaos. We tailor every solution to your specific industry workflows, so the AI fits naturally into how your team already operates.",
  },
  {
    question: "What is the return on investment for AI automation?",
    answer:
      "Most of our clients see a clear return within months. The maths is straightforward: if your AI receptionist captures even two or three leads per month that you would have otherwise missed - a call after hours, an enquiry over the weekend, a website visitor at midnight - those conversions alone typically cover your entire monthly investment. On top of that, you'll save hours each week on admin tasks like data entry, follow-up emails, and scheduling, freeing you and your staff to focus on billable work and growing the business.",
  },
  {
    question: "How long does it take to implement AI automation?",
    answer:
      "We follow a clear four-step process: Discovery, Custom Strategy, Build & Deploy, and Optimise & Support. Most businesses have a fully working AI system within two to four weeks from our first conversation. During the Discovery phase, we map out where automation will have the biggest impact. Then we build and integrate everything with your existing tools - your calendar, CRM, email, and phone system - with minimal disruption to your day-to-day operations. Once live, we continue monitoring and fine-tuning to make sure your AI keeps getting smarter and more effective over time.",
  },
  {
    question:
      "How does CBR AI Agency protect my business data and privacy?",
    answer:
      "We take data security extremely seriously. All customer information is handled in compliance with Australian privacy legislation, including the Australian Privacy Principles. We use enterprise-grade encryption for data both in transit and at rest, and your business data is stored securely within Australian and trusted overseas data centres.",
  },
  {
    question:
      "What existing tools and software does your AI integrate with?",
    answer:
      "Our AI systems are designed to work alongside the tools your business already uses - not replace them. We integrate with Google Workspace and Microsoft 365 for email and calendars, CRM platforms, booking and job management systems, and accounting software. If you use industry-specific tools, we can build custom integrations as well.",
  },
  {
    question:
      "Why should I choose a local Canberra AI agency over a national provider?",
    answer:
      "Working with a Canberra based agency means you get a team that genuinely understands the local business landscape - the industries that drive the ACT economy, the way Canberra businesses operate, and the expectations of local customers. We also build long-term relationships with our clients rather than treating you as a support ticket. When you work with CBR AI, you're getting a dedicated local partner invested in your success, not a faceless national call centre.",
  },
  {
    question: "How do I get started with AI automation for my business?",
    answer:
      "Getting started is simple and completely obligation free. Reach out to us via our contact form, give us a call, or send an email, and we'll arrange a free AI business assessment. During this consultation, we'll look at your current workflows, identify where AI can save you the most time and money, and recommend a practical automation strategy tailored to your business. From there, we handle everything - strategy, setup, integration, training, and ongoing support.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-12 px-6 bg-white/5 scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Frequently Asked <br />
            <span className="italic font-serif text-emerald-400">
              Questions
            </span>
          </h2>
          <p className="text-white/50 max-w-xl text-lg mx-auto">
            Everything you need to know about AI automation for your Canberra
            business.
          </p>
        </div>

        <div className="space-y-1.5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 hover:border-emerald-500/30 transition-colors overflow-hidden bg-white/[0.03]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-3.5 text-left cursor-pointer group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-emerald-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-5 pb-3 md:pb-4">
                      <div className="border-l-2 border-emerald-400/40 pl-4 md:pl-5">
                        <p className="text-white/70 leading-relaxed text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-white/50 mb-4 text-lg">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full text-base font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
