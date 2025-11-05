import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Cube, Globe2, LayoutGrid, PackageSearch } from 'lucide-react';

function FeatureCard({ title, subtitle, description, icon: Icon, anchor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    if (isInView) setShow3D(true);
  }, [isInView]);

  return (
    <section id={anchor} ref={ref} className="relative grid min-h-[580px] grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative order-2 md:order-1"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Icon className="h-4 w-4 text-cyan-400" />
          <span>{subtitle}</span>
        </div>
        <h3 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h3>
        <p className="mt-4 text-white/70">{description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative order-1 h-[420px] w-full rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent md:order-2"
      >
        {show3D && (
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
          <div className="absolute left-6 bottom-6 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-2xl" />
        </div>
      </motion.div>
    </section>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl space-y-10 px-6 py-16 text-white sm:py-24">
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <h2 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          A unified PIM suite with immersive 3D experiences
        </h2>
        <p className="mt-3 text-white/70">
          Manage product data, content, pricing, offers, and orders with clarity and control.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <FeatureCard
          anchor="gallery"
          title="3D Product Gallery"
          subtitle="Interactive exploration"
          description="Rotate, zoom, and explore products in detail. Animate how data, media, and attributes flow seamlessly into each product."
          icon={PackageSearch}
        />

        <FeatureCard
          anchor="cms"
          title="Content Management"
          subtitle="Visual content blocks"
          description="Arrange rich content with fluid, intuitive controls. Think floating blocks, snapping into place with buttery-smooth motion."
          icon={LayoutGrid}
        />

        <FeatureCard
          anchor="pricing"
          title="Regional Price Control"
          subtitle="Globally aware, locally precise"
          description="Visualize pricing by market with an elegant globe metaphor. Switch regions to see instant, rule-based updates."
          icon={Globe2}
        />

        <FeatureCard
          anchor="offers-orders"
          title="Offers & Orders"
          subtitle="Dynamic dashboards"
          description="Manage discounts, bundles, and live orders in a responsive 3D dashboard. Watch statuses update in real time."
          icon={Cube}
        />
      </div>
    </section>
  );
}
