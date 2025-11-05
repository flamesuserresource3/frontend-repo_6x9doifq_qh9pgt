import { motion } from 'framer-motion';
import { ShoppingCart, Database, Link2, Server, Package, Cloud } from 'lucide-react';

const logos = [
  { Icon: ShoppingCart, label: 'eCommerce' },
  { Icon: Database, label: 'ERP' },
  { Icon: Server, label: 'CRM' },
  { Icon: Package, label: 'DAM' },
  { Icon: Cloud, label: 'CDN' },
  { Icon: Link2, label: 'APIs' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative mx-auto max-w-7xl px-6 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Seamless integrations
        </h2>
        <p className="mt-3 text-white/70">
          Connect Tee3 PIM with your favorite eCommerce, ERP, CRM, and analytics tools.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
        </div>
        <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-center"
            >
              <Icon className="h-6 w-6 text-cyan-400" />
              <span className="text-sm text-white/80">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
