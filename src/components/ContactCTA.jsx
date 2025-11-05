import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#0b0f16] to-[#0b0f16] py-20 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/4 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-1/5 bottom-10 h-56 w-56 translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            See Tee3 PIM in action
          </h2>
          <p className="mt-3 text-white/70">
            Book a personalized demo to explore 3D product experiences, regional pricing, and order automation tailored to your business.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-10 grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1">
            <label className="text-sm text-white/70">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-white/70">Company</label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              placeholder="Acme Inc."
            />
          </div>
          <div className="space-y-1 sm:col-span-2">
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-1 sm:col-span-2">
            <label className="text-sm text-white/70">What would you like to explore?</label>
            <textarea
              rows={4}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              placeholder="3D gallery, regional pricing, order automation..."
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Request Demo
            </button>
          </div>
        </motion.form>

        <p className="mt-6 text-center text-xs text-white/50">
          By submitting this form, you agree to be contacted about Tee3 PIM. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
