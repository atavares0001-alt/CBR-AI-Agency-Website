import { Navbar, Hero, Industries, Services, Process, Footer } from "./components/Layout";

export default function App() {
  return (
    <div className="relative selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Services />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
