import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0b0f16] via-[#0e1320] to-[#0b0f16] text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 via-emerald-500/20 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 sm:pt-32">
        <motion.div style={{ y, opacity }} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
            Tee3Apps
          </span>
          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
            Your products, perfectly managed in 3D.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Empowering commerce with 3D product intelligence. Meet Tee3 PIM: a powerful, intuitive system to manage product data, visuals, pricing, and offers — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#features" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              Explore Tee3 PIM
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
