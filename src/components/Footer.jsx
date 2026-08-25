import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">

      {/* Final CTA */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
            Start Exploring
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Anatomy is better
            <span className="block text-white/40">
              in three dimensions.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/40">
            Experience an interactive approach to understanding the
            human body.
          </p>

          <a
            href="#explore"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-105"
          >
            Explore the Model
          </a>
        </motion.div>
      </section>

      {/* Footer bottom */}
      <div className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-lg font-bold tracking-tight">
              ANATOMY
              <span className="text-white/40">.3D</span>
            </p>

            <p className="mt-1 text-xs text-white/30">
              Interactive anatomy experience.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-white/40">
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#explore"
              className="transition hover:text-white"
            >
              Explore
            </a>

            <a
              href="#features"
              className="transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>
          </div>

          <p className="text-xs text-white/25">
            © 2026 Anatomy 3D
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;