import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
        setErrorMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-32">
      {/* Subtle atmospheric glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get in <br />
            <span className="italic font-serif text-emerald-400">Touch</span>
          </h2>
          <p className="text-white/70 max-w-xl text-lg mx-auto">
            Ready to implement an AI automation system? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass p-8 md:p-10 rounded-3xl border border-emerald-500/20 shadow-2xl bg-gradient-to-b from-white/5 to-transparent relative"
          >
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center h-full">
                <CheckCircle2 className="w-20 h-20 text-emerald-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Message Sent</h3>
                <p className="text-white/70 text-lg">Thank you for reaching out. A specialist will contact you shortly.</p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 
                  IMPORTANT: Web3Forms Access Key
                  The user must replace 'YOUR_ACCESS_KEY_HERE' with their real Web3Forms key 
                  which they can get for free at https://web3forms.com
                */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Lead from CBR AI Agency Website" />
                <input type="hidden" name="from_name" value="CBR AI Agency Notification" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-white/70 ml-1">First Name</label>
                    <input
                      type="text"
                      name="First Name"
                      id="firstName"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-white/20"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-white/70 ml-1">Last Name</label>
                    <input
                      type="text"
                      name="Last Name"
                      id="lastName"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-white/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Work Email</label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-white/20"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">How can we help?</label>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder:text-white/20 resize-none"
                    placeholder="Tell us about your processes and where you'd like to see automation..."
                  ></textarea>
                </div>

                {formStatus === "error" && (
                  <div className="text-red-400 text-sm font-medium px-2 py-1 bg-red-400/10 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all group shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] mt-4"
                >
                  {formStatus === "submitting" ? (
                    <>
                      Sending...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-4">
                <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                Connect With Us
                <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                Prefer to communicate directly? Reach out to our local Canberra team using the details below.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-lg mb-1 tracking-wide">Email Us</h4>
                    <a href="mailto:info@cbrai.com.au" className="text-white/50 hover:text-white transition-colors text-lg">info@cbrai.com.au</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-lg mb-1 tracking-wide">Call Us</h4>
                    <a href="tel:" className="text-white/50 hover:text-white transition-colors text-lg"> </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-lg mb-1 tracking-wide">Office</h4>
                    <p className="text-white/50 text-lg leading-snug">Canberra, ACT 2601<br />Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
