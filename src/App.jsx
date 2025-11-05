import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import Integrations from './components/Integrations';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f16] antialiased">
      <Hero />
      <main>
        <FeaturesSection />
        <Integrations />
        <ContactCTA />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} Tee3Apps — Empowering commerce with 3D product intelligence.
        </p>
      </footer>
    </div>
  );
}
