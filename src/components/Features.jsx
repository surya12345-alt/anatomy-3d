import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Interactive 3D",
    description:
      "Interact with the human anatomy model by rotating and zooming to explore structures from different perspectives.",
  },
  {
    number: "02",
    title: "Immersive Learning",
    description:
      "Turn traditional anatomy visualization into a more engaging and intuitive digital experience.",
  },
  {
    number: "03",
    title: "Responsive Experience",
    description:
      "Enjoy the experience across desktop, tablet, and mobile devices with a responsive interface.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="border-t border-white/10 bg-[#070707] px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
            Why Anatomy 3D
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for
            <span className="text-white/40"> exploration.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/40">
            A modern interface combined with real-time 3D technology
            creates a more engaging way to explore human anatomy.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group bg-[#070707] p-8 transition duration-500 hover:bg-white/[0.04] lg:p-10"
            >
              {/* Number */}
              <span className="text-sm text-cyan-400/50">
                {feature.number}
              </span>

              {/* Icon circle */}
              <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition duration-500 group-hover:border-cyan-400/40">
                <div className="h-2 w-2 rounded-full bg-cyan-400/70 transition duration-500 group-hover:scale-150" />
              </div>

              <h3 className="mt-8 text-xl font-medium">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                {feature.description}
              </p>

              <div className="mt-8 h-px w-0 bg-cyan-400/50 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;