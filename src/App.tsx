import { Navbar, Hero, Industries, Services, Process, Footer } from "./components/Layout";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
